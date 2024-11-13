/**
 * Regresa el texto correspondiente dependiendo si auditoriaProgramada es true or false
 * @param {IClientAPI} clientAPI
 */
export default function Intern_InspectionStatusFromDecision(clientAPI) {
  console.log('MDK01 Intern_InspectionStatusFromDecision');
  if (clientAPI.binding.decisionId === 0) {
    return '1F';
  } else {
    return '2F';
  }
}