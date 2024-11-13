import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Import_Inspection_DetailFinishBtnPress(clientAPI) {

    //console.log("MDK01 Import_Inspection_DetailFinishBtnPress");
    var sample = libCom.getStateVariable(clientAPI, 'Import_Inspection_Sample'); // Numero de muestra
    if (sample > 0) {
        var militaryStdRejects = libCom.getStateVariable(clientAPI, 'Import_Inspection_MilitaryStdRejects');  // Military Standard rejects limit configuration
        var rejects = libCom.getStateVariable(clientAPI, 'Import_Inspection_SampleRejects'); // Cantidad piezas rechazadas
        if (rejects >= militaryStdRejects ) {
            return clientAPI.executeAction("/MDK01/Actions/Import_Inspection/FinishImportInspectionMessage.action");     
        } else {
/*             return clientAPI.executeAction({
                "Name": "/MDK01/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `${clientAPI.localizeText('UpdateConfirmation')}`
                }                
            }).then(()=>{
                return clientAPI.executeAction("/MDK01/Actions/NavToHome.action");
            });     */             
            return clientAPI.executeAction("/MDK01/Actions/Import_Inspection/Import_InspectionHeaderUpdate.action");
        }
    } else {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('AtLeastOneSampleMandatory')}`
            }                
        });        
    }
}