/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Intern_InspectionUpdateStatusRule(clientAPI) {
    if (clientAPI.binding.auditoriaProgramada) {
        if (clientAPI.binding.decisionId === 0) {
            return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/Intern_InspectionUpdateStatusScheduledFinish.action");
        } else {
            return clientAPI.executeAction("/MDK01/Actions/UpdateCompleteMessagge.action");
        }
    } else {
        if (clientAPI.binding.decisionId === 0) {
            return clientAPI.executeAction("/MDK01/Actions/UpdateCompleteMessagge.action");
        } else {
            return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/Intern_InspectionUpdateStatusEspontaneousFinish.action");            
        }
    }
}