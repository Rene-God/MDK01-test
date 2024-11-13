/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreatePropertyHU(clientAPI) {

    //console.log("MDK01 HUFindingCreatePropertyHU");
    var hu = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Add_HU/#Control:HULstPkr/#Value')[0].ReturnValue;
    return "HU: " + hu;

}