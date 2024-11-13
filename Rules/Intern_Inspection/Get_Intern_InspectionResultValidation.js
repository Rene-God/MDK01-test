/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Intern_InspectionResultValidation(clientAPI) {

    console.log("MDK01 Get_Intern_InspectionResultValidation");
    if (clientAPI.actionResults.Get_Intern_Inspection.data === undefined || clientAPI.actionResults.Get_Intern_Inspection.data._array.length === 0) {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericMessageBox.action",
            "Properties": {
                "Message": "$(L,'InspectionAreaNotValid')",
                "OKCaption": "$(L,'OK')"
            }
        })
    } else {
        var query = "$filter=inspectionCompleted eq false";
        var inspectionArea = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FCIIInspectionArea').getValue();
        var huInputValue = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FCIIHU').getValue();

        query = query + ` and areaInspeccion eq '${inspectionArea}' and handlingUnitId eq '${huInputValue}'`;

        return clientAPI.read('/MDK01/Services/API05.service', 'HUItr', [], query).then((result) => {
            if (result === undefined || result._array.length === 0) {
                console.log("MDK01 Inspection doesn't exist");
                return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/Intern_InspectionHeaderCreate.action");
            } else {
                clientAPI.setActionBinding(result._array[0]);
                console.log("MDK01 Inspection exists in API05");
                return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/NavToInternNewInspectionDetail.action");
            }
        })


    }

}