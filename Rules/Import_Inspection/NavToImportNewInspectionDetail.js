import libCom from '../Common/Library/CommonLibrary';

export default function NavToTUNewInspectionDetail(clientAPI) {
    let pageProxy = clientAPI.getPageProxy();
    //let tu = clientAPI.actionResults.Get_Tu_Inspection.data._array[0];
    let audit = JSON.parse(clientAPI.actionResults.ImportInspectionHeaderCreate.data);
    //audit._HallazgoTu = [];
    audit._HandlingUnitAudit = [];

    libCom.setStateVariable(clientAPI,'Import_Inspection_Sample',0);  // Numero de muestra
    libCom.setStateVariable(clientAPI,'Import_Inspection_SampleCount',0);  // Cantidad piezas contada
    libCom.setStateVariable(clientAPI, 'Import_Inspection_SampleRejects', 0 ); // Cantidad piezas rechazadas
    libCom.removeStateVariable(clientAPI,'Import_Inspection_MilitaryStd'); // Military Standard sample size configuration
    libCom.removeStateVariable(clientAPI,'Import_Inspection_MilitaryStdRejects'); // Military Standard rejects limit configuration
    pageProxy.setActionBinding(audit);
    return clientAPI.executeAction('/MDK01/Actions/Import_Inspection/NavToImportNewInspectionDetail.action');
}