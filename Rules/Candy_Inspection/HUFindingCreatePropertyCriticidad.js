/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreatePropertyCriticidad(clientAPI) {

       
    let selectedValue = clientAPI.evaluateTargetPath('#Page:Candy_Inspection_Add_HU_Finding/#Control:Candy_PrioritySeg/#Value');

 
    if (!selectedValue || selectedValue.length === 0 || selectedValue[0].ReturnValue === undefined) {
        return "9";
    }


    return selectedValue[0].ReturnValue;


}