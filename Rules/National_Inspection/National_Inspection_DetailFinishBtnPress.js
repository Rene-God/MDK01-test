import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_Inspection_DetailFinishBtnPress(clientAPI) {

    //console.log("MDK01 National_Inspection_DetailFinishBtnPress");
    var sample = libCom.getStateVariable(clientAPI, 'National_Inspection_Sample'); // Numero de muestra
    if (sample > 0) {
        return clientAPI.executeAction("/MDK01/Rules/National_Inspection/National_InspectionRejectionMessage.js");  
    } else {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('AtLeastOneSampleMandatory')}`
            }                
        });        
    }
}