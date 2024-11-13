/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_HUDetailOnActivityBackPressed(clientAPI) {

    console.log("MDK01 Countings_HUDetailOnActivityBackPressed");
    clientAPI.getAppEventData().cancel = true;
}