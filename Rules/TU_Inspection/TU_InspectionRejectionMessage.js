import insFindRejections from '../Common/InspectionFindingsRefections';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TU_InspectionRejectionMessage(clientAPI) {

    console.log("MDK01 TU_InspectionRejectionMessage");
    return insFindRejections.InspectionFindingsRefections(clientAPI,"/MDK01/Actions/TU_Inspection/TU_InspectionSendMessageAndComplete.action");

}