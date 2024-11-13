/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CheckSKUListVisibility(clientAPI) {

    let listPickerValue = clientAPI.evaluateTargetPath('#Page:National_Inspection_Add_HU/#Control:FindingLstPkr/#Value');

    if (listPickerValue && listPickerValue.length === 0) {
        return false;

    } else {
        return true;
    }

}
