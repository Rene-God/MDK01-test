import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_Inspection_DetailSkipBtnPress(clientAPI) {

    //console.log("MDK01 National_Inspection_DetailSkipBtnPress");
    var sample = libCom.getStateVariable(clientAPI, 'National_Inspection_Sample'); // Numero de muestra
    //if (sample > 0) {
        var rejects = libCom.getStateVariable(clientAPI, 'National_Inspection_SampleRejects'); // Cantidad piezas rechazadas
        if (rejects === 0 ) {
            return clientAPI.executeAction({
                "Name": "/MDK01/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `${clientAPI.localizeText('UpdateConfirmation')}`
                }                
            }).then(()=>{
                return clientAPI.executeAction("/MDK01/Actions/NavToHome.action");
            });     
        } else {
            return clientAPI.executeAction({
                "Name": "/MDK01/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `${clientAPI.localizeText('CantSkipWRejects')}`
                }                
            });                
        }
/*     } else {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": `${clientAPI.localizeText('AtLeastOneSampleMandatory')}`
            }                
        });        
    } */
}