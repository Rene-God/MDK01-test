/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Check_Import_Finding_Criticality(clientAPI) {

    let listPickerValue = clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:FindingLstPkr').getValue()


    if (listPickerValue && listPickerValue.length > 0) {
        clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:PrioritySeg').setValue("0");
        clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:PrioritySeg').setVisible(true);
    } else {

        clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:PrioritySeg').setValue("9");
        clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:PrioritySeg').setVisible(false);
    }
}
