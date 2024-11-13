/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Countings_CountSKUFocus(clientAPI) {
    console.log("MDK01 Countings_CountSKUFocus");
/*     if (clientAPI.getControl('sPropSKU').getValue() !== '') {
        clientAPI.getControl('sPropSKU').setValue('');
        clientAPI.getControl('sPropSKU').redraw();
        return Promise.resolve();
    } */
    clientAPI.getControl('sPropSKU').setFocus('AlwaysHide');
    return Promise.resolve();
}