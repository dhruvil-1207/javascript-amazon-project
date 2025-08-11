import {addToCart} from "../data/cart.js";
import {products} from "../data/products.js";
// we can also do it like:
// import {products as myProducts} from "../data/products.js";


let productsHTML = "";
products.forEach ((product) => {
    productsHTML  += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src = ${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img src="images/ratings/rating-${(product.rating.stars) * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed (2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id ="${product.id}">
            Add to Cart
          </button>
        </div>
    `;
    
    
});

document.querySelector (".js-products-grid").innerHTML = productsHTML;


// Attach ONE event listener using event delegation
// This works because of event bubbling — clicks on child elements bubble up to the parent.
document.querySelector(".js-products-grid").addEventListener("click", (event) => {
    // 1. Find the closest element with the .js-add-to-cart class that was clicked
    const button = event.target.closest(".js-add-to-cart");
    if (!button) return; // If not clicking an Add to Cart button, stop

    // 2. Find the quantity select dropdown inside the same product's container
    const selectElem = button.closest(".product-container").querySelector("select");
    const quantity = selectElem ? Number(selectElem.value) : 1; // Default to 1 if missing

    // 3. Call the shared cart logic function from cart.js
    addToCart(button.dataset.productId, quantity);
});
