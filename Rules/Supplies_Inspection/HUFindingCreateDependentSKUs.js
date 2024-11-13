import { ImageSource } from '@nativescript/core';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreateDependentSKUs(clientAPI) {

    console.log("MDK01 HUFindingCreateDependentSKUs");
    var skuLst = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_SKUSelection').controls[0]._sections[0].getSelectedItems();
    var actionArray = [];
    var huAudit = JSON.parse(clientAPI.getActionResult('HUFindingCreate').data);
    //var tu = clientAPI.binding;
    clientAPI.setActionBinding(huAudit);
    for (let i = 0; i < skuLst.length; i++ ) {
        let sku = skuLst[i].binding;
        actionArray.push(clientAPI.executeAction({
            "Name": "/MDK01/Actions/Import_Inspection/HUFindingCreateRelatedSKUs.action",
            "Properties": {
                "Properties": {
                    "stockKeepingUnitId": `${sku.sku}`,
                    "tipoMercancia": `${sku.tipoMercancia}`,
                    "direccion": `${sku.direccion}`,
                    "seccion": `${sku.seccion}`,
                    "grupoArticulo": `${sku.grupoArticulo}`,
                    "origen": `${sku.propietarioDesc}`
                }
            }          
        }))
    }

    let addedAttachments = clientAPI.evaluateTargetPathForAPI('#Page:Supplies_Inspection_Add_HU/#Control:FormCellAttachment0').getClientData().AddedAttachments;
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
        console.log("MDK01 HUFindingCreateDependentSKUs then");
        //tu._HandlingUnitAudit = huAudit;
        //clientAPI.setActionBinding(tu);
        return clientAPI.executeAction("/MDK01/Actions/ClosePage.action");
    }, (error)=>{
        //tu._HandlingUnitAudit = huAudit;
        //clientAPI.setActionBinding(tu);        
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
            }                
        });
    }).catch((error) => {
        //tu._HandlingUnitAudit = huAudit;
        //clientAPI.setActionBinding(tu);        
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
            }                
        });
    });          

}

export function AttachmentConvert(content) {

    console.log("MDK01 HUFindingCreateDependentSKUs AttachmentConvert function");
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