/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyAreaDesc(clientAPI) {
    let spontaneous = clientAPI.actionResults.Get_Intern_Inspection?.data?._array[0]?.areaDesc;
    let scheduledInspection = clientAPI.actionResults.Get_Intern_Scheduled_Inspection?.data?._array[0]?.areadesc;

    if (spontaneous !== undefined) {
        return spontaneous;
    } else {
        return scheduledInspection;
    }

}