import ODataDate from '../Common/Date/ODataDate';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyHoraArribo(clientAPI) {

    //return clientAPI.actionResults.Get_Tu_Inspection.data._array[0].horaArribo.toString();
    let date = new ODataDate(clientAPI.actionResults.Get_Candy_Inspection.data._array[0].horaArribo.toString().substring(0, 8), clientAPI.actionResults.Get_Candy_Inspection.data._array[0].horaArribo.toString().substring(8));
    return date.toLocalTimeString();

}