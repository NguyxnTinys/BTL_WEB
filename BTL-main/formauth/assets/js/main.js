document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    const registerLink = document.getElementById("registerLink");
    const loginLink = document.getElementById("loginLink");


    registerLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
    });

    loginLink.addEventListener("click", function(e) {
        e.preventDefault();
        registerForm.classList.remove("active");
        loginForm.classList.add("active");
    });
});


document.getElementById('chatIcon').addEventListener('click', function() {
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block'; 
    } else {
        chatContainer.style.display = 'none'; 
    }
});

// quay về trang chủ

const removeButton = document.querySelector(".wrapper .icon-close");

if (removeButton) {
    removeButton.addEventListener("click", function() {
        window.location.href = "index.html"; 
    });
}
