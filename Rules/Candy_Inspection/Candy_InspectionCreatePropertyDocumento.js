/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyDocument(clientAPI) {

    return clientAPI.actionResults.Get_Candy_Inspection.data._array[0].documento;

}