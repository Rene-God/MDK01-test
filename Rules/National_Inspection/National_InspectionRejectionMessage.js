import insFindRejections from '../Common/InspectionFindingsRefections';
import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_InspectionRejectionMessage(clientAPI) {

    console.log("MDK01 National_InspectionRejectionMessage");
    return insFindRejections.InspectionFindingsRefections(clientAPI,"/MDK01/Rules/National_Inspection/Inspect_New_Sample.js", libCom.getStateVariable(clientAPI, 'National_Inspection_Sample') );
}