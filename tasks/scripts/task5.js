//task 6.5
let fifthElements = document.getElementsByName('five'); 



function makeElementsHolidayOrange(elements){
    for(let elem = 0; elem < elements.length; elem++){
        elements.item(elem).style.color = "orange";
    }
    return elements;
}














const act = document.createElement("button");
act.addEventListener('click', 
    function(){
        fifthElements = makeElementsHolidayOrange(fifthElements);
    } 
);
act.className = "actionButton";
act.textContent = "Press me";
const lastDiv = document.getElementsByTagName('div');
lastDiv[lastDiv.length -1].appendChild(act);