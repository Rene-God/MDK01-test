/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Unload_InspectionFindingCreateCompleteBtnPress(clientAPI) {

    console.log("MDK01 Unload_InspectionFindingCreateCompleteBtnPress");
    var page = clientAPI.evaluateTargetPathForAPI('#Page:Unload_Inspection_Add_Finding');

    page.setActionBarItemVisible(1, false);
    return clientAPI.executeAction("/MDK01/Actions/Unload_Inspection/FindingRequiredFields.action").then(()=>{
        page.setActionBarItemVisible(1, true);
        return Promise.resolve();
    })                
}