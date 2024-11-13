import ODataDate from '../Common/Date/ODataDate';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_CreatePropertyFecha(clientAPI) {

    let fecha = new ODataDate(clientAPI.actionResults.Get_Countings.data._array[0].horaCita.toString().substring(0, 8), clientAPI.actionResults.Get_Countingsn.data._array[0].horaCita.toString().substring(8));
    return fecha.date();
}