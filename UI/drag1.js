console.log("drop.js");
const node = document.createElement("div");
node.style.height = "20px";
node.style.backgroundColor = "green";
node.style.margin = "1.5em";
let count1 = 0;
let sub_arr;


const interface_childs = [];



function dragEnter_handler(ev) {
  ev.preventDefault();

  if (document.getElementById("interface").firstElementChild == null) {
    node.style.marginTop = "4rem";
  } else {
    node.style.marginTop = "1.1em";
  }
  if (ev.target != node) {
    ev.target.appendChild(node);
  }
}
function dragOver_handler(ev) {
  ev.preventDefault();
  ev.target.style.borderColor = "red";
}

function dragLeave_handler(ev) {
  ev.target.style.borderColor = "transparent";
  if (ev.target != node) {
    ev.target.removeChild(node);
    // node.remove();
  }
}

function drag_handler(ev) {
  ev.preventDefault();
  console.log("drag start - ");
}

function drop_handler(ev) {
  ev.preventDefault();
  if (ev.target != node) {
    node.remove();
  }
  ev.target.style.borderColor = "transparent";
  let id = ev.dataTransfer.getData("text/plain");
  let i = 0;
  console.log(id);
  for (i; i < id.length; i++) if (id[i] === "-") id = id.slice(i + 1, i + 4);
  console.log(id);

  const temp = document.getElementById(id);
  const clone = temp.content.cloneNode(true);
  clone.id = id + count1++;

  console.log("clone id- ", clone.id);
  ev.target.appendChild(clone);
  ev.target.lastElementChild.id = clone.id;
  let ELEMNT = document.getElementById(clone.id);

  interface_childs.push(ELEMNT);
  console.log("array is now");

  document.getElementById("interface").firstElementChild.style.marginTop =
    "4rem";
}

function drag_start_handler(ev) {
  ev.dataTransfer.setData("text/plain", ev.target.id);
  console.log(ev);
}




// interface_childs.forEach((element) => {
//   console.log(element);
//   sub_arr = element.parentNode.children;
//   sub_arr = Array.from(sub_arr);
//   console.log(sub_arr);
//   console.log(sub_arr.indexOf(element));
//   let idx = sub_arr.indexOf(element);

//   console.log("index is ", idx);
// });




function up() {
  target = document.getElementsByClassName("highlight")[0];
  let parentlist = target.parentNode.children;
  parentlist = Array.from(parentlist);
  let indes = parentlist.indexOf(target);
  // parentlist.removeChild(target);\
  // target.remove();
  console.log("target is", target);
  // target.parentNode.removeChild(target);
  // target.parentNode.appendChild(target[indes - 1]);
  target.parentNode.insertBefore(target, target[indes - 1]);
  target[indes - 1].parentNode.insertAfter(target[indes - 1], target);
  // swap(indes, indes - 1);
}

// select highkight

function deselect(){
    while(prevSelection.length>0){
        prevSelection.pop().classList.remove("highlight");
    }
}

const prevSelection = [];
let count = 0;
let ifshiftpressed=false;


const delel = ()=>{
    while (prevSelection.length>0) {
        prevSelection.pop().remove();
    }
    document.getElementById("delbut").disabled = true;

}

addEventListener("click",(event)=>{
    
    const target = event.target;    
    if(target.classList.contains("selectable")){
        // single click
        // [target]
        if(prevSelection.length==1 && !event.ctrlKey && !event.shiftKey){
            if(target.classList.contains("highlight")){
                prevSelection.pop().classList.remove("highlight");
                
            }
            else
                {
                prevSelection.pop().classList.remove("highlight");
                prevSelection.push(target);
                target.classList.add("highlight");
            }
        }
            // single select
        else if(prevSelection.length >1 && !event.ctrlKey && !event.shiftKey){
            deselect();
            prevSelection.push(target);
            target.classList.add("highlight");
        }

        else if(prevSelection.length>0 && event.ctrlKey){
            if(prevSelection.includes(target)){
                target.classList.remove("highlight");
                let idx =prevSelection.indexOf(target);
                prevSelection.splice(idx,1);

            }else{
                prevSelection.push(target);
                target.classList.add("highlight");
            }

            console.log("control is presses",event.ctrlKey);
        }
            // shift slect
        else if(event.shiftKey && prevSelection[0] != undefined){


            console.log("shift is presses",event.shiftKey);
            let lastselectedelem = prevSelection.pop();
            
            console.log(ifshiftpressed);
            console.log("start",lastselectedelem);
            console.log("end",target);
            if(!ifshiftpressed)
            {
                ifshiftpressed = true;
            }
            deselect();
            console.log(ifshiftpressed);
            
            const siblnglst = Array.from(document.getElementsByClassName("selectable"));
            let starttemp = siblnglst.indexOf(lastselectedelem);
            let endtemp = siblnglst.indexOf(target);
            
            if(endtemp>starttemp){
                console.log("end is greater");
                for(let i=endtemp;i>=starttemp;i--){
                    prevSelection.push(siblnglst[i]);
                    siblnglst[i].classList.add("highlight");
                }
            }else{
                console.log("start is greater");
                for(let i=endtemp;i<=starttemp;i++){
                    prevSelection.push(siblnglst[i]);
                    siblnglst[i].classList.add("highlight");
                }
            }

        }
        else{
            prevSelection.push(target);
            target.classList.add("highlight");
        }

        document.getElementById("delbut").disabled = false;
        if(prevSelection.length==0)
            document.getElementById("delbut").disabled = true;
        
    }
    console.log(prevSelection);
    
});





addEventListener("keyup",(ev)=>{

    if(ev.key == "Shift"){
        ifshiftpressed = false;
    }

})

function Selecting(){
 
  document.getElementsByClassName("btn").removeAttribute("disabled");
}