import libCom from '../Common/Library/CommonLibrary';
import libFindConfig from '../Common/Appointment_Filters/AppointmentFiltersLibrary';

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Unload_InspectionValidation(clientAPI) {

    console.log("MDK01 Get_Unload_InspectionValidation");

    return clientAPI._control.setEnabled(false).then(() => {
        var appointmentInp = clientAPI.evaluateTargetPath('#Page:Unload_Inspection_Create/#Control:FCUIAppointment');

        appointmentInp.clearValidation();
        let val = !(appointmentInp.getValue() === "" || appointmentInp.getValue() === undefined);
        
        if (val) {
            var appointmentInpUppercase = appointmentInp.getValue().toUpperCase();
            let processId = 1; 
            let filters = libFindConfig.getAppointmentFilters(clientAPI, processId);

            if (filters.length === 0) {
               
                libCom.removeStateVariable(clientAPI, 'TU_InspectionAddedAttachments');        
                return clientAPI.executeAction("/MDK01/Actions/Unload_Inspection/Get_Unload_TU_Inspection.action").then(() => {
                    return clientAPI._control.setEnabled(true);
                });
            } else {
                let hasFilter = filters.some(filter => appointmentInpUppercase.indexOf(filter) >= 0);

                if (hasFilter) {
                    libCom.removeStateVariable(clientAPI, 'TU_InspectionAddedAttachments');        
                    return clientAPI.executeAction("/MDK01/Actions/Unload_Inspection/Get_Unload_TU_Inspection.action").then(() => {
                        return clientAPI._control.setEnabled(true);
                    });
                } else {
                    appointmentInp.setValidationProperty('ValidationMessage', clientAPI.localizeText('AppointmentIsNotUnload'));
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
            clientAPI._control.setEnabled(true);
            return Promise.resolve();
        }
    });
}
