/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyObservations(clientAPI) {

    return clientAPI.evaluateTargetPath('#Page:TU_Inspection_Add_HU_Finding/#Control:ObservationsNot/#Value');

}