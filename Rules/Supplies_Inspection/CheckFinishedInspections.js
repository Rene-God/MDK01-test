/**
 * @param {IClientAPI} clientAPI
 */
export default function CheckFinishedInspections(clientAPI) {
    let selectedItems = clientAPI.getValue();
    let selectedItemValue = selectedItems[0].ReturnValue;

    if (selectedItems.length > 0) {
        let pageProxy = clientAPI.evaluateTargetPathForAPI('#Page:Supplies_Inspection_Add_HU');
        let pageBinding = pageProxy.getBindingObject();
        let completedAudits = pageBinding._HandlingUnitAudit;
        let listPicker = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Add_HU/#Control:HULstPkr');

        listPicker.clearValidation();

        for (let i = 0; i < completedAudits.length; i++) {
            if (completedAudits[i].handlingUnitId === selectedItemValue) {
                listPicker.setValidationProperty('ValidationMessage', clientAPI.localizeText('SelectAnotherHu'));
                listPicker.setValidationProperty('SeparatorIsHidden', false);
                listPicker.setValidationProperty('ValidationViewIsHidden', false);
                listPicker.setValidationProperty('ValidationMessageColor', "ff0000");
                listPicker.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
                clientAPI.setValue("");
            }
        }
    }
}


