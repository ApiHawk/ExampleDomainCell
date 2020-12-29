<?php

namespace App\Resource\Domain;

use App\Misc\Services\AbstractAction;

class Update extends AbstractAction
{
    /**
     * Example Request:
     * {
     *  "action": "update",
     *  "resource": "domain",
     *  "payload": {
     *      "domain":"apihawk.com",
     *      "ns1":"ns1.icnanycast.com",
     *      "ns2":"ns2.icnanycast.com",
     *      "ns3":"",
     *      "ns4":"",
     *      "privacy_protection":"on",
     *      "theft_protection":"on",
     *      "auth_info":"TRANSFER CODE"
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
                "option" => [
                    "ns1" => "ns1.icnanycast.com",
                    "ns2" => "ns2.icnanycast.com",
                    "ns3" => "",
                    "ns4" => "",
                    "privacy_protection" => "on",
                    "theft_protection" => "on",
                    "auth_info" => "TRANSFER CODE"
                ]
            ],
            "result" => [
                'message' => 'Domain updated successfully'
            ]
        ];
    }

}
