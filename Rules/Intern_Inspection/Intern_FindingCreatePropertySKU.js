/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Intern_FindingCreatePropertySKU(clientAPI) {

  
    return clientAPI.evaluateTargetPath('#Page:Intern_Inspection_Add_SKU_Finding/#Control:Intern_SKULstPkr/#Value')[0].ReturnValue;

}