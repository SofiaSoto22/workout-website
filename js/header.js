// Fetch the header content
fetch('../html/header.html')
    .then(response => response.text())
    .then(html => {
        // Insert the header content into the headerContainer div
        document.getElementById('headerContainer').innerHTML = html;
    })
    .catch(error => console.error('Error fetching header:', error));
    
