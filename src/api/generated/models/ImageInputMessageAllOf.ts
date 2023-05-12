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

import { HttpFile } from '../http/http';

export class ImageInputMessageAllOf {
    /**
    * Role of the (input) message creator/input image. * \"user\": The image to edit or to respond to. Must be a valid PNG file, less than 4MB, and square. If mask is not provided, image must have transparency, which will be used as the mask. * \"mask\": An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where image should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions as image.
    */
    'role'?: ImageInputMessageAllOfRoleEnum;
    /**
    * The image, base64-encoded; either url or base64 must be set.
    */
    'base64'?: string;
    /**
    * The image, url-encoded; either url or base64 must be set.
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "role",
            "baseName": "role",
            "type": "ImageInputMessageAllOfRoleEnum",
            "format": ""
        },
        {
            "name": "base64",
            "baseName": "base64",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ImageInputMessageAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type ImageInputMessageAllOfRoleEnum = "user" | "mask" ;
