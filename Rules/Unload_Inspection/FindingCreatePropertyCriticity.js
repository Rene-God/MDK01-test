
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyCriticity(clientAPI) {

    //console.log("MDK01 FindingCreatePropertyCriticity: " + clientAPI.evaluateTargetPath('#Page:FindingCreate/#Control:CriticitySeg/#Value')[0].ReturnValue);
    return clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_Finding/#Control:Unload_Criticality_ListPicker/#Value')[0].ReturnValue;

}