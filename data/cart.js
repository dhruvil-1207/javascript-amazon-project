// cart.js

// A single, global cart array
const cart = [];

// Add a product to the cart or update quantity if it already exists
function addToCart(productId, quantity = 1) {
    let item = cart.find(p => p.productId === productId);
    if (item) {
        item.quanity += quantity;
    } else {
        cart.push({ productId, quanity: quantity });
    }
    updateCartQuantity();
}

// Calculate and update total cart quantity in the UI
function updateCartQuantity() {
    const totalQty = cart.reduce((sum, item) => sum + item.quanity, 0);
    // .reduce(...) loops through each item in the array and accumulates a total.
    const qtyElem = document.querySelector(".js-cart-quantity");
    if (qtyElem) qtyElem.innerHTML = totalQty;
}

// Optional: expose function to get full cart if needed elsewhere
function getCart() {
    return cart;

}
