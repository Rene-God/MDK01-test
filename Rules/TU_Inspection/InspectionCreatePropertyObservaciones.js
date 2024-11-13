/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyObservaciones(clientAPI) {

    return clientAPI.evaluateTargetPath('#Page:TU_Inspection_Create_Detail/#Control:ObservationsNot/#Value');

}