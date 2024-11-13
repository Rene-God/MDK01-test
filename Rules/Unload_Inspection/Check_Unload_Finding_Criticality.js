/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Check_Unload_Finding_Criticality(clientAPI) {

    let listPickerValue = clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_HU_Finding/#Control:Unload_HU_FindingLstPkr').getValue()


    if (listPickerValue && listPickerValue.length > 0) {
        clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_HU_Finding/#Control:Unload_PrioritySeg').setValue("0");
        clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_HU_Finding/#Control:Unload_PrioritySeg').setVisible(true);
    } else {

        clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_HU_Finding/#Control:Unload_PrioritySeg').setValue("9");
        clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_HU_Finding/#Control:Unload_PrioritySeg').setVisible(false);
    }
}
