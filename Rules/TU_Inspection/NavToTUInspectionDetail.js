export default function NavToTUNewInspectionDetail(clientAPI) {
    let pageProxy = clientAPI.getPageProxy();
    //let tu = clientAPI.actionResults.Get_Tu_Inspection.data._array[0];
    let audit = JSON.parse(clientAPI.actionResults.InspectionHeaderCreate.data);
    audit._HallazgoTu = [];
    audit._HandlingUnitAudit = [];


    pageProxy.setActionBinding(audit);
    return clientAPI.executeAction('/MDK01/Actions/TU_Inspection/NavToTUNewInspectionDetail.action');
}