// JavaScript for download button functionality
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.download-button');

    // Event listener for the download button
    downloadButton.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        // Custom logic before download
        const userConfirmed = confirm('Do you want to download this mod?');
        if (userConfirmed) {
            const fileUrl = downloadButton.getAttribute('href');
            downloadFile(fileUrl);
        }
    });

    // Function to handle file download
    function downloadFile(url) {
        const a = document.createElement('a');
        a.href = url;
        a.setAttribute('download', 'mod1.zip'); // Setting the download attribute
        a.click();
    }
});
