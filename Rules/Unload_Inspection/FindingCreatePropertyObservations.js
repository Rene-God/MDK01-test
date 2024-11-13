/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyObservations(clientAPI) {

    console.log("MDK01 HU finding observation: " + clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_HU_Finding/#Control:Unload_HU_Observations/#Value'))
    return clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_HU_Finding/#Control:Unload_HU_Observations/#Value');

}