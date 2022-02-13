const programming_interface = document.getElementById("program-interface");
const prevSelection = [];
let count = 0;
let ifshiftpressed=false;
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
    while (prevSelection.length>0) {
        prevSelection.pop().remove();
    }
    document.getElementById("delbutt").disabled = true;

}

function deselect(){
    while(prevSelection.length>0){
        prevSelection.pop().classList.remove("highlight");
    }
}

addEventListener("click",(event)=>{
    // console.log(event.target.classList);
    // console.log("control key is presses",event.ctrlKey);
    // console.log(event);
    const target = event.target;
    
    if(target.classList.contains("selectable")){
        if(prevSelection[0] != undefined && !event.ctrlKey && !event.shiftKey){
            deselect();
            prevSelection.push(target);
            target.classList.add("highlight");
        }
        else if(prevSelection[0] != undefined && event.ctrlKey){
            console.log("control is presses",event.ctrlKey);
            prevSelection.push(target);
            target.classList.add("highlight");
        }
        else if(event.shiftKey && prevSelection[0] != undefined){
            console.log("shift is presses",event.shiftKey);
            
            let lastselectedelem = prevSelection.pop();
            console.log(ifshiftpressed);
            if(!ifshiftpressed)
            {
                ifshiftpressed = true;
                deselect();
            }
            console.log(ifshiftpressed);
            
            const siblnglst = Array.from(document.getElementsByClassName("selectable"));
            let starttemp = siblnglst.indexOf(lastselectedelem);
            let endtemp = siblnglst.indexOf(target);
            let start = Math.min(starttemp,endtemp);
            let end = Math.max(starttemp,endtemp);
            
            for(let i=start;i<=end;i++){
                prevSelection.push(siblnglst[i]);
                siblnglst[i].classList.add("highlight");
            }

        }
        else{
            prevSelection.push(target);
            target.classList.add("highlight");
        }

        document.getElementById("delbutt").disabled = false;
    }
    console.log(prevSelection);
    
});

addEventListener("keyup",(ev)=>{

    if(ev.key == "Shift"){
        ifshiftpressed = false;
    }

})

