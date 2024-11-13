import ODataDate from '../Common/Date/ODataDate';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_CreatePropertyHoraArribo(clientAPI) {

    let date = new ODataDate(clientAPI.actionResults.Get_Countings.data._array[0].horaArribo.toString().substring(0, 8), clientAPI.actionResults.Get_Countings.data._array[0].horaArribo.toString().substring(8));
    return date.toLocalTimeString();    

}