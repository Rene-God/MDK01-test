import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_AuditResults_Validation(clientAPI) {

    console.log("MDK01 Get_AuditResults_Validation");
    var HUinp = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FFAIHU');
    var SKUinp = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FFAISKU');
   

    HUinp.clearValidation();
    SKUinp.clearValidation();

    let val = !( ( HUinp.getValue() === "" || HUinp.getValue() === undefined) || ( SKUinp.getValue() === "" || SKUinp.getValue() === undefined) );
    if (val) {
        return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/Get_InternAudit.action");
    } else {
        HUinp.setValidationProperty('ValidationMessage', clientAPI.localizeText('fillOneFilterValidation'));
        HUinp.setValidationProperty('SeparatorIsHidden', false);
        HUinp.setValidationProperty('ValidationViewIsHidden', false);
        HUinp.setValidationProperty('ValidationMessageColor', "ff0000");
        HUinp.setValidationProperty('ValidationViewBackgroundColor', "fffa00");

        SKUinp.setValidationProperty('ValidationMessage', clientAPI.localizeText('fillOneFilterValidation'));
        SKUinp.setValidationProperty('SeparatorIsHidden', false);
        SKUinp.setValidationProperty('ValidationViewIsHidden', false);
        SKUinp.setValidationProperty('ValidationMessageColor', "ff0000");
        SKUinp.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
        return Promise.resolve();  
    }
}