<p align="center">
    <img title="AppCell" height="100" src="https://cdn.apihawk.com/welcome-images/appcell.png" />
</p>


<h4> <center>MicroCell is a toolkit for writing AppCell plugins.</h4>


AppCell is an orchestrative software that incorporates a plugin architecture. It allows one software to communicate with multiple other such without coupling, modifying the main software source, or hard-coding plugins. This way the integration of various softwares and the migration of services between such will become faster, more secure and more easily accomplished.

- Built on top of the [Laravel](https://laravel.com) components.
- Optional installation of Laravel [Eloquent](https://laravel-zero.com/docs/database/), Laravel [Logging](https://laravel-zero.com/docs/logging/) and many others.
- Supports interactive [menus](https://laravel-zero.com/docs/build-interactive-menus/) and [desktop notifications](https://laravel-zero.com/docs/send-desktop-notifications/) on Linux, Windows & MacOS.
- Ships with a [Scheduler](https://laravel-zero.com/docs/task-scheduling/) and  a [Standalone Compiler](https://laravel-zero.com/docs/build-a-standalone-application/).
- Integration with [Collision](https://github.com/nunomaduro/collision) - Beautiful error reporting

------

## Documentation

For full documentation, visit [apihawk.com/help](https://www.apihawk.com/en/help/).

## Instalation
create a .env file with your AMQP server. 

```bash
vi .env

----
AH_AMQP_HOST=
AH_AMQP_PORT=5672
AH_AMQP_USER=root
AH_AMQP_PASS=
AH_AMQP_VHOST=/
AH_AMQP_HEARTBEAT=15
```

Install all dependencies
```bash
composer install
```

## RUN
```bash
php application process -d
```

This will create new queue in your RabbitMQ. 

In order to test your funcitonalities, send example request to this queue and you will receive output of: 
```bash
[2020-12-29 11:48:43] development.INFO: Message received at queue: AppCell[domainexamplecell](C:)  
[2020-12-29 11:48:43] development.DEBUG: Message body {"action":"create","resource":"domain","payload":{"domain":"apihawk.com","ns1":"ns1.icnanycast.com","ns2":"ns2.icnanycast.com","ns3":"","ns4":"","numyears":"1","autoRenew":"0","email":"thehawks@apihawk.com","phonenumber":"+48500000000","country":"Poland","firstname":"ApiHawk","lastname":"Team","address1":"Grunwaldzka 15/4","address2":"","city":"Kraków","postcode":"31-000","companyname":"ApiHawk","state":"","jobtitle":"manager"},"settings":[]} 
[2020-12-29 11:48:43] development.DEBUG: App\Resource\Domain\Create called successfully  
[2020-12-29 11:48:43] development.DEBUG: Sending response {"status":200,"for-update":{"option":{"privacy_protection":"on","theft_protection":"on","auth_info":"TRANSFER CODE"}},"result":{"message":"Domain created successfully"}} 
[2020-12-29 11:48:43] development.INFO: Message AppCell[domainexamplecell](C:) acknowledged  
```
