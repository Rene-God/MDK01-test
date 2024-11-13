
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Intern_FindingCreatePropertyHallazgo(clientAPI) {


    let selectedValue = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Add_Finding/#Control:FindingLstPkrIntern/#Value');

    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "";
    }
    
    return selectedValue[0].ReturnValue;

}