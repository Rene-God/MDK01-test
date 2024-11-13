/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_CreatePropertyDocumento(clientAPI) {

    return clientAPI.actionResults.Get_Countings.data._array[0].documento;

}