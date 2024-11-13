/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SKU_FindingCreatePropertyFinding(clientAPI) {
    
    let selectedValue = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Add_SKU_Finding/#Control:Intern_SKU_FindingLstPkr/#Value');

    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "";
    }
    
    return selectedValue[0].ReturnValue;
}