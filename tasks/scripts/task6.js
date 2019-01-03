//task 6.6 

/*
function findByClassAnsText(cssClassName, text){
    const elements = document.getElementsByClassName(cssClassName); 
    for(let elem = 0; elem < elements.length; elem++){
        if (elements.item(elem).textContent == text){
            return elements.item(elem);
        }
    }
}
*/


const LONG_BUTTON_WIDTH = "123px";
const LONG_BUTTON_HEIGHT = "44px";


const act = document.createElement("button");
act.addEventListener('click', function(){
    const elemForBeauty = document.createElement("p");
    elemForBeauty.textContent = "Three";
    //const twoTwo = findByClassAnsText('two', 'Two');
    const elements = document.getElementsByClassName('two'); 
    for(let elem = 0; elem < elements.length; elem++){
        if (elements.item(elem).textContent == 'Two'){
            twoTwo = elements.item(elem);
            break;
        }
    }
    console.log(twoTwo);

    twoTwo.parentNode.insertBefore(elemForBeauty, twoTwo.nextSibling);
});



act.style.width = LONG_BUTTON_WIDTH;
act.style.height = LONG_BUTTON_HEIGHT;
act.textContent = "Press for beauty";
const lastDiv = document.getElementsByTagName('div');
lastDiv[lastDiv.length -1].appendChild(act);


