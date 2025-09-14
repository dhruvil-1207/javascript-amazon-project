import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import "../data/cart_class.js"
// import "../data/backend_practice.js";

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

