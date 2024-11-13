import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsHUAuditUpdateSeals(clientAPI) {

    console.log("MDK01 CountingsHUAuditUpdateSeals");
    var hu = clientAPI.binding;
    var decision = libCom.getStateVariable(clientAPI,'CountingsDecision');
    let sello1 = clientAPI.evaluateTargetPath('#Page:Countings_Seals/#Control:Seal1/#Value');
    let sello2 = clientAPI.evaluateTargetPath('#Page:Countings_Seals/#Control:Seal2/#Value');
    let nuevoSello1 = clientAPI.evaluateTargetPath('#Page:Countings_Seals/#Control:NewSeal1/#Value');
    let nuevoSello2 = clientAPI.evaluateTargetPath('#Page:Countings_Seals/#Control:NewSeal2/#Value');    
    return clientAPI.executeAction({
        "Name": "/MDK01/Actions/Countings/CountingsHUAuditUpdate.action",
        "Properties" : {
            "Properties" : {
                "sello1": `${sello1}`,
                "sello2": `${sello2}`,
                "nuevoSello1": `${nuevoSello1}`,
                "nuevoSello2": `${nuevoSello2}`,
                "decisionId" :  `${decision}`,
                "quantityCounted": `${hu.quantityCounted}`,
                "quantityMissing": `${hu.quantityMissing}`
            },
            "Target": {
                "EntitySet": "HUAUDIT",
                "Service": "/MDK01/Services/API05.service",
                "ReadLink": hu['@odata.readLink']
              }            
        }
    }).then((result) => {
        console.log("MDK01 CountingsHUAuditUpdateSeals then");
        clientAPI.evaluateTargetPathForAPI('#Page:CountingsHUDetail').getControl('SectionedTable0').getSections()[2]._context.element._props.definition._data.ObjectCells = [];
        return clientAPI.executeAction("/MDK01/Actions/Countings/CountingsUpdateCompleteMessagge.action");
    }, (error)=>{
        //alert(`Action Failed: ${error}`);
        console.log("MDK01 CountingsHUAuditUpdateSeals error");     
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
            }                
        });
    }).catch((error) => {
        console.log("MDK01 CountingsHUAuditUpdateSeals catch");     
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
            }                
        });
    });           
}