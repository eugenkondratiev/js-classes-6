//task 6.6 


function findTwoTwo(){
    const elements = document.getElementsByClassName('two'); 
    for(let elem = 0; elem < elements.length; elem++){
        if (elements.item(elem).textContent == 'Two'){
            return elements.item(elem);
        }
    }
}

const twoTwo = findTwoTwo();
console.log(twoTwo);


function makeItBeautyfull(){
    const elemForBeauty = document.createElement("p");
    elemForBeauty.textContent = "Three";
    twoTwo.parentElement.appendChild(elemForBeauty);
}














const act = document.createElement("button");
act.addEventListener('click', makeItBeautyfull);
act.style.width = "123px";
act.style.height = "44px";
act.textContent = "Press for beauty";
const lastDiv = document.getElementsByTagName('div');
lastDiv[lastDiv.length -1].appendChild(act);


