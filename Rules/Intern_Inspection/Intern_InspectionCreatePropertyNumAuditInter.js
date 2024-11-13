/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyNumAuditInter(clientAPI) {
    let spontaneous = clientAPI.actionResults.Get_Intern_Inspection?.data?._array[0]?.NumAuditInterna;
    let scheduledInspection = clientAPI.actionResults.Get_Intern_Scheduled_Inspection?.data?._array[0]?.numeroauditoriainterna;

    if (spontaneous !== undefined) {
        return spontaneous;
    } else {
        return scheduledInspection;
    }

}