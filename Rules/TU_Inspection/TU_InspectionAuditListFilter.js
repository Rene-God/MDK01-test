import ODataDate from '../Common/Date/ODataDate';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TU_InspectionAuditListFilter(clientAPI) {
    //console.log("MDK01 TU_InspectionAuditListFilter");
    var dateObj = new Date();
    var month = dateObj.getMonth();
    var day = dateObj.getDate();
    var dateFilter = dateObj.getFullYear() + '-';
    month < 10 ? dateFilter = dateFilter + '0' + month + '-' : dateFilter = dateFilter + month + '-';
    day < 10 ? dateFilter = dateFilter + '0' + day : dateFilter = dateFilter = dateFilter + day;
    //return "$filter=processId eq 0 and processCompleted eq false and fecha eq " + dateFilter;
    return "$filter=processId eq 0 and inspectionCompleted eq false";
}