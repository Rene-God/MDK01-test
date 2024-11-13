import libCom from '../Common/Library/CommonLibrary';
import libSam from '../Common/SampleLogic/SampleLogicLibrary';

export default function NavToNationalInspectionDetail(clientAPI) {

    console.log("MDK01 NavToNationalInspectionDetail");
    libSam.initSampleStateVariables(clientAPI,'National');
    return clientAPI.read('/MDK01/Services/API05.service', clientAPI.getPageProxy().getActionBinding()['@odata.readLink'], [], '$expand=_HandlingUnitAudit($expand=_HallazgoHu)').then((result)=>{
        if (result !== undefined && result._array.length > 0) {
            var tu = result._array[0];
            var query = `$filter=(rootKey eq ${tu.guidTu})&$orderby=numeroMuestra desc&$top=1`;
            return clientAPI.read('/MDK01/Services/API05.service', 'HU_HALLLAZGO',['numeroMuestra'], query).then((result) => {
                let numeroMuestra = 0;
                if (result !== undefined && result._array.length > 0) {        
                    numeroMuestra = result._array[0].numeroMuestra;        
                    libCom.setStateVariable(clientAPI,'National_Inspection_Sample',numeroMuestra);
                    setQuantity(clientAPI,tu,numeroMuestra);
                }
                query = `$filter=documento eq '${tu.inboundDelivery}'`;
                return clientAPI.read('/MDK01/Services/API01.service', 'stockKeepingUnit',[], query).then((result) => {
                    if (result !== undefined && result._array.length > 0) {   
                        let sku = result._array[0]; 
                        return libSam.setMilitaryStd(clientAPI,sku,tu,0,numeroMuestra,milStdReadSuccessful ,milStdReadError);
                    } else {
                        clientAPI.getPageProxy().setActionBinding(tu);
                        return clientAPI.executeAction('/MDK01/Actions/National_Inspection/NavToNationalNewInspectionDetail.action'); 
                    }
                })                     
            })
        }
    }).catch((e) => {
        return this.milStdReadError();
    })  
}

export function milStdReadSuccessful(clientAPI,cant,tu,cantMuestra,piezasRechazo) {
    clientAPI.getPageProxy().setActionBinding(tu);    
    libSam.setSampleStateVariables(clientAPI,cantMuestra,piezasRechazo, 'National');                   
    return clientAPI.executeAction('/MDK01/Actions/National_Inspection/NavToNationalNewInspectionDetail.action'); 
}

export function milStdReadError(clientAPI,tu) {
    console.log("MDK01 NavToNationalInspectionDetail exception");
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
        libCom.setStateVariable(clientAPI, 'National_Inspection_SampleCount', cant);
        libCom.setStateVariable(clientAPI, 'National_Inspection_SampleRejects', cantBC);            
    }
}