/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */

export default function Countings_Get_HUFindings(clientAPI) {

    var query = "$expand=_HandlingUnitAudit";
    var tu = clientAPI.getPageProxy().getActionBinding()['@odata.readLink']

    return clientAPI.read('/MDK01/Services/API05.service', tu, [], query).then((result) => {

        clientAPI.getPageProxy().setActionBinding(result.getItem(0))
        return clientAPI.executeAction("/MDK01/Rules/Countings/NavToCountingDetail.js");
    })

}