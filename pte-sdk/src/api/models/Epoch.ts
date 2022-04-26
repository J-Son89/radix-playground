/* tslint:disable */
/* eslint-disable */
/**
 * Babylon PTE API
 * Babylon Public Test Environment (PTE) API specification.
 *
 * The version of the OpenAPI document: 0.1.17
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
 * @interface Epoch
 */
export interface Epoch {
    /**
     * 
     * @type {number}
     * @memberof Epoch
     */
    epoch: number;
}

export function EpochFromJSON(json: any): Epoch {
    return EpochFromJSONTyped(json, false);
}

export function EpochFromJSONTyped(json: any, ignoreDiscriminator: boolean): Epoch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'epoch': json['epoch'],
    };
}

export function EpochToJSON(value?: Epoch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'epoch': value.epoch,
    };
}

