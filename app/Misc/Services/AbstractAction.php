<?php


namespace App\Misc\Services;


/**
 * Class AbstractAction
 * @package App\Misc\Services
 */
abstract class AbstractAction
{
    /**
     * @var array
     */
    protected $settings;

    /**
     * AbstractAction constructor.
     * @param array $settings
     */
    public function __construct(array $settings)
    {
        $this->settings = $settings;
    }


    /**
     * @param array $payload execution payload for this action
     * @return array
     */
    abstract function process(array $payload): array;
}
