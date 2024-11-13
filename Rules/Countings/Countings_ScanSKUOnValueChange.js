import addSKU from './Countings_AddSKU';
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Countings_ScanSKUOnValueChange(clientAPI) {
    //let sku = clientAPI.actionResults.BarcodeScanner.data;
    var inputMode = clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[1].getControls()[0].getValue()[0].ReturnValue;
    if (inputMode === "1") {
        let sku = clientAPI._context.clientAPIProps.newControlValue;
        return addSKU(clientAPI,sku);
    }
}

