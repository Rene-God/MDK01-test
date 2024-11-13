/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreatePropertyCriticidad(clientAPI) {

    let selectedValue = clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:PrioritySeg/#Value');

 
    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "9";
    }


    return selectedValue[0].ReturnValue;



}