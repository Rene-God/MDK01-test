import ODataDate from '../Common/Date/ODataDate';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Import_InspectionCreatePropertyFecha(clientAPI) {

    let fecha = new ODataDate(clientAPI.actionResults.Get_Import_Inspection.data._array[0].horaCita.toString().substring(0, 8), clientAPI.actionResults.Get_Import_Inspection.data._array[0].horaCita.toString().substring(8));
    return fecha.date();
}