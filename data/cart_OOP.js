function Cart (localStorageKey) {
  const cart = {
    cartItems: undefined,
    loadFromStorage () {
      this.cartItems = JSON.parse (localStorage.getItem (localStorageKey));

      if (!this.cartItems) {
          this.cartItems = [
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
    },
    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },
    addToCart(productId, quantity = 1) {
        let item = this.cartItems.find(p => p.productId === productId);
        if (item) {
            item.quantity += quantity;
        } else {
            this.cartItems.push({ 
                productId, 
                quantity: quantity,
                deliveryOptionId: '1'
            });
        }

        this.saveToStorage();
    },

    // Optional: expose function to get full cart if needed elsewhere
    getCart() {
        return this.cartItems;
    },

    removeFromCart (productId) {
        const newCart = [];

        this.cartItems.forEach ((cartItem) => {
            if (cartItem.productId != productId) {
                newCart.push (cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveToStorage();
    },

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem  = this.cartItems.find(p => p.productId === productId);
        if (!matchingItem) {
            console.error(`No cart item found with productId: ${productId}`);
            return;  // Prevent further error
        }
        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }
  };
  return cart;
}

const cart = Cart("cart_OOP");

const businessCart = Cart("cart_business");

cart.loadFromStorage();
businessCart.loadFromStorage();



console.log (cart);
console.log (businessCart);



