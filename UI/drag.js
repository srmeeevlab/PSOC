console.log("drop.js");
function dragEnter_handler(ev) {
    ev.preventDefault();
}
function dragOver_handler(ev) {
    ev.preventDefault();
}
function drop_handler(ev){
    ev.preventDefault();
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
function drag_handler(ev) {
    ev.preventDefault();
}
function drag_start_handler(ev){
    ev.dataTransfer.setData("text/plain", ev.target.id);
    console.log(ev);
}