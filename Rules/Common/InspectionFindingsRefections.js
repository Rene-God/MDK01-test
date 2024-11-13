export default class {

    static InspectionFindingsRefections(clientAPI, completeAction, muestra) {

        console.log("MDK01 InspectionFindingsRefections");

        var query = clientAPI.binding["@odata.readLink"];
        return clientAPI.read('/MDK01/Services/API05.service', query, [], "$expand=_HandlingUnitAudit($expand=_HallazgoHu)").then(result => {
            var actionArray = [];     
            var huArrayCriticity1 = [];
            var huArrayCriticity2 = [];
             
            for (let i = 0; i < result.getItem(0)._HandlingUnitAudit.length; i ++) {
                let huAudit = result.getItem(0)._HandlingUnitAudit[i];                         
                for (let j = 0; j < huAudit._HallazgoHu.length; j ++) {
                    let hallazgo = huAudit._HallazgoHu[j];

                    // Verificar si el número de muestra coincide o si ambos son undefined
                    if ((muestra === undefined) || (muestra !== undefined && hallazgo.numeroMuestra === muestra)) {
                        if (hallazgo.criticidadId === 1) {
                            huArrayCriticity1.push( huAudit["@odata.readLink"]);
                        }
                        if (hallazgo.criticidadId === 2) {
                            huArrayCriticity2.push( huAudit["@odata.readLink"]);
                        }
                    }
                }
            }    

            if (huArrayCriticity1.length > 0) {
                console.log("MDK01 InspectionFindingsRefections criticiy 1");            
                return clientAPI.executeAction('/MDK01/Actions/National_Inspection/FinishNationalInspectionRejectionMessage.action').then((resp)=> {
                    if (resp.data) {
                        console.log("MDK01 InspectionFindingsRefections user rejection yes");                
                        for (let i = 0; i < huArrayCriticity1.length; i++) {
                            actionArray.push(clientAPI.executeAction({
                                'Name': '/MDK01/Actions/TU_Inspection/HUFindingUpdate.action',                    
                                'Properties': {
                                    'Properties': {
                                        'decisionId': 1
                                    },
                                    'Target': {
                                        "ReadLink": `${huArrayCriticity1[i]}`,
                                        "EntitySet": "HUAUDIT",
                                        "Service": "/MDK01/Services/API05.service"
                                    }
                                }
                            }));
                        }
                    };
                    for (let i = 0; i < huArrayCriticity2.length; i++) {
                        actionArray.push(clientAPI.executeAction({
                            'Name': '/MDK01/Actions/TU_Inspection/HUFindingUpdate.action',                    
                            'Properties': {
                                'Properties': {
                                    'decisionId': 1
                                },
                                'Target': {
                                    "ReadLink": `${huArrayCriticity2[i]}`,
                                    "EntitySet": "HUAUDIT",
                                    "Service": "/MDK01/Services/API05.service"
                                }
                            }
                        }));
                    }                
                    return Promise.all(actionArray).then((result)=>{
                        return clientAPI.executeAction(completeAction);
                    }, (error)=>{
                        console.log("MDK01 InspectionFindingsRefections error");
                        return clientAPI.executeAction({
                            "Name": "/MDK01/Actions/GenericToastMessage.action",
                            "Properties": {
                                "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
                            }                
                        }).then(() => {
                            return clientAPI.executeAction('/MDK01/Actions/NavToHome.action')
                        });
                    })  
                }, (error) =>{
                    console.log("MDK01 InspectionFindingsRefections error");
                    return clientAPI.executeAction({
                        "Name": "/MDK01/Actions/GenericToastMessage.action",
                        "Properties": {
                            "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
                        }                
                    }).then(() => {
                        return clientAPI.executeAction('/MDK01/Actions/NavToHome.action')
                    });
                });
            } else {
                console.log("MDK01 InspectionFindingsRefections criticiy 2"); 
                for (let i = 0; i < huArrayCriticity2.length; i++) {
                    actionArray.push(clientAPI.executeAction({
                        'Name': '/MDK01/Actions/TU_Inspection/HUFindingUpdate.action',                    
                        'Properties': {
                            'Properties': {
                                'decisionId': 1
                            },
                            'Target': {
                                "ReadLink": `${huArrayCriticity2[i]}`,
                                "EntitySet": "HUAUDIT",
                                "Service": "/MDK01/Services/API05.service"
                            }
                        }
                    }));
                }
                return Promise.all(actionArray).then((result)=>{
                    return clientAPI.executeAction(completeAction);
                }, (error)=>{
                    console.log("MDK01 InspectionFindingsRefections error");
                    return clientAPI.executeAction({
                        "Name": "/MDK01/Actions/GenericToastMessage.action",
                        "Properties": {
                            "Message": `${clientAPI.localizeText('HUFindingChangeSetUpdateFailed')}`
                        }                
                    }).then(() => {
                        return clientAPI.executeAction('/MDK01/Actions/NavToHome.action')
                    });
                })                            
            }
        });
    }
}
