/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyCita(clientAPI) {

    return clientAPI.actionResults.Get_Import_Inspection.data._array[0].cita;

}