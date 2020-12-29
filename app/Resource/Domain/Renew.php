<?php

namespace App\Resource\Domain;

use App\Misc\Services\AbstractAction;

class Renew extends AbstractAction
{
    /**
     * Example Request:
     * {
     *  "action": "renew",
     *  "resource": "domain",
     *  "payload": {
     *      "domain":"apihawk.com",
     *      "numyears":"1",
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
            "for-update" => [],
            "result" => [
                'message' => 'Domain renewed successfully'
            ]
        ];
    }

}
