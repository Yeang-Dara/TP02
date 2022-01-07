var selectedRow = null;
let x = -1;
var names = [];
var price = [];
var category = [];
let header = document.getElementsByClassName("header-add")[0];

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
        console.log("hello")
    } else {
        updateRecord(formData);
    }
    resetForm();
}

//clear placeholder
document.querySelector('.add_book').placeholder = '';

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name_book"] = document.getElementById("name_book").value;
    formData["price_book"] = document.getElementById("price_book").value;
    formData["category_book"] = document.getElementById("category_book").value;

    return formData;
}

//Insert the data
function insertNewRecord(data) {
    names[x + 1] = data.name_book;
    price[x + 1] = data.price_book;
    category[x + 1] = data.category_book;

    document.getElementById("add_items").innerHTML +=
       `<div class="items"><img src="pic.png" alt="#"><div class="name" data="${data.name_book}">Name : ${data.name_book}</div>
        <div class="price">Price : ${data.price_book} riels</div><div class="category">Category : ${data.category_book}</div>
        <div class="button"><button id="${parseInt(x+1)}" class="editBtn" onclick="editBook(this.id)">Edit</button>
        <button id="${parseInt(x+1)}" class="deletBtn" onclick="deleteBook(this.id)">Delete</button></div></div>`;
    x++;
}

//Edit the data
function editBook(id) {
    header.innerHTML = "Edit information here!";
    header.style.backgroundColor = "rgb(61,133,198)";


    selectedRow = id;
    document.getElementsByClassName("edit_book")[0].style.visibility = 'visible';
    document.getElementsByClassName("add_book")[0].style.visibility = 'hidden';

    document.getElementById('name_book').value = names[id];
    document.getElementById('price_book').value = price[id];
    document.getElementById('category_book').value = category[id];
}

function updateRecord(formData) {
    document.getElementsByClassName("name")[selectedRow].innerHTML = "Name : " + formData.name_book;
    document.getElementsByClassName("price")[selectedRow].innerHTML = "Price : " + formData.price_book + " riels";
    document.getElementsByClassName("category")[selectedRow].innerHTML = "Category : " + formData.category_book;
    document.getElementsByClassName("edit_book")[0].style.visibility = 'hidden';
    document.getElementsByClassName("add_book")[0].style.visibility = 'visible';

    document.getElementsByClassName("header-add")[0].innerHTML = "Add new book here!";
    header.style.backgroundColor = "rgb(147, 196, 125)";
    selectedRow = null;
}

//delete
function deleteBook(id) {
    console.log(id);
    if (confirm('Do you want to delete this record?')) {
        document.getElementsByClassName('items')[id].hidden = true;
    }
    resetForm();
}

function resetForm() {
    document.getElementById('name_book').value = '';
    document.getElementById('price_book').value = '';
    document.getElementById('category_book').value = '';
}