import CountingsListFilter from "./CountingsListFilter";
import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_Verify_Results(clientAPI) {

    console.log("MDK01 Countings_Verify_Results");
    if (clientAPI.actionResults.Get_Countings.data === undefined || clientAPI.actionResults.Get_Countings.data._array.length === 0) {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericMessageBox.action",
            "Properties": {
                "Message": "$(L,'TUAppointmentNotValid')",
                "OKCaption": "$(L,'OK')"
            }            
        })
    } else {
        //return clientAPI.executeAction("/MDK01/Actions/Countings/Countings_HeaderCreate.action");

        var query = CountingsListFilter(clientAPI);
        var appointment = clientAPI.evaluateTargetPath('#Page:Countings_Create/#Control:FCCountAppointment').getValue();
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
                        return clientAPI.executeAction("/MDK01/Actions/Countings/Countings_HeaderCreate.action");
                    }
                });                      
            } else {
                let tu = result._array[0];
                clientAPI.setActionBinding(tu);
                libCom.setStateVariable(clientAPI,'CountingsSupplier',tu.razonSocial);
                libCom.setStateVariable(clientAPI,'CountingsDocument',tu.inboundDelivery);
                //return clientAPI.executeAction("/MDK01/Actions/Countings/NavToCountingsNewInspectionDetail.action");
                return clientAPI.executeAction("/MDK01/Actions/Countings/NavToHUsSelectionList.action");
            }
        })          
    }    
}