/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyRazonSocial(clientAPI) {

    return clientAPI.actionResults.Get_Import_Inspection.data._array[0].razonSocial;

}