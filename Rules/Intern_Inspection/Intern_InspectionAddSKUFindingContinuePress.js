/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Intern_InspectionAddSKUFindingContinuePress(clientAPI) {

    console.log("MDK01 Intern_InspectionAddSKUFindingContinuePress");

    clientAPI._control.setEnabled(false);
    return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/SKUFindingRequiredFields.action").then(()=>{
        return clientAPI._control.setEnabled(true);
    })
    .error((e)=>{
        return clientAPI._control.setEnabled(true);
    })
    .catch((e)=>{
        return clientAPI._control.setEnabled(true);
    });                   
}