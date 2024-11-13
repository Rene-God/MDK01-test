/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsHUResumeRestartBtnPress(clientAPI) {

    console.log("MDK01 CountingsHUResumeRestartBtnPress");
    clientAPI.evaluateTargetPathForAPI('#Page:CountingsHUDetail').getControl('SectionedTable0').getSections()[2]._context.element._props.definition._data.ObjectCells = []; 
    return clientAPI.executeAction({
        "Name": "/MDK01/Actions/GenericToastMessage.action",
        "Properties": {
            "Message": `${clientAPI.localizeText('CountingRestarted')}`
        }                
    }).then(()=>{
        return clientAPI.executeAction("/MDK01/Actions/Countings/NavToCountingsNewInspectionDetail.action");
    })
}