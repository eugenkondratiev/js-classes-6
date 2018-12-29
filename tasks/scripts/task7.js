//task 6.7 


function findTheDiv(){
//    const fourthElement = document.querySelector('#four'); 
    const fourthElement = document.getElementById('four'); 

//    return fourthElements.parentNode;
    return fourthElement.parentElement;
        
}

const div2 = findTheDiv();
console.log(div2);


function changeBG(){
    const divChildren = div2.children;
    for(let elem = 0; elem < divChildren.length; elem++){
        divChildren.item(elem).style.backgroundColor = "lightgreen";
    }
}














const act = document.createElement("button");
act.addEventListener('click', changeBG);
act.style.width = "123px";
act.style.height = "44px";
act.textContent = "Press for beauty";
const lastDiv = document.getElementsByTagName('div');
lastDiv[lastDiv.length -1].appendChild(act);


