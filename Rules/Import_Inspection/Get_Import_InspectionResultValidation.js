import Import_InspectionAuditListFilter from "./Import_InspectionAuditListFilter";
import libCom from '../Common/Library/CommonLibrary';
import libSam from '../Common/SampleLogic/SampleLogicLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Import_InspectionResultValidation(clientAPI) {

    console.log("MDK01 Get_Import_InspectionResultValidation");
    if (clientAPI.actionResults.Get_Import_Inspection.data === undefined || clientAPI.actionResults.Get_Import_Inspection.data._array.length === 0) {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericMessageBox.action",
            "Properties": {
                "Message": "$(L,'TUAppointmentNotValid')",
                "OKCaption": "$(L,'OK')"
            }            
        })
    } else {
        var query = Import_InspectionAuditListFilter(clientAPI);
        var appointment = clientAPI.evaluateTargetPath('#Page:Import_Inspection_Create/#Control:FCIIAppointment').getValue();
        query = query + ` and cita eq '${appointment}'&$expand=_HandlingUnitAudit($expand=_HallazgoHu)`;
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
                        return clientAPI.executeAction("/MDK01/Actions/Import_Inspection/Import_InspectionHeaderCreate.action");
                    }
                });                
            } else {                
                libSam.initSampleStateVariables(clientAPI,'Import');               
                let tu = result._array[0];
                let query = `$filter=(rootKey eq ${tu.guidTu})&$orderby=numeroMuestra desc&$top=1`;
                return clientAPI.read('/MDK01/Services/API05.service', 'HU_HALLLAZGO',['numeroMuestra'], query).then((result) => {
                    let numeroMuestra = 0;
                    if (result !== undefined && result._array.length > 0) {       
                        numeroMuestra = result._array[0].numeroMuestra;              
                        libCom.setStateVariable(clientAPI,'Import_Inspection_Sample',numeroMuestra);
                        setQuantity(clientAPI,tu,numeroMuestra);
                    }
                    query = `$filter=(guidTu eq ${tu.guidTu})&$top=1`;
                    return clientAPI.read('/MDK01/Services/API05.service', 'SKUAUDIT',[], query).then((result) => {
                        if (result !== undefined && result._array.length > 0) {   
                            let sku = result._array[0]; 
                            return libSam.setMilitaryStd(clientAPI,sku,tu,0,numeroMuestra, milStdReadSuccessful ,milStdReadError);
                        } else {
                            clientAPI.getPageProxy().setActionBinding(tu);
                            return clientAPI.executeAction('/MDK01/Actions/Import_Inspection/NavToImportNewInspectionDetail.action'); 
                        }
                    })    
                })                              
            }
        })        
    }

}

export function milStdReadSuccessful(clientAPI,cant,tu,cantMuestra,piezasRechazo) {
    clientAPI.getPageProxy().setActionBinding(tu);    
    libSam.setSampleStateVariables(clientAPI,cantMuestra,piezasRechazo, 'Import');                   
    return clientAPI.executeAction('/MDK01/Actions/Import_Inspection/NavToImportNewInspectionDetail.action'); 
}

export function milStdReadError(clientAPI,tu) {
    console.log("MDK01 NavToImportInspectionDetail exception");
    return clientAPI.executeAction({
        "Name": "/MDK01/Actions/GenericToastMessage.action",
        "Properties": {
            "Message": `${clientAPI.localizeText('FetchMilitaryStandardFailed')}`
        }                
    });
}

export function setQuantity(clientAPI,tu,muestra) {
    if (tu._HandlingUnitAudit !== undefined && tu._HandlingUnitAudit.length > 0) {
        var cantBC = 0;
        var cant = 0;
        for (let i=0; i < tu._HandlingUnitAudit.length; i++){
            if (tu._HandlingUnitAudit[i]._HallazgoHu.length > 0 && tu._HandlingUnitAudit[i]._HallazgoHu[0].numeroMuestra === muestra) {
                cant = cant + tu._HandlingUnitAudit[i].cantPiezasBuenas + tu._HandlingUnitAudit[i].cantPiezasMalas;
                cantBC = cantBC + tu._HandlingUnitAudit[i].cantPiezasMalas;
            }
        }
        libCom.setStateVariable(clientAPI, 'Import_Inspection_SampleCount', cant);
        libCom.setStateVariable(clientAPI, 'Import_Inspection_SampleRejects', cantBC);   
    }
}