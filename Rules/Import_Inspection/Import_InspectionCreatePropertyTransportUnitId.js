/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyTransportUnitId(clientAPI) {

    return clientAPI.actionResults.Get_Import_Inspection.data._array[0].transportUnit;
/*     try {
        let response = JSON.parse(data);    
        console.log("MDK01 TU_Inspection_FindTU data parsed: ");
        console.log(data);
    } catch (e) {
        console.log("MDK01 TU_Inspection_FindTU exception")
    } */

}