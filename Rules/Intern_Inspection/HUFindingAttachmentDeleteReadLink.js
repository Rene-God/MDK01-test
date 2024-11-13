/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingAttachmentDeleteReadLink(clientAPI) {

    console.log("MDK01 HUFindingAttachmentDeleteReadLink");
    
    return 'HuItrAttach(' + clientAPI.getActionBinding().guid + ')';

}