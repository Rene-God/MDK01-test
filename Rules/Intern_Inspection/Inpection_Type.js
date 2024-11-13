/**
 * Regresa el texto correspondiente dependiendo si auditoriaProgramada es true or false
 * @param {IClientAPI} clientAPI
 */
export default function Inpection_Type(clientAPI) {
    var auditoriaProgramada = clientAPI.binding.auditoriaProgramada;
    
    if (auditoriaProgramada === true) {
      return clientAPI.localizeText('Scheduled');
    } else {
      return clientAPI.localizeText('Spontaneous');
    }
}