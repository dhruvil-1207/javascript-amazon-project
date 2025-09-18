import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import {loadCart} from "../data/cart.js";
// import "../data/cart_class.js"
// import "../data/backend_practice.js";


async function loadPage() { // async makes a function to return a promise
  try {

    // throw "error1"; // it will throw error and will directly go to the catch part so the statements of try below this wont be executed..

    // Load products and cart in parallel using Promise.all with await
    const values = await Promise.all([
      loadProductsFetch(), // Returns a promise
      // await makes the function wait until the promise is resolved
      // await funtion has to be inside an async, that too as its inital outer function
      new Promise((resolve, reject) => {
        loadCart(() => {
          // reject("error3");
          resolve("value3");
        });
      })
    ]);

    // console.log(values); // ["products data", "cart loaded"]
    
    // Render summaries after both operations complete
    renderOrderSummary();
    renderPaymentSummary();
    
  } catch (error) {
    console.error("Error loading page:", error);
  }
}

// async function loadPage() {

//   await loadProductsFetch();

//   const value = await new Promise ((resolve) => {
//     loadCart(() => {
//       resolve("value3");
//     });
//   });

//     renderOrderSummary();
//     renderPaymentSummary();

// }

loadPage();

// Load products and cart in parallel, then render summaries
// Promise.all([
//   loadProductsFetch(), // this wil return a promisee, so we can use it in promise.all()

//   new Promise ((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   })

// ]).then((values) => {
//     // console.log (values);
//     renderOrderSummary();
//     renderPaymentSummary();
//   });


// promises
// new Promise ((resolve) => {
//   console.log ("first step");
//   loadProducts(() => {
//    console.log ("second step");
//     resolve("value1"); 
//   })

// }).then ((value) => {
//   console.log ("next step");
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

// callbacks hell
// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });

