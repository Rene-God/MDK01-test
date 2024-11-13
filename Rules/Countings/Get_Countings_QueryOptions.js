/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Countings_QueryOptions(clientAPI) {
    var query = "";
    var appointmentInp = clientAPI.evaluateTargetPath('#Page:Countings_Create/#Control:FCCountAppointment');
    var tuInp = clientAPI.evaluateTargetPath('#Page:Countings_Create/#Control:FCCountTUNumber');
    var documentInp = clientAPI.evaluateTargetPath('#Page:Countings_Create/#Control:FCCountDocument');

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