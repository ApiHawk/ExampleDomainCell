<?php

namespace App\Resource\Ns;

use App\Misc\Services\AbstractAction;

class FetchAll extends AbstractAction
{
    /**
     * Example Request:
     * {
     *  "action": "fetch",
     *  "resource": "ns",
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
                "nameservers" => [
                    "ns1" => "ns1.icnanycast.net",
                    "ns2" => "ns1.icnanycast.net",
                ]
            ]
        ];
    }
}
