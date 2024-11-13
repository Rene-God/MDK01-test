import libCom from '../Common/Library/CommonLibrary';

export default function NavToCountingDetail(clientAPI) {

    var tu = clientAPI.getPageProxy().getActionBinding();
    console.log("MDK01 NavToCountingDetail " + tu['@odata.readLink']);
    libCom.setStateVariable(clientAPI,'CountingsSupplier',tu.razonSocial);
    libCom.setStateVariable(clientAPI,'CountingsDocument',tu.inboundDelivery);
    return clientAPI.executeAction("/MDK01/Actions/Countings/NavToHUsSelectionList.action");
}