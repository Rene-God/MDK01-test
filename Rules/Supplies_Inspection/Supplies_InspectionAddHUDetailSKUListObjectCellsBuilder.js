
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Supplies_InspectionAddHUDetailSKUListObjectCellsBuilder(clientAPI) {

    var page = clientAPI.getPageDefinition("/MDK01/Pages/Supplies_Inspections/Supplies_Inspection_Add_HU_Detail.page");
    var skuLst = clientAPI.getPageProxy().getControls()[0].getSections()[0].getSelectedItems();
    var objectCells = [];
    for (let i = 0; i < skuLst.length; i++ ) {
        objectCells.push({
            ObjectCell: {
                "Title": "SKU: " + skuLst[i].binding.sku,
                "Description": skuLst[i].binding.skuDesc,
                "DisplayDescriptionInMobile": true,
                "AccessoryType": "None",
                "Icons": [
                    "sap-icon://machine"
                ],
                "PreserveIconStackSpacing": false            
            }
        });
    }
    page.Controls[0].Sections[2].ObjectCells = objectCells;
    return Promise.resolve(page);
}