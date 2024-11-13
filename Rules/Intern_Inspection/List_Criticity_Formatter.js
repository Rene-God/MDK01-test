/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function List_Criticity_Formatter(clientAPI) {

    var criticity = clientAPI.binding.criticidadId
    var text = ""

    if (criticity === 0) {
        text = clientAPI.localizeText('Minor');
    } else if (criticity === 1) {
        text = clientAPI.localizeText('Major');
    }
    else if (criticity === 2) {
        text = clientAPI.localizeText('Critical');
    }

    return text

}