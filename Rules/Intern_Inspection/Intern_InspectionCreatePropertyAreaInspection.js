/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyAreaInspection(clientAPI) {
    let spontaneous = clientAPI.actionResults.Get_Intern_Inspection?.data?._array[0]?.area;
    let scheduledInspection = clientAPI.actionResults.Get_Intern_Scheduled_Inspection?.data?._array[0]?.area;

    if (spontaneous !== undefined) {
        return spontaneous;
    } else {
        return scheduledInspection;
    }

  
}