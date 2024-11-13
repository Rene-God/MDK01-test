
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Import_InspectionAddHUContinueBtnPress(clientAPI) {
    

    console.log("MDK01 Import_InspectionAddHUContinueBtnPress");

    if (clientAPI.binding._HandlingUnitAudit !== undefined && !Array.isArray(clientAPI.binding._HandlingUnitAudit)) {
        return clientAPI.executeAction("/MDK01/Actions/Import_Inspection/NavToHUInspectionDetail.action");
        //return clientAPI.executeAction("/MDK01/Actions/Import_Inspection/NavToHUInspectionDetail.action");
    } else {
        clientAPI._control.setEnabled(false);
        return clientAPI.executeAction("/MDK01/Actions/Import_Inspection/HUFindingRequiredFields.action").then(()=>{
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