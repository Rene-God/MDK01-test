import libCom from '../Common/Library/CommonLibrary';
import libFindConfig from '../Common/Appointment_Filters/AppointmentFiltersLibrary';

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Intern_InspectionValidation(clientAPI) {

    console.log("MDK01 Get_Intern_InspectionValidation");

    return clientAPI._control.setEnabled(false).then(() => {    
        var InspectionArea = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FCIIInspectionArea');
        var HUInput = clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Create/#Control:FCIIHU');
        var errorFlag = false;

        InspectionArea.clearValidation();
        HUInput.clearValidation();

        if (InspectionArea.getValue() === "" || InspectionArea.getValue() === undefined) {
            errorFlag = true;
            InspectionArea.setValidationProperty('ValidationMessage', clientAPI.localizeText('BothFieldsAreRequired'));
            InspectionArea.setValidationProperty('SeparatorIsHidden', false);
            InspectionArea.setValidationProperty('ValidationViewIsHidden', false);
            InspectionArea.setValidationProperty('ValidationMessageColor', "ff0000");
            InspectionArea.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
        }

        if (HUInput.getValue() === "" || HUInput.getValue() === undefined) {
            errorFlag = true;
            HUInput.setValidationProperty('ValidationMessage', clientAPI.localizeText('BothFieldsAreRequired'));
            HUInput.setValidationProperty('SeparatorIsHidden', false);
            HUInput.setValidationProperty('ValidationViewIsHidden', false);
            HUInput.setValidationProperty('ValidationMessageColor', "ff0000");
            HUInput.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
        }

        if (!errorFlag) {
            var HUInputUppercase = HUInput.getValue().toUpperCase();
            let processId = 2;
            let filters = libFindConfig.getAppointmentFilters(clientAPI, processId);

            if (filters.length === 0) {
                return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/Get_Intern_Inspection.action").then(() => {
                    return clientAPI._control.setEnabled(true);
                });
            } else {
                let hasFilter = filters.some(filter => HUInputUppercase.indexOf(filter) >= 0);

                if (hasFilter) {
                    return clientAPI.executeAction("/MDK01/Actions/Intern_Inspection/Get_Intern_Inspection.action").then(() => {
                        return clientAPI._control.setEnabled(true);
                    });
                } else {
                    HUInput.setValidationProperty('ValidationMessage', clientAPI.localizeText('AppointmentIsNotIntern'));
                    HUInput.setValidationProperty('SeparatorIsHidden', false);
                    HUInput.setValidationProperty('ValidationViewIsHidden', false);
                    HUInput.setValidationProperty('ValidationMessageColor', "ff0000");
                    HUInput.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
                    return clientAPI._control.setEnabled(true);
                }
            }
        } else {
            clientAPI._control.setEnabled(true);
            return Promise.resolve();  
        }
    });
}
