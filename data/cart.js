// A single, global cart array
export let cart;

loadFromStorage ();

export function loadFromStorage () {
    cart = JSON.parse (localStorage.getItem ("cart"));

    if (!cart) {
        cart = [
        {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2,
            deliveryOptionId: '1' 
        },
        {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 3,
            deliveryOptionId: '2'
        }
        ];
    }
}

function saveToStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Add a product to the cart or update quantity if it already exists
export function addToCart(productId, quantity = 1) {
    let item = cart.find(p => p.productId === productId);
    if (item) {
        item.quantity += quantity;
    } else {
        cart.push({ 
            productId, 
            quantity: quantity,
            deliveryOptionId: '1'
        });
    }

    saveToStorage();
}

// Optional: expose function to get full cart if needed elsewhere
export function getCart() {
    return cart;
}

export function removeFromCart (productId) {
    const newCart = [];

    cart.forEach ((cartItem) => {
        if (cartItem.productId != productId) {
            newCart.push (cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem  = cart.find(p => p.productId === productId);
    if (!matchingItem) {
        console.error(`No cart item found with productId: ${productId}`);
        return;  // Prevent further error
    }
    matchingItem.deliveryOptionId = deliveryOptionId;

    saveToStorage();
}

export function loadCart(func) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener ("load", () => {
    console.log (xhr.response);
    func();
  });

  xhr.open ("GET", "https://supersimplebackend.dev/cart");
  xhr.send();
}