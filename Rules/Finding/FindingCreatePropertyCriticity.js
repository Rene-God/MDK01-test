
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FindingCreatePropertyCriticity(clientAPI) {

    //console.log("MDK01 FindingCreatePropertyCriticity: " + clientAPI.evaluateTargetPath('#Page:FindingCreate/#Control:CriticitySeg/#Value')[0].ReturnValue);
    return clientAPI.evaluateTargetPath('#Page:FindingCreate/#Control:CriticitySeg/#Value')[0].ReturnValue;

}