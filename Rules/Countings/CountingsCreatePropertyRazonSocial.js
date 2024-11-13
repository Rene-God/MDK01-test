/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsCreatePropertyRazonSocial(clientAPI) {

    return clientAPI.evaluateTargetPath('#Page:HU_Selection_List').context.binding.razonSocial;

}