/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Intern_Scheduled_Inspection_Validation(clientAPI) {

    console.log("MDK01 Get_Intern_Scheduled_Inspection_Validation");
    if (clientAPI.actionResults.Get_Intern_Scheduled_Inspection.data === undefined || clientAPI.actionResults.Get_Intern_Scheduled_Inspection.data._array.length === 0) {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericMessageBox.action",
            "Properties": {
                "Message": "$(L,'InspectionAreaNotValid')",
                "OKCaption": "$(L,'OK')"
            }
        })
    } else {
        var query = "$filter=inspectionCompleted eq false";
        var inspectionArea = clientAPI.actionResults.Get_Intern_Scheduled_Inspection?.data?._array[0]?.area;
        query = query + ` and areaInspeccion eq '${inspectionArea}'`;
        return clientAPI.read('/MDK01/Services/API05.service', 'HUItr', [], query).then((result) => {
            if (result === undefined || result._array.length === 0) {
                console.log("MDK01 Inspection doesn't exist");
                return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/Intern_InspectionHeaderCreate.action");;
            } else {
                clientAPI.setActionBinding(result._array[0]);
                console.log("MDK01 Inspection exists");
                return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/NavToInternNewInspectionDetail.action");
            }
        })
    }

}