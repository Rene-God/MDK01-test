
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreatePropertyCriticity(clientAPI) {

       
    let selectedValue = clientAPI.evaluateTargetPath('#Page:TU_Inspection_Add_HU_Finding/#Control:PrioritySeg/#Value');

 
    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "9";
    }


    return selectedValue[0].ReturnValue;

}