/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyObservations(clientAPI) {

    return clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:ObservationsNot/#Value');

}