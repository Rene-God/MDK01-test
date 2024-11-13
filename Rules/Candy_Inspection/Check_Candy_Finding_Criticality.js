/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Check_Candy_Finding_Criticality(clientAPI) {

    let listPickerValue = clientAPI.evaluateTargetPath('#Page:Candy_Inspection_Add_HU_Finding/#Control:Candy_HU_FindingLstPkr').getValue()


    if (listPickerValue && listPickerValue.length > 0) {
        clientAPI.evaluateTargetPath('#Page:Candy_Inspection_Add_HU_Finding/#Control:Candy_PrioritySeg').setValue("0");
        clientAPI.evaluateTargetPath('#Page:Candy_Inspection_Add_HU_Finding/#Control:Candy_PrioritySeg').setVisible(true);
    } else {

        clientAPI.evaluateTargetPath('#Page:Candy_Inspection_Add_HU_Finding/#Control:Candy_PrioritySeg').setValue("9");
        clientAPI.evaluateTargetPath('#Page:Candy_Inspection_Add_HU_Finding/#Control:Candy_PrioritySeg').setVisible(false);
    }
}
