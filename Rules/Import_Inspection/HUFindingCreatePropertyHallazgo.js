/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreatePropertyHallazgo(clientAPI) {

    let selectedValue = clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:FindingLstPkr/#Value');

    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "";
    }
    
    return selectedValue[0].ReturnValue;


}