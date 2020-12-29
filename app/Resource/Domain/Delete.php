<?php

namespace App\Resource\Domain;

use App\Misc\Services\AbstractAction;

class Delete extends AbstractAction
{
    /**
     * Example Request:
     * {
     *  "action": "delete",
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
            "status" => 204,
            "result" => [
                'Domain deleted/suspended successfully'
            ]
        ];
    }

}
