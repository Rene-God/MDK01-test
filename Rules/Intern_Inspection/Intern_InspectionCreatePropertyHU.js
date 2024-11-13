/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyHU(clientAPI) {
    let spontaneousInspection = clientAPI.actionResults.Get_Intern_Inspection?.data?._array[0]?.hu;
    let scheduledInspection = clientAPI.actionResults.Get_Intern_Scheduled_Inspection?.data?._array[0]?.hu;
    
    if(spontaneousInspection){
        return spontaneousInspection;
    } else if(scheduledInspection){
        return scheduledInspection;
    }
    return ""
  
}