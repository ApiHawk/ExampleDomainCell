<?php

namespace App\Commands;

use Illuminate\Console\GeneratorCommand;
use Illuminate\Support\Str;

class GenerateAction extends GeneratorCommand
{
    /**
     * The signature of the command.
     *
     * @var string
     */
    protected $signature = 'make:action {name}';

    /**
     * The description of the command.
     *
     * @var string
     */
    protected $description = 'Generate new Cell Action';



    /**
     * @inheritDoc
     */
    protected function getStub()
    {
        return APPLICATION_PATH . '/stubs/action.stub';
    }

    protected function getPath($name)
    {
        $name = Str::replaceFirst($this->rootNamespace(), '', $name);

        return $this->laravel['path'].'/Actions/'.str_replace('\\', '/', $name).'.php';
    }
}
