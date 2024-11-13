import libCom from '../Common/Library/CommonLibrary';

export default function NavToTUNewInspectionDetail(clientAPI) {
    let pageProxy = clientAPI.getPageProxy();
    //let tu = clientAPI.actionResults.Get_Tu_Inspection.data._array[0];
    let audit = JSON.parse(clientAPI.actionResults.NationalInspectionHeaderCreate.data);
    //audit._HallazgoTu = [];
    audit._HandlingUnitAudit = [];

    libCom.setStateVariable(clientAPI,'National_Inspection_Sample',0);  // Numero de muestra
    libCom.setStateVariable(clientAPI,'National_Inspection_SampleCount',0);  // Cantidad piezas contada
    libCom.setStateVariable(clientAPI, 'National_Inspection_SampleRejects', 0 ); // Cantidad piezas rechazadas
    libCom.removeStateVariable(clientAPI,'National_Inspection_MilitaryStd'); // Military Standard sample size configuration
    libCom.removeStateVariable(clientAPI,'National_Inspection_MilitaryStdRejects'); // Military Standard rejects limit configuration
    pageProxy.setActionBinding(audit);
    return clientAPI.executeAction('/MDK01/Actions/National_Inspection/NavToNationalNewInspectionDetail.action');
}