/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyHU(clientAPI) {

    //console.log("MDK01 HUFindingCreatePropertyHU HU");
    return clientAPI.evaluateTargetPath('#Control:HULstPkr/#Value')[0].ReturnValue;

}