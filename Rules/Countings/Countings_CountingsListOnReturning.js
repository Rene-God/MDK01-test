
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function Countings_CountingsListOnReturning(clientAPI) {
    
    console.log("MDK01 Countings_CountingsListOnReturning");
    clientAPI.getControl('SectionedTable0').getSections()[0].redraw();
}