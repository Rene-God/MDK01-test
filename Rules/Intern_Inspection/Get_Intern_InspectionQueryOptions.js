/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Intern_InspectionQueryOptions(clientAPI) {
    var query = "";
    var inspectionAreaInp = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FCIIInspectionArea');
    var huInp = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FCIIHU');
    
    inspectionAreaInp = inspectionAreaInp.getValue()
    huInp = huInp.getValue()


    if (inspectionAreaInp !== "" && inspectionAreaInp !== undefined && huInp !== "" && huInp !== undefined) query = "$filter=(area eq '" + inspectionAreaInp + "' and hu eq '" + huInp + "')";
    if (query !== "") { query = query };
    return query;
}