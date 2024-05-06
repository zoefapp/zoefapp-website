import * as SibApiV3Sdk from '@sendinblue/client';
import { BREVO_ENDPOINT } from './config';
export const APP_USER_LIST = 4;
export const SUBMITTED_CLAIM = 13;
export var DeviceType;
(function (DeviceType) {
    DeviceType["UNKNOWN"] = "UNKNOWN";
    DeviceType["IOS"] = "IOS";
    DeviceType["ANDROID"] = "ANDROID";
})(DeviceType || (DeviceType = {}));
export class BrevoContactsService {
    apiInstance;
    constructor(apiKey) {
        this.apiInstance = new SibApiV3Sdk.ContactsApi();
        this.apiInstance.basePath = BREVO_ENDPOINT.value();
        this.apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, apiKey);
    }
    /**
     *  Both create and update contact
     */
    async setContact(currentEmail, data) {
        if (currentEmail && currentEmail != data.email) {
            // possible update of contact instead of create contact
            try {
                await this.apiInstance.getContactInfo(currentEmail);
                return this.upsertContact(currentEmail, data);
            }
            catch (e) {
                // contact not found 
                console.log('contact not found');
                // skip to creating a new one
            }
        }
        return this.createContact(data);
    }
    ;
    async getContact(email) {
        let response = await this.apiInstance.getContactInfo(email);
        if (response.response.statusCode != 200) {
            throw new Error('contact not found');
        }
        return response.body;
    }
    async upsertContact(currentEmail, data) {
        let updateContact = new SibApiV3Sdk.UpdateContact();
        updateContact.attributes = {};
        if (currentEmail != data.email)
            updateContact.attributes.EMAIL = data.email ? data.email : currentEmail;
        if (data.deviceType)
            updateContact.attributes.DEVICE_TYPE = data.deviceType;
        if (data.firstName)
            updateContact.attributes.FIRSTNAME = data.firstName;
        if (data.lastName)
            updateContact.attributes.LASTNAME = data.lastName;
        if (data.uid)
            updateContact.attributes.UID = data.uid;
        if (data.lists)
            updateContact.listIds = data.lists;
        try {
            let result = await this.apiInstance.updateContact(currentEmail, updateContact);
            return result.body;
        }
        catch (error) {
            if (error.response.statusCode == 404) {
                // apparently did not exist yet, so create a new one
                return this.createContact({
                    ...data,
                    email: currentEmail ? currentEmail : data.email
                });
            }
            throw new Error(`Brevo Unknown Error. Error=${error}`);
        }
    }
    async createContact(data) {
        let createContact = new SibApiV3Sdk.CreateContact();
        createContact.email = data.email;
        createContact.updateEnabled = true;
        createContact.attributes = {
            FIRSTNAME: data.firstName,
            LASTNAME: data.lastName,
            DEVICE_TYPE: data.deviceType ? data.deviceType : 'UNKNOWN',
            UID: data.uid
        };
        createContact.listIds = data.lists;
        return this.apiInstance.createContact(createContact); // error handling?
    }
    async deleteContact(email) {
        return this.apiInstance.deleteContact(email);
    }
}
