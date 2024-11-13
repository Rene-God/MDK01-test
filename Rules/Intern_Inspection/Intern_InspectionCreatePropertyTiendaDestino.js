/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyTiendaDestino(clientAPI) {
    let spontaneous = clientAPI.actionResults.Get_Intern_Inspection?.data?._array[0]?.tiendaDestino;
    let scheduledInspection = clientAPI.actionResults.Get_Intern_Scheduled_Inspection?.data?._array[0]?.tiendaDestino;

    if (spontaneous !== undefined) {
        return spontaneous;
    } else {
        return scheduledInspection;
    }

}