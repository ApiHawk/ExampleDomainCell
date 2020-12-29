<?php


namespace App\Misc\Services;


use LaravelZero\Framework\Commands;
use LaravelZero\Framework\Kernel;

class AppCellKernel extends Kernel
{
    public function handle($input, $output = null)
    {
        //Remove core commands
        $this->setDevelopmentCommands([
            Commands\BuildCommand::class,
            Commands\MakeCommand::class,
            Commands\InstallCommand::class,
            Commands\StubPublishCommand::class,
        ]);

        return parent::handle($input, $output);
    }

    /**
     * @return string[]
     */
    public function getDevelopmentCommands(): array
    {
        return $this->developmentCommands;
    }

    /**
     * @param string[] $developmentCommands
     */
    public function setDevelopmentCommands(array $developmentCommands): void
    {
        $this->developmentCommands = $developmentCommands;
    }

}
