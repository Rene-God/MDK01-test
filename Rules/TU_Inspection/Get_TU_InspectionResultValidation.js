import TU_InspectionAuditListFilter from "./TU_InspectionAuditListFilter";
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_TU_InspectionResultValidation(clientAPI) {

    console.log("MDK01 Get_TU_InspectionResultValidation");
    if (clientAPI.actionResults.Get_Tu_Inspection.data === undefined || clientAPI.actionResults.Get_Tu_Inspection.data._array.length === 0) {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericMessageBox.action",
            "Properties": {
                "Message": "$(L,'TUAppointmentNotValid')",
                "OKCaption": "$(L,'OK')"
            }            
        })
    } else {
        var query = TU_InspectionAuditListFilter(clientAPI);
        var appointment = clientAPI.evaluateTargetPath('#Page:TU_Inspection_Create/#Control:FCTUAppointment').getValue();
        query = query + ` and cita eq '${appointment}'`;
        return clientAPI.read('/MDK01/Services/API05.service', 'TU_AUDIT', [], query).then((result) => {
            if (result === undefined || result._array.length === 0) {
                return clientAPI.executeAction("/MDK01/Actions/TU_Inspection/TU_InspectionHeaderCreate.action");
            } else {
                clientAPI.setActionBinding(result._array[0]);
                return clientAPI.executeAction("/MDK01/Actions/TU_Inspection/NavToTUNewInspectionDetail.action");
            }
        })
    }

}