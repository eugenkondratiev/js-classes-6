//task 6.2
/*
const secondDiv = document.querySelectorAll("div").item(2);
console.log(document.querySelectorAll("div"));

console.log(secondDiv);

const neededParagraph = secondDiv.children.item(1);
*/

const neededParagraph = document.querySelectorAll("p").item(2);
//console.log(neededParagraph);


function pToUpperCase(){
    neededParagraph.textContent = neededParagraph.textContent.toUpperCase();
    console.log( neededParagraph.textContent )    
}

const act = document.createElement("button");
act.addEventListener('click', pToUpperCase);
act.style.width = "88px";
act.style.height = "44px";
act.textContent = "Press me"
document.querySelectorAll("div").item(2).appendChild(act)
