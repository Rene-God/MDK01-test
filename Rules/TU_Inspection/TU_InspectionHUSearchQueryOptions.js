/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TU_InspectionHUSearchQueryOptions(clientAPI) {

    //console.log("MDK01 TU_InspectionHUSearchQueryOptions");
    // $filter=documento eq '{{#Property:inboundDelivery}}'
    let queryBuilder = clientAPI.dataQueryBuilder();
    if (clientAPI.searchString) {
/*         let searchFilters = [
            `substringof('${context.searchString.toLowerCase()}', tolower(NotificationNumber))`,
            `substringof('${context.searchString.toLowerCase()}', tolower(NotificationDescription))`,
        ]; */
        queryBuilder.filter(`handlingUnit eq '${clientAPI.searchString}' and documento eq '${clientAPI.binding.inboundDelivery}'`);
    } else {
        queryBuilder.filter(`documento eq '${clientAPI.binding.inboundDelivery}'`);
    }  
    return queryBuilder;

}