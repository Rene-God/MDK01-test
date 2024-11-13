/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CheckFindingForSKUSelection(clientAPI) {

    let listPickerValue = clientAPI.evaluateTargetPath('#Page:National_Inspection_Add_HU/#Control:FindingLstPkr/#Value');

    if (listPickerValue && listPickerValue.length > 0) {
        return clientAPI.getPageProxy().executeAction("/MDK01/Actions/National_Inspection/National_InspectionNavToSKUSelection.action");
    } else {
       //return  clientAPI.getPageProxy().executeAction("/MDK01/Rules/National_Inspection/National_InspectionSKUListDone.js")
       return clientAPI.getPageProxy().executeAction("/MDK01/Actions/National_Inspection/HUFindingCreate.action");
    }
}
