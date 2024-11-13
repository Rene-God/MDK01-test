/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_InspectionAddHUSealsContinueBtnPress(clientAPI) {

    console.log("MDK01 National_InspectionAddHUSealsContinueBtnPress");

    clientAPI._control.setEnabled(false);
    return clientAPI.executeAction("/MDK01/Actions/National_Inspection/SKUAuditSealsRequiredFields.action").then(()=>{
        return clientAPI._control.setEnabled(true);
    })
    .error((e)=>{
        return clientAPI._control.setEnabled(true);
    })
    .catch((e)=>{
        return clientAPI._control.setEnabled(true);
    });                   
}