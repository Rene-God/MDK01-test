import libFindConfig from '../Common/Appointment_Filters/AppointmentFiltersLibrary';
/**
 * 
 * @param {IClientAPI} clientAPI
 */
export default function National_InspectionAuditListFilter(clientAPI) {
    var dateObj = new Date();
    var month = dateObj.getMonth();
    var day = dateObj.getDate();
    var dateFilter = dateObj.getFullYear() + '-';
    month < 10 ? dateFilter = dateFilter + '0' + month + '-' : dateFilter = dateFilter + month + '-';
    day < 10 ? dateFilter = dateFilter + '0' + day : dateFilter = dateFilter + day;
    
   
    let processID = 6; 
    let appointmentFilters = libFindConfig.getAppointmentFilters(clientAPI,6);

 
    let citaFilter = '';
    if (appointmentFilters.length > 0) {
        citaFilter = appointmentFilters.map(filter => `contains(cita,'${filter}')`).join(' or ');
    }

    return `$filter=processId eq ${processID} and inspectionCompleted eq false and (${citaFilter})`;
}
