import ODataDate from '../Common/Date/ODataDate';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingAttachmentFileNameProperty(clientAPI) {

    //console.log("MDK01 HUFindingAttachmentFileNameProperty");
    var dateObj = new ODataDate();
    return clientAPI.binding.cita + dateObj.toDBDateTimeString(clientAPI) + '.jpg';

}