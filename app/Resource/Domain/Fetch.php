<?php

namespace App\Resource\Domain;

use App\Misc\Services\AbstractAction;

class Fetch extends AbstractAction
{
    /**
     * Example Request:
     * {
     *  "action": "fetch",
     *  "resource": "domain",
     *  "payload": {
     *      "domain":"apihawk.com"
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
            "result" => [
                "ns1" => "ns1.icnanycast.net",
                "ns2" => "ns1.icnanycast.net",
                "ns3" => "ns1.icnanycast.net",
                "ns4" => "ns1.icnanycast.net",
                "date_expires" => "2030-01-29 13:48:41",
                "privacy_protection" => "on",
                "theft_protection" => "on",
                "auth_info" => "TRANSFER CODE",
            ]
        ];
    }

}
