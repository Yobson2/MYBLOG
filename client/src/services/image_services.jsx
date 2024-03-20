export const handleFileInput = (file, callback) => {
    if (file) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            const base64Image = reader.result;
            callback(base64Image);
        });
        reader.readAsDataURL(file);
    } else {
        callback(null);
    }
}
