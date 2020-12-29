<?php

namespace App\Commands;

use App\Misc\ConsumerProvider;
use Illuminate\Console\Scheduling\Schedule;

class ProcessCommand extends ConsumerProvider
{
    /**
     * The description of the command.
     *
     * @var string
     */
    protected $description = 'Runs daemonized worker for processing AppCell task';


    protected function process($data): array
    {
        try {
            $action = 'App\\Resource\\' . ucfirst($data['resource']) . '\\' . ucfirst($data['action']);

            if (!class_exists($action)) {
                throw new \Exception('Action: ' . $data['action'] . ', for resource: ' . $data['resource'] . ' do not exists', 422);
            }

            $settings = $data['settings'] ?? [];


            $processor = $this->app->make($action, [
                'settings' => $settings
            ]);

            $result = $processor->process($data['payload']);
        } catch (\Exception $exception) {
            throw $exception;
            return [
                'status' => $exception->getCode(),
                'detail' => $exception->getMessage(),
                'title' => 'Unexpected Error'
            ];
        }

        if (!is_array($result)) {
            $result = [
                'result' => $result
            ];
        } else if (!isset($result['result'])) {
            $result = [
                'result' => $result
            ];
        }

        $result['status'] = $result['status'] ?? 200;

        \Log::debug('Sending response', $result);
        return $result;

    }

    /**
     * Define the command's schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    public function schedule(Schedule $schedule)
    {
        // $schedule->command(static::class)->everyMinute();
    }

}
