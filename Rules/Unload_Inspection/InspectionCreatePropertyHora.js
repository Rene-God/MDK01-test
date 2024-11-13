import ODataDate from '../Common/Date/ODataDate';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function InspectionCreatePropertyHora(clientAPI) {

    return new ODataDate().toLocalTimeString(clientAPI);

}