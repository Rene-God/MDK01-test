/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_SetBinding(clientAPI) {


    clientAPI.setActionBinding(clientAPI.actionResults.Get_HUs.data._array[0])

    return clientAPI.executeAction("/MDK01/Actions/Countings/NavToHUsSelectionList.action");


}