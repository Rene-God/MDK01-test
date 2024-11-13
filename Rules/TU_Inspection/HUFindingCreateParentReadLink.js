/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreateParentReadLink(clientAPI) {

    var data = clientAPI.actionResults.HUFindingCreate.data;
    try {
        let response = JSON.parse(data)['@odata.readLink'];    
        //console.log("MDK01 HUFindingCreateParentReadLink data parsed: ");
        //console.log(data);
        return response;
    } catch (e) {
        console.log("MDK01 HUFindingCreateParentReadLink exception")
    }

}