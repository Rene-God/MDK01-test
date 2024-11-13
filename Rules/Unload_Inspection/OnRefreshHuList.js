/**
 * @param {IClientAPI} clientAPI
 */
export default function OnRefreshHuList(clientAPI) {
    console.log("MDK01 REFRESH HU");

    return clientAPI.read('/MDK01/Services/API05.service', `TU_AUDIT(${clientAPI.binding.guidTu})`, [], '$expand=_HandlingUnitAudit')
    .then((result) => {
        let tu = result.getItem(0);  
        let pageProxy = clientAPI.getPageProxy(); 
        
        pageProxy.setActionBinding(tu);  

        return clientAPI.executeAction({
                   "Name": "/MDK01/Actions/GenericNavigation.action",
            		"Properties": {
            			"PageToOpen": "/MDK01/Pages/Unload_Inspections/Unload_Inspection_Add_HU_Finding.page",
            			"ModalPage": true
            		}          
                });
    })
    .catch(error => {
        console.error(error);
    });
}
