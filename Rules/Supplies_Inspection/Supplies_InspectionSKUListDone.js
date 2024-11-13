/**
 * Supplies_InspectionSKUListDone
 * @param {IClientAPI} clientAPI
 */
export default function Supplies_InspectionSKUListDone(clientAPI) {

    console.log("MDK01 Supplies_InspectionSKUListDone");
    let selected = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_SKUSelection').controls[0]._sections[0].getSelectedItems();
    var huBinding = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Add_HU').binding;

    if (selected === undefined || selected.length === 0) {
        console.log("MDK01 Supplies_InspectionSKUListDone error");
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('SKUMandatory')}`
            }
        });
    } else {
        var page = clientAPI.evaluateTargetPathForAPI('#Page:Supplies_Inspection_SKUSelection');
        page.setActionBarItemVisible('CompleteBtn', false);
        clientAPI.setActionBinding(huBinding);
        return clientAPI.executeAction("/MDK01/Actions/Supplies_Inspection/NavToHUInspectionDetail.action")
            .then(() => {
                page.setActionBarItemVisible('CompleteBtn', true);
                return Promise.resolve();
            });
    }
}
