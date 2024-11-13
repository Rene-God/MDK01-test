/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyHU(clientAPI) {

    return clientAPI.evaluateTargetPath('#Page:Import_Inspection_Add_HU/#Control:HULstPkr/#Value')[0].ReturnValue;

}