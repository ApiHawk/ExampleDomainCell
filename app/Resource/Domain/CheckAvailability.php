<?php

namespace App\Resource\Domain;

use App\Misc\Services\AbstractAction;

/**
 * Class CheckAvailability
 * @package App\Resource\Domain
 */
class CheckAvailability extends AbstractAction
{

    /**
     * Example Request:
     * {
     *  "action": "checkAvailability",
     *  "resource": "domain",
     *  "payload": {
     *      "sld": "apihawk",
     *      "tlds": ["com", "net"]
     *  }
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
            "status" => "success",
            "result" => [
                [
                    "domain" => "apihawk.com",
                    "status" => "available"
                ],
                [
                    "domain" => "apihawk.net",
                    "status" => "registered"
                ]
            ]
        ];
    }

}
