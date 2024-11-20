// selecting elements
const idElement = document.getElementById("myID");
console.log(idElement);

const classElements = document.getElementsByClassName("myClass");
console.log(classElements);

const tagElements = document.getElementsByTagName("div");
console.log(tagElements);

const firstSelector = document.querySelector(".myClass");
console.log(firstSelector);

const allSelectors = document.querySelectorAll("div.myClass");
console.log(allSelectors);

// Create a new div element
const newDiv1 = document.createElement("div");
newDiv1.innerText = "New Div1";
const image = document.createElement("img");
image.src="https://cdn.pixabay.com/photo/2015/01/15/16/17/hands-600497_1280.jpg"
image.width="400"

// Append child
document.getElementById("myID").append(newDiv1,image);

// Remove child
document.getElementById("myID").removeChild(newDiv1);

const newDiv2 = document.createElement("div");
newDiv2.innerText = "New Div2";
document.getElementById("myID").append(newDiv2);

// Replace child
const anotherDiv = document.createElement("div");
anotherDiv.innerText = "Replaced Div";
document.getElementById("myID").replaceChild(anotherDiv, newDiv2);

// Clone element
const clonedDiv = anotherDiv.cloneNode(true);
clonedDiv.innerText = "Cloned Div";
document.getElementById("myID").appendChild(clonedDiv);

// Modifying Element Content
const contentDiv = document.getElementById("contentDiv");
contentDiv.innerHTML = "<strong>Updated with HTMLtag</strong>";
contentDiv.textContent = "Updated with textContent";
contentDiv.innerText = "Updated with innerText";

//  Set attribute
let pic = document.createElement("img")
pic.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-lIU4ct_HPjpcgKerthDDDwwtcQg2tPsdw&s")
pic.setAttribute("width", 400)
document.body.appendChild(pic)

// Get attribute
let value=pic.getAttribute("width")
console.log(value)

// Check attribute
let check=pic.hasAttribute("height")
console.log(check)

// Remove attribute
pic.removeAttribute("width")

// Add class
const classDiv = document.getElementById("classDiv");
classDiv.classList.add("hiii");
classDiv.classList.add("hello");

// Remove class
classDiv.classList.remove("hiii");

// Toggle class
classDiv.classList.toggle("hiii");

// Check class
console.log(classDiv.classList.contains("bye"));

//  Styling Elements
const styleDiv = document.getElementById("styleDiv");
styleDiv.style.color = "blue";
styleDiv.style.fontSize = "20px";

// Event Handling
function alertClick() {
    alert("Clicked!");
}
pic.addEventListener("click", alertClick);

// Navigating the DOM Tree
const parent = document.getElementById("parent");
const child1 = document.getElementById("child1");
const child2 = document.getElementById("child2");

console.log(parent.children);
console.log(parent.childNodes);
console.log(child1.parentNode);

console.log(parent.firstChild);
console.log(parent.firstElementChild);

console.log(parent.lastChild);
console.log(parent.lastElementChild);

console.log(child1.nextSibling);
console.log(child1.nextElementSibling);

console.log(child2.previousSibling);
console.log(child2.previousElementSibling);

// insertAdjacentHTML
let a=document.getElementById("one")
a.insertAdjacentHTML("afterend","<p>inserted p tag</p>")
a.insertAdjacentElement("beforeend",image)