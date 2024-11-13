/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HU_FindingCreatePropertyFinding(clientAPI) {
    
    let selectedValue = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Add_HU/#Control:FindingLstPkr/#Value');

    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "";
    }
    
    return selectedValue[0].ReturnValue;
}