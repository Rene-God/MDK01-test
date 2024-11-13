/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Check_Finding_Criticality(clientAPI) {

    let listPickerValue = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Add_SKU_Finding/#Control:Intern_SKU_FindingLstPkr').getValue()


    if (listPickerValue && listPickerValue.length > 0) {
        clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Add_SKU_Finding/#Control:Intern_PrioritySeg').setValue("0");
        clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Add_SKU_Finding/#Control:Intern_PrioritySeg').setVisible(true);
    } else {

        clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Add_SKU_Finding/#Control:Intern_PrioritySeg').setValue("9");
        clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Add_SKU_Finding/#Control:Intern_PrioritySeg').setVisible(false);
    }
}
