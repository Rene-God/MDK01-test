import libCom from '../Common/Library/CommonLibrary';
import { ImageSource } from '@nativescript/core';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingAttachmentOnValueChange(clientAPI) {

    console.log("MDK01 HUFindingAttachmentOnValueChange");


    //var addedAttachments = [];
    var cacheAddedAttachments = libCom.getStateVariable(clientAPI, 'HUFindingAddedAttachments');
    if (cacheAddedAttachments === undefined ) { cacheAddedAttachments = []; };
    //cacheDeletedAttachments = libCom.getStateVariable(clientAPI, 'HUFindingAddedAttachments');
    var addedAttachments = clientAPI.getPageProxy().getControl('FormCellContainer').getControl('FormCellAttachment0').getClientData().AddedAttachments;
    //deletedAttachments = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellAttachment0').getClientData().DeletedAttachments;

    if (addedAttachments.length > cacheAddedAttachments.length) {
        var huAudit = clientAPI.binding;
        //clientAPI.setActionBinding(addedAttachments[addedAttachments.length-1]);
        var content = AttachmentConvert(addedAttachments[addedAttachments.length-1].content);
        return clientAPI.executeAction({
            'Name': '/MDK01/Actions/TU_Inspection/HUFindingAttachmentCreate.action',
            'Properties': {
                'attachment': `${content}`
            },
            "ParentLink": {
                "Property": "_AttachHu",
                "Target": {
                  "EntitySet": "HUAUDIT",
                  "ReadLink": `${huAudit["@odata.readLink"]}`
                }
            }
        }).then((result) => {
            if ( result.data !== undefined ) {
                let data = JSON.parse(result.data);
                addedAttachments[addedAttachments.length-1].guid = data.guidAttachment;
                cacheAddedAttachments.push(addedAttachments[addedAttachments.length-1]);
                libCom.setStateVariable(clientAPI,'HUFindingAddedAttachments',cacheAddedAttachments);
                Promise.resolve();
            }
        }).catch((error) => {
            addedAttachments.pop();
            clientAPI.getPageProxy().getControl('FormCellContainer').getControl('FormCellAttachment0').setValue(addedAttachments);
            return clientAPI.executeAction({
                "Name": "/MDK01/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `${clientAPI.localizeText('TU_InspectionAttachmentCreateFailed')}`
                }                
            })            
        });
    } else {
        for (let i = 0; i < cacheAddedAttachments.length; i ++) {
            if (addedAttachments.length === i || cacheAddedAttachments[i].urlString !== addedAttachments[i].urlString) {
                let tuContext =  clientAPI.getPageProxy().getActionBinding();    
                clientAPI.getPageProxy().setActionBinding(cacheAddedAttachments[i]);   
                return clientAPI.executeAction({
                    'Name': '/MDK01/Actions/TU_Inspection/HUFindingAttachmentDelete.action'
                }).then((result) => {
                    cacheAddedAttachments.splice(cacheAddedAttachments[i],1);
                    libCom.setStateVariable(clientAPI,'HUFindingAddedAttachments',cacheAddedAttachments);
                    clientAPI.getPageProxy().setActionBinding(tuContext);
                    Promise.resolve();                    
                }).catch((error) => {
                    console.log("MDK01 HUFindingAttachmentOnValueChange delete attachment error");
                    clientAPI.getPageProxy().setActionBinding(tuContext);
                    Promise.resolve();  
                });
            }
        }
    }

}


export function AttachmentConvert(content) {

    console.log("MDK01 HUFindingAttachmentOnValueChange AttachmentConvert function");
    //var att = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellAttachment0').getClientData().AddedAttachments[0].content;

    // The NativeScript's ImageSource API will scale the image to your specified max dimension size while keeping the aspect ration intact
    // See https://v7.docs.nativescript.org/api-reference/classes/imagesource.html#resize for details
    let maxImageSize = 1024; //This is max size in pixels (not in bytes)    
    var data = new java.io.ByteArrayInputStream(content);
    var img = ImageSource.fromDataSync(data);
    var content;
    // Only resize if one of the image's dimension is larger than maxImageSize
    if (img.width > maxImageSize || img.height > maxImageSize) {
        var imgResized = img.resize(maxImageSize, { "filter" : true});
        var scaledBitmap = imgResized.android;
        var outputStream = new java.io.ByteArrayOutputStream();
        scaledBitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 0 , outputStream);
        content = outputStream.toString();
    } else {
        content = img.toBase64String();
    }
    return content;
}