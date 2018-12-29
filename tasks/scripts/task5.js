//task 6.5
const fifthElements = document.getElementsByName('five'); 



function makeFiveHolidayOrange(){
    for(let elem = 0; elem <fifthElements.length;elem++){

        fifthElements.item(elem).style.color = "orange";
    }
}














const act = document.createElement("button");
act.addEventListener('click', makeFiveHolidayOrange);
act.style.width = "88px";
act.style.height = "44px";
act.textContent = "Press me";
const lastDiv = document.getElementsByTagName('div');
lastDiv[lastDiv.length -1].appendChild(act);