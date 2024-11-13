import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_Get_HU_Id(clientAPI) {

    let hu = libCom.getStateVariable(clientAPI,'CountingsHandlingUnit');
    return hu.handlingUnit;
}