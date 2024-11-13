import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Import_Inspection_DetailKPISampleLabel(clientAPI) {

    //console.log("MDK01 Import_Inspection_DetailKPISampleLabel");
    var sample = libCom.getStateVariable(clientAPI, 'Import_Inspection_Sample');
    if (sample === undefined ) {sample = 0;};
    return clientAPI.localizeText('Sample') + " " + sample;

}