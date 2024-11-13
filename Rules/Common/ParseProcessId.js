
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ParseProcessId(clientAPI) {

    if (clientAPI.binding.processId !== undefined) {
        let tag;
        switch (clientAPI.binding.processId) {
            case 0: 
                tag = clientAPI.localizeText('processId0');
                break;
            case 1:
                tag = clientAPI.localizeText('processId1');
                break;                
            case 2:
                tag = clientAPI.localizeText('processId2');
                break;                
            case 3:
                tag = clientAPI.localizeText('processId3');
                break;                
            case 4:
                tag = clientAPI.localizeText('processId4');
                break;                
            case 5:
                tag = clientAPI.localizeText('processId5');
                break;                
            case 6:
                tag = clientAPI.localizeText('processId6');
                break;                
            case 7:
                tag = clientAPI.localizeText('processId7');
                break;                
        }
        return tag;
        
    } else {
        return "";
    }

}