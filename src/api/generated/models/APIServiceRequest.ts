/**
 * AIsBreaker API
 * Specification of the AIsBreaker API. This API is used to access AI services.
 *
 * OpenAPI spec version: 0.6.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServiceRequest } from '../models/ServiceRequest';
import { HttpFile } from '../http/http';

export class APIServiceRequest {
    /**
    * User ID = username.
    */
    'clientId': string;
    /**
    * Client secret = password.
    */
    'clientSecret': string;
    'serviceRequest': ServiceRequest;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "clientId",
            "baseName": "client_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientSecret",
            "baseName": "client_secret",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceRequest",
            "baseName": "service_request",
            "type": "ServiceRequest",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return APIServiceRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
