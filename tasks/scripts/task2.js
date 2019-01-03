//task 6.2


const neededParagraph = document.querySelectorAll("p").item(2);
/*
function pToUpperCase(str){
    return str.toUpperCase();
    //console.log( element.textContent );    
}
*/

const act = document.createElement("button");
act.addEventListener('click', function(){
    neededParagraph.textContent = neededParagraph.textContent.toUpperCase();
});
act.className = "actionButton"; // from CSS better?
act.textContent = "Press me";
document.querySelectorAll("div").item(2).appendChild(act) 

