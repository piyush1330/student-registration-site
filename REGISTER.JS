
const registerbt = document.querySelector(".register-btn");

registerbt.addEventListener("click", function() {
    const username = document.getElementById("reg-username").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value.trim();

    if (!username || !email || !password) {
        alert("All Fields Are Required");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    const userData = { username, email, password };

    // ✅ consistent key name
    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Registered Successfully");
    window.location.href = "choose.html";
});
