<?php

declare(strict_types=1);

/**
 * This file is part of Laravel Zero.
 *
 * (c) Nuno Maduro <enunomaduro@gmail.com>
 *
 *  For the full copyright and license information, please view the LICENSE
 *  file that was distributed with this source code.
 */

namespace App\Commands;


use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Laminas\Json\Json;
use LaravelZero\Framework\Commands\Command;
use Symfony\Component\Console\Question\ChoiceQuestion;

final class RenameCommand extends Command
{
    /**
     * {@inheritdoc}
     */
    protected $signature = 'app:rename {name? : The new name} {website? : Vendor\'s website}';

    /**
     * {@inheritdoc}
     */
    protected $description = 'Set the application name';

    const DEFAULT_RESOURCE = 'default';

    /**
     * {@inheritdoc}
     */
    public function handle()
    {
        $this->info('Renaming the application...');

        $this->rename();
    }

    /**
     * Updates the binary name and the application
     * name on the composer.json.
     */
    private function rename(): RenameCommand
    {
        $name = $this->asksForApplicationName();
        $website = $this->asksForVendorWebsite();

        $this->genereateFolderStructure();
        $this->updateAppCellJson($name, $website);
        $this->updatePluginsJson($name);

        $this->askForScopeAndFeatures();

        $this->updateComposer($name);

        return $this;
    }

    private function genereateFolderStructure()
    {
        $this->task('Generate folder structure. (./appcell)', function () {
            if (!file_exists(APPLICATION_PATH . '/appcell/')) {
                if (!mkdir($concurrentDirectory = APPLICATION_PATH . '/appcell/') && !is_dir($concurrentDirectory)) {
                    throw new \RuntimeException(sprintf('Directory "%s" was not created', $concurrentDirectory));
                }
            }

            if (!file_exists(APPLICATION_PATH . '/appcell/schema/')) {
                if (!mkdir($concurrentDirectory = APPLICATION_PATH . '/appcell/schema/') && !is_dir($concurrentDirectory)) {
                    throw new \RuntimeException(sprintf('Directory "%s" was not created', $concurrentDirectory));
                }
            }
        });
    }

    /**
     * Asks for the application name.
     *
     * If there is no interaction, we take the folder basename.
     */
    private function asksForApplicationName(): string
    {
        if (empty($name = $this->input->getArgument('name'))) {
            $name = $this->ask('What is your application name?');
        }

        if (empty($name)) {
            $name = trim(basename($this->app->basePath()));
        }

        return self::camelCase($name);
    }

    /**
     * Asks for the application name.
     *
     * If there is no interaction, we take the folder basename.
     */
    private function asksForVendorWebsite(): string
    {
        if (empty($website = $this->input->getArgument('website'))) {
            $website = $this->ask('What is your website? e.g. https://apihawk.com. The website should be reachable');
        }

        return Str::lower($website);
    }

    private function getWebsiteMetadata($url)
    {
        $this->task('Fetch website metadata', function () use ($url) {
        });

        $metatagarray = get_meta_tags($url);
        $keywords = $metatagarray['keywords'] ?? '';
        $description = $metatagarray['description'] ?? '';

        return [
            'keywords' => $keywords,
            'description' => $description
        ];
    }

    private function updateAppCellJson(string $name, string $website)
    {
        $this->task('Writing AppCell.json', function () use ($name, $website) {
            $config = Json::decode(file_get_contents(APPLICATION_PATH . '/stubs/appcell.json.stub'), Json::TYPE_ARRAY);

            $config['name'] = $name . 'Cell';
            $config['homepage'] = $website;

            $metadata = $this->getWebsiteMetadata($website);

            $config['description'] = 'AppCell ' . ucfirst($name) . ' Cell - ' . $metadata['description'];

            $writer = new \Laminas\Config\Writer\Json();
            $writer->toFile(APPLICATION_PATH . '/appcell/appcell.json', $config);
        });
    }

    private function updatePluginsJson($name)
    {
        $interfaceAndActions = $this->askForSupportedFunctionalities();

        //Plugins
        $this->task('Generate plugins.json', function () use ($name, $interfaceAndActions) {

            $interfaces = $interfaceAndActions['interfaces'];
            $config = new \Laminas\Config\Config([
                'plugin' => [
                    $name => [
                        'implements' => $interfaces,
                        'actions' => []
                    ]
                ]
            ], true);

            $configActions = [];

            foreach ($interfaces as $interface) {
                $actions = $this->parseInterface($interface);
                foreach ($actions as $action) {
                    $configActions[$action] = [
                        'resource' => self::DEFAULT_RESOURCE,
                        'action' => $action,
                        '$payload' => 'https://repository.appcell.io/' . strtolower($name) . 'cell/schema/' . self::DEFAULT_RESOURCE . '/' . $action . '.payload.json',
                        '$result' => 'https://repository.appcell.io/' . strtolower($name) . 'cell/schema/' . self::DEFAULT_RESOURCE . '/' . $action . '.result.json'
                    ];

                    $this->createSchemaFile($action . '.payload.json');
                    $this->createSchemaFile($action . '.result.json');
                }
            }

            $config->plugin->$name->actions = $configActions;

            $writer = new \Laminas\Config\Writer\Json();
            $writer->toFile(APPLICATION_PATH . '/appcell/plugins.json', $config);
        });

        //Resources
        $this->task('Generate resources.json', function () use ($name, $interfaceAndActions) {
            $config = new \Laminas\Config\Config([
                'resources' => [
                    self::DEFAULT_RESOURCE => [
                        'identifier' => 'domain',
                        'rest' => $interfaceAndActions['resources']['rest'],
                        'actions' => $interfaceAndActions['resources']['actions'],
                    ]
                ]
            ], true);

            $writer = new \Laminas\Config\Writer\Json();
            $writer->toFile(APPLICATION_PATH . '/appcell/resources.json', $config);
        });

        //Settings
        $this->task('Generate settings.json', function () {
            $config = new \Laminas\Config\Config([
                'fields' => [
                    [
                        'name' => 'Account Plan',
                        'field_key' => 'plan',
                        'value' => 'basic'
                    ]
                ],
                'options' => [
                    [
                        'name' => 'Domain',
                        'key' => 'domain',
                        'type' => 'text',
                        'value_type' => 'text',
                        'required' => true,
                        'provider' => 'user'
                    ]
                ]
            ]);

            $writer = new \Laminas\Config\Writer\Json();
            $writer->toFile(APPLICATION_PATH . '/appcell/settings.json', $config);
        });


        $this->task('Generate action files', function () use ($interfaceAndActions) {

            foreach ($interfaceAndActions['resources']['rest'] as $action) {
                if (!file_exists(APPLICATION_PATH . '/app/Actions' . ucfirst($action) . '.php')) {
                    $this->call('make:action', [
                        'name' => ucfirst($action)
                    ]);
                }
            }

            foreach ($interfaceAndActions['resources']['actions'] as $action => $settings) {
                if (!file_exists(APPLICATION_PATH . '/app/Actions' . ucfirst($action) . '.php')) {
                    $this->call('make:action', [
                        'name' => ucfirst($action)
                    ]);
                }
            }

        });
    }

    private function askForScopeAndFeatures()
    {
        $helper = $this->getHelper('question');
        $question = new ChoiceQuestion(
            'Please select what scope of data, your service will require (defaults to customer_product, customer, email). Multiple choice support. E.g. 0,1,2,3',
            ['customer_product', 'customer', 'email', 'company', 'catalog_product_field'],
            '0,1,2'
        );
        $question->setMultiselect(true);

        $scopes = $helper->ask($this->input, $this->output, $question);
        $this->output->writeln('You have just selected: ' . implode(', ', $scopes));

        $appcellJson = Json::decode(file_get_contents(APPLICATION_PATH . '/appcell/appcell.json'), Json::TYPE_ARRAY);
        $appcellJson['require']['scope'] = $scopes;

        $question = new ChoiceQuestion(
            'Please select what features your service will require. (defaults to NONE). Multiple choice support. E.g. 0,1,2,3',
            ['appcell', 'etcd', 'ui'],
            '0'
        );
        $question->setMultiselect(true);

        $features = $helper->ask($this->input, $this->output, $question);
        $this->output->writeln('You have just selected: ' . implode(', ', $features));

        $appcellJson['require']['appcell'] = '>=1.0';

        if (in_array('etcd', $features, true)) {
            $appcellJson['require']['etcd'] = '>=3.0';
        }

        if (in_array('ui', $features, true)) {
            $appcellJson['require']['ui'] = '>=1.0';
        }

        $writer = new \Laminas\Config\Writer\Json();
        $writer->toFile(APPLICATION_PATH . '/appcell/appcell.json', $appcellJson);

    }

    private function createSchemaFile($fileName)
    {
        if (file_exists(APPLICATION_PATH . '/stubs/schema/' . $fileName)) {
            $content = file_get_contents(APPLICATION_PATH . '/stubs/schema/' . $fileName);
        } else {
            $content = '{
	"key1": "value1"
}';
        }

        if (!file_exists(APPLICATION_PATH . '/appcell/schema/' . self::DEFAULT_RESOURCE)) {
            if (!mkdir($concurrentDirectory = APPLICATION_PATH . '/appcell/schema/' . self::DEFAULT_RESOURCE) && !is_dir($concurrentDirectory)) {
                throw new \RuntimeException(sprintf('Directory "%s" was not created', $concurrentDirectory));
            }
        }

        file_put_contents(APPLICATION_PATH . '/appcell/schema/' . self::DEFAULT_RESOURCE . '/' . $fileName, $content);
    }

    /**
     * Update composer json with related information.
     */
    private function updateComposer(string $name): RenameCommand
    {
        $this->task(
            'Updating config/app.php "name" property',
            function () use ($name) {
                $neededLine = "'name' => '" . Str::ucfirst($this->getCurrentBinaryName()) . "'";

                if (!Str::contains($contents = $this->getConfig(), $neededLine)) {
                    return false;
                }
                File::put(
                    $this->app->configPath('app.php'),
                    Str::replaceFirst(
                        $neededLine,
                        "'name' => '" . Str::ucfirst($name) . "'",
                        $contents
                    )
                );
            }
        );

        return $this;
    }

    private function askForSupportedFunctionalities()
    {
        $helper = $this->getHelper('question');
        $question = new ChoiceQuestion(
            'Please select what functionalities, your service will have (defaults to renewable, suspendable). Multiple choice support. E.g. 0,1,2,3',
            ['Renewable', 'Suspendable', 'Availability Check', 'SSO (single-sign-on)'],
            '0,1'
        );
        $question->setMultiselect(true);

        $functionalities = $helper->ask($this->input, $this->output, $question);
        $this->output->writeln('You have just selected: ' . implode(', ', $functionalities));

        $interfaces = [
            'https://repository.appcell.io/core/interface/service.schema.json'
        ];

        $resourceActions = [
            'rest' => [
                'create',
                'fetch',
                'fetchAll',
                'update',
                'delete'
            ],
            'actions' => []
        ];

        foreach ($functionalities as $functionality) {
            switch ($functionality) {
                case 'Renewable':
                    $interfaces[] = 'https://repository.appcell.io/core/interface/renewable.schema.json';

                    $resourceActions['actions']['renew'] = [];
                    break;
                case 'Suspendable':
                    $interfaces[] = 'https://repository.appcell.io/core/interface/suspendable.schema.json';

                    $resourceActions['actions']['suspend'] = [];
                    $resourceActions['actions']['unsuspend'] = [];
                    break;
                case 'Availability Check':
                    $interfaces[] = 'https://repository.appcell.io/core/interface/availability.schema.json';

                    $resourceActions['actions']['checkAvailability'] = [];
                    break;
                case 'SSO (single-sign-on)':
                    $interfaces[] = 'https://repository.appcell.io/core/interface/impersonate.schema.json';

                    $resourceActions['actions']['impersonate'] = [];
                    break;
            }
        }
        return [
            'interfaces' => $interfaces,
            'resources' => $resourceActions
        ];
    }

    private function parseInterface(string $interfaceUrl)
    {
        $interfaceSchema = Json::decode(file_get_contents($interfaceUrl), Json::TYPE_ARRAY);

        return $interfaceSchema['required'];
    }

    /**
     * Returns the current binary name.
     */
    private function getCurrentBinaryName(): string
    {
        $composer = $this->getComposer();

        return current(@json_decode($composer)->bin);
    }

    /**
     * Returns the composer.json file contents.
     */
    private function getComposer(): string
    {
        $filePath = $this->app->basePath('composer.json');

        if (!File::exists($filePath)) {
            $this->app->abort(400, 'The file composer.json not found');
        }

        return File::get($filePath);
    }

    /**
     * Returns the config file contents.
     */
    private function getConfig(): string
    {
        $filePath = $this->app->configPath('app.php');

        if (!File::exists($filePath)) {
            $this->app->abort(400, 'The file config/app.php not found');
        }

        return File::get($filePath);
    }

    private static function camelCase($str, array $noStrip = [])
    {
        // non-alpha and non-numeric characters become spaces
        $str = preg_replace('/[^a-z0-9' . implode("", $noStrip) . ']+/i', ' ', $str);
        $str = trim($str);
        // uppercase the first character of each word
        $str = ucwords($str);
        $str = str_replace(" ", "", $str);
        $str = lcfirst($str);

        return $str;
    }
}

