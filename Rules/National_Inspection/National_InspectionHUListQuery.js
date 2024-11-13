import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function National_InspectionHUListQuery(clientAPI) {

    var sample = libCom.getStateVariable(clientAPI,'National_Inspection_Sample');
    if ( sample ) {
        return '$filter=_HallazgoHu/any(m: m/numeroMuestra eq ' + sample + ')&$expand=_HallazgoHu,_StockKeepingUnitAudit';
    } else {
        return '$filter=_HallazgoHu/any(m: m/numeroMuestra eq 0)';
    }    

}