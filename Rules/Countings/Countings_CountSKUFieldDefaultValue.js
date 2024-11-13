import IsAndroid from "../Common/IsAndroid";
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Countings_CountSKUFieldDefaultValue(clientAPI) {
    return IsAndroid(clientAPI) ? "1" : "2";
}