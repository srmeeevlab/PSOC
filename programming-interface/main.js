const programming_interface = document.getElementById("program-interface");
const prevSelection = [];
let count = 0;
const addel = ()=>{
    programming_interface.appendChild(createElemnet());
}

const createElemnet = () =>{
    const new_el = document.createElement("h1");
    new_el.classList.add("selectable");
    new_el.innerHTML = "HELLO"+count++;
    return new_el;
}

const delel = ()=>{
    if(prevSelection.length !== 0){
        prevSelection.pop().remove();
        document.getElementById("delbutt").disabled = true;
    }
}

addEventListener("click",(event)=>{
    const target = event.target;
    
    if(target.classList.contains("selectable")){
        if(prevSelection[0] != undefined){
            prevSelection.pop().classList.remove("highlight");
        }
        prevSelection.push(target);
        target.classList.add("highlight");
        document.getElementById("delbutt").disabled = false;
    };
});