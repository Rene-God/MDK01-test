/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SKUFindingCreateParentReadLink(clientAPI) {

    var data = clientAPI.actionResults.Intern_SKUFindingCreate.data;
    try {
        let response = JSON.parse(data)['@odata.readLink'];    

        return response;
    } catch (e) {
        console.log("MDK01 SKUFindingCreateParentReadLink exception")
    }

}