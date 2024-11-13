/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyProveedor(clientAPI) {
    let spontaneous = clientAPI.actionResults.Get_Intern_Inspection?.data?._array[0]?.proveedor;
    let scheduledInspection = clientAPI.actionResults.Get_Intern_Scheduled_Inspection?.data?._array[0]?.proveedor;

    if (spontaneous !== undefined) {
        return spontaneous;
    } else {
        return scheduledInspection;
    }

}