/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsHUDetailContinueBtnPress(clientAPI) {

    console.log("MDK01 CountingsHUDetailContinueBtnPress");
    //var skuLst = clientAPI.evaluateTargetPathForAPI('#Page:CountingsHUDetail').getControl('SectionedTable0').getSections()[2]._context.element.binding._array;
    var skuLst = clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[2]._context.element._props.definition._data.ObjectCells;
    var huAudit =  clientAPI.binding;
    huAudit.quantityCounted = 0;
    huAudit.quantityMissing = 0;
    huAudit.quantityLeftOver = 0;
    if (skuLst !== undefined && skuLst.length > 0 ) {
        for (let i=0; i < skuLst.length; i++){
            huAudit.quantityCounted = huAudit.quantityCounted + skuLst[i].ObjectCell.count;
        }
        if ( huAudit.quantityCounted < huAudit.quantity ) {
            huAudit.quantityMissing = huAudit.quantity - huAudit.quantityCounted;
        } else {
            huAudit.quantityLeftOver = huAudit.quantityCounted - huAudit.quantity;
        }
        clientAPI.getPageProxy().setActionBinding(huAudit);
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericNavigation.action",
            "Properties": {
                "PageToOpen": "/MDK01/Pages/Countings/Countings_HU_Resume.page",
                "BackStackVisible": true
            }
        });        
    } 


}