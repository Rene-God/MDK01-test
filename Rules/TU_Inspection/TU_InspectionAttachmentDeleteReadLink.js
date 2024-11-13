/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TU_InspectionAttachmentDeleteReadLink(clientAPI) {

    console.log("MDK01 TU_InspectionAttachmentDeleteReadLink");
    
    return 'TU_ATTACH(' + clientAPI.getActionBinding().guid + ')';

}