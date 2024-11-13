/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Candy_InspectionAddHUFindingContinuePress(clientAPI) {

    console.log("MDK01 Candy_InspectionAddHUFindingContinuePress");

    clientAPI._control.setEnabled(false);
    return clientAPI.executeAction("/MDK01/Actions/Candy_Inspection/HUFindingRequiredFields.action").then(()=>{
        return clientAPI._control.setEnabled(true);
    })
    .error((e)=>{
        return clientAPI._control.setEnabled(true);
    })
    .catch((e)=>{
        return clientAPI._control.setEnabled(true);
    });                   
}