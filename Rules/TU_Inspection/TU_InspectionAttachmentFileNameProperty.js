import ODataDate from '../Common/Date/ODataDate';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function TU_InspectionAttachmentFileNameProperty(clientAPI) {

    //console.log("MDK01 TU_InspectionAttachmentFileNameProperty");
    var dateObj = new ODataDate();
    return clientAPI.binding.cita + dateObj.toDBDateTimeString(clientAPI) + '.jpg';

}