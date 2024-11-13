export default function NavToCountingsNewInspectionDetail(clientAPI) {
    console.log("MDK01 NavToCountingsNewInspectionDetail");
/*     var tu = clientAPI.binding;
    tu._HandlingUnitAudit = JSON.parse(clientAPI.actionResults.CountingsHUAuditCreate.data);
    tu._HandlingUnitAudit._StockKeepingUnitAudit = [];
    clientAPI.setActionBinding(tu._HandlingUnitAudit); */
    var hu = JSON.parse(clientAPI.actionResults.CountingsHUAuditCreate.data);
    hu._StockKeepingUnitAudit = [];
    clientAPI.setActionBinding(hu);
    return clientAPI.executeAction("/MDK01/Actions/Countings/NavToCountingsNewInspectionDetail.action");
}