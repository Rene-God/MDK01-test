/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyTransportUnitId(clientAPI) {

    return clientAPI.actionResults.Get_Unload_TU_Inspection.data._array[0].transportUnit;


}