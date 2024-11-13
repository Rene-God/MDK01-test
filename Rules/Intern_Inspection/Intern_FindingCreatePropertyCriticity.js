
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Intern_FindingCreatePropertyCriticity(clientAPI) {

    let selectedValue = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Add_Finding/#Control:CriticitySegIntern/#Value');

    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "9";
    }
    return selectedValue[0].ReturnValue;

}