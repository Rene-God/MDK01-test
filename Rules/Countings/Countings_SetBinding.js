import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_SetBinding(clientAPI) {

    var tu = JSON.parse(clientAPI.actionResults.Countings_HeaderCreate.data);
    clientAPI.setActionBinding(tu);
    libCom.setStateVariable(clientAPI,'CountingsSupplier',tu.razonSocial);
    libCom.setStateVariable(clientAPI,'CountingsDocument',tu.inboundDelivery);
    return clientAPI.executeAction("/MDK01/Actions/Countings/NavToHUsSelectionList.action");

}