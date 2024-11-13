/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsHUListIcon(clientAPI) {

    if (clientAPI.getPageProxy().binding._HandlingUnitAudit !== undefined) {
        let huAudits = clientAPI.getPageProxy().binding._HandlingUnitAudit;
        for (let i=0; i < huAudits.length; i++){
            if (huAudits[i].handlingUnitId === clientAPI.binding.handlingUnit) {
                return 'sap-icon://complete';
            }
        }
    }
    return '';
}