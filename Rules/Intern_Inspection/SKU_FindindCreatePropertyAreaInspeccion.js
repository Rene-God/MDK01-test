/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function SKU_FindingCreatePropertyAreaInspeccion(clientAPI) {

    return clientAPI.getPageProxy().binding.areaInspeccion;

}