// Hàm để chuyển đổi hiển thị của navbar mobile
function toggleNavbar() {
    const navbarMobile = document.getElementById('navbarNavMobile'); // Lấy navbar mobile
    navbarMobile.classList.toggle('show'); // Thêm hoặc xóa class 'show'
}

// Setup navbar toggler functionality
function setupNavbarToggler() {
    const navbarToggle = document.querySelector('.navbar-toggler'); // Lấy nút toggle
    navbarToggle.addEventListener('click', toggleNavbar); // Gắn sự kiện click với hàm toggleNavbar
}

// Initialize the event listeners for navigation and navbar
document.addEventListener("DOMContentLoaded", () => {
    setupNavbarToggler(); // Khởi tạo navbar toggler
});


document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.getElementById('prev2');
    const nextButton = document.getElementById('next2');
    const mainElements = document.querySelectorAll('.main'); // Lấy tất cả các phần tử main
    let activeIndex = 1; // Chỉ số active ban đầu
    let autoChange; // Biến để lưu bộ hẹn giờ

    function updateActive() {
        mainElements.forEach((element, index) => {
            if (index === activeIndex) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
            }
        });
    }

    function startAutoChange() {
        autoChange = setInterval(function () {
            activeIndex = (activeIndex + 1) % mainElements.length;
            updateActive();
        }, 5000);
    }

    function stopAutoChange() {
        clearInterval(autoChange);
    }

    if (prevButton) {
        prevButton.addEventListener('click', function () {
            activeIndex = (activeIndex - 1 + mainElements.length) % mainElements.length;
            updateActive();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function () {
            activeIndex = (activeIndex + 1) % mainElements.length;
            updateActive();
        });
    }

    // Bắt đầu tự động chuyển đổi
    startAutoChange();

    // Ngừng tự động chuyển đổi khi hover vào mainElements
    mainElements.forEach(element => {
        element.addEventListener('mouseenter', stopAutoChange); // Ngừng khi hover
        element.addEventListener('mouseleave', startAutoChange); // Khôi phục khi rời khỏi
    });

    // Cập nhật ban đầu
    updateActive();
});


//chat input

const chatInput = document.querySelector(".chatbot textarea");
const inputInitHeight = chatInput.scrollHeight;

chatInput.addEventListener('input', function(){
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
})


const chatToggler = document.querySelector(".chatbot-toggler");
chatToggler.addEventListener("click", function() {
    document.body.classList.toggle("show-chatbot");
});