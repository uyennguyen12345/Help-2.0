"use strict";

// Global code to retrieve data to be edited

let categoryIndex = localStorage.getItem("CATEGORY_KEY");
console.log(categoryIndex)
let itemIndex = localStorage.getItem("ITEM_KEY");
let item = inventory.getItem(categoryIndex,itemIndex);
window.location.href = "js/main.js";
// TODO: Task 5.1

let nameRef = document.getElementById("newItemNameInput");
let stockRef = document.getElementById("newItemStockInput");
let priceRef = document.getElementById("newItemPriceInput");
let editItemName = nameRef.value;
let editItemStock = stockRef.value;
let editItemPrice = priceRef.value;
document.getElementById("editItemName").innerHTML = editItemName;
document.getElementById("editItemStock").innerHTML = editItemStock;
document.getElementById("editItemPrice").innerHTML = editItemPrice;

//function submit()
{
    // TODO: Task 5.2.2
    
}

//function cancel()
{
    // TODO: Task 5.2.3
}