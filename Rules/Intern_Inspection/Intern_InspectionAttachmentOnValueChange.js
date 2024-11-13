import libCom from '../Common/Library/CommonLibrary';
import { ImageSource } from '@nativescript/core';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Intern_InspectionAttachmentOnValueChange(clientAPI) {

    console.log("MDK01 Intern_InspectionAttachmentOnValueChange.");



    var cacheAddedAttachments = libCom.getStateVariable(clientAPI, 'TU_InspectionAddedAttachments');
    if (cacheAddedAttachments === undefined) { cacheAddedAttachments = []; };

    var addedAttachments = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellAttachmentIntern').getClientData().AddedAttachments;


    if (addedAttachments.length > cacheAddedAttachments.length) {
        var huAudit = clientAPI.binding;

        var content = AttachmentConvert(addedAttachments[addedAttachments.length - 1].content);
        return clientAPI.executeAction({
            'Name': '/MDK01/Actions/Intern_Inspection/Intern_InspectionAttachmentCreate.action',
            'Properties': {
                'Properties': {
                    'attachment': content
                },
                "ParentLink": {
                    "Property": "_HuItrAttach",
                    "Target": {
                        "EntitySet": "HUItr",
                        "ReadLink": `${huAudit["@odata.readLink"]}`
                    }
                }
            }
        }).then((result) => {
            if (result.data !== undefined) {
                let data = JSON.parse(result.data);
                addedAttachments[addedAttachments.length - 1].guid = data.guidAttachment;
                cacheAddedAttachments.push(addedAttachments[addedAttachments.length - 1]);
                libCom.setStateVariable(clientAPI, 'TU_InspectionAddedAttachments', cacheAddedAttachments);
                Promise.resolve();
            }
        }).catch((error) => {
            addedAttachments.pop();
            clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellAttachmentIntern').setValue(addedAttachments);
            return clientAPI.executeAction({
                "Name": "/MDK01/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `${clientAPI.localizeText('TU_InspectionAttachmentCreateFailed')}`
                }
            })
        });
    } else {
        for (let i = 0; i < cacheAddedAttachments.length; i++) {
            if (addedAttachments.length === i || cacheAddedAttachments[i].urlString !== addedAttachments[i].urlString) {
                let tuContext = clientAPI.getPageProxy().getActionBinding();
                clientAPI.getPageProxy().setActionBinding(cacheAddedAttachments[i]);
                return clientAPI.executeAction({
                    'Name': '/MDK01/Actions/Intern_Inspection/Intern_InspectionAttachmentDelete.action'
                }).then((result) => {
                    cacheAddedAttachments.splice(cacheAddedAttachments[i], 1);
                    libCom.setStateVariable(clientAPI, 'TU_InspectionAddedAttachments', cacheAddedAttachments);
                    clientAPI.getPageProxy().setActionBinding(tuContext);
                    Promise.resolve();
                }).catch((error) => {
                    console.log("MDK01 Intern_InspectionAttachmentOnValueChange delete attachment error");
                    clientAPI.getPageProxy().setActionBinding(tuContext);
                    Promise.resolve();
                });
            }
        }
    }

}


export function AttachmentConvert(content) {

    console.log("MDK01 Intern_InspectionAttachmentOnValueChange AttachmentConvert function");
    let maxImageSize = 1024; //This is max size in pixels (not in bytes)    
    var data = new java.io.ByteArrayInputStream(content);
    var img = ImageSource.fromDataSync(data);
    var content;

    content = img.toBase64String();

    return content;
}