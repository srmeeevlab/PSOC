// from Math import sin

const node = document.createElement("div");
node.style.height = "20px";
node.id = "green-blk"
node.style.backgroundColor = "green";
node.style.margin = "1.5em";
max_level = 30;
let count1 = 0;
let sub_arr;
const prevSelection = [];
let count = 0;
let ifshiftpressed = false;

let supremecode;

// var maincode = "";

function drag_handler(ev) { ev.preventDefault(); }

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

    if (["For", "While", "If", "Else", "Else If"].includes(ev.target.firstChild.textContent.trim())) {
        if (!ev.target.classList.contains("highlight")) {
            ev.target.appendChild(node);
        }
    } else {
        document.getElementById("interface").appendChild(node);
    }
}

function dragEnter_handler(ev) {
    ev.preventDefault();
    // console.log("drag enter",ev.target.id);


}


function dragLeave_handler(ev) {
    // if (ev.target != node) {
    // if(ev.target.children.contains(node)){
    //     console.log("contains")
    // }
    let parent = ev.target.children;
    parent = Array.from(parent);
    if (parent.includes(node)) {
        console.log("yes nde is ther")
        ev.target.removeChild(node);
    }
    // node.remove();
    // }
}

function drop_handler(ev) {
    ev.preventDefault();
    // console.log("drop",ev);

    node.remove();



    if (prevSelection.length > 0) {
        prevSelection[0].draggable = false;
        document.getElementById("dragbut").innerHTML = "drag";
        if (ev.target.classList.contains("highlight")) {
            return;
        }
        if (["For", "While", "If", "Else", "Else If"].includes(ev.target.firstChild.textContent.trim())) {
            if (!ev.target.classList.contains("highlight")) {
                ev.target.appendChild(prevSelection[0]);
            }
        } else {
            document.getElementById("interface").appendChild(prevSelection[0]);
        }


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
        if (["For", "While", "If", "Else", "Else If"].includes(ev.target.firstChild.textContent.trim())) {
            if (!ev.target.classList.contains("highlight")) {
                ev.target.appendChild(clone);
                ev.target.lastElementChild.id = clone.id;
            }
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
        // if (!target.previousElementSibling || target.previousElementSibling.id != "drop-box") {
        target.parentNode.insertBefore(target, target.previousElementSibling);
        // }
    }
}

function down() {
    if (prevSelection.length == 1) {
        let target = prevSelection[0];
        // if (target.nextElementSibling)
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
        prevSelection.pop().classList.remove("highlight");;
    }
    document.getElementById("delbut").disabled = true;
    document.getElementById("setbut").disabled = true;
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
    document.getElementById("dragbut").innerHTML = "drag";
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

    if (!target.previousElementSibling || target.previousElementSibling.id == "drop-box" || target.previousElementSibling.classList.contains("details")) {
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
    if (prevSelection[0].getElementsByClassName("details").length > 0)
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
        let props = Array.from(document.getElementsByClassName("details"));
        props.forEach(element => {
            element.style.display = "none";
        });

        if (prevSelection.length == 1 && !event.ctrlKey && !event.shiftKey) {
            if (target.classList.contains("highlight")) {
                prevSelection[0].draggable = false;
                document.getElementById("dragbut").innerHTML = "drag";
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


function ok(event) {
    let varname='';
    event.target.parentNode.style.display = 'none';
    let block = event.target.parentNode; // details
    if(block.children[0].name == "Variable"){
        varname = block.children[0].value;
    }
    let parentblock = event.target.parentNode.parentNode;
    if(varname){
        parentblock.innerHTML = `${varname}@`+parentblock.innerHTML;
    }
}


function matinput(block) {


    let rows, columns;
    rows = block.children[0].children[1].value;
    columns = block.children[0].children[2].value;
    let divblock = block.children[0];
    divblock = divblock.getElementsByClassName("matinps")[0];
    divblock.innerHTML = "";
    if (!rows || !columns || rows < 0 || columns < 0) {
        alert("Invalid input");
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
    if (!valname || !varname || !isNaN(varname)) {
        alert("Invalid input const")
        throw 0;
    }
    // varname = "a";
    // valname = "3";
    return ` let ${varname} = ${valname} ;`;
    // block.innerHTML += " : " + varname;
    //  " let a = 3"
}

var booleanBlock = (block) => {
    let varname, valname;
    // varname = "bo";
    // valname = "true";
    varname = block.children[0].children[0].value;
    valname = block.children[0].children[1].value;
    if (!valname || !varname || !isNaN(varname)) {
        alert("Invalid input")
        throw 0;
    }
    // block.innerHTML += " : " + varname;
    return ` let ${varname} = ${valname} ;`;
}

var evalBlock = (block) => {
    let evalValue,varname;
    varname = block.children[0].children[0].value;
    evalValue = block.children[0].children[1].value;
    if (!evalValue || !varname) {
        alert("Invalid input")
        throw 0;
    }
    evalValue = evalValue.split(" ").join("");
    console.log(evalValue);
    return `let ${varname} =  eval("${evalValue}");`
    // return `console.log(${evalValue})`;
}

var matevalBlock = (block) => {
    let evalValue;
    evalValue = block.children[0].children[0].value;
    if (!evalValue) {
        alert("Empty 'outputVal' block");
        throw 0;
    }
    evalValue = evalValue.split(" ").join("");
    let evallist = evalValue.split("");
    let op1 = '',
        op2 = '',
        code = ``;

    for (let index = 0; index < evallist.length; index++) {
        const element = evallist[index];
        // [+,-,*,/,%]
        // (-3)*(-3)
        if (["+", '-', '*', '/', '%'].includes(element) && (["+", '-', '*', '/', '%'].includes(evallist[index - 1]) || ["+", '-', '*', '/', '%'].includes(evallist[index + 1]))) {
            alert("Invalid Mathmatical operations ");
            throw 0;
        }

        if (element == "+") {
            if (evallist[index - 1] == "(") {
                alert("wrong brackets");
                throw 0;
            }

            if (evallist[index - 1] != ")")
                op1 = evallist[index - 1];

            else {
                // op1 = ;
                let ind = index - 2;
                while (evallist[ind] != "(" && ind > 0) {
                    op1 += evallist[ind];
                    ind--;
                }
                op1 = op1.split("").reverse().join("")
            }

            if (evallist[index + 1] != "(")
                op2 = evallist[index + 1];
            else {
                let ind = index + 2;
                while (evallist[ind] != ")" && ind < evallist.length) {
                    op2 += evallist[ind];
                    ind++;
                }

            }
            code += `
            math.add(${op1}, ${op2});
            console.log("added matrix is",math.add(${op1}, ${op2}));
            `;
        } else if (element == "-") {

            if (evallist[index - 1] != ")")
                op1 = evallist[index - 1];
            else if (evallist[index - 1] == "(") {
                code += `math.multiply(${evallist[index+1]},-1);`

            } else {
                // op1 = ;
                let ind = index - 2;
                while (evallist[ind] != "(" && ind > 0) {
                    op1 += evallist[ind];
                    ind--;
                }
                op1 = op1.split("").reverse().join("")
            }

            if (evallist[index + 1] != "(")
                op2 = evallist[index + 1];
            else {
                let ind = index + 2;
                while (evallist[ind] != ")" && ind < evallist.length) {
                    op2 += evallist[ind];
                    ind++;
                }

            }

            code += `
            math.subtract(${op1}, ${op2});
            console.log("subtract matrix is",math.subtract(${op1}, ${op2}));
            `
        } else if (element == "*") {
            if (evallist[index - 1] == "(") {
                alert("wrong brackets");
                throw 0;
            }
            if (evallist[index - 1] != ")")
                op1 = evallist[index - 1];
            else {
                // op1 = ;
                let ind = index - 2;
                while (evallist[ind] != "(" && ind > 0) {
                    op1 += evallist[ind];
                    ind--;
                }
                op1 = op1.split("").reverse().join("")
            }

            if (evallist[index + 1] != "(")
                op2 = evallist[index + 1];
            else {
                let ind = index + 2;
                while (evallist[ind] != ")" && ind < evallist.length) {
                    op2 += evallist[ind];
                    ind++;
                }

            }
            code += `
            math.multiply(${op1}, ${op2});
            console.log("multiply matrix is",math.multiply(${op1}, ${op2}));
            `
        } else if (element == "/") {
            if (evallist[index - 1] == "(") {
                alert("wrong brackets");
                throw 0;
            }
            if (evallist[index - 1] != ")")
                op1 = evallist[index - 1];
            else {
                // op1 = ;
                let ind = index - 2;
                while (evallist[ind] != "(" && ind > 0) {
                    op1 += evallist[ind];
                    ind--;
                }
                op1 = op1.split("").reverse().join("")
            }

            if (evallist[index + 1] != "(")
                op2 = evallist[index + 1];
            else {
                let ind = index + 2;
                while (evallist[ind] != ")" && ind < evallist.length) {
                    op2 += evallist[ind];
                    ind++;
                }

            }
            code += `
            math.divide(${op1}, ${op2});
            console.log("divide matrix is",math.divide(${op1}, ${op2}));
            `
        } else if (element == "%") {
            if (evallist[index - 1] == "(") {
                alert("wrong brackets");
                throw 0;
            }
            if (evallist[index - 1] != ")")
                op1 = evallist[index - 1];
            else {
                // op1 = ;
                let ind = index - 2;
                while (evallist[ind] != "(" && ind > 0) {
                    op1 += evallist[ind];
                    ind--;
                }
                op1 = op1.split("").reverse().join("")
            }

            if (evallist[index + 1] != "(")
                op2 = evallist[index + 1];
            else {
                let ind = index + 2;
                while (evallist[ind] != ")" && ind < evallist.length) {
                    op2 += evallist[ind];
                    ind++;
                }

            }
            code += `
            math.mod(${op1}, ${op2});
            console.log("mod matrix is",math.mod(${op1}, ${op2}));
            `
        }


    }
    return code;
}

var matmath = (block)=>{
    let op1,op2,op,varname;
    varname = block.children[0].children[0].value;
    op1 = block.children[0].children[1].value;
    op = block.children[0].children[2].value;
    op2 = block.children[0].children[3].value;
    // console.log("op1",op1);
    // console.log("op2",op2);
    // console.log("op is",op);
    let code1=``;
    if(!varname || !op1 || !op2){
        alert("Invalid Input");
        throw 0;
    }
    if(isNaN(op1) && op1[0]=='-'){
        op1 = Array.from(op1);
        op1.shift()
        code1+= ` ${op1} =math.multiply(${op1},-1);`
    }
    if(isNaN(op2) && op2[0]=='-'){
        op2 = Array.from(op1);
        op2.shift()
        
        code1+= `${op2}=math.multiply(${op2},-1);`
    }
    if(op=="+"){
        code1+=` let ${varname}= math.add(${op1},${op2});`
    }
    else if(op=="-"){
        code1+=`let ${varname}=math.subtract(${op1},${op2});`
    }
    else if(op=="*"){
        code1+=`let ${varname}=math.multiply(${op1},${op2});`
    }
    else if(op=="/"){
        code1+=`let ${varname}=math.divide(${op1},${op2});`
    }
    else if(op=="%"){
        code1+=`let ${varname}=math.mod(${op1},${op2});`
    }
    return code1;
    
}

var outputBlock = (block) => {
    let output;
    output = block.children[0].children[0].value;
    if (!output)
        output = "\n";
    return `console.log("output is",${output}); `;
}

var matrixBlock = (block) => {
    let varname = block.children[0].children[0].value;
    let rows, columns;
    rows = block.children[0].children[1].value;
    columns = block.children[0].children[2].value;
    if (rows < 0 || columns < 0 || !rows || !columns || !isNaN(varname) || !varname) {
        alert("Invalid input");
        throw 0;
    }
    let array = [];
    let matrix_inputs = block.children[0].getElementsByClassName("matinps")[0].getElementsByTagName("input");
    for (let index = 0; index < matrix_inputs.length; index++) {
        array.push(matrix_inputs[index].value);
    }


    return `
    const ${varname}1 =[${array}];
    
    const ${varname} = [];
    while(${varname}1.length) ${varname}.push(${varname}1.splice(0,${columns}));
        
    console.log("matrix is ",${varname});
    `
}

var breakBlock = (block) => { return "break;"; }
var continueBlock = (block) => { return "continue;"; }

var identityBlock = (block) => {
    let varname = block.children[0].children[0].value;
    let rows = block.children[0].children[1].value;
    if (!varname || !isNaN(varname) || rows < 0 || !rows) {
        alert("invalid input in identity block");
        throw 0;
    }
    let array = [];
    for (let i = 0; i < rows; i++) {
        // const element = array[index];
        for (let j = 0; j < rows; j++) {
            i == j ? array.push(1) : array.push(0);
        }
    }
    return `
    const ${varname}1 = [${array}];
    const ${varname} = [];
    while(${varname}1.length) ${varname}.push(${varname}1.splice(0,${rows}));
    console.log("Identity is",${varname});
    `;
}

var transposeBlock = (block) => {

    let varname = block.children[0].children[0].value;
    let matrix = block.children[0].children[1].value;
    if (!matrix || !varname || !isNaN(matrix) || !isNaN(varname)) {
        alert("Invalid ");
        throw 0;
    }
    console.log("transpose variable name is", matrix);

    return `
    
    const ${varname} = new Array(${varname}[0].length);
    for(let i=0;i<${varname}.length;i++){
        ${varname}[i] = new Array(${matrix.length}).fill("#");
    }

    for(let i=0;i<${varname}.length;i++){
        for(let j=0;j<${varname}[0].length;j++){
            ${varname}[i][j] = ${matrix}[j][i];
        }
    }
    console.log("Transpose is",${varname});
    
    `
}



var forBlock = (block) => {
    let forarr = getpath(block).filter(x=> x=="For");
    const cnt = forarr.length - 1;
    let iterator_var  = String.fromCharCode(cnt+ 105);
    
    let initVal, endVal, op, subroutine, step;
    subroutine = subRoutine(block);
    initVal = block.children[0].children[0].value;
    endVal = block.children[0].children[1].value;
    step = block.children[0].children[2].value;
    console.log("step is ", step);
    // op = block.children[0].children[3].value;

    if (!initVal || !endVal) {
        alert("start or end value not given");
        throw 0;
    }


    if (Number(initVal) > Number(endVal)) {
        op = "--"
    } else {
        op = "++";
    }
    if (!step)
        step = "1";
    if (!(step === "1" || step === 1)) {
        op = op[0] + `= ${step}`;
    }
    if (Number(initVal) > Number(endVal)) {
        return `for(let ${iterator_var}=${initVal};${iterator_var}>${endVal};${iterator_var}${op}){
            ${subroutine}
        }`
    } else {
        return `for(let ${iterator_var}=${initVal};${iterator_var}<${endVal};${iterator_var}${op}){
            ${subroutine}
        }`
    }

    // if(!initVal)




}

var elseBlock = (block) => {
    let subroutine = subRoutine(block);
    return `else{
            ${subroutine}
        }
    
    `
}

var ifBlock = (block) => {

    let subroutine = subRoutine(block);

    let op1, op2, op;
    op1 = block.children[0].children[0].value;
    op = block.children[0].children[1].value;
    op2 = block.children[0].children[2].value;
    if (!op1 || !op2) {
        alert("No input in if");
        throw 0;
    }

    let condition = ` ${op1} ${op} ${op2} `;
    return `
    
    if(${condition}){
        ${subroutine}
    }

    `
}

var getpath = (block) => {
    let path = [];
    let ele = block;
    while (ele.id != "interface") {
        path.push(ele.firstChild.textContent.trim());
        ele = ele.parentNode;
    }
    // console.log(path);
    return path;
}

var updateBlock = (block) => {
    let expr = block.children[0].children[0].value;
    if (!expr) {
        return;
    }
    return `${expr};`;
}

var elseifBlock = (block) => {


    let subroutine = subRoutine(block);
    let op1, op2, op;
    op1 = block.children[0].children[0].value;
    op = block.children[0].children[1].value;
    op2 = block.children[0].children[2].value;
    if (!op1 || !op2) {
        alert("Invalid input");
        throw 0;
    }
    let condition = ` ${op1} ${op} ${op2} `;

    return `
    
    else if(${condition}){
        ${subroutine}
    }

    `
}

var whileBlock = (block) => {
    let subroutine = subRoutine(block);
    let op1, op2, op;
    op1 = block.children[0].children[0].value;
    op = block.children[0].children[1].value;
    op2 = block.children[0].children[2].value;
    if (!op1 || !op2) {
        alert("No input in while");
        throw 0;
    }
    let condition = ` ${op1} ${op} ${op2} `;

    return `
    
    while(${condition}){
        ${subroutine}
    }

    `
}

var unityMatrix = (block) => {
    let varname = block.children[0].children[0].value;
    let rows = block.children[0].children[1].value;
    let columns = block.children[0].children[2].value;
    if (!rows || !columns || rows < 0 || columns < 0 || !varname || !isNaN(varname)) {
        alert("Invalid input");
        throw 0;
    }
    let unitmat = [];
    for (let index = 0; index < rows * columns; index++) {
        unitmat.push(1);
    }
    return `
    const ${varname}1 = [${unitmat}];
    const ${varname} = [];
    while(${varname}1.length) ${varname}.push(${varname}1.splice(0,${columns}));
    
    console.log("unity matrix is ",${varname});
    
    `
}

function subRoutine(mainblock) {
    console.log("running sub")
    let maincode = "";
    let blocksofcode = mainblock.children;
    // blocksofcode.splice(0,1);
    // return blocksofcode;
    for (let index = 1; index < blocksofcode.length; index++) {

        const element = blocksofcode[index];
        if (element.id == "drop-box") {
            console.log("drop-box rejected")
            continue;
        }
        const path = getpath(element);
        const blockname = element.firstChild.textContent.trim();
        if (blockname == "Break" || blockname == "Continue") {
            if (path.includes("For") || path.includes("While")) {
                console.log("yes valid")
            } else {
                alert("no loop found to use break or continue");
                throw 0;
            }
        }

        if (element.firstChild.textContent.trim() == "Else If" || element.firstChild.textContent.trim() == "Else") {
            let prevblock = blocksofcode[index - 1];
            if (prevblock.firstChild.textContent.trim() != "If" && prevblock.firstChild.textContent.trim() != "Else If") {
                alert("no if found");
                throw 0;
            }
        }

        let code;


        switch (element.firstChild.textContent.trim()) {
            case "Constant":
                console.log("running Constant");
                code = constantBlock(element);
                break;
            case "Boolean":
                console.log("running boolean");
                code = booleanBlock(element);
                break;
            case "Output Block":
                console.log("running output block");
                code = outputBlock(element);
                break;
            case "Matrix":
                console.log("running matrix");
                code = matrixBlock(element);
                break;
            case "Break":
                console.log("running break");
                code = breakBlock(element);
                break;
            case "Identity Matrix":
                code = identityBlock(element);
                break;
            case "Transpose":
                code = transposeBlock(element);
                break;
            case "Evaluate":
                code = evalBlock(element);
                break;
            case "For":
                code = forBlock(element);
                break;
            case "While":
                code = whileBlock(element);
                break;
            case "Unity":
                code = unityMatrix(element);
                break;
            case "Zero":
                code = zeroMatrix(element);
                break;
            case "If":
                code = ifBlock(element);
                break;
            case "Else":
                code = elseBlock(element);
                break;
            
            case "Else If":
                code = elseifBlock(element);
                break;
            case "ABS":
                code = absoluteBlock(element);
            case "Continue":
                code = continueBlock(element);
                break;
            case "Matrix Evaluate":
                // console.log
                code = matmath(element);
                break;
            default:
                break;
        }
        // maincode+="console.log(2);";
        maincode += code;

    }
    // console.log(maincode);
    return maincode;
}

var zeroMatrix = (block) => {
    let varname = block.children[0].children[0].value;
    let rows = block.children[0].children[1].value;
    let columns = block.children[0].children[2].value;
    let zeroarr = [];
    if (!varname || !isNaN(varname) || !rows || rows < 0 || columns < 0 || !columns) {
        alert("invalid input in zeromatrix block");
        throw 0;
    }
    for (let index = 0; index < rows * columns; index++) {
        // const element = array[index];
        zeroarr.push(0);
    }
    return `
    const ${varname}1 = [${zeroarr}];
    const ${varname} = [];
    while(${varname}1.length) ${varname}.push(${varname}1.splice(0,${columns}));
        
    console.log("zero matrix is ",${varname});
    
    `
}

var absoluteBlock = (block) => {
    let absValue,varname;
    varname = block.children[0].children[0].value;
    absValue = block.children[0].children[1].value;
    if (!absValue) {
        alert("No input given");
        throw 0;
    }
    // result = eval(evalValue)
    // result = (evalValue) => {
    //     return Function(`'use strict'; return (${eval(evalValue)}`)()
    // }
    // return `console.log(${(Math.abs(absValue))})`;
    return ` let ${varname} = Math.abs(${absValue}) ;`;
}


function looseJsonParse(obj) {
    return Function('return (' + obj + ')');
}



function RUN(mainblock) {

    try {
        let maincode = compile(mainblock)
            // console.log(compile(mainblock));
        if (maincode === "") {
            alert("No input");
            return;
        }
        // maincode = maincode.replace(/^/g,"**")
        console.log(maincode);
        eval(maincode);


    } catch (error) {
        console.log("error is ", error);
    }


}

function compile(mainblock) {
    // window.maincode.concat("2");

    let maincode = "";
    let blocksofcode = mainblock.children;

    // return blocksofcode;
    for (let index = 1; index < blocksofcode.length; index++) {

        const element = blocksofcode[index];

        const path = getpath(element);
        let blockname = element.firstChild.textContent.trim();
        // let blockname = element.firstChild.textContent.split("@").reverse()[0].trim();
        // console.log("blk name",blockname);

        if (blockname == "Break" || blockname == "Continue") {
            if (path.includes("For") || path.includes("While")) {
                console.log("yes valid")
            } else {
                alert("no loop found to use break or continue");
                throw 0;
            }
        }

        if (element.firstChild.textContent.trim() == "Else If" || element.firstChild.textContent.trim() == "Else") {
            let prevblock = blocksofcode[index - 1];
            if (prevblock.firstChild.textContent.trim() != "If" && prevblock.firstChild.textContent.trim() != "Else If") {
                alert("no if found");
                throw 0;
            }
        }
        let code;

        // console.log("blockname",blockname)
        switch (element.firstChild.textContent.trim()) {
            case "Constant":
                console.log("running Constant");
                code = constantBlock(element);
                break;
            case "Boolean":
                console.log("running boolean");
                code = booleanBlock(element);
                break;
            
            case "Matrix Evaluate":
                // code = matevalBlock(element);
                code = matmath(element);
                break;
            case "Output Block":
                console.log("running output block");
                code = outputBlock(element);
                break;
            case "Matrix":
                console.log("running matrix");
                code = matrixBlock(element);
                break;
            case "Break":
                console.log("running break");
                code = breakBlock(element);
                break;
            case "Identity Matrix":
                code = identityBlock(element);
                break;
            case "Transpose":
                code = transposeBlock(element);
                break;
            case "Evaluate":
                code = evalBlock(element);
                break;
            case "For":
                code = forBlock(element);
                break;
            case "While":
                code = whileBlock(element);
                break;
            case "Unity Matrix":
                code = unityMatrix(element);
                break;
            case "Zero":
                code = zeroMatrix(element);
                break;
            case "If":
                code = ifBlock(element);
                break;
            case "Else":
                code = elseBlock(element);
                break;
            case "Else If":
                code = elseifBlock(element);
                break;
            case "ABS":
                code = absoluteBlock(element);
                break;
            case "Continue":
                code = continueBlock(element);
                break;
            default:
                break;
        }
        // maincode+="console.log(2);";
        maincode += code;

    }
    // console.log(maincode);
    return maincode;
}


var Sin = (num)=>{return Math.sin(num);}
var Cos = (num)=>{    return Math.cos(num);}
var Tan = (num)=>{    return Math.tan(num);}
var Sinh = (num)=>{    return Math.sinh(num);}
var Cosh = (num)=>{    return Math.cosh(num);}
var Tanh = (num)=>{    return Math.tanh(num);}
var sqrt = (num)=>{    return Math.sqrt(num);}