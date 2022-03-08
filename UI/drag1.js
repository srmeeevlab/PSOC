const node = document.createElement("div");
node.style.height = "20px";
node.id = "green-blk"
node.style.backgroundColor = "green";
max_level = 30;
node.style.margin = "1.5em";
let count1 = 0;
let sub_arr;
const prevSelection = [];
let count = 0;
let ifshiftpressed = false;


var maincode = "";

function drag_handler(ev) {
    ev.preventDefault();
}

function drag_start_handler(ev) {

    if (ev.target.id.includes("-")) {
        deselect();
    }
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dragOver_handler(ev) {
    ev.preventDefault();
    console.log(ev.target.id == "green-blk");
    console.log(ev.target.id);
    if (ev.target.id === "green-blk") {
        return;
    }
    if (ev.target.id == "drop-box") {
        document.getElementById("interface").appendChild(node);
    } else {
        ev.target.appendChild(node);
    }
    // ev.target.style.borderColor = "red";
}

function dragEnter_handler(ev) {
    ev.preventDefault();
    // console.log("drag enter",ev.target.id);
    if (ev.target.id === "green-blk") {
        return;
    }
    // ev.target.style.borderColor = "red";

    // ev.target.parentNode!=prevSelection[0]
    if (ev.target.classList.contains("highlight")) {
        return;
    }

}


function dragLeave_handler(ev) {
    // if (ev.target != node) {
    ev.target.removeChild(node);
    // node.remove();
    // }
}

function drop_handler(ev) {
    ev.preventDefault();
    // console.log("drop",ev);
    if (ev.target != node) {
        node.remove();
    }



    if (prevSelection.length > 0 && prevSelection[0].classList.contains("highlight")) {
        if (ev.target.classList.contains("highlight")) {
            prevSelection[0].draggable = false;
            document.getElementById("dragbut").innerHTML = "drag";
            return;
        }

        ev.target.appendChild(prevSelection[0]);
        prevSelection[0].draggable = false;
        document.getElementById("dragbut").innerHTML = "drag";
    } else {
        if (ev.path.length - 8 > max_level) {
            alert("max indentation reached");
            return;
        }
        // ev.target.style.borderColor = "transparent";
        let id = ev.dataTransfer.getData("text/plain");
        let i = 0;
        // console.log(id);
        for (i; i < id.length; i++)
            if (id[i] === "-") id = id.slice(i + 1, i + 4);
            // console.log(id);

        const temp = document.getElementById(id);
        const clone = temp.content.cloneNode(true);
        clone.id = id + count1++;

        // console.log("clone id- ", clone.id);
        if (ev.target.id != "drop-box") {
            ev.target.appendChild(clone);
            ev.target.lastElementChild.id = clone.id;
        } else {
            document.getElementById("interface").appendChild(clone);
            document.getElementById("interface").lastElementChild.id = clone.id;

        }
    }

}




// select highkight


function dragbu() {
    document.getElementById("dragbut").innerHTML = "dragstarted";
    let target = prevSelection[0];
    target.draggable = true;
    target.setAttribute("ondrag", `drag_handler(event)`);
    target.setAttribute("ondragstart", `drag_start_handler(event)`);

}

function up() {
    if (prevSelection.length == 1) {
        let target = prevSelection[0];
        if (!target.previousElementSibling || target.previousElementSibling.id != "drop-box") {
            target.parentNode.insertBefore(target, target.previousElementSibling);
        }
    }
}

function down() {
    if (prevSelection.length == 1) {
        let target = prevSelection[0];
        if (target.nextElementSibling)
            target.parentNode.insertBefore(target, target.nextElementSibling.nextElementSibling);
    }
}



function stepout() {
    let target = prevSelection[0];
    if (target.parentNode != document.getElementById("interface"))
        target.parentNode.parentNode.insertBefore(target, target.parentNode.nextElementSibling);
}

function stepin() {
    let target = prevSelection[0];
    if (target.nextElementSibling)
        target.nextElementSibling.appendChild(target);
}

function deselect() {
    while (prevSelection.length > 0) {
        prevSelection.pop().classList.remove("highlight");
    }
    document.getElementById("delbut").disabled = true;
    document.getElementById("upbut").disabled = true;
    document.getElementById("downbut").disabled = true;
    document.getElementById("dragbut").disabled = true;
    document.getElementById("stepo").disabled = true;
    document.getElementById("stepi").disabled = true;
}



const delel = () => {
    while (prevSelection.length > 0) {
        prevSelection.pop().remove();
    }
    document.getElementById("delbut").disabled = true;
    document.getElementById("upbut").disabled = true;
    document.getElementById("downbut").disabled = true;
    document.getElementById("dragbut").disabled = true;
    document.getElementById("stepo").disabled = true;
    document.getElementById("stepi").disabled = true;
}


function checkButtonStatus() {
    let upbut = document.getElementById("upbut");
    let dragbut = document.getElementById("dragbut");
    let downbut = document.getElementById("downbut");
    let stepi = document.getElementById("stepi");
    let stepo = document.getElementById("stepo");
    let setbut = document.getElementById("setbut");
    let delbut = document.getElementById("delbut");

    console.log("inside chck status")
    if (prevSelection.length != 1) {
        document.getElementById("upbut").disabled = true;
        document.getElementById("downbut").disabled = true;
        document.getElementById("dragbut").disabled = true;
        document.getElementById("delbut").disabled = true;
        if (prevSelection.length > 0)
            document.getElementById("delbut").disabled = false;
        document.getElementById("stepo").disabled = true;
        document.getElementById("stepi").disabled = true;
        document.getElementById("setbut").disabled = true;
        return;
    }
    let target = prevSelection[0];

    if (!target.previousElementSibling || target.previousElementSibling.id == "drop-box") {
        upbut.disabled = true;
    } else {
        upbut.disabled = false;
    }
    if (!target.nextElementSibling) {
        downbut.disabled = true;
    } else {
        downbut.disabled = false;
    }
    if (!target.nextElementSibling)
        stepi.disabled = true;
    else
        stepi.disabled = false;

    if (target.parentNode == document.getElementById("interface"))
        stepo.disabled = true;
    else { stepo.disabled = false; }

    setbut.disabled = false;
    dragbut.disabled = false;
    delbut.disabled = false;


}


function showprops(params) {
    prevSelection[0].getElementsByClassName("details")[0].style.display = "block";

}




addEventListener("click", (event) => {

    const target = event.target;
    if (target.classList.contains("selectable")) {
        // single click
        // [target]
        // console.log("path lne", event.path);

        let level = (event.path.length) - 8;
        // console.log("path lne", level);

        if (prevSelection.length == 1 && !event.ctrlKey && !event.shiftKey) {
            if (target.classList.contains("highlight")) {
                prevSelection.pop().classList.remove("highlight");

            } else {
                prevSelection.pop().classList.remove("highlight");
                prevSelection.push(target);
                target.classList.add("highlight");
            }
        }
        // single select
        else if (prevSelection.length > 1 && !event.ctrlKey && !event.shiftKey) {
            deselect();
            prevSelection.push(target);
            target.classList.add("highlight");
        } else if (prevSelection.length > 0 && event.ctrlKey) {
            if (prevSelection.includes(target)) {
                target.classList.remove("highlight");
                let idx = prevSelection.indexOf(target);
                prevSelection.splice(idx, 1);

            } else {
                prevSelection.push(target);
                target.classList.add("highlight");
            }

            // console.log("control is presses",event.ctrlKey);
        }
        // shift slect
        else if (event.shiftKey && prevSelection[0] != undefined) {


            // console.log("shift is presses",event.shiftKey);
            let lastselectedelem = prevSelection.pop();

            // console.log(ifshiftpressed);
            // console.log("start",lastselectedelem);
            // console.log("end",target);
            if (!ifshiftpressed) {
                ifshiftpressed = true;
            }
            deselect();
            // console.log(ifshiftpressed);

            const siblnglst = Array.from(document.getElementsByClassName("selectable"));
            let starttemp = siblnglst.indexOf(lastselectedelem);
            let endtemp = siblnglst.indexOf(target);

            if (endtemp > starttemp) {
                // console.log("end is greater");
                for (let i = endtemp; i >= starttemp; i--) {
                    prevSelection.push(siblnglst[i]);
                    siblnglst[i].classList.add("highlight");
                }
            } else {
                // console.log("start is greater");
                for (let i = endtemp; i <= starttemp; i++) {
                    prevSelection.push(siblnglst[i]);
                    siblnglst[i].classList.add("highlight");
                }
            }

        } else {
            prevSelection.push(target);
            target.classList.add("highlight");
        }

    }
    checkButtonStatus();

});





addEventListener("keyup", (ev) => {
    if (ev.key == "Shift") {
        ifshiftpressed = false;
    }
})

function matinput(block) {
    let rows, columns;
    rows = block.children[0].children[1].value;
    columns = block.children[0].children[2].value;
    let divblock = block.children[0];
    divblock = divblock.getElementsByClassName("matinps")[0];
    divblock.innerHTML = "";
    if (!rows || !columns) {
        alert("rows or columns empty")
        return;
    }
    
    let inpcount = 1;
    for (let i = 0; i < rows; i++) {
        // const element = array[i];

        for (let index = 0; index < columns; index++) {
            // const element = array[index];
            divblock.appendChild(document.createElement("input"));
            divblock.lastElementChild.type = "text";
            divblock.lastElementChild.id = inpcount;
            inpcount++;

        }
        divblock.appendChild(document.createElement("br"))
        divblock.appendChild(document.createElement("br"))
    }

}

var constantBlock = (block) => {
    let varname, valname;
    console.log("inside constant");
    // console.log(block.children[0].children);
    varname = block.children[0].children[0].value;
    valname = block.children[0].children[1].value;
    // varname = "a";
    // valname = "3";
    maincode += ` let ${varname} = ${valname} ;`;
    // block.innerHTML += " : " + varname;
    //  " let a = 3"
}

var booleanBlock = (block) => {
    let varname, valname;
    // varname = "bo";
    // valname = "true";
    varname = block.children[0].children[0].value;
    valname = block.children[0].children[1].value;
    // block.innerHTML += " : " + varname;
    maincode += ` let ${varname} = ${valname} ;`;
}

var evalBlock = (block) => {
    let evalValue;
    evalValue = block.children[0].children[0].value;
    // result = eval(evalValue)
    // result = (evalValue) => {
    //     return Function(`'use strict'; return (${eval(evalValue)}`)()
    // }
    maincode += `console.log(${eval(evalValue)})`;
}

var sumBlock = (block) => {
    let i, sum = 0;
    let noofchildren = block.childElementCount;
    let arr = Array.from(block.children);
    for (let index = 0; index < arr.length; index++) {
        arr[i] = arr[i].value;
    }
    maincode += `   
    let sum=0;
    let arr = [${arr}];
    for(let i=0;i<arr.length;i++){
     sum+= arr[i]; 
    }

  `
}

var outputBlock = (block) => {
    let output;
    output = block.children[0].children[0].value;
    maincode += `console.log(${output}) `;
}

var matrixBlock = (block) => {
    let varname = block.children[0].children[0].value;
    let rows , columns;
    rows = block.children[0].children[1].value;
    columns = block.children[0].children[2].value;
    let array = [];
    let matrix_inputs = block.children[0].getElementsByClassName("matinps")[0].getElementsByTagName("input");
    for (let index = 0; index < matrix_inputs.length; index++) {
        array.push(matrix_inputs[index].value);
    }

    maincode += `
    const arr_M =[${array}];
    
    const ${varname} = [];
    while(arr_M.length) ${varname}.push(arr_M.splice(0,${columns}));
        
    console.log("matrix is ",${varname});
    `
}

var breakBlock = (block) => maincode += "break;";
var continueBlock = (block) => maincode += "continue;";

var identityBlock = (block) => {
    let varname = block.children[0].children[0].value;
    let rows = block.children[0].children[1].value;
    let array = [];
    for (let i = 0; i < rows; i++) {
        // const element = array[index];
        for (let j = 0; j < rows; j++) {
            i == j ? array.push(1) : array.push(0);
        }
    }
    maincode += `
    const arr_I = [${array}];
    const ${varname} = [];
    while(arr_I.length) ${varname}.push(arr_I.splice(0,${rows}));
    console.log("Identity is",${varname});
    `;
}

var transposeBlock = (block) => {

    let newvarname = block.children[0].children[0].value;
    let varname = block.children[0].children[1].value;
    console.log("transpose variable name is", varname);

    maincode += `
    
    const ${newvarname} = new Array(${varname}[0].length);
    for(let i=0;i<${newvarname}.length;i++){
        ${newvarname}[i] = new Array(${varname.length}).fill("#");
    }

    for(let i=0;i<${newvarname}.length;i++){
        for(let j=0;j<${newvarname}[0].length;j++){
            ${newvarname}[i][j] = ${varname}[j][i];
        }
    }
    console.log("Transpose is",${newvarname});
    
    `
}

var subRoutine = (block) => {
    let childElements = block.children;
    // another compile function
}

var forBlock = (block) => {
    let initVal, endVal, op, subroutine,step;
    initVal = block.children[0].children[0].value;
    endVal = block.children[0].children[1].value;
    op = block.children[0].children[2].value;
    step = block.children[0].children[3].value

    if(!(step=="1" || step==1) || !step){
        op = op[0] + `=${step}`;
    }
    subroutine = subRoutine(block);

    maincode += `for(let i=${initVal};i<${endVal};i${op}){
        ${subroutine}
    }
    `
}

var elseBlock = (block)=>{
    let subroutine = subRoutine(block);
    maincode+= `    
        else{
            ${subroutine};
        }
    
    `
}

var ifBlock = (block) =>{

    let subroutine = subRoutine(block);
    
    let op1,op2,op;
    op1 = block.children[0].children[0].value;
    op = block.children[0].children[1].value;
    op2 = block.children[0].children[2].value;
    
    let condition = ` ${op1} ${op} ${op2} `;
    maincode+= `
    
    if(${condition}){
        ${subroutine}
    }

    `
}

var elseifBlock = (block) =>{

    let subroutine = subRoutine(block);
    let op1,op2,op;
    op1 = block.children[0].children[0].value;
    op = block.children[0].children[1].value;
    op2 = block.children[0].children[2].value;
    
    let condition = ` ${op1} ${op} ${op2} `;

    maincode+= `
    
    else if(${condition}){
        ${subroutine}
    }

    `
}

var whileBlock = (block)=>{
    let subroutine = subRoutine(block);
    let op1,op2,op;
    op1 = block.children[0].children[0].value;
    op = block.children[0].children[1].value;
    op2 = block.children[0].children[2].value;
    
    let condition = ` ${op1} ${op} ${op2} `;

    maincode+= `
    
    while(${condition}){
        ${subroutine}
    }

    `
}

var unityMatrix = (block) => {
    let varname = block.children[0].children[0].value;
    let rows = block.children[0].children[1].value;
    let columns = block.children[0].children[2].value;
    let unitmat = [];
    for (let index = 0; index < rows * columns; index++) {
        unitmat.push(1);
    }
    maincode += `
    const arr_1 = [${unitmat}];
    const ${varname} = [];
    while(arr_1.length) ${varname}.push(arr_1.splice(0,${columns}));
    
    console.log("unity matrix is ",${varname});
    
    `
}


var zeroMatrix = (block) => {
    let varname = block.children[0].children[0].value;
    let rows = block.children[0].children[1].value;
    let columns = block.children[0].children[2].value;
    let zeroarr = [];
    for (let index = 0; index < rows * columns; index++) {
        // const element = array[index];
        zeroarr.push(0);
    }
    maincode += `
    const arr_z = [${zeroarr}];
    const ${varname} = [];
    while(arr_z.length) ${varname}.push(arr_z.splice(0,${columns}));
        
    console.log("zero matrix is ",${varname});
    
    `
}

function compl() {
    // window.maincode.concat("2");
    maincode = "";
    let blocksofcode = document.getElementById("interface").children;
    // return blocksofcode;
    for (let index = 0; index < blocksofcode.length; index++) {
        const element = blocksofcode[index];
        // let block = element.firstChild;
        // console.log("element is", block.textContent.includes("Constant"));

        // console.log(block.trim().split());
        // if(block.trim() == "Constant"){
        //   constantBlock(element);
        // }
        let blockname;

        if (element.textContent.includes("Constant")) {
            blockname = "Constant";
        } else if (element.textContent.includes("Boolean")) {
            blockname = "Boolean";
        } else if (element.textContent.includes("Output Block")) {
            blockname = "Output Block";
        } else if (element.textContent.includes("Break")) {
            blockname = "Break";
        } else if (element.textContent.includes("Continue")) {
            blockname = "Continue";
        } else if (element.textContent.includes("Transpose")) {
            blockname = "Transpose";
        } else if (element.textContent.includes("Identity")) {
            blockname = "Identity Matrix";
        } else if (element.textContent.includes("Evaluate")) {
            blockname = "Evaluate";
        } else if (element.textContent.includes("For")) {
            blockname = "For";
        } else if (element.textContent.includes("Unity Matrix")) {
            blockname = "Unity";
        } else if (element.textContent.includes("Zeros Matrix")) {
            blockname = "Zero";
        } else if (element.textContent.includes("Matrix")) {
            blockname = "Matrix";
        }

        switch (blockname) {
            case "Constant":
                console.log("running Constant");
                constantBlock(element);
                break;
            case "Boolean":
                console.log("running boolean");
                booleanBlock(element);
                break;
            case "Output Block":
                console.log("running output block");
                outputBlock(element);
                break;
            case "Matrix":
                console.log("running matrix");
                matrixBlock(element);
                break;
            case "Break":
                console.log("running break");
                break;
            case "Identity Matrix":
                identityBlock(element);
                break;
            case "Transpose":
                transposeBlock(element);
                break;
            case "Evaluate":
                evalBlock(element);
                break;
            case "For":
                forBlock(element);
                break;
            case "Unity":
                unityMatrix(element);
                break;
            case "Zero":
                zeroMatrix(element);
                break;
            default:
                break;
        }
        // maincode+="console.log(2);";
        console.log(maincode);

    }
}