// Lấy tất cả các liên kết trong navbar-links
const navLinks = document.querySelectorAll('.navbar-links a');

// Thêm sự kiện 'click' cho từng liên kết
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Loại bỏ class 'active' khỏi tất cả các liên kết
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // Thêm class 'active' cho liên kết được click
        this.classList.add('active');
    });
});
