<?php


namespace App\Providers;


use App\Misc\Services\EtcdService;
use Illuminate\Support\ServiceProvider;

class EtcdServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(EtcdService::class, function ($app) {
            $config = config('etcd');
            $etcd = new EtcdService($config['host'] . ':' . $config['port']);

            if (isset($config['username'])) {
                $etcd->authenticate($config['username'], $config['password']);
            }

            $etcd->setPrefix('/' . config('app.name') . '/');

            return $etcd;
        });
    }
}
