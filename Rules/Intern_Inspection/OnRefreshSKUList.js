/**
 * @param {IClientAPI} clientAPI
 */
export default function OnRefreshSKUList(clientAPI) {
    console.log("MDK01 REFRESH HU");

    return clientAPI.read('/MDK01/Services/API05.service', `HUItr(${clientAPI.binding.guidHu})`, [], '$expand=_StockKeepingUnitItr')
    .then((result) => {
        let hu = result.getItem(0);  
        let pageProxy = clientAPI.getPageProxy(); 
        
        pageProxy.setActionBinding(hu);  

        return clientAPI.executeAction({
           "Name": "/MDK01/Actions/GenericNavigation.action",
				"Properties": {
					"PageToOpen": "/MDK01/Pages/Intern_Inspections/Intern_Inspection_Add_SKU_Finding.page",
					"ModalPage": true
				}
        });
    })
    .catch(error => {
        console.error(error);
    });
}