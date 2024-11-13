/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyRazonSocial(clientAPI) {

    return clientAPI.actionResults.Get_Unload_TU_Inspection.data._array[0].razonSocial;

}