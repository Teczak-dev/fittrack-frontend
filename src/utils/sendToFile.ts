import type { SavedData } from "../types/savedData";

// Function to send data to a file by creating a downloadable JSON filename
// and triggering a download in the browser
// Usage:
// sendToFile(data, 'backup.json');
export const sendToFile = (data: SavedData, filename: string) => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);


    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
}
