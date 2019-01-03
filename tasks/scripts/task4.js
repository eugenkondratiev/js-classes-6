//task 6.4
let secondElements = document.getElementsByClassName('two');

function increaseChildrenFontsFont(elementsCollection){
    for(let elem = 0; elem < elementsCollection.length; elem++){
        elementsCollection[elem].style.fontSize = "30px";
    }
    return elementsCollection;
}


const act = document.createElement("button");
act.addEventListener('click', function(){
    secondElements = increaseChildrenFontsFont(secondElements);
});
act.className = "actionButton";
 act.textContent = "Press me";


const lastDiv = document.getElementsByTagName('div');
lastDiv[lastDiv.length -1].appendChild(act);

