/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingAttachmentDeleteReadLink(clientAPI) {

    console.log("MDK01 HUFindingAttachmentDeleteReadLink");
    
    return 'HU_ATTACH(' + clientAPI.getActionBinding().guid + ')';

}