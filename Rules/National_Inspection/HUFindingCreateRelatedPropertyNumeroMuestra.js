import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function HUFindingCreateRelatedPropertyNumeroMuestra(clientAPI) {

    //console.log("MDK01 HUFindingCreateRelatedPropertyNumeroMuestra");
    let sample = libCom.getStateVariable(clientAPI, 'National_Inspection_Sample');
    if (sample === 0) { return sample + 1; } else { return sample };
}