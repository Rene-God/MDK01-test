
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_InspectionAddHUContinueBtnPress(clientAPI) {
    

    console.log("MDK01 National_InspectionAddHUContinueBtnPress");

    if (clientAPI.binding._HandlingUnitAudit !== undefined && !Array.isArray(clientAPI.binding._HandlingUnitAudit)) {
        return clientAPI.executeAction("/MDK01/Actions/National_Inspection/NavToHUInspectionDetail.action");
        //return clientAPI.executeAction("/MDK01/Actions/National_Inspection/National_InspectionNavToSKUSelection.action");
    } else {
        clientAPI._control.setEnabled(false);
        return clientAPI.executeAction("/MDK01/Actions/National_Inspection/HUFindingRequiredFields.action").then(()=>{
            return clientAPI._control.setEnabled(true);
        })
        .error((e)=>{
            return clientAPI._control.setEnabled(true);
        })
        .catch((e)=>{
            return clientAPI._control.setEnabled(true);
        });         
    }
}