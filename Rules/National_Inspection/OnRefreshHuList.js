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

        return clientAPI.executeAction("/MDK01/Actions/National_Inspection/NavToHUInspectionCreate.action");
    })
    .catch(error => {
        console.error(error);
    });
}
