/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyHU(clientAPI) {

    return clientAPI.evaluateTargetPath('#Page:National_Inspection_Add_HU/#Control:HULstPkr/#Value')[0].ReturnValue;

}