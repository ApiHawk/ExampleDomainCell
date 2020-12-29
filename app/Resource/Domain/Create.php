<?php

namespace App\Resource\Domain;

use App\Misc\Services\AbstractAction;

class Create extends AbstractAction
{
    /**
     * Example Request:
     * {
     *  "action": "create",
     *  "resource": "domain",
     *  "payload": {
     *      "domain":"apihawk.com",
     *      "ns1":"ns1.icnanycast.com",
     *      "ns2":"ns2.icnanycast.com",
     *      "ns3":"",
     *      "ns4":"",
     *      "numyears":"1",
     *      "autoRenew":"0",
     *      "email":"thehawks@apihawk.com",
     *      "phonenumber":"+48500000000",
     *      "country":"Poland",
     *      "firstname":"ApiHawk",
     *      "lastname":"Team",
     *      "address1":"Grunwaldzka 15/4",
     *      "address2":"",
     *      "city":"Kraków",
     *      "postcode":"31-000",
     *      "companyname":"ApiHawk",
     *      "state":"",
     *      "jobtitle":"manager"
     *  },
     *  "settings": {}
     * }
     *
     * @param array $payload
     * @return array
     */
    function process(array $payload): array
    {
        \Log::debug(__CLASS__ . ' called successfully');

        //YOUR LOGIC HERE :)

        return [
            "status" => 200,
            "for-update" => [
                'option' => [
                    'privacy_protection' => 'on',
                    'theft_protection' => 'on',
                    'auth_info' => 'TRANSFER CODE'
                ]
            ],
            "result" => [
                'message' => 'Domain created successfully'
            ]
        ];
    }

}
