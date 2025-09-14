import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import {loadCart} from "../data/cart.js";
// import "../data/cart_class.js"
// import "../data/backend_practice.js";


Promise.all([
  new Promise ((resolve) => {
    // console.log ("first step");
    loadProducts(() => {
      // console.log ("second step");
      resolve("value1"); 
    });
  }),

  new Promise ((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  // console.log (values);
  renderOrderSummary();
  renderPaymentSummary();
});



// new Promise ((resolve) => {
//   // console.log ("first step");
//   loadProducts(() => {
//     // console.log ("second step");
//     resolve("value1"); 
//   })

// }).then ((value) => {
//   // console.log ("next step");
//   console.log (value);
//   return new Promise ((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   });

// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
//   });

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });

