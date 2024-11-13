/**.
 * @param {IClientAPI} clientAPI
 */
export default function HU_FindingCreatePropertyCriticity(clientAPI) {

   
    let selectedValue = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Add_HU/#Control:PrioritySeg/#Value');

 
    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "9";
    }


    return selectedValue[0].ReturnValue;
}
