import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsHUAuditDescription(clientAPI) {

    let supplier = libCom.getStateVariable(clientAPI,'CountingsSupplier');
    return clientAPI.localizeText('Supplier') + ": " + supplier;

}
