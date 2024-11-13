/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreateCompleteButtonPress(clientAPI) {

    console.log("MDK01 FindingCreateCompleteButtonPress");
    var page = clientAPI.evaluateTargetPathForAPI('#Page:FindingCreate');

    page.setActionBarItemVisible(1, false);
    return clientAPI.executeAction("/MDK01/Actions/Finding/FindingRequiredFields.action").then(()=>{
        page.setActionBarItemVisible(1, true);
        return Promise.resolve();
    })                
}