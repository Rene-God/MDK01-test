/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Unload_InspectionGetFindingDescription(clientAPI) {

    console.log("MDK01 TU_InspectionGetFindingDescription");
    let hallazgoId = clientAPI.binding.hallazgoId;
    return clientAPI.read('/MDK01/Services/API03.service','Hallazgos',[],`$filter=id eq ${hallazgoId}`).then( result => {
        if ( result && result.length > 0) {
            return result.getItem(0).findingDetail;
        } else {
            return Promise.resolve();
        }
    })
}