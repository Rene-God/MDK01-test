/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CheckFindingForSKUSelection(clientAPI) {

    let listPickerValue = clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:FindingLstPkr/#Value');

    if (listPickerValue && listPickerValue.length > 0) {
        return clientAPI.getPageProxy().executeAction("/MDK01/Actions/Import_Inspection/Import_InspectionNavToSKUSelection.action");
    } else {
       //return  clientAPI.getPageProxy().executeAction("/MDK01/Rules/Import_Inspection/Import_InspectionSKUListDone.js")
       return clientAPI.getPageProxy().executeAction("/MDK01/Actions/Import_Inspection/HUFindingCreate.action");
    }
}
