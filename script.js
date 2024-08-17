async function fetchUser() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        document.getElementById('user-pic').src = user.picture.large;
        document.getElementById('user-name').textContent = `Name: ${user.name.first} ${user.name.last}`;
        document.getElementById('user-email').textContent = `Email: ${user.email}`;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Fetch a user when the page loads
fetchUser();