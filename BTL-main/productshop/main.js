const products = [
    {
        name: "2baconil TTS20 14mg Patch",
        img: "/productshop/img/2baconil-1.jpg",
        priceOld: "£60.00",
        priceCurrent: "£40.00",
        likeCount: true,
        starRating: 3,
        soldCount: 88,
        brand: "Whoo",
        origin: "Russia",
        saleOff: {
            percent: "33%",
            label: "GIẢM"
        },
        link: "/Detail-P/2baconil.html"
    },
    {
        name: "Anovate Cream 20gm",
        img: "/productshop/img/anovate-cream-1.jpg",
        priceOld: "£33.00",
        priceCurrent: "£28.49",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "France",
        saleOff: {
            percent: "10%",
            label: "GIẢM"
        },
        link: "/Detail-P/anovate-cream.html"
    },
    {
        name: "HEMO FORTE Syrup 450ml",
        img: "/productshop/img/hemo-forte-syrup-1.jpg",
        priceOld: "£74.00",
        priceCurrent: "£67.00",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "Greece",
        saleOff: {
            percent: "10%",
            label: "GIẢM"
        },
        link: "/Detail-P/hemo-forte-syrup.html"
    },
    {
        name: "Kerala Ayurveda Histantin Tablet",
        img: "/productshop/img/histanin-1.jpg",
        priceOld: "£74.00",
        priceCurrent: "£67.00",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "India",
        saleOff: {
            percent: "10%",
            label: "GIẢM"
        },
        link: "/Detail-P/histanin.html"
    },
    {
        name: "I PILL TABLET",
        img: "/productshop/img/i-pill-1.jpg",
        priceOld: "£35.00",
        priceCurrent: "£25.00",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "India",
        saleOff: {
            percent: "30%",
            label: "GIẢM"
        },
        link: "/Detail-P/i-pill.html"
    },
    {
        name: "Kapiva Get Slim Juice 1ltr",
        img: "/productshop/img/kapiva-1.jpg",
        priceOld: "£199.99",
        priceCurrent: "£99.99",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "America",
        saleOff: {
            percent: "50%",
            label: "GIẢM"
        },
        link: "/Detail-P/kapiva.html"
    },
    {
        name: "NEOMOL I.V Infusion 100ml",
        img: "/productshop/img/neomol-1.jpg",
        priceOld: "£13.49",
        priceCurrent: "£8.36",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "India",
        saleOff: {
            percent: "20%",
            label: "GIẢM"
        },
        link: "/Detail-P/neomol-infusion.html"
    },
    {
        name: "Pankajakasthuri Breathe Easy 400 gm",
        img: "/productshop/img/pankajakasthuri-1.jpg",
        priceOld: "£20.00",
        priceCurrent: "£16.00",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "India",
        saleOff: {
            percent: "20%",
            label: "GIẢM"
        },
        link: "/Detail-P/pankajakasthuri-breath-easy.html"
    },
    {
        name: "Vicks Inhaler 0.5 ml",
        img: "/productshop/img/vick-inhaler-1.jpg",
        priceOld: "£74.00",
        priceCurrent: "£67.00",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "India",
        saleOff: {
            percent: "10%",
            label: "GIẢM"
        },
        link: "/Detail-P/vick-inhaler.html"
    },
    {
        name: "CeraVe Moisturizing Cream 340g",
        img: "/productshop/img/cerave-1.jpg",
        priceOld: "£19.99",
        priceCurrent: "£14.99",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "United States",
        saleOff: {
            percent: "25%",
            label: "GIẢM"
        },
        link: "/Detail-P/cerave-moisturising-cream.html"
    },
    {
        name: "Set dưỡng trắng da Whoo khác",
        img: "/productshop/img/P02021.avif",
        priceOld: "1.500.000đ",
        priceCurrent: "1.200.000đ",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "Hàn Quốc",
        saleOff: {
            percent: "20%",
            label: "GIẢM"
        }
    },
    {
        name: "Set dưỡng trắng da Whoo khác",
        img: "/productshop/img/P02021.avif",
        priceOld: "1.500.000đ",
        priceCurrent: "1.200.000đ",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "Hàn Quốc",
        saleOff: {
            percent: "20%",
            label: "GIẢM"
        }
    },
    {
        name: "Set dưỡng trắng da Whoo khác",
        img: "/productshop/img/P02021.avif",
        priceOld: "1.500.000đ",
        priceCurrent: "1.200.000đ",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "Hàn Quốc",
        saleOff: {
            percent: "20%",
            label: "GIẢM"
        }
    },
    {
        name: "Set dưỡng trắng da Whoo khác",
        img: "/productshop/img/P02021.avif",
        priceOld: "1.500.000đ",
        priceCurrent: "1.200.000đ",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "Hàn Quốc",
        saleOff: {
            percent: "20%",
            label: "GIẢM"
        }
    },
    {
        name: "Set dưỡng trắng da Whoo khác",
        img: "/productshop/img/P02021.avif",
        priceOld: "1.500.000đ",
        priceCurrent: "1.200.000đ",
        likeCount: false,
        starRating: 4,
        soldCount: 120,
        brand: "Whoo",
        origin: "Hàn Quốc",
        saleOff: {
            percent: "20%",
            label: "GIẢM"
        }
    },
];

const productContainer = document.querySelector(".home-product .grid__row");

function renderProducts(products) {
    productContainer.innerHTML = products.map(product => `
        <div class="grid__column-2-4">
            <a href="${product.link}" class="home-product-item-link">
                <div class="home-product-item">
                    <div class="home-product-item__img" style="background-image: url(${product.img});"></div>
                    <h4 class="home-product-item__name">${product.name}</h4>
                    <div class="home-product-item__price">
                        <span class="home-product-item__price-old">${product.priceOld}</span>
                        <span class="home-product-item__price-current">${product.priceCurrent}</span>
                    </div>
                    <div class="home-product-item__action">
                        <span class="home-product-item__like ${product.likeCount ? 'home-product-item__liked' : ''}">
                            <i class="home-product-item__like-icon-emply fa-regular fa-heart"></i>
                            <i class="home-product-item__like-icon-fill fa-solid fa-heart"></i>
                        </span>
                        <div class="home-product-item__like-star">
                            ${[...Array(5)].map((_, i) => `
                                <i class="${i < product.starRating ? 'home-product-item__gold-color' : ''} fa-regular fa-star"></i>
                            `).join('')}
                        </div>
                        <span class="home-product-item__sold">${product.soldCount} đã bán</span>
                    </div>
                    <div class="home-product-item__origin">
                        <span class="home-product-item__brand">${product.brand}</span>
                        <span class="home-product-item__origin-name">${product.origin}</span>
                    </div>
                    <div class="home-product-item__favourite">
                        <i class="home-product-item__icon fa-solid fa-check"></i>
                        <span>Yêu thích</span>
                    </div>
                    <div class="home-product-item__sale-off">
                        <span class="home-product-item__sale-off-percent">${product.saleOff.percent}</span>
                        <span class="home-product-item__sale-off-label">${product.saleOff.label}</span>
                    </div>
                </div>
            </a>
        </div>
    `).join('');
}

renderProducts(products);




function showSection(sectionId) {
    // Ẩn tất cả các phần
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Hiển thị phần được chọn
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

const listBenh = [{
    image: "",
    name: "Bệnh sởi"
},

{
    image: "",
    name: "Bệnh sởi"
}
]


const canBenh = document.querySelector(".common-disease .grid__column-2")

