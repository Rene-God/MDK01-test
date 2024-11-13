/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreateGetSKUListTarget(clientAPI) {

    return clientAPI.binding._HandlingUnitAudit["@odata.readLink"] + "/_StockKeepingUnitAudit";
}