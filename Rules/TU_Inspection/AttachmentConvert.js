import { ImageSource } from '@nativescript/core';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function AttachmentConvert(clientAPI) {

    console.log("MDK01 AttachmentConvert.");
    //var att = clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellAttachment0').getClientData().AddedAttachments[0].content;

    // The NativeScript's ImageSource API will scale the image to your specified max dimension size while keeping the aspect ration intact
    // See https://v7.docs.nativescript.org/api-reference/classes/imagesource.html#resize for details
    let maxImageSize = 1024; //This is max size in pixels (not in bytes)    
    var data = new java.io.ByteArrayInputStream(clientAPI.getPageProxy().getControl('SectionedTable0').getControl('FormCellAttachment0').getClientData().AddedAttachments[0].content);
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
}