/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyQuantity(clientAPI) {

    return clientAPI.evaluateTargetPath('#Control:HULstPkr/#Value')[0].BindingObject.HUQuantity;

}