/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyObservations(clientAPI) {

    return clientAPI.evaluateTargetPath('#Page:National_Inspection_Add_HU/#Control:ObservationsNot/#Value');

}