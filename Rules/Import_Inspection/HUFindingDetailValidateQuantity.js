
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingDetailValidateQuantity(clientAPI) {

    console.log("MDK01 HUFindingDetailValidateQuantity");
    var cantGCField = clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU_Detail/#Control:PiecesGC');
    cantGCField.clearValidation();
    var tu = clientAPI.binding;
    var cantGC = clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU_Detail/#Control:PiecesGC/#Value');
    if (cantGC === undefined || cantGC === "") {
        cantGC = 0;
    } else {
        cantGC = parseInt(cantGC);
    }
    let listPickerValue = clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:FindingLstPkr').getValue()
    if (listPickerValue && listPickerValue.length > 0) {

        if (tu._HandlingUnitAudit.quantity >= cantGC) {
            return clientAPI.executeAction("/MDK01/Actions/Import_Inspection/NavToHUInspectionSeals.action");
        } else {
            cantGCField.setValidationProperty('ValidationMessage', clientAPI.localizeText('SKUGCBiggerThanHU'), [cantGC]);
            cantGCField.setValidationProperty('SeparatorIsHidden', false);
            cantGCField.setValidationProperty('ValidationViewIsHidden', false);
            cantGCField.setValidationProperty('ValidationMessageColor', "ff0000");
            cantGCField.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
            return Promise.resolve();
        }
    } else {

        if (tu._HandlingUnitAudit.quantity == cantGC) {
            return clientAPI.executeAction("/MDK01/Actions/Import_Inspection/NavToHUInspectionSeals.action");
        } else if (tu._HandlingUnitAudit.quantity > cantGC) {
            cantGCField.setValidationProperty('ValidationMessage', clientAPI.localizeText('SKUGCLowerThanHU'), [cantGC]);
            cantGCField.setValidationProperty('SeparatorIsHidden', false);
            cantGCField.setValidationProperty('ValidationViewIsHidden', false);
            cantGCField.setValidationProperty('ValidationMessageColor', "ff0000");
            cantGCField.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
            return Promise.resolve();

        } else if (tu._HandlingUnitAudit.quantity < cantGC) {
            cantGCField.setValidationProperty('ValidationMessage', clientAPI.localizeText('SKUGCBiggerThanHU'), [cantGC]);
            cantGCField.setValidationProperty('SeparatorIsHidden', false);
            cantGCField.setValidationProperty('ValidationViewIsHidden', false);
            cantGCField.setValidationProperty('ValidationMessageColor', "ff0000");
            cantGCField.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
            return Promise.resolve();

        }

    }

}