/**
 * @param {IClientAPI} clientAPI
 */
export default function Check_Hu_InspectionCompleted(clientAPI) {
    let handlingUnit = clientAPI.binding.handlingUnit;  

    let pageProxy = clientAPI.evaluateTargetPathForAPI('#Page:Supplies_Inspection_Add_HU');
    let pageBinding = pageProxy.getBindingObject();  
    let completedAudits = pageBinding._HandlingUnitAudit; 

    if (completedAudits && completedAudits.length > 0) {
        for (let i = 0; i < completedAudits.length; i++) {
            if (completedAudits[i].handlingUnitId === handlingUnit) {
                return 'sap-icon://accept';  
            }
        }
    }
    return '';
}
