fetch("https://api.7digital.com/1.2/")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('data-container');
        container.innerHTML = JSON.stringify(data, null, 2); // מציג את הנתונים בפורמט JSON
    })
    .catch(error => console.error('Error:', error));