/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Unload_InspectionQueryOptions(clientAPI) {
    var query = "";
    var appointmentInp = clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Create/#Control:FCUIAppointment');
    var tuInp = clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Create/#Control:FCUITUNumber');
    var documentInp = clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Create/#Control:FCUIDocument');

/*     if (appointmentInp.getValue() !== "" || tuInp.getValue() !== "" || documentInp.getValue() !== "") 
        query = "$filter="; */

    if (appointmentInp.getValue() !== "" && appointmentInp.getValue() !== undefined) query = "$filter=(cita eq '" + appointmentInp.getValue() + "'";
    if (tuInp.getValue() !== "" && tuInp.getValue() !== undefined) {
        query === "" ? query = "$filter=(transportUnit eq '" + tuInp.getValue() + "'" : query = query + " and transportUnit eq '" + tuInp.getValue() + "'" ;
    }
    if (documentInp.getValue() !== "" && documentInp.getValue() !== undefined) {
        query === "" ? query = "$filter=(documento eq '" + documentInp.getValue() + "'" : query = query + " and documento eq '" + documentInp.getValue() + "'" ;
    }
    if (query !== "") query = query + ")";
    return query;
}