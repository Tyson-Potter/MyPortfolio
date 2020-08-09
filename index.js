console.log("Hello");
//Varible Referencing
const inputFieldElement = document.getElementById("inputField"); //Conecting this new Variable with the Atribute on the html Page
const addButtonElement = document.getElementById("addButton"); //Conecting this new Variable with the Atribute on the html Page
const listElement = document.getElementById("list"); //Conecting this new Variable with the Atribute on the html Page

//Tell the program that when this button is clicked know and do somthing
addButtonElement.addEventListener("click", function () {
  //grabbed the value from the <inout> element
  //Assigned to the variable todoValue
  const todoValue = inputFieldElement.value;
  // Created a new <li> element.
  // set its content to the todo value.
  const newListItem = document.createElement("li");
  newListItem.innerText = todoValue;
  newListItem.classList.add("item");

  listElement.appendChild(newListItem);
  //resets Focus
  inputFieldElement.value = "";

  // inputFieldElement.focus();
  console.log(`To DO Item Added to List ${todoValue}`);
});
// lets Enter activate the function above to add item to lsit and clean box
let input = document.getElementById("inputField");
input.addEventListener("keypress", function (e) {
  if (event.key === "Enter") {
    const todoValue = inputFieldElement.value;
    // Created a new <li> element.
    // set its content to the todo value.
    const newListItem = document.createElement("li");
    newListItem.innerText = todoValue;
    // append <li> to ,ul> list element
    listElement.appendChild(newListItem);
    //resets Focus
    inputFieldElement.value = "";
  }
});
