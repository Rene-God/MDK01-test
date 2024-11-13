
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Candy_InspectionAuditListFilter(clientAPI) {
    var dateObj = new Date();
    var month = dateObj.getMonth();
    var day = dateObj.getDate();
    var dateFilter = dateObj.getFullYear() + '-';
    month < 10 ? dateFilter = dateFilter + '0' + month + '-' : dateFilter = dateFilter + month + '-';
    day < 10 ? dateFilter = dateFilter + '0' + day : dateFilter = dateFilter = dateFilter + day;
    return "$filter=processId eq 4 and inspectionCompleted eq false";
}