import ODataDate from '../Common/Date/ODataDate';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Intern_InspectionAttachmentFileNameProperty(clientAPI) {

   
    var dateObj = new ODataDate();
    return clientAPI.binding.handlingUnitId + dateObj.toDBDateTimeString(clientAPI) + '.jpg';

}