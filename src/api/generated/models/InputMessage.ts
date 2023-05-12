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

import { Message } from '../models/Message';
import { HttpFile } from '../http/http';

/**
* A message sent to the AI service.  This is usually NOT a response to a previous request/reponse of the same conversation, because previous messages are stored in the conversation_state.
*/
export class InputMessage extends Message {

    static readonly discriminator: string | undefined = "objectType";

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(InputMessage.attributeTypeMap);
    }

    public constructor() {
        super();
        this.objectType = "InputMessage";
    }
}
