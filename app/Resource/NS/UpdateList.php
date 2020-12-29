<?php

namespace App\Resource\NS;

use App\Misc\Services\AbstractAction;

class UpdateList extends AbstractAction
{
    /**
     * Example Request:
     * {
     *  "action": "update",
     *  "resource": "ns",
     *  "payload": {
     *      "domain":"apihawk.com",
     *      "ns1":"ns1.icnanycast.com",
     *      "ns2":"ns2.icnanycast.com",
     *      "ns3":"",
     *      "ns4":""
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
                    "ns4" => ""
                ]
            ],
            "result" => [
                'message' => 'Domain updated successfully'
            ]
        ];
    }

}
