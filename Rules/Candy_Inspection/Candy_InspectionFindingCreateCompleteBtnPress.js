/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Candy_InspectionFindingCreateCompleteBtnPress(clientAPI) {

    console.log("MDK01 Candy_InspectionFindingCreateCompleteBtnPress");
    var page = clientAPI.evaluateTargetPathForAPI('#Page:Candy_Inspection_Add_Finding');

    page.setActionBarItemVisible(1, false);
    return clientAPI.executeAction("/MDK01/Actions/Candy_Inspection/FindingRequiredFields.action").then(()=>{
        page.setActionBarItemVisible(1, true);
        return Promise.resolve();
    })                
}