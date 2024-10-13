// פונקציה להורדת נתונים מה-API
function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const userList = document.getElementById('user-list');
            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // מציג את שם המשתמש
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
}

// קורא לפונקציה בעת טעינת הדף
fetchUsers();