import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_InspectionSampleKPIValue(clientAPI) {

    //console.log("MDK01 National_InspectionSampleKPIValue");    
    var sample = libCom.getStateVariable(clientAPI, 'National_Inspection_Sample');
    if (sample === undefined || sample === 0) 
        { return "0/0"; }
    else { 
        let sampleCount = libCom.getStateVariable(clientAPI, 'National_Inspection_SampleCount');
        let militaryStd = libCom.getStateVariable(clientAPI, 'National_Inspection_MilitaryStd');
        if (militaryStd === undefined) {
            militaryStd = 0;
        }        
        //militaryStd = militaryStd * sample;
        return sampleCount + '/' + militaryStd; 
    }
}