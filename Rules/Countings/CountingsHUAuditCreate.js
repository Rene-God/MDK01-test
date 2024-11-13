import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsHUAuditCreate(clientAPI) {

    console.log("MDK01 CountingsHUAuditCreate");
    var hu = clientAPI.getPageProxy().getActionBinding();
    libCom.setStateVariable(clientAPI,'CountingsHandlingUnit',hu);
    return clientAPI.executeAction("/MDK01/Actions/Countings/CountingsHUAuditCreate.action");

}
