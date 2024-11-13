import libVal from '../Common/Library/ValidationLibrary';
import addSKU from './Countings_CountSKUUpdate';
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Countings_AddSKU(clientAPI, sku) {

    if (!libVal.evalIsEmpty(sku)) {
        var control = clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[1].getControls()[1];
        console.log("MDK01 Countings_AddSKU " + sku);
        //clientAPI._context.clientAPIProps.newControlValue = '';
        //var skuLst = clientAPI.getControl('SectionedTable0').getSections()[1]._context.element.binding._array;
        control.setEnabled(false);
        //var skuLst = clientAPI.evaluateTargetPathForAPI('#Page:CountingsHUDetail').getControl('SectionedTable0').getSections()[2]._context.element.binding._array;
        var skuLst = clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[2]._context.element._props.definition._data.ObjectCells;
        return addSKU(clientAPI,sku,skuLst).then((result)=>{
            console.log("MDK01 Countings_AddSKU fin");
            clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[2]._context.element._props.definition._data.ObjectCells = result;
            clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[2].redraw();
            control.setValue('');
            control.setEnabled(true);
            control.setFocus('AlwaysHide');
            return Promise.resolve();
        },
        (e)=>{
            console.log("MDK01 Countings_AddSKU error");
            clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[1].getControls()[1].setValue('');
            control.setEnabled(true);
            control.setFocus('AlwaysHide');
            return clientAPI.executeAction({
                "Name": "/MDK01/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `${clientAPI.localizeText('SKUNotExpected',[sku])}`,
                    "Duration": 4
                }                
            });           
        })
        .error((e)=>{
            console.log("MDK01 Countings_AddSKU error");
            control.setValue('');
            control.setEnabled(true);
            control.setFocus('AlwaysHide');
            return clientAPI.executeAction({
                "Name": "/MDK01/Actions/GenericToastMessage.action",
                "Properties": {
                    "Message": `${clientAPI.localizeText('SKUNotExpected',[sku])}`,
                    "Duration": 4
                }                
            });           
        });
    }
}

