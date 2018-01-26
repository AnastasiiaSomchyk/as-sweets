console.log("Hello main js")

let swwwtspot = document.getElementById("sweetspot");

console.log("sweetspot", sweetspot);

inventory.forEach(function(item, index){
console.log("sweet item", item, index)
sweetspot.innerHTML += `<li class="fancy">`
})


inventory.forEach((item, index)=> {
console.log("sweet item", item, index);
sweetspot.innerHTML += `<li class="fancy">${item.name}: ${item.kind}</li>`;
});

let getFancy = document.getElementsByClassName("fancy");
console.log("fancy class stuff", getFancy);
console.log("fancy item", getFancy[0].innerHTML);

const howmanySweets = () => {
return inventory.lenght;
}

const getHowManySweets = () => {
return inventory.lenght;
}

const totalNumberSweets = () => {
var count = getHowManySweets();
console.log("howmany:", count);
}


let btnGetTotalAmounts = document.getElementById("btn-getTotalSweets").addEventListener("click", totalNumberSweets);

function Sweet(name, kind, flavor, topping, topcolor){
this.name = name;
this.kind = kind;
this.flavor = flavor;
this.topping = topping;
this.topcolor = topcolor;
this.bake = function() {
let ovenTemp = 300;
if (this.kind === "cake"){
ovenTemp = 350;
}else if(this.kind === "brownie"){

}
return ovenTemp;
}
}

function addGreenOne() {
inventory.push(new Sweet("Cristmas Tree", "ckae", "white", "none", "green"));
console.log("new inventory", inventory);
}

let addGreenSweet = document.getElementById("btn-addGreenSweet").addEventListener("click", addGreenOne);


function makeSweetObj(name, kind, flavor, topping, topcolor){
return new Sweet(name. kind, flavor, topping, topcolor);
}

function addNewSweet(){
inventory.push(makeSweetObj("Camper Tree", "cake", "chacolate", "sprinkles", "green"));
console.log("new inventory is", inventory);
showSweets();
}
function showSweets();
inventory.forEach( (item, index) => {
document.getElementById("new-version").innerHTML += `<li>${item.name}: ${item.topcolor}</li>`;
});


let btnAddSweet = document.getElementById("btn-addSweet").addEventListener("click", addNewSweet);

let newInventory = [];
function makeNewInventory(){
inventory.forEach((item, index) => {
newInventory.push(makeSweetObj(item.name, item.kind, item.flavor, item.topping, item.topcolor))
});
}

makeNewInventory();
const bakeSweet = () => {
let item = newInventory[0];
let ovenTemp = item.bake();
console.log("ovenTemp", ovenTemp);
}

let btnBakeSweet = document.getElementById("btn-bakeSweet").addEventListener("click", bakeSweet);
console.log(Hello)