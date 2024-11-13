/**
 * Regresar false si se encuentra en Intern_Inspection_Scheduled_List.page
 * Regresar true en cualquier otro caso
 * @param {IClientAPI} clientAPI
 */
export default function SpontaneousAuditVisible(clientAPI) {
   
    var currentPage = clientAPI.getPageProxy()._page.id
    
    return (currentPage !== "Intern_Inspection_List");
}