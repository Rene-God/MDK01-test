/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function AuditoriaProgramada_Validation(clientAPI) {
    let spontaneous = clientAPI.actionResults.Get_Intern_Inspection?.data;

    if (spontaneous !== undefined) {
        return false;
    }
    return true;
}