import libCom from '../Common/Library/CommonLibrary';
import libSam from '../Common/SampleLogic/SampleLogicLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUAuditUpdateSeals(clientAPI) {

    console.log("MDK01 HUAuditUpdateSeals");
    var tu = clientAPI.binding;
    var cantGC = clientAPI.evaluateTargetPath('#Page:National_Inspection_Add_HU_Detail/#Control:PiecesGC/#Value');
    if ( cantGC === undefined || cantGC === "" ) {
        cantGC = 0;
    } else {
        cantGC = parseInt(cantGC);
    }    
    var cantBC = 0;
    if (tu._HandlingUnitAudit.quantity >= cantGC) {
        cantBC = parseInt(tu._HandlingUnitAudit.quantity - cantGC);
        clientAPI.setActionBinding(tu._HandlingUnitAudit);
        let sello1 = clientAPI.evaluateTargetPath('#Page:National_Inspection_HU_Seals/#Control:Seal1/#Value');
        let sello2 = clientAPI.evaluateTargetPath('#Page:National_Inspection_HU_Seals/#Control:Seal2/#Value');
        let nuevoSello1 = clientAPI.evaluateTargetPath('#Page:National_Inspection_HU_Seals/#Control:NewSeal1/#Value');
        let nuevoSello2 = clientAPI.evaluateTargetPath('#Page:National_Inspection_HU_Seals/#Control:NewSeal2/#Value');
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/National_Inspection/HUAuditUpdate.action",
            "Properties" : {
                "Properties" : {
                    "sello1": `${sello1}`,
                    "sello2": `${sello2}`,
                    "nuevoSello1": `${nuevoSello1}`,
                    "nuevoSello2": `${nuevoSello2}`,
                    "cantPiezasBuenas": `${cantGC}`,
                    "cantPiezasMalas": `${cantBC}`                
                }
            }
        }).then((result) => {
            console.log("MDK01 HUAuditUpdateSeals then");
            clientAPI.setActionBinding(tu);
            return clientAPI.executeAction({
                "Name": "/MDK01/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateSuccess')}`
                }                
            }).then(() => {
                let militaryStd = libCom.getStateVariable(clientAPI, 'National_Inspection_MilitaryStd');
                if (militaryStd === undefined) {
                    let listPickerValue = clientAPI.evaluateTargetPath('#Page:National_Inspection_Add_HU/#Control:FindingLstPkr/#Value');
                    let sku;
                    if (listPickerValue && listPickerValue.length === 0) {
                        let query = `$filter=documento eq '${tu.inboundDelivery}'`;
                        return clientAPI.read('/MDK01/Services/API01.service', 'stockKeepingUnit',[], query).then((result) => {
                            if (result !== undefined && result._array.length > 0) {   
                                sku = result._array[0]; 
                                return libSam.setMilitaryStd(clientAPI,sku,tu,cantBC,libCom.getStateVariable(clientAPI, 'National_Inspection_Sample'),milStdReadSuccessful ,milStdReadError);
                            } else {
                                return addQuantity(clientAPI,cantBC,tu);     
                            }
                        })                          
                    } else {
                        sku = clientAPI.evaluateTargetPathForAPI('#Page:National_Inspection_Add_HU_Detail').getControl('FormCellContainer').getSections()[2].binding._array[0];
                        return libSam.setMilitaryStd(clientAPI,sku,tu,cantBC,libCom.getStateVariable(clientAPI, 'National_Inspection_Sample'),milStdReadSuccessful ,milStdReadError);                      
                    }
                } else {
                    return addQuantity(clientAPI,cantBC,tu);         
                }  
            });
        }, (error)=>{
            //alert(`Action Failed: ${error}`);
            console.log("MDK01 HUAuditUpdateSeals error");
            clientAPI.setActionBinding(tu);        
            return clientAPI.executeAction({
                "Name": "/MDK01/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
                }                
            });
        }).catch((error) => {
            console.log("MDK01 HUAuditUpdateSeals catch");
            clientAPI.setActionBinding(tu);        
            return clientAPI.executeAction({
                "Name": "/MDK01/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
                }                
            });
        });     
    } else {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('SKUGCBiggerThanHU',[cantGC])}`
            }                
        });     
    }
}

export function milStdReadSuccessful(clientAPI,cantBC,tu,cantMuestra,piezasRechazo) {
    libSam.setSampleStateVariables(clientAPI,cantMuestra,piezasRechazo, 'National');
    return addQuantity(clientAPI,cantBC,tu);
}

export function milStdReadError(clientAPI,tu) {
    console.log("MDK01 National_Inspection_HU_SealsWSealsBtnPress error fetching military standards");
    clientAPI.getPageProxy().setActionBinding(tu);        
    return clientAPI.executeAction({
        "Name": "/MDK01/Actions/GenericToastMessage.action",
        "Properties": {
            "Message": `${clientAPI.localizeText('FetchMilitaryStandardFailed')}`
        }                
    });    
}

export function addQuantity(clientAPI,cantBC,tu) {
    let quantity = libCom.getStateVariable(clientAPI, 'National_Inspection_SampleCount');
    quantity = quantity + tu._HandlingUnitAudit.quantity;
    //let quantity = tu._HandlingUnitAudit.quantity;
    let prevCantBC = libCom.getStateVariable(clientAPI, 'National_Inspection_SampleRejects' );
    cantBC = cantBC + prevCantBC;                
    libCom.setStateVariable(clientAPI, 'National_Inspection_SampleCount', quantity );
    libCom.setStateVariable(clientAPI, 'National_Inspection_SampleRejects', cantBC );
    clientAPI.evaluateTargetPathForAPI('#Page:National_Inspection_Detail').getControl('SectionedTable0').getSections()[1].redraw();
    return clientAPI.executeAction("/MDK01/Actions/ClosePage.action");      
}