// JavaScript to handle CV download
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the CV file
    var cvPath = 'uploads/mycv.pdf';

    // Create a temporary link element
    var link = document.createElement('a');
    link.href = "uploads/mycv.pdf";
    link.download = 'Muhammad_Faham_Siddiqui_CV'; // Set the filename for download
    link.target = '_blank';  // Open the file in a new tab (unusual for download)
    document.body.appendChild(link);

    // Trigger the click event to open the file in a new tab
    link.click();

    // Remove the temporary link from the document
    document.body.removeChild(link);
});

// JavaScript to handle CV download
document.getElementById('downloadBtn2').addEventListener('click', function() {
    // Path to the CV file
    var cvPath = 'uploads/mycv.pdf';

    // Create a temporary link element
    var link = document.createElement('a');
    link.href = "uploads/mycv.pdf";
    link.download = 'Muhammad_Faham_Siddiqui_CV'; // Set the filename for download
    link.target = '_blank';  // Open the file in a new tab (unusual for download)
    document.body.appendChild(link);

    // Trigger the click event to open the file in a new tab
    link.click();

    // Remove the temporary link from the document
    document.body.removeChild(link);
});

