import { ImageSource } from '@nativescript/core';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingAttachmentsCreate(clientAPI) {

    console.log("MDK01 HUFindingAttachmentsCreate");
    var addedAttachments = clientAPI.getPageProxy().getControl('FormCellContainer').getSections()[1].getControls()[4].getClientData().AddedAttachments;
    var huAudit = JSON.parse(clientAPI.actionResults.HUFindingCreate.data);    
    var actionArray = [];      
    for (let i = 0; i < addedAttachments.length; i ++) {
        let content = AttachmentConvert(addedAttachments[i].content);
        actionArray.push(clientAPI.executeAction(
            {
                'Name': '/MDK01/Actions/TU_Inspection/HUFindingAttachmentCreate.action',
                'Properties': {
                    'Properties': {
                        'attachment': content,
                        'guidHu': huAudit.guidHu
                    },
                    "ParentLink": {
                        "Property": "_AttachHu",
                        "Target": {
                            "EntitySet": "HUAUDIT",
                            "ReadLink": huAudit["@odata.readLink"]
                        }
                    }
                }
            }
        ));
    }
    return Promise.all(actionArray).then((result)=>{
        return clientAPI.executeAction("/MDK01/Actions/CloseModalPage_Complete.action");
    }, (error)=>{
        console.log("MDK01 HUFindingAttachmentsCreate attachment error");
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('TU_InspectionAttachmentCreateFailed')}`
            }                
        }).then(() => {
            return clientAPI.executeAction("/MDK01/Actions/CloseModalPage_Complete.action");
        });
    })      
}

export function AttachmentConvert(content) {

    console.log("MDK01 HUFindingAttachmentsCreate AttachmentConvert function");
    //var att = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellAttachment0').getClientData().AddedAttachments[0].content;

    // The NativeScript's ImageSource API will scale the image to your specified max dimension size while keeping the aspect ration intact
    // See https://v7.docs.nativescript.org/api-reference/classes/imagesource.html#resize for details
    let maxImageSize = 1024; //This is max size in pixels (not in bytes)    
    var data = new java.io.ByteArrayInputStream(content);
    var img = ImageSource.fromDataSync(data);
    var content;
    // Only resize if one of the image's dimension is larger than maxImageSize
/*     if (img.width > maxImageSize || img.height > maxImageSize) {
        var imgResized = img.resize(maxImageSize, { "filter" : true});
        var scaledBitmap = imgResized.android;
        var outputStream = new java.io.ByteArrayOutputStream();
        scaledBitmap.compress(android.graphics.Bitmap.CompressFormat.PNG, 0 , outputStream);
        content = outputStream.toString();
    } else { */
        content = img.toBase64String();
   // }
    return content;
}