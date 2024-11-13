import libCom from '../Common/Library/CommonLibrary';
import libFindConfig from '../Common/Appointment_Filters/AppointmentFiltersLibrary';

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Get_Supplies_InspectionValidation(clientAPI) {

    console.log("MDK01 Get_Supplies_InspectionValidation");

    return clientAPI._control.setEnabled(false).then(() => {
        var appointmentInp = clientAPI.evaluateTargetPath('#Page:Supplies_Inspection_Create/#Control:FCSIAppointment');

        appointmentInp.clearValidation();
        let val = !(appointmentInp.getValue() === "" || appointmentInp.getValue() === undefined);
        
        if (val) {
            var appointmentInpUppercase = appointmentInp.getValue().toUpperCase();
            let processId = 3;
            let filters = libFindConfig.getAppointmentFilters(clientAPI, processId);

            if (filters.length === 0) {
                libCom.removeStateVariable(clientAPI, 'Supplies_InspectionAddedAttachments');   
                return clientAPI.executeAction("/MDK01/Actions/Supplies_Inspection/Get_Supplies_Inspection.action").then(() => {
                    return clientAPI._control.setEnabled(true);
                });
            } else {
                let hasFilter = filters.some(filter => appointmentInpUppercase.indexOf(filter) >= 0);

                if (hasFilter) {
                    libCom.removeStateVariable(clientAPI, 'Supplies_InspectionAddedAttachments');   
                    return clientAPI.executeAction("/MDK01/Actions/Supplies_Inspection/Get_Supplies_Inspection.action").then(() => {
                        return clientAPI._control.setEnabled(true);
                    });
                } else {
                    appointmentInp.setValidationProperty('ValidationMessage', clientAPI.localizeText('AppointmentIsNotSupplies'));
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