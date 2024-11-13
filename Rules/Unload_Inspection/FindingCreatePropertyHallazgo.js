
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyHallazgo(clientAPI) {

    console.log("MDK01 FindingCreatePropertyHallazgo: " + clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_Finding/#Control:Unload_Finding_ListPicker/#Value')[0].ReturnValue);
    return clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_Finding/#Control:Unload_Finding_ListPicker/#Value')[0].ReturnValue;

}