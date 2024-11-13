import Supplies_InspectionAuditListFilter from "./Supplies_InspectionAuditListFilter";
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Supplies_InspectionResultValidation(clientAPI) {

    console.log("MDK01 Get_Supplies_InspectionResultValidation");
    if (clientAPI.actionResults.Get_Supplies_Inspection.data === undefined || clientAPI.actionResults.Get_Supplies_Inspection.data._array.length === 0) {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericMessageBox.action",
            "Properties": {
                "Message": "$(L,'TUAppointmentNotValid')",
                "OKCaption": "$(L,'OK')"
            }            
        })
    } else {
        var query = Supplies_InspectionAuditListFilter(clientAPI);
        var appointment = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Create/#Control:FCSIAppointment').getValue();
        query = query + ` and cita eq '${appointment}'`;
        return clientAPI.read('/MDK01/Services/API05.service', 'TU_AUDIT', [], query).then((result) => {
            if (result === undefined || result._array.length === 0) {
                query = `$filter=processId eq 1 and processCompleted eq false and cita eq '${appointment}'`;
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
                        return clientAPI.executeAction("/MDK01/Actions/Supplies_Inspection/Supplies_InspectionHeaderCreate.action");
                    }
                });                
            } else {                          
                clientAPI.setActionBinding(result._array[0]);
                return clientAPI.executeAction("/MDK01/Actions/Supplies_Inspection/NavToSuppliesNewInspectionDetail.action");                            
            }
        }) 

        
    }

}