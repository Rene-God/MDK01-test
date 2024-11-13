/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_CreatePropertyRazonSocial(clientAPI) {

    return clientAPI.actionResults.Get_Countings.data._array[0].razonSocial;

}