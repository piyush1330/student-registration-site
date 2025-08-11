// Form select karo
const applicationForm = document.querySelector("form");

applicationForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Page refresh rokna

    // Form ke saare fields ka data lena
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const board = document.getElementById("board").value;
    const year = document.getElementById("year").value.trim();
    const marks = document.getElementById("marks").value.trim();
    const account = document.getElementById("account").value.trim();
    const ifsc = document.getElementById("ifsc").value.trim();
    const bank = document.getElementById("bank").value.trim();

    // Basic validation
    if (!name || !dob || !email || !number || board === "#" || !year || !marks || !account || !ifsc || !bank) {
        alert("Please fill in all fields!");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address!");
        return;
    }

    if (number.length !== 10 || isNaN(number)) {
        alert("Please enter a valid 10-digit phone number!");
        return;
    }

    if (year.length !== 4 || isNaN(year)) {
        alert("Please enter a valid passing year!");
        return;
    }

    if (account.length < 8 || isNaN(account)) {
        alert("Please enter a valid account number!");
        return;
    }

    if (ifsc.length < 6) {
        alert("Please enter a valid IFSC code!");
        return;
    }

    // Object me data store karna
    const applicationData = {
        name,
        dob,
        email,
        number,
        board,
        year,
        marks,
        account,
        ifsc,
        bank
    };

    // LocalStorage me save
    localStorage.setItem("applicationData", JSON.stringify(applicationData));

    alert("Application submitted successfully!");

    // Next page pe redirect karna (tum change kar sakte ho)
    window.location.href = "success.html";
});
