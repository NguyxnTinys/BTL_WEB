// Image Thumbnails

let currentIndex = 0;

function changeImage(index) {
    currentIndex = index;
    document.querySelector('.product-image img').src = images[currentIndex];
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

updateDots();

// Trasitioning between Tabs
function openTab(event, tabID) {
    const tabItems = document.querySelectorAll('.tab-content-item');
    tabItems.forEach(item => item.classList.remove('active'));

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));

    document.getElementById(tabID).classList.add('active');

    event.currentTarget.classList.add('active');
}

// Show More button
function showmorelessManufacturer() {
    const hiddenContent = document.querySelector('.hidden-content');
    const morelessButton = document.querySelector('moreless');
    const isHidden = hiddenContent.style.display === 'none';

    hiddenContent.style.display = isHidden ? 'block' : 'none';
    moreLessButton.innerHTML = isHidden ? 'Show less <img src="images/chevron_up_pink.svg">' : 'Show more <img src="images/chevron_down_pink.svg">';
}