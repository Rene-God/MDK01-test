/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Check_TU_Finding_Criticality(clientAPI) {

    let listPickerValue = clientAPI.evaluateTargetPath('#Page:TU_Inspection_Add_HU_Finding/#Control:FindingLstPkr').getValue()


    if (listPickerValue && listPickerValue.length > 0) {
        clientAPI.evaluateTargetPath('#Page:TU_Inspection_Add_HU_Finding/#Control:PrioritySeg').setValue("0");
        clientAPI.evaluateTargetPath('#Page:TU_Inspection_Add_HU_Finding/#Control:PrioritySeg').setVisible(true);
    } else {

        clientAPI.evaluateTargetPath('#Page:TU_Inspection_Add_HU_Finding/#Control:PrioritySeg').setValue("9");
        clientAPI.evaluateTargetPath('#Page:TU_Inspection_Add_HU_Finding/#Control:PrioritySeg').setVisible(false);
    }
}
