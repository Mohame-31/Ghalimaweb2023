const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", function() {
    const menuList = this.nextElementSibling;
    menuList.style.display = menuList.style.display === "block" ? "none" : "block";
});

const imageContainer = document.querySelector(".image-container");
const images = document.querySelectorAll(".image-container img");
const priceDisplay = document.querySelector(".price");

let currentImageIndex = 0;

const prices = ["500dz", "750dz", "1300dz", "2000dz"];

function updatePrice() {
    priceDisplay.textContent = prices[currentImageIndex];
}

function rotateImages() {
    images[currentImageIndex].classList.remove("active");
    
    currentImageIndex++;
    if (currentImageIndex === images.length) {
        currentImageIndex = 0;
    }

    images[currentImageIndex].classList.add("active");
    updatePrice();
}

setInterval(rotateImages, 3000);
images[currentImageIndex].classList.add("active");
updatePrice();
