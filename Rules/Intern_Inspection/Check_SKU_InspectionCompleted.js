/**
 * @param {IClientAPI} clientAPI
 */
export default function Check_SKU_InspectionCompleted(clientAPI) {
    let sku = clientAPI.binding.sku;  

    let pageProxy = clientAPI.evaluateTargetPathForAPI('#Page:Intern_Inspection_Add_SKU_Finding');
    let pageBinding = pageProxy.getBindingObject();  
    let completedAudits = pageBinding._StockKeepingUnitItr; 

    if (completedAudits && completedAudits.length > 0) {
        for (let i = 0; i < completedAudits.length; i++) {
            if (completedAudits[i].stockKeepingUnitId === sku) {
                return 'sap-icon://accept';  
            }
        }
    }
    return '';
}
