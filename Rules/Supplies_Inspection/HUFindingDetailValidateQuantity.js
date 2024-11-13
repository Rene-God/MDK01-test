
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingDetailValidateQuantity(clientAPI) {

    console.log("MDK01 HUFindingDetailValidateQuantity");
    var cantGCField = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Add_HU_Detail/#Control:PiecesGC');
    cantGCField.clearValidation();
    var tu = clientAPI.binding;
    var cantGC = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Add_HU_Detail/#Control:PiecesGC/#Value');
    var cantHu = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Add_HU/#Control:HULstPkr/#Value')[0].BindingObject.HUQuantity;
    if ( cantGC === undefined || cantGC === "" ) {
        cantGC = 0;
    } else {
        cantGC = parseInt(cantGC);
    }    
    var cantBC = 0;
    if (cantHu >= cantGC) {        
        cantBC = parseInt(cantHu - cantGC);
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/Supplies_Inspection/HUFindingCreate.action",
            "Properties" : {
                "Properties" : {
                    "cantPiezasBuenas": `${cantGC}`,
                    "cantPiezasMalas": `${cantBC}`
                }
            }
        });
    } else {
        cantGCField.setValidationProperty('ValidationMessage', clientAPI.localizeText('SKUGCBiggerThanHU'), [cantGC]);
        cantGCField.setValidationProperty('SeparatorIsHidden', false);
        cantGCField.setValidationProperty('ValidationViewIsHidden', false);
        cantGCField.setValidationProperty('ValidationMessageColor', "ff0000");
        cantGCField.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
        return Promise.resolve();  
    }
}