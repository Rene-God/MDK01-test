/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyHU(clientAPI) {

    return clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Add_HU_Finding/#Control:HULstPkr/#Value')[0].ReturnValue;

}