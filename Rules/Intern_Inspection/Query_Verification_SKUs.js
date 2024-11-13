/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Query_Verification_SKUs(clientAPI) {

    let auditoriaProgramada = clientAPI.binding.auditoriaProgramada
    let hu = clientAPI.binding.handlingUnitId
    let area = clientAPI.binding.areaInspeccion

    if (auditoriaProgramada == false) {
        return `$filter=hu eq '${hu}' and area eq '${area}'&$expand=_toAuditoriaInternaItem`;
    } else {
        return `$filter=hu eq '${hu}'`;
    }

}
