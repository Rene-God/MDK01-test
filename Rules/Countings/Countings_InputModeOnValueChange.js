import addSKU from './Countings_AddSKU';
/**
* Describe this function...
* @param {IClientAPI} clientAPI
*/
export default function Countings_ScanSKUOnValueChange(clientAPI) {
    console.log("MDK01 Countings_InputModeOnValueChange");
    if (clientAPI._context.clientAPIProps.newControlValue[0].ReturnValue === "1") {
        clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[1].getControls()[2].IsVisible = false;
        clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[1].getControls()[2].visible = false;
        clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[1].redraw();
    } else {
        clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[1].getControls()[2].IsVisible = true;
        clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[1].getControls()[2].visible = true;
        clientAPI.getPageProxy().getControl('SectionedTable0').getSections()[1].redraw();        
    }
}

