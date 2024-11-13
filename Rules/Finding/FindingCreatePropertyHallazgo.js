
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyHallazgo(clientAPI) {

    console.log("MDK01 FindingCreatePropertyHallazgo: " + clientAPI.evaluateTargetPath('#Page:FindingCreate/#Control:FindingLstPkr/#Value')[0].ReturnValue);
    return clientAPI.evaluateTargetPath('#Page:FindingCreate/#Control:FindingLstPkr/#Value')[0].ReturnValue;

}