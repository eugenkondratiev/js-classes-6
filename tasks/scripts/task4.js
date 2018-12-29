//task 6.4
const secondElements = document.getElementsByClassName('two');
/*
console.log( secondElements.item(0));
console.log( secondElements.item(0).style.fontSize);
*/

function increaseFont(){
    for(let elem = 0; elem <secondElements.length;elem++){

        secondElements[elem].style.fontSize = "30px";
    }
}


const act = document.createElement("button");
act.addEventListener('click', increaseFont);
act.style.width = "88px";
act.style.height = "44px";
act.textContent = "Press me";
const lastDiv = document.getElementsByTagName('div');
lastDiv[lastDiv.length -1].appendChild(act);

