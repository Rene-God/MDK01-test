import insFindRejections from '../Common/InspectionFindingsRefections';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Supplies_InspectionRejectionMessage(clientAPI) {

    console.log("MDK01 Supplies_InspectionRejectionMessage");
    return insFindRejections.InspectionFindingsRefections(clientAPI,"/MDK01/Actions/Supplies_Inspection/Supplies_InspectionHeaderUpdate.action");    

}