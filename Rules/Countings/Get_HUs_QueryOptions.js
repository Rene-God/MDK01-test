/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_HUs_QueryOptions(clientAPI) {

    var query = "";
    var aDocument = clientAPI.binding.inboundDelivery;
    query = "$filter=(documento  eq '" + aDocument + "')";
  
    return query;
}
