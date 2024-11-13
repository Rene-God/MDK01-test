import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsHUAuditFootnote(clientAPI) {

    let hu = libCom.getStateVariable(clientAPI,'CountingsHandlingUnit');
    return clientAPI.localizeText('PiecesToReceive') + ": " + hu.HUQuantity;

}
