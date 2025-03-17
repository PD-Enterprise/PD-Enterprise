export const TINYMCE_API_KEY = '77113o6nm4lp839h0eqg3av0tgjy4i1km5qujbe898q2aib3'; // replace with actual enterprise key

export const getEditorConfig = (apiUrl: string) => ({
    height: 400,
    menubar: false,
    plugins: 'image code table lists link',
    toolbar: 'undo redo | blocks | bold italic | alignleft aligncenter alignright | bullist numlist | link image | code',
    images_upload_url: `${apiUrl}pd-enterprise/upload`,
    images_upload_handler: async function (blobInfo: any) {
        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());
        try {
            const response = await fetch(`${apiUrl}pd-enterprise/upload`, {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            return result.url;
        } catch (err) {
            console.error('Upload failed:', err);
            return '';
        }
    }
}); 