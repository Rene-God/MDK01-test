/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SKU_FindingCreatePropertyProveedor(clientAPI) {

    return clientAPI.getPageProxy().binding.razonSocial;

}