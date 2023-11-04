document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check the username and password (you'd usually do this on the server)
    if (username === 'username' && password === 'password') {
        alert('Login successful!');
        // Redirect to another page or perform other actions upon successful login
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
