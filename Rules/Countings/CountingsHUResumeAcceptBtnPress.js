import libCom from '../Common/Library/CommonLibrary';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function CountingsHUResumeAcceptBtnPress(clientAPI) {

    console.log("MDK01 CountingsHUResumeAcceptBtnPress");
    libCom.setStateVariable(clientAPI,'CountingsDecision', 0);
    return clientAPI.executeAction({
        "Name": "/MDK01/Actions/GenericNavigation.action",
        "Properties": {
            "PageToOpen": "/MDK01/Pages/Countings/Countings_Seals.page"
        }             
    });    
}