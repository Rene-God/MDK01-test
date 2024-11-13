/**.
 * @param {IClientAPI} clientAPI
 */
export default function SKU_FindingCreatePropertyCriticity(clientAPI) {

   
    let selectedValue = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Add_SKU_Finding/#Control:Intern_PrioritySeg/#Value');

 
    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "9";
    }


    return selectedValue[0].ReturnValue;
}
