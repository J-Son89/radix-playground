/* tslint:disable */
/* eslint-disable */
/**
 * Babylon PTE API
 * Babylon Public Test Environment (PTE) API specification.
 *
 * The version of the OpenAPI document: 0.1.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BadRequest
 */
export interface BadRequest {
    /**
     * 
     * @type {string}
     * @memberof BadRequest
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof BadRequest
     */
    reason: string;
}

export function BadRequestFromJSON(json: any): BadRequest {
    return BadRequestFromJSONTyped(json, false);
}

export function BadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BadRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'reason': json['reason'],
    };
}

export function BadRequestToJSON(value?: BadRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'reason': value.reason,
    };
}

