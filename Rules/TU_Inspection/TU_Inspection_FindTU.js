/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TU_Inspection_FindTU(clientAPI) {

    var data = clientAPI.actionResults.Get_Tu_Inspection.data._array[0];
    try {
        let response = JSON.parse(data);    
        //console.log("MDK01 TU_Inspection_FindTU data parsed: ");
        //console.log(data);
    } catch (e) {
        console.log("MDK01 TU_Inspection_FindTU exception")
    }

}