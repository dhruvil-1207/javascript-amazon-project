import {formatCurrency} from "../Scripts/Utils/money.js";

if (formatCurrency (2095) === "20.95") 
    console.log ("passed");
else 
    console.log ("failed");


console.log ((formatCurrency (0) === "0.00") ? "passed" : "failed"); 


console.log ((formatCurrency (2000.5) === "20.01") ? "passed" : "failed"); 

console.log ((formatCurrency (2000.4) === "20.00") ? "passed" : "failed"); 


