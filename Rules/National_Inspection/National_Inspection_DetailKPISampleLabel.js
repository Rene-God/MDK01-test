import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_Inspection_DetailKPISampleLabel(clientAPI) {

    //console.log("MDK01 National_Inspection_DetailKPISampleLabel");
    var sample = libCom.getStateVariable(clientAPI, 'National_Inspection_Sample');
    if (sample === undefined ) {sample = 0;};
    return clientAPI.localizeText('Sample') + " " + sample;

}