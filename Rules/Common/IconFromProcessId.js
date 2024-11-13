
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function IconFromProcessId(clientAPI) {

    if (clientAPI.binding.processId !== undefined) {
        let icon;
        switch (clientAPI.binding.processId) {
            case 0: 
                icon = "sap-icon://suitcase";
                break;
            case 1:
                icon = "sap-icon://physical-activity";
                break;                
            case 2:
                icon = "sap-icon://fallback";
                break;                
            case 3:
                icon = "sap-icon://employee-lookup";
                break;                
            case 4:
                icon = "sap-icon://add-product";
                break;                
            case 5:
                icon = "sap-icon://bar-code";
                break;                
            case 6:
                icon = "sap-icon://inspection";
                break;                
            case 7:
                icon = "sap-icon://sap-box";
                break;                
        }
        return icon;
        
    } else {
        return "";
    }

}