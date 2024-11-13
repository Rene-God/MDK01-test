/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Supplies_InspectionAddHUFindingContinuePress(clientAPI) {

    console.log("MDK01 Supplies_InspectionAddHUFindingContinuePress");

    clientAPI._control.setEnabled(false);
    return clientAPI.executeAction("/MDK01/Actions/Supplies_Inspection/HUFindingDetailRequiredFields.action").then(()=>{
        return clientAPI._control.setEnabled(true);
    })
    .error((e)=>{
        return clientAPI._control.setEnabled(true);
    })
    .catch((e)=>{
        return clientAPI._control.setEnabled(true);
    });                   
}