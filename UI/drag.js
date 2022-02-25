console.log("drop.js");
const node = document.createElement("div");
node.style.height = "20px";
// node.style.border = "5px solid green";
node.style.backgroundColor = "green";
function dragEnter_handler(ev) {
    ev.preventDefault();
    if(ev.target != document.getElementById("interface")){
        ev.target.appendChild(node);
    }
}
function dragOver_handler(ev) {
    ev.preventDefault();
    ev.target.style.borderColor = "red";
}

function dragLeave_handler(ev){
    ev.target.style.borderColor = "black";
    
    if(ev.target != document.getElementById("interface")){
        ev.target.removeChild(node);
    }
}

function drag_handler(ev) {
    ev.preventDefault();
    console.log("draged - ")
}

function drop_handler(ev){
    ev.preventDefault();
    if(ev.target != document.getElementById("interface")){
        ev.target.removeChild(node);
    }
    ev.target.style.borderColor = "black";
    let id = ev.dataTransfer.getData("text/plain");
    let i=0;
    console.log(id);
    for(i;i<id.length;i++)
        if(id[i] === '-')
            id = id.slice(i+1,i+4);
    console.log(id);
    const temp = document.getElementById(id);
    const clone = temp.content.cloneNode(true);
    ev.target.appendChild(clone);
}

function drag_start_handler(ev){
    ev.dataTransfer.setData("text/plain", ev.target.id);
    console.log(ev);
}