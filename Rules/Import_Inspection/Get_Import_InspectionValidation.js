import libCom from '../Common/Library/CommonLibrary';
import libFindConfig from '../Common/Appointment_Filters/AppointmentFiltersLibrary';

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Import_InspectionValidation(clientAPI) {

    return clientAPI._control.setEnabled(false).then(() => {
        console.log("MDK01 Get_Import_InspectionValidation");
        var appointmentInp = clientAPI.evaluateTargetPath('#Page:Import_Inspection_Create/#Control:FCIIAppointment');

        appointmentInp.clearValidation();
        let val = !(appointmentInp.getValue() === "" || appointmentInp.getValue() === undefined);
        
        if (val) {
            var appointmentInpUppercase = appointmentInp.getValue().toUpperCase();
            let processId = 5;
            let filters = libFindConfig.getAppointmentFilters(clientAPI, processId);

            if (filters.length === 0) {
                libCom.removeStateVariable(clientAPI, 'Import_InspectionAddedAttachments');   
                return clientAPI.executeAction("/MDK01/Actions/Import_Inspection/Get_Import_Inspection.action").then(() => {
                    return clientAPI._control.setEnabled(true);
                });
            } else {

                let hasFilter = filters.some(filter => appointmentInpUppercase.indexOf(filter) >= 0);

                if (hasFilter) {
                    libCom.removeStateVariable(clientAPI, 'Import_InspectionAddedAttachments');   
                    return clientAPI.executeAction("/MDK01/Actions/Import_Inspection/Get_Import_Inspection.action").then(() => {
                        return clientAPI._control.setEnabled(true);
                    });
                } else {
                    appointmentInp.setValidationProperty('ValidationMessage', clientAPI.localizeText('AppointmentIsNotImport'));
                    appointmentInp.setValidationProperty('SeparatorIsHidden', false);
                    appointmentInp.setValidationProperty('ValidationViewIsHidden', false);
                    appointmentInp.setValidationProperty('ValidationMessageColor', "ff0000");
                    appointmentInp.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
                    return clientAPI._control.setEnabled(true);
                }
            }
        } else {
            appointmentInp.setValidationProperty('ValidationMessage', clientAPI.localizeText('fillOneFilterValidation'));
            appointmentInp.setValidationProperty('SeparatorIsHidden', false);
            appointmentInp.setValidationProperty('ValidationViewIsHidden', false);
            appointmentInp.setValidationProperty('ValidationMessageColor', "ff0000");
            appointmentInp.setValidationProperty('ValidationViewBackgroundColor', "fffa00");
            return clientAPI._control.setEnabled(true);
        }
    });
}
