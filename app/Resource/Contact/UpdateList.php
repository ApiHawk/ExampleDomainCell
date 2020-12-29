<?php

namespace App\Resource\Contact;

use App\Misc\Services\AbstractAction;

class UpdateList extends AbstractAction
{
    /**
     * Example Request:
     * {
     *  "action": "updateList",
     *  "resource": "contact",
     *  "payload": {
     *      "domain":"apihawk.com",
     *      "registrant":{
     *          "firstname":"ApiHawk",
     *          "lastname":"Team",
     *          "companyname":"ApiHawk Ltd.",
     *          "email":"thehawks@apihawk.com",
     *          "address1":"Grunwaldzka 15/4",
     *          "address2":"disabled",
     *          "city":"Kraków",
     *          "state":"PL",
     *          "postcode":"31-000",
     *          "country":"PL",
     *          "phonenumber":"+48-485-00000000",
     *          "handle":"31360770"
     *      },
     *      "admin":{
     *          "firstname":"ApiHawk",
     *          "lastname":"Team",
     *          "companyname":"ApiHawk Ltd.",
     *          "email":"thehawks@apihawk.com",
     *          "address1":"Grunwaldzka 15/4",
     *          "address2":"disabled",
     *          "city":"Kraków",
     *          "state":"PL",
     *          "postcode":"31-000",
     *          "country":"PL",
     *          "phonenumber":"+48-485-00000000",
     *          "handle":"31360770"
     *      },
     *      "tech":{
     *          "firstname":"ApiHawk",
     *          "lastname":"Team",
     *          "companyname":"ApiHawk Ltd.",
     *          "email":"thehawks@apihawk.com",
     *          "address1":"Grunwaldzka 15/4",
     *          "address2":"disabled",
     *          "city":"Kraków",
     *          "state":"PL",
     *          "postcode":"31-000",
     *          "country":"PL",
     *          "phonenumber":"+48-485-00000000",
     *          "handle":"31360770"
     *      },
     *      "billing":{
     *          "firstname":"ApiHawk",
     *          "lastname":"Team",
     *          "companyname":"ApiHawk Ltd.",
     *          "email":"thehawks@apihawk.com",
     *          "address1":"Grunwaldzka 15/4",
     *          "address2":"disabled",
     *          "city":"Kraków",
     *          "state":"PL",
     *          "postcode":"31-000",
     *          "country":"PL",
     *          "phonenumber":"+48-485-00000000",
     *          "handle":"31360770"
     *      }
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
                "status" => 200,
                "result" => [
                    "registrant" => [
                        "firstname" => "ApiHawk",
                        "lastname" => "Team",
                        "companyname" => "ApiHawk Ltd.",
                        "email" => "apihawk.com",
                        "address1" => "Grunwaldzka 15/4",
                        "address2" => "disabled",
                        "city" => "Kraków",
                        "state" => "PL",
                        "postcode" => "31-000",
                        "country" => "PL",
                        "phonenumber" => "+48-485-00000000",
                        "handle" => "31360770"
                    ],
                    "admin" => [
                        "firstname" => "ApiHawk",
                        "lastname" => "Team",
                        "companyname" => "ApiHawk Ltd.",
                        "email" => "apihawk.com",
                        "address1" => "Grunwaldzka 15/4",
                        "address2" => "disabled",
                        "city" => "Kraków",
                        "state" => "PL",
                        "postcode" => "31-000",
                        "country" => "PL",
                        "phonenumber" => "+48-485-00000000",
                        "handle" => "31360770"
                    ],
                    "tech" => [
                        "firstname" => "ApiHawk",
                        "lastname" => "Team",
                        "companyname" => "ApiHawk Ltd.",
                        "email" => "apihawk.com",
                        "address1" => "Grunwaldzka 15/4",
                        "address2" => "disabled",
                        "city" => "Kraków",
                        "state" => "PL",
                        "postcode" => "31-000",
                        "country" => "PL",
                        "phonenumber" => "+48-485-00000000",
                        "handle" => "31360770"
                    ],
                    "billing" => [
                        "firstname" => "ApiHawk",
                        "lastname" => "Team",
                        "companyname" => "ApiHawk Ltd.",
                        "email" => "apihawk.com",
                        "address1" => "Grunwaldzka 15/4",
                        "address2" => "disabled",
                        "city" => "Kraków",
                        "state" => "PL",
                        "postcode" => "31-000",
                        "country" => "PL",
                        "phonenumber" => "+48-485-00000000",
                        "handle" => "31360770"
                    ]
                ]
            ]
        ];
    }
}
