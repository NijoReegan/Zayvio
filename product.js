// Toggle mobile menu
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Product search
const searchInput = document.querySelector(".search-bar input");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase().trim();

    productCards.forEach(card => {
        const productName = card.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(query)) {
            card.style.display = "block"; // Show matching product
        } else {
            card.style.display = "none"; // Hide non-matching product
        }
    });
});


// Add to Cart (demo only)
const cartButtons = document.querySelectorAll('.product-info button');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Item added to cart (demo)");
    });
});
