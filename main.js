"use strict";
/**
 * edit function
 * Runs when the edit button of an item is clicked.
 * Sends the user to the edit page after storing the information necessary
 * @param {number} category category index in inventory
 * @param {number} item item index in inventory
 */
// Global inventory variable
let inv = new Inventory();
let category = ["Footware", "Top", "Bottom", "Accesories"];
for (let i = 0; i < category.length; i++) {
    inv.addCategory(category[i])
}

// Check if data available in LS before continuing
if (checkLSData(WAREHOUSE_KEY)) {
    // If data exists, retrieve it
    let data = retrieveLSData(WAREHOUSE_KEY);
    // Restore data into inv
    inv.fromData(data);
}
// Function
function edit(category, item) {
    // store data in LS
    localStorage.setItem(CATEGORY_KEY, category);
    localStorage.setItem(ITEM_KEY, item);
    // redirect to edit page
    window.location = "edit.html";
}
/**
 * addClothingCategory function
 * Runs when 'Add Category' is clicked on the header nav bar.
 * Creates a new category, saves it in LS and updates the display
 */
function addClothingCategory() {
    // Get category name
    let newCategory = prompt("Name of new category?");
    // if user clicks cancel
    if (newCategory == null) {
        return;
    }
    // Try again if empty input
    while (newCategory == "") {
        alert("That input is invalid");
        newCategory = prompt("Name of new category?");
    }
    // Confirm add category
    if (confirm(`Confirm to add ${newCategory} as a category?`)) {
        // add to inventory
        inventory.addCategory(newCategory);
        // update LS
        updateLSData(WAREHOUSE_KEY, inventory);
        // update display
        displayInventory(inventory);
    }
}
/**
 * cancelAddClothingItem function
 * Runs when the cancel button is clicked inside the dialog polyfill.
 * Closes the dialog box.
 */
function cancelAddClothingItem() {
    // close dialog box
    dialog.close();
}

function addClothingItem() {
    // TODO: Task 2

    // Reset the dialog box
    document.getElementById("newItemNameInput").value = "";
    document.getElementById("newItemStockInput").value = "";
    document.getElementById("newItemPriceInput").value = "";
    document.getElementById("newItemCategory").value = "";
    dialog.showModal()
}

function displayInventory(inventory) {

    // TODO: Task 3
    let containString0 = ""
    let containString1 = ""
    let containString2 = ""
    let containString3 = ""
    console.log(inventory._warehouse);
    for (let i = 0; i < inventory._warehouse.length; i++) {
        let listOfItemInSpecCat = inventory._warehouse[i].items;
        console.log(listOfItemInSpecCat)
        if( i == 0)
        {
            for (let j = 0; j < listOfItemInSpecCat.length; j++) 
            {
                let str0 = '<tr>'
               
                str0 +=
                    `
                <td class="mdl-data-table__cell--non-numeric"><span id="newItemName">${listOfItemInSpecCat[j]._name}</span></td>
                <td><span id="newItemStock">${listOfItemInSpecCat[j]._stock}</td>
                <td><span id="newItemPrice">${listOfItemInSpecCat[j]._price}</td>
                <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button"
                    onclick="location.href='/edit.html'">Edit</button></td>
                    </tr>
                `
                containString0 += str0
            }
            document.getElementById("tableTemp0").innerHTML = containString0
        }
        if( i == 1)
        {
            for (let j = 0; j < listOfItemInSpecCat.length; j++) 
            {
                let str1 = '<tr>'
               
                str1 +=
                    `
                <td class="mdl-data-table__cell--non-numeric"><span id="newItemName">${listOfItemInSpecCat[j]._name}</span></td>
                <td><span id="newItemStock">${listOfItemInSpecCat[j]._stock}</td>
                <td><span id="newItemPrice">${listOfItemInSpecCat[j]._price}</td>
                <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button"
                    onclick="location.href='./edit.html'">Edit</button></td>
                    </tr>
                `
                containString1 += str1
            }
            document.getElementById("tableTemp1").innerHTML = containString1
        }
        if( i == 2)
        {
            for (let j = 0; j < listOfItemInSpecCat.length; j++) 
            {
                let str2 = '<tr>'
               
                str2 +=
                    `
                <td class="mdl-data-table__cell--non-numeric"><span id="newItemName">${listOfItemInSpecCat[j]._name}</span></td>
                <td><span id="newItemStock">${listOfItemInSpecCat[j]._stock}</td>
                <td><span id="newItemPrice">${listOfItemInSpecCat[j]._price}</td>
                <td "><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button"
                 onclick="location.href='./edit.html">Edit</button></td>
                    </tr>
                `
                containString2 += str2
            }
            document.getElementById("tableTemp2").innerHTML = containString2
        }
        if( i == 3)
        {
            for (let j = 0; j < listOfItemInSpecCat.length; j++) 
            {
                let str3 = '<tr>'
               
                str3 +=
                    `
                <td class="mdl-data-table__cell--non-numeric"><span id="newItemName">${listOfItemInSpecCat[j]._name}</span></td>
                <td><span id="newItemStock">${listOfItemInSpecCat[j]._stock}</td>
                <td><span id="newItemPrice">${listOfItemInSpecCat[j]._price}</td>
                <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button"
                    onclick="location.href='/edit.html'">Edit</button></td>
                    </tr>
                `
                containString3 += str3
            }
            document.getElementById("tableTemp3").innerHTML = containString3
        }
    }
}

function confirmAddClothingItem() {
    // TODO: Task 4
    // addClothingItem();
    let nameRef = document.getElementById("newItemNameInput");
    let stockRef = document.getElementById("newItemStockInput");
    let priceRef = document.getElementById("newItemPriceInput");
    let categoryRef = document.getElementById("newItemCategory");
    let newItemName = nameRef.value;
    let newItemStock = stockRef.value;
    let newItemPrice = priceRef.value;
    let categoryIndex = categoryRef.value;
    localStorage.setItem("CATEGORY_KEY",categoryIndex)
    
    if (newItemName == "") {
        alert("Name has to be specified");
        return;
    }
    if (newItemName == "") {
        alert("Item stock must be entered");
        return;
    }
    if (newItemName == "") {
        alert("Item price must be entered");
        return;
    }
    if (categoryIndex == "") {
        alert("Category is not specified");
        return;
    }
    // Get the value from the HTML file 

    let item = new ClothingItem(newItemName, newItemStock, newItemPrice);
    // Add item to the inventory
    inv.addItem(item, categoryIndex)
    dialog.close();
    displayInventory(inv)
}

// Global code
// Registers the dialog box polyfill
let dialog = document.getElementById("addDialog");
if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}
// Displays the warehouse inventory when the page loads
displayInventory(inv);