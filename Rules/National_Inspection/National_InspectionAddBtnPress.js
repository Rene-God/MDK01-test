import libCom from '../Common/Library/CommonLibrary';
import OnRefreshHuList from './OnRefreshHuList'
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_InspectionAddBtnPress(clientAPI) {

    //console.log("MDK01 National_InspectionAddBtnPress");
    var sample = libCom.getStateVariable(clientAPI, 'National_Inspection_Sample');

    if (sample === 0 || sample <= 3 ) {
        if (sample === 0) {
            libCom.setStateVariable(clientAPI, 'National_Inspection_Sample', 1);
        }
        clientAPI.binding._HandlingUnitAudit = [];
        clientAPI.setActionBinding(clientAPI.binding);
        return OnRefreshHuList(clientAPI)
    } else {
        return clientAPI.executeAction({
            "Name": "/MDK01/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "$(L,'LastSampleReached')"
        }});
    }
}