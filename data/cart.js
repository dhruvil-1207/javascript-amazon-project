// cart.js

// A single, global cart array
export const cart = [
    {
        productId: "43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    },
    {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 2
    }
];

// Add a product to the cart or update quantity if it already exists
export function addToCart(productId, quantity = 1) {
    let item = cart.find(p => p.productId === productId);
    if (item) {
        item.quantity += quantity;
    } else {
        cart.push({ productId, quantity: quantity });
    }
    updateCartQuantity();
}

// Calculate and update total cart quantity in the UI
export function updateCartQuantity() {
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    // .reduce(...) loops through each item in the array and accumulates a total.
    const qtyElem = document.querySelector(".js-cart-quantity");
    if (qtyElem) qtyElem.innerHTML = totalQty;
}

// Optional: expose function to get full cart if needed elsewhere
export function getCart() {
    return cart;

}
