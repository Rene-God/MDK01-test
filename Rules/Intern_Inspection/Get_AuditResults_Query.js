/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_AuditResults_Query(clientAPI) {

    var query = "";
    var userId = "#Application/#ClientData/UserId";

    query = "$filter=auditor  eq '" + userId + "'";
  
    return query;
}
