// Fetch the footer content
fetch('../html/footer.html')
    .then(response => response.text())
    .then(html => {
        // Insert the footer content into the footerContainer div
        document.getElementById('footerContainer').innerHTML = html;
    })
    .catch(error => console.error('Error fetching footer:', error));
