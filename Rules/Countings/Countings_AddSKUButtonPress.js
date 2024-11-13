import addSKU from './Countings_AddSKU';
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Countings_AddSKUButtonPress(clientAPI) {
    //let sku = clientAPI.actionResults.BarcodeScanner.data;
    let sku = clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[1].getControls()[1].getValue();
    return addSKU(clientAPI,sku);
}

