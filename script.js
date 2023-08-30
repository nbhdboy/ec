// JavaScript 功能

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartOverlay = document.querySelector('.cart-overlay');
const closeCartButton = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const product = event.target.parentElement;
    const productName = product.querySelector('h2').textContent;
    const productPrice = product.querySelector('p').textContent;

    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - ${productPrice}`;
    cartItemsList.appendChild(cartItem);
}

document.getElementById('cart-button').addEventListener('click', () => {
    cartOverlay.style.display = 'flex';
});

closeCartButton.addEventListener('click', () => {
    cartOverlay.style.display = 'none';
});
