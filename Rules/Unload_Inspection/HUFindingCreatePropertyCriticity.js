
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreatePropertyCriticity(clientAPI) {

       
    let selectedValue = clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_HU_Finding/#Control:Unload_PrioritySeg/#Value');

 
    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "9";
    }


    return selectedValue[0].ReturnValue;



}