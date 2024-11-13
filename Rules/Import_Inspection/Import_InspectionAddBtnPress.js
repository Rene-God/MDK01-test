import libCom from '../Common/Library/CommonLibrary';
import OnRefreshHuList from './OnRefreshHuList'
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Import_InspectionAddBtnPress(clientAPI) {

    //console.log("MDK01 Import_InspectionAddBtnPress");
    var sample = libCom.getStateVariable(clientAPI, 'Import_Inspection_Sample');

    if (sample === 0 || sample <= 3 ) {
/*         sample++;
        libCom.setStateVariable(clientAPI,'Import_Inspection_Sample',sample); */
        if (sample === 0) {
            libCom.setStateVariable(clientAPI, 'Import_Inspection_Sample', 1);
        }
        clientAPI.binding._HandlingUnitAudit = [];
        clientAPI.setActionBinding(clientAPI.binding);
        return OnRefreshHuList(clientAPI) ;
    } else {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "$(L,'LastSampleReached')"
        }});
    }
}