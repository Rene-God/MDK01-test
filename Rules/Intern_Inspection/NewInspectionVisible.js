/**
 * Regresar false si se encuentra en Intern_Inspection_Scheduled_List.page
 * Regresar true en cualquier otro caso
 * @param {IClientAPI} clientAPI
 */
export default function NewInspectionVisible(clientAPI) {
    // Obtén la ruta de la página actual
    var currentPage = clientAPI.getPageProxy()._page.id;
    // Regresar false si se encuentra en la página de Inspección Programada
    return (currentPage !== "Intern_Inspection_Create");
}