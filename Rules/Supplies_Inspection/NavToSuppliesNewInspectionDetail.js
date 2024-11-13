export default function NavToTUNewInspectionDetail(clientAPI) {
    let pageProxy = clientAPI.getPageProxy();

    let audit = JSON.parse(clientAPI.actionResults.SuppliesInspectionHeaderCreate.data);
    audit._HallazgoTu = [];
    audit._HandlingUnitAudit = [];

    pageProxy.setActionBinding(audit);
    return clientAPI.executeAction('/MDK01/Actions/Supplies_Inspection/NavToSuppliesNewInspectionDetail.action');
}