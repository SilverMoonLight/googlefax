
function addCars() {
const inputs = document.getElementsByTagName("input");
let values = [];

for(let i = 0; i < inputs.length; i++) {
    inputs[i].value !== "" ? values.push(inputs[i].value) : "";
}

let container = document.getElementsByClassName("container")[0];
let newElementContainer = document.createElement("div");
newElementContainer.className = "newElementContainer";
const carName = document.createElement("span");
carName.innerHTML = values[0];
const carDesc = document.createElement("p");
carDesc.innerHTML = values[1];

container.appendChild(newElementContainer);
let headerBar = document.createElement("p");
headerBar.className = "headBar";
newElementContainer.appendChild(headerBar);
newElementContainer.appendChild(carName);
newElementContainer.appendChild(carDesc);


}

