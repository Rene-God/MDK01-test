/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default async function OnWillUpdate(clientAPI) {
    const result = await clientAPI.executeAction('/MDK01/Actions/Application/OnWillUpdate.action');
    if (result.data) {
        return Promise.resolve();
    } else {
        return Promise.reject('User Deferred');
    }
}