// A single, global cart array
export const cart = [];

// Add a product to the cart or update quantity if it already exists
export function addToCart(productId, quantity = 1) {
    let item = cart.find(p => p.productId === productId);
    if (item) {
        item.quantity += quantity;
    } else {
        cart.push({ productId, quantity: quantity });
    }
}

// Optional: expose function to get full cart if needed elsewhere
export function getCart() {
    return cart;
}
