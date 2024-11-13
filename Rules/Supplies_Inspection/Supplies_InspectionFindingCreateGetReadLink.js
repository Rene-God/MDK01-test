
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Supplies_InspectionFindingCreateGetReadLink(clientAPI) {
    
    return clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Add_HU').context.readLink;

}