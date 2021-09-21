// GLOBAL VARIABLES
// Add form
var elAddForm = document.querySelector('.add-form-js');
var elAddInput = document.querySelector('.add-item-js');
// Search form
var elSearchForm = document.querySelector('.search-form-js');
var elCheckInput = document.querySelector('.check-item-js');
//Buttons
var elAddButton = elAddForm.querySelector(".add-button");
var elSearchButton = elSearchForm.querySelector(".search-button");



var myList = document.querySelector(".ul"); // items list
var counter = 1; // this is id counter of myList 

var myArray = ["olma", "behi", "qulupnay"];
for (var itemMyArray of myArray) {
    var listItem = document.createElement("li");
    listItem.classList.add("itemstyle");
    var listItemCounter = counter + 100;
    listItem.id = listItemCounter;

    var checkDelate = document.createElement("input");
    checkDelate.type=("checkbox");
    checkDelate.style.display = "inline-block";
    checkDelate.style.margin = "5px"
    checkDelate.id = counter;
    checkDelate.classList.add("todo-item")
    listItem.append(checkDelate);
    
    var listItemtext = document.createElement("label");
    listItemtext.setAttribute("for", counter);
    listItemtext.textContent = itemMyArray;
    listItemtext.classList.add("todo-text")
    listItem.append(listItemtext);

    myList.appendChild(listItem);
    counter++;
}

elAddForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    if  (myArray.includes(elAddInput.value.trim())) {
            
    document.getElementById(myArray.indexOf(elAddInput.value) + 101).classList.add("rang");
    alert("Ro'yhatta mavjud");
    elAddInput.value = "";
} else {

    myArray.push(elAddInput.value.trim());
  
    listItem = document.createElement("li");
    listItem.classList.add("itemstyle");
    listItemCounter = counter + 100;
    listItem.id = listItemCounter;

    checkDelate = document.createElement("input");
    checkDelate.type=("checkbox");
    checkDelate.style.display = "inline-block";
    checkDelate.style.margin = "5px"
    checkDelate.id = counter;
    checkDelate.classList.add("todo-item")
    listItem.append(checkDelate);
    
    listItemtext = document.createElement("label");
    listItemtext.setAttribute("for", counter);
    listItemtext.textContent = elAddInput.value.trim();
    listItemtext.classList.add("todo-text")
    listItem.append(listItemtext);
    myList.appendChild(listItem);
    elAddInput.value = "";
    elAddInput.focus();
    counter++;
}
// document.getElementById(myArray.indexOf(elAddInput.value) + 101).classList.remove("rang");
})

elSearchForm.addEventListener('submit', function(vt){
    vt.preventDefault();
    
    if (myArray.includes(elCheckInput.value.trim())) {
        alert("ro'yhatga qo'shgansiz.")
        document.getElementById(myArray.indexOf(elCheckInput.value) + 101).classList.add("rang");

        elCheckInput.value = "";
        elAddInput.focus();
    } else {
        alert("Ro'yhatta mavjud emas, ro'yhatga qo'shing");
        elAddInput.value = elCheckInput.value.trim();
        elCheckInput.value = "";
        elAddInput.focus();
    }

})


