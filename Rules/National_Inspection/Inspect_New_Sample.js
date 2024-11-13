
import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Inspect_New_Sample(clientAPI) {

    var militaryStdRejects = libCom.getStateVariable(clientAPI, 'National_Inspection_MilitaryStdRejects');  // Military Standard rejects limit configuration
    var rejects = libCom.getStateVariable(clientAPI, 'National_Inspection_SampleRejects'); // Cantidad piezas rechazadas
    if (rejects >= militaryStdRejects ) {
        return clientAPI.executeAction("/MDK01/Actions/National_Inspection/FinishNationalInspectionMessage.action");     
    } else {
        return clientAPI.executeAction("/MDK01/Actions/National_Inspection/National_InspectionHeaderUpdate.action");             
    }

}
