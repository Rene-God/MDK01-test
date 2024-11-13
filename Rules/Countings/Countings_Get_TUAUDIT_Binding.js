/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_Get_TUAUDIT_Bindings(clientAPI) {

    return clientAPI.evaluateTargetPath('#Page:HU_Selection_List').context.binding['@odata.readLink'];
}