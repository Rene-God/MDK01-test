/**
 * @param {IClientAPI} clientAPI
 */
export default function HUListPickerItemSelected(clientAPI) {
    let selectedItem = clientAPI.getValue()[0].ReturnValue; 
    let pageProxy = clientAPI.getPageProxy();
    let pageBinding = pageProxy.getBindingObject();  
    let completedAudits = pageBinding._HandlingUnitAudit; 

    if (completedAudits && completedAudits.length > 0) {
        for (let i = 0; i < completedAudits.length; i++) {
            if (completedAudits[i].handlingUnitId === selectedItem) {
                clientAPI.executeAction('/MDK01/Actions/SelectHuMessage.action');
                return;
            }
        }
    }
}
