import libCom from '../Common/Library/CommonLibrary';
import libSam from '../Common/SampleLogic/SampleLogicLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_InspectionStartNewSample(clientAPI) {

    console.log("MDK01 National_InspectionStartNewSample");
    var sample = libCom.getStateVariable(clientAPI,'National_Inspection_Sample');
    //var sampleSize = libCom.setStateVariable(clientAPI, 'Import_Inspection_MilitaryStd');
    sample++;
    libCom.setStateVariable(clientAPI, 'National_Inspection_Sample', sample);
    libCom.setStateVariable(clientAPI, 'National_Inspection_SampleCount', 0);
    libCom.setStateVariable(clientAPI, 'National_Inspection_SampleRejects', 0 );

    let tu = clientAPI.binding;
    let query = `$filter=(guidTu eq ${tu.guidTu})&$top=1`;
    return clientAPI.read('/MDK01/Services/API05.service', 'SKUAUDIT',[], query).then((result) => {
        if (result !== undefined && result._array.length > 0) {   
            let sku = result._array[0]; 
            return libSam.setMilitaryStd(clientAPI,sku,tu,0,sample,milStdReadSuccessful ,milStdReadError);
        }
    })
}


export function milStdReadSuccessful(clientAPI,cant,tu,cantMuestra,piezasRechazo) {
    libSam.setSampleStateVariables(clientAPI,cantMuestra,piezasRechazo, 'National');   
    clientAPI.evaluateTargetPathForAPI('#Page:National_Inspection_Detail').getControl('SectionedTable0').getSections()[1].redraw();
    clientAPI.evaluateTargetPathForAPI('#Page:National_Inspection_Detail').getControl('SectionedTable0').getSections()[2].redraw();                    
    return Promise.resolve();
}

export function milStdReadError(clientAPI,tu) {
    console.log("MDK01 National_InspectionStartNewSample exception");
    return clientAPI.executeAction({
        "Name": "/MDK01/Actions/GenericToastMessage.action",
        "Properties": {
            "Message": `${clientAPI.localizeText('FetchMilitaryStandardFailed')}`
        }                
    });
}