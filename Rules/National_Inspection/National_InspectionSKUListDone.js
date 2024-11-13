/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_InspectionSKUListDone(clientAPI) {
    console.log("MDK01 National_InspectionSKUListDone");
    
    let selected = clientAPI.getPageProxy().getControls()[0].getSections()[0].getSelectedItems();
    if (selected === undefined || selected.length === 0) {
        console.log("MDK01 National_InspectionSKUListDone error");
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('SKUMandatory')}`
            }
        })
    } else {
        var page = clientAPI.evaluateTargetPathForAPI('#Page:National_Inspection_SKUSelection');
        page.setActionBarItemVisible('CompleteBtn', false);
        return clientAPI.executeAction("/MDK01/Actions/National_Inspection/HUFindingCreate.action").then(() => {
            page.setActionBarItemVisible('CompleteBtn', true);
            return Promise.resolve();
        })
    }
}
