/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */

export default function NavToInternNewInspectionDetail(clientAPI) {
    let pageProxy = clientAPI.getPageProxy();

    let audit = JSON.parse(clientAPI.actionResults.InternInspectionHeaderCreate.data);

    audit._HallazgoItr = [];
    audit._StockKeepingUnitItr = [];

    pageProxy.setActionBinding(audit);
    return clientAPI.executeAction('/MDK01/Actions/Intern_Inspection/NavToInternNewInspectionDetail.action');
}