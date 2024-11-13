/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Countings_CountingsHUDetailOnBackPressed(clientAPI,sku,skuLst) {
    console.log("MDK01 Countings_CountingsHUDetailOnBackPressed");
    clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[2]._context.element._props.definition._data.ObjectCells = [];
}