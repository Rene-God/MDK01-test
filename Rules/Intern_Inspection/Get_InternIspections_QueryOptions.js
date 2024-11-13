/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Tu_InspectionQueryOptions(clientAPI) {
    var query = "";
    var HUinp = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FFAIHU');
    var SKUinp = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FFAISKU');
    var INSPinp = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FFAIInspectionArea');


    if (HUinp.getValue() !== "" && HUinp.getValue() !== undefined) query = "$filter=(hu eq '" + HUinp.getValue() + "'";
    
    if (SKUinp.getValue() !== "" && SKUinp.getValue() !== undefined) {
        query === "" ? query = "$filter=(sku eq '" + SKUinp.getValue() + "'" : query = query + " and sku eq '" + SKUinp.getValue() + "'" ;
    }
    if (INSPinp.getValue() !== "" && INSPinp.getValue() !== undefined) {
        query === "" ? query = "$filter=(areaDesc eq '" + INSPinp.getValue() + "'" : query = query + " and areaDesc eq '" + INSPinp.getValue() + "'" ;
    }
    if (query !== "") query = query + ")";
    return query;
}