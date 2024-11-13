import libCom from '../Common/Library/CommonLibrary';
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Countings_CountSKUUpdate(clientAPI,sku,skuLst) {

    if (skuLst !== undefined && skuLst.length > 0 ) {
        var j = null;
        for (let i=0; i < skuLst.length && j === null; i++){
            if (skuLst[i].ObjectCell.sku === sku ) {
                j = i;
            }
        }
        if (j !== null ) {
            skuLst[j].ObjectCell.count = skuLst[j].ObjectCell.count + 1;
            skuLst[j].ObjectCell.Subhead = clientAPI.localizeText('Quantity',[skuLst[j].ObjectCell.count.toString()]);
            return Promise.resolve(skuLst); 
        } else {
            let document = libCom.getStateVariable(clientAPI,'CountingsDocument');
            let query = `$filter=documento eq '${document}' and handlingUnit eq '${clientAPI.binding.handlingUnitId}'`;
            return clientAPI.read('/MDK01/Services/API01.service','stockKeepingUnit',[],query).then((result)=>{
                if (result === undefined || result._array.length === 0) {
                    return Promise.reject();                    
                } else {
                    for (let i=0; i < result._array.length; i++){
                        if (result._array[i].sku === sku ) {
                            skuLst.push({
                                ObjectCell: {
                                    Title: "SKU: " + sku,
                                    Subhead: clientAPI.localizeText('Quantity',['1']),
                                    count: 1,
                                    sku: sku
                                }
                            });
                            return Promise.resolve(skuLst);                              
                        }                        
                    }                        
                    return Promise.reject();    
                }
            });
        }
    } else {       
        let document = libCom.getStateVariable(clientAPI,'CountingsDocument');
        let query = `$filter=documento eq '${document}' and handlingUnit eq '${clientAPI.binding.handlingUnitId}'`;
        return clientAPI.read('/MDK01/Services/API01.service','stockKeepingUnit',[],query).then((result)=>{
            if (result === undefined || result._array.length === 0) {
                return Promise.reject();                       
            } else {
                for (let i=0; i < result._array.length; i++){
                    if (result._array[i].sku === sku ) {
                        skuLst = [{
                            ObjectCell: {
                                Title: "SKU: " + sku,
                                Subhead: clientAPI.localizeText('Quantity',['1']),
                                count: 1,
                                sku: sku
                            }
                        }]; 
                        return Promise.resolve(skuLst);
                    }                           
                }
                return Promise.reject();                              
            }
        });
    }  
}