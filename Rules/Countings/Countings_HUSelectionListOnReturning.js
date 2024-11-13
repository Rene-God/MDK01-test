/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_HUSelectionListOnReturning(clientAPI) {

    console.log("MDK01 Countings_HUSelectionListOnReturning");
    return clientAPI.read('/MDK01/Services/API05.service', clientAPI.binding['@odata.readLink'], [], '$expand=_HandlingUnitAudit').then((result)=>{
        var tu = clientAPI.binding;
        tu._HandlingUnitAudit = result._array[0]._HandlingUnitAudit;
        //clientAPI.setActionBinding(result._array[0]);
        clientAPI.evaluateTargetPathForAPI('#Page:HU_Selection_List').getControl('SectionedTable0').getSections()[0].redraw();
        return Promise.resolve();
    })    
}