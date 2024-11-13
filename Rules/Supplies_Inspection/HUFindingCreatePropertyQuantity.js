/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreatePropertyQuantity(clientAPI) {

    //console.log("MDK01 HUFindingCreatePropertyQuantity");
    return clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Add_HU/#Control:HULstPkr/#Value')[0].BindingObject.HUQuantity;
}