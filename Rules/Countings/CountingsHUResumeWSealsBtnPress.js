import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsHUResumeWSealsBtnPress(clientAPI) {

    console.log("MDK01 CountingsHUResumeWSealsBtnPress");
    var hu = clientAPI.binding;
    var decision = libCom.getStateVariable(clientAPI,'CountingsDecision');
    return clientAPI.executeAction({
        "Name": "/MDK01/Actions/Countings/CountingsHUAuditUpdate.action",
        "Properties" : {
            "Properties" : {
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
        console.log("MDK01 CountingsHUResumeWSealsBtnPress then");
        clientAPI.evaluateTargetPathForAPI('#Page:CountingsHUDetail').getControl('SectionedTable0').getSections()[2]._context.element._props.definition._data.ObjectCells = []; 
        return clientAPI.executeAction("/MDK01/Actions/Countings/CountingsUpdateCompleteMessagge.action");
    }, (error)=>{
        //alert(`Action Failed: ${error}`);
        console.log("MDK01 CountingsHUResumeWSealsBtnPress error");     
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
            }                
        });
    }).catch((error) => {
        console.log("MDK01 CountingsHUResumeWSealsBtnPress catch");     
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
            }                
        });
    });           
}