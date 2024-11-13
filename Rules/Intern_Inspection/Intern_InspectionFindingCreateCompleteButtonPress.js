/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Intern_InspectionFindingCreateCompleteButtonPress(clientAPI) {

    console.log("MDK01 Intern_InspectionFindingCreateCompleteButtonPress");
    var page = clientAPI.evaluateTargetPathForAPI('#Page:Intern_Inspection_Add_Finding');

    page.setActionBarItemVisible(1, false);
    return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/FindingRequiredFields_Intern.action").then(()=>{
        page.setActionBarItemVisible(1, true);
        return Promise.resolve();
    })                
}