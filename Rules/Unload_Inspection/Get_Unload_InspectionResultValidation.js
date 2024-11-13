import Unload_InspectionAuditListFilter from "./Unload_InspectionAuditListFilter";
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Unload_InspectionResultValidation(clientAPI) {

    console.log("MDK01 Get_Unload_InspectionResultValidation");
    if (clientAPI.actionResults.Get_Unload_TU_Inspection.data === undefined || clientAPI.actionResults.Get_Unload_TU_Inspection.data._array.length === 0) {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericMessageBox.action",
            "Properties": {
                "Message": "$(L,'TUAppointmentNotValid')",
                "OKCaption": "$(L,'OK')"
            }            
        })
    } else {
        //return clientAPI.executeAction("/MDK01/Actions/Unload_Inspection/Unload_InspectionHeaderCreate.action");

        var query = Unload_InspectionAuditListFilter(clientAPI);
        var appointment = clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Create/#Control:FCUIAppointment').getValue();
        query = query + ` and cita eq '${appointment}'`;
        return clientAPI.read('/MDK01/Services/API05.service', 'TU_AUDIT', [], query).then((result) => {
            if (result === undefined || result._array.length === 0 ) {
                query = `$filter=processId eq 0 and processCompleted eq false and cita eq '${appointment}'`;
                return clientAPI.read('/MDK01/Services/API05.service', 'TU_AUDIT', [], query).then((result) => {
                    if (result === undefined || result._array.length === 0 ) {
                        return clientAPI.executeAction({
                            "Name": "/MDK01/Actions/GenericMessageBox.action",
                            "Properties": {
                                "Message": "$(L,'TUAppointmentNotValid')",
                                "OKCaption": "$(L,'OK')"
                            }            
                        })
                    } else {            
                        return clientAPI.executeAction("/MDK01/Actions/Unload_Inspection/Unload_InspectionHeaderCreate.action");
                    }
                });
            } else {
                clientAPI.setActionBinding(result._array[0]);
                return clientAPI.executeAction("/MDK01/Actions/Unload_Inspection/NavToUnloadNewInspectionDetail.action");
            }
        })

    }

}