/**
 * @param {IClientAPI} clientAPI
 */
export default async function OnReturning(clientAPI) {
    
    try {
        let guidHu = clientAPI.binding.guidHu;
        let querySku = `$filter=guidHu eq ${guidHu}&$expand=_StockKeepingUnitItrHallazgo`;

        let [read1Results, read2Results] = await Promise.all([
            clientAPI.read('/MDK01/Services/API05.service', clientAPI.binding['@odata.readLink'], [], '$expand=_HallazgoItr'),
            clientAPI.read('/MDK01/Services/API05.service', "SKUItr", [], querySku)
        ]);

        let fioriToolbar = clientAPI.currentPage._fioriToolbar._items;
        let rejectButton = fioriToolbar[0];
        let acceptButton = fioriToolbar[1];

        let result1 = read1Results.getItem(0)?._HallazgoItr || [];
        let result2 = read2Results.getItem(0)?._StockKeepingUnitItrHallazgo || [];

        let hasCritico = false;
        let hasMajor = false;
        let hasMenor = true;

        function verifyArray(array) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].criticidadId === 9) {
                    continue;
                }
                if (array[i].criticidadId === 2) {
                    hasCritico = true;
                }
                if (array[i].criticidadId === 1) {
                    hasMajor = true;
                }
                if (array[i].criticidadId !== 0) {
                    hasMenor = false;
                }
            }
        }

        if (result1.length > 0) {
            verifyArray(result1);
        }

        if (result2.length > 0) {
            verifyArray(result2);
        }

        if (hasCritico) {
            acceptButton.setEnabled(false);
            rejectButton.setEnabled(true);
        } else if (hasMajor) {
            acceptButton.setEnabled(true);
            rejectButton.setEnabled(true);
        } else if (hasMenor) {
            acceptButton.setEnabled(true);
            rejectButton.setEnabled(false);
        } else {
            acceptButton.setEnabled(true);
            rejectButton.setEnabled(true);
        }

    } catch (error) {
        console.error("Error during read operations:", error);

        let fioriToolbar = clientAPI.currentPage._fioriToolbar._items;
        let rejectButton = fioriToolbar[0];
        let acceptButton = fioriToolbar[1];

        acceptButton.setEnabled(false);
        rejectButton.setEnabled(false);
    }
}
