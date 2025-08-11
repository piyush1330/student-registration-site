const loginbtn = document.querySelector(".login-btn");

loginbtn.addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // ✅ same key name as in register.js
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
        alert("No user found. Please register first");
        window.location.href = "register.html";
        return;
    }

    if (username === storedUser.username && password === storedUser.password) {
        alert("Login Successfully");
        window.location.href = "choose.html";
    } else {
        alert("Invalid username or password");
    }
});
