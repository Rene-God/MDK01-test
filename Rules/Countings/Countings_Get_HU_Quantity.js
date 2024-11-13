import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_Get_HU_Quantity(clientAPI) {

    let hu = libCom.getStateVariable(clientAPI,'CountingsHandlingUnit');
    return hu.HUQuantity;


}