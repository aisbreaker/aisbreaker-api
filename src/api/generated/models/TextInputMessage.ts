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

import { InputMessage } from '../models/InputMessage';
import { HttpFile } from '../http/http';

/**
* A text message sent to the AI service.
*/
export class TextInputMessage extends InputMessage {
    /**
    * Role of the (input) message creator.
    */
    'role': TextInputMessageRoleEnum;
    /**
    * The text message.
    */
    'text': string;
    /**
    * 1.0 means normal prompt (default), 0.0 means ignore, -1.0 means negative prompt; >1.0 or <-1.0 applifies the prompt
    */
    'weight'?: number;

    static readonly discriminator: string | undefined = "objectType";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "role",
            "baseName": "role",
            "type": "TextInputMessageRoleEnum",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextInputMessage.attributeTypeMap);
    }

    public constructor() {
        super();
        this.objectType = "TextInputMessage";
    }
}


export type TextInputMessageRoleEnum = "system" | "user" ;
