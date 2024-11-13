/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Display_SKU_Values(clientAPI) {


    if (clientAPI.binding.sku) {
        return clientAPI.binding.sku;
    }

    if (clientAPI.binding._toAuditoriaInternaItem && clientAPI.binding._toAuditoriaInternaItem.length > 0) {
        let auditoriaItem = clientAPI.binding._toAuditoriaInternaItem[0];
        

        if (auditoriaItem.sku) {
            return auditoriaItem.sku;
        }
    }

}
