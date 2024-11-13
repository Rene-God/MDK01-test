import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_NavBackToHUList(clientAPI) {
    console.log("MDK01 Countings_NavBackToHUList");
    //var tu = JSON.parse(clientAPI.actionResults.CountingsHeaderUpdate.data);
    return clientAPI.read('/MDK01/Services/API05.service', `TU_AUDIT(${clientAPI.binding.guidTu})`, [], '$expand=_HandlingUnitAudit').then((result)=>{
        let tu = result._array[0];
        libCom.setStateVariable(clientAPI,'CountingsSupplier',tu.razonSocial);
        libCom.setStateVariable(clientAPI,'CountingsDocument',tu.inboundDelivery);        
        clientAPI.setActionBinding(tu);
        clientAPI.evaluateTargetPathForAPI('#Page:HU_Selection_List').getControl('SectionedTable0').getSections()[0].redraw();
        //return clientAPI.executeAction("/MDK01/Actions/CloseModalPage_Complete.action");  
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/Countings/Countings_CloseAndNavToCountingsList.action",
            "Properties": {
                "NavigateBackToPage": "HU_Selection_List"
            }                
        });            
    })


}