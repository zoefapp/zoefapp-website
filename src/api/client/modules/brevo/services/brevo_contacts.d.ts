/// <reference types="node" />
import * as SibApiV3Sdk from '@sendinblue/client';
export declare const APP_USER_LIST = 4;
export declare const SUBMITTED_CLAIM = 13;
export declare enum DeviceType {
    UNKNOWN = "UNKNOWN",
    IOS = "IOS",
    ANDROID = "ANDROID"
}
interface CreateContactOptions {
    email?: string;
    uid?: string;
    firstName?: string;
    lastName?: string;
    deviceType?: DeviceType;
    lists?: number[];
}
export declare class BrevoContactsService {
    apiInstance: SibApiV3Sdk.ContactsApi;
    constructor(apiKey: string);
    /**
     *  Both create and update contact
     */
    setContact(currentEmail: string, data: CreateContactOptions): Promise<any>;
    getContact(email: string): Promise<SibApiV3Sdk.GetExtendedContactDetails>;
    upsertContact(currentEmail: string, data: CreateContactOptions): Promise<any>;
    createContact(data: CreateContactOptions): Promise<{
        response: import("http").IncomingMessage;
        body: SibApiV3Sdk.CreateUpdateContactModel;
    }>;
    deleteContact(email: string): Promise<{
        response: import("http").IncomingMessage;
        body?: any;
    }>;
}
export {};
