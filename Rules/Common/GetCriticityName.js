import CommonLibrary from "./Library/CommonLibrary";

export default function GetCriticityName(clientAPI) {
    CommonLibrary.getCriticityName(clientAPI,clientAPI.binding.criticidadId);
}

