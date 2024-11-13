import insFindRejections from '../Common/InspectionFindingsRefections';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Candy_InspectionRejectionMessage(clientAPI) {

    console.log("MDK01 Candy_InspectionRejectionMessage");
    return insFindRejections.InspectionFindingsRefections(clientAPI,"/MDK01/Actions/Candy_Inspection/Candy_InspectionHeaderUpdate.action");
}