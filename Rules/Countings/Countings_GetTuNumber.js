/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_GetTuNumber(clientAPI) {
var tu = clientAPI.binding.guidTu 
    return `$filter=guidTu eq (${tu})`;
}