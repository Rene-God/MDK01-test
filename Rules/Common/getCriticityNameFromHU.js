
import CommonLibrary from "./Library/CommonLibrary";
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function getCriticityNameFromHU(clientAPI) {
    if (clientAPI.binding._HallazgoHu !== undefined && clientAPI.binding._HallazgoHu.length > 0) {
        let criticidadId = clientAPI.binding._HallazgoHu[0].criticidadId;
        return CommonLibrary.getCriticityName(clientAPI,criticidadId);
    }
}