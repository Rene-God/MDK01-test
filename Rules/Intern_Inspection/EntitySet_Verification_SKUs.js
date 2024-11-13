/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function EntitySet_Verification_SKUs(clientAPI) {

    let auditoriaProgramada = clientAPI.binding.auditoriaProgramada 
 

    if (auditoriaProgramada == false) {
        return "auditoriaInterna";
    } else {
        return "auditoriaInternaItemResult";
    }

}
