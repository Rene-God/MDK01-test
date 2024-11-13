/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Import_InspectionSKUListQuery(clientAPI) {

    let listp = clientAPI.getPageProxy().evaluateTargetPathForAPI('#Page:Import_Inspection_Add_HU/#Control:HULstPkr');   
    let hu = listp.getValue()[0].ReturnValue;
    let query = "";
    if (hu !== undefined && hu !== '') {
        query = `$filter=documento eq '${clientAPI.binding.inboundDelivery}' and handlingUnit eq '${hu}'`;
    } else {
        query = `$filter=documento eq '${clientAPI.binding.inboundDelivery}'`;
    }
    return query;

}