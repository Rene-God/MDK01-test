import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsHUResumeRejectBtnPress(clientAPI) {

    console.log("MDK01 CountingsHUResumeRejectBtnPress");
    libCom.setStateVariable(clientAPI,'CountingsDecision', 1);
    return clientAPI.executeAction({
        "Name": "/MDK01/Actions/GenericNavigation.action",
        "Properties": {
            "PageToOpen": "/MDK01/Pages/Countings/Countings_Seals.page"
        }             
    });    
}