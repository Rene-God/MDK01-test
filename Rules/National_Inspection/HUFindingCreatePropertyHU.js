/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreatePropertyHU(clientAPI) {

    var hu = clientAPI.evaluateTargetPath('#Page:National_Inspection_Add_HU/#Control:HULstPkr/#Value')[0].ReturnValue;
    return "HU: " + hu;

}