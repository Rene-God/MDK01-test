/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_CreateCountedSKUs(clientAPI) {
    console.log("MDK01 Countings_CreateCountedSKUs");
    var skuLst = clientAPI.evaluateTargetPathForAPI('#Page:CountingsHUDetail').getControl('SectionedTable0').getSections()[2]._context.element._props.definition._data.ObjectCells;
    var actionArray = [];
    for (let i = 0; i < skuLst.length; i++ ) {
        actionArray.push(clientAPI.executeAction({
            "Name": "/MDK01/Actions/Countings/CountingsSKUAuditCreate.action",
            "Properties": {
                "Properties": {
                    "stockKeepingUnitId": `${skuLst[i].ObjectCell.sku}`,
                    "quantityCounted": `${skuLst[i].ObjectCell.count}`
                }
            }          
        }))
    }
    
    return Promise.all(actionArray);
}