// from Math import sin
// const jsonexp = require("./donejson.json")

const node = document.createElement("div");
node.style.height = "20px";
node.id = "green-blk"
node.style.backgroundColor = "#AD8B73";
node.classList.add("pl-3", "py-3");

const Test_Output_Block = document.createElement("div")

// const msg = document.createElement("div")
// msg.style.borderBottom = "1px solid black"
// msg.style.height = "25px"

max_level = 30;
let count1 = 0;
let sub_arr;
const prevSelection = [];
let count = 0;
let ifshiftpressed = false;

const prebuilt_code = "<div id='drop-box'> <span>you can drop the blocks here</span></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='mat0'> Matrix <span class='showvarname'>@c1</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='c1' type='text' name='Variable' id='mat0$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='ROW'>Enter the number of rows of the matrix</label> <input value='3' type='text' name='' id='mat0$ROW' placeholder='Number of Rows'> <br><label class='visually-hidden' for='COL'>Enter the number of Column of the matrix</label> <input value='3' type='text' name='' id='mat0$COL' placeholder='Number of Columns'> <br><button id='' class='btn btn-custom-outline-brown' onclick='matinput(prevSelection[0])'>Generate Table</button> <br><div class='matinps'><input value='0.01562' type='text' id='1'><input value='79.2' type='text' id='2'><input value='5610' type='text' id='3'><br><br><input value='0.0194' type='text' id='4'><input value='78.5' type='text' id='5'><input value='3100' type='text' id='6'><br><br><input value='0.05784' type='text' id='7'><input value='95.64' type='text' id='8'><input value='936' type='text' id='9'><br><br></div><button id='mat0$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='zma1'> Zeros Matrix <span class='showvarname'>@FLAPC</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='FLAPC' type='text' name='Variable' id='zma1$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='ROW'>Enter the number of rows</label> <input value='3' type='text' name='' id='zma1$ROW' placeholder='Number of Rows'> <br><label class='visually-hidden' for='COL'>enter the number of Columns</label> <input value='3' type='text' name='' id='zma1$COL' placeholder='Number of Columns'> <br><button id='zma1$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='vec2'> Vector <span class='showvarname'>@Pmax </span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Pmax' type='text' name='Variable' id='vec2$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the Number of elements</label> <input value='3' type='text' name='' id='vec2$VAL' placeholder='Number of elements'> <br><button id='' class='btn btn-custom-outline-brown' onclick='vecinput(prevSelection[0])'>Generate row</button> <br><div class='vecinps'><input value='600' type='text' id='1'><input value='400' type='text' id='2'><input value='200' type='text' id='3'></div><button id='vec2$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst3'> Constant <span class='showvarname'>@m</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='m' type='text' name='Variable' id='cst3$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='3' type='text' name='' id='cst3$VAL' placeholder='Value'> <br><button id='cst3$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst4'> Constant <span class='showvarname'>@n</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='n' type='text' name='Variable' id='cst4$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='3' type='text' name='' id='cst4$VAL' placeholder='Value'> <br><button id='cst4$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb22'> Print Block <span class='showvarname'>@m</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='' type='text' name='' id='opb22$VAL' placeholder='Enter the message you want to display'> <input value='m' type='text' name='' id='opb22$VAR' placeholder='Value'> <br><button id='opb22$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb23' draggable='false'> Print Block <span class='showvarname'>@n</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='' type='text' name='' id='opb23$VAL' placeholder='Enter the message you want to display'> <input value='n' type='text' name='' id='opb23$VAR' placeholder='Value'> <br><button id='opb23$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='for5'> For <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='START'> Enter the start value of Counter </label> <input value='0' type='text' name='' id='for5$START' placeholder='Start'> <br><label class='visually-hidden' for='END'> Enter the end value of counter </label> <input value='m' type='text' name='' id='for5$END' placeholder='End'> <br><label class='visually-hidden' for='STEP'> Enter the step value of counter</label> <input value='' type='text' name='' value='' id='for5$STEP' placeholder='Step (Default 1)'> <br><button id='for5$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva6' draggable='false'> Evaluate <span class='showvarname'>@FLAPC[i]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='FLAPC[i]' type='text' name='Variable' id='eva6$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='(c1[i][0] * (Pmax[i] * Pmax[i]) + c1[i][1] * Pmax[i] + c1[i][2])/Pmax[i]' type='text' name='' id='eva6$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva6$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='vec7'> Vector <span class='showvarname'>@PriorityOrder </span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='PriorityOrder' type='text' name='Variable' id='vec7$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the Number of elements</label> <input value='3' type='text' name='' id='vec7$VAL' placeholder='Number of elements'> <br><button id='' class='btn btn-custom-outline-brown' onclick='vecinput(prevSelection[0])'>Generate row</button> <br><div class='vecinps'><input value='0' type='text' id='1'><input value='0' type='text' id='2'><input value='0' type='text' id='3'></div><button id='vec7$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='vec8'> Vector <span class='showvarname'>@IX</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='IX' type='text' name='Variable' id='vec8$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the Number of elements</label> <input value='3' type='text' name='' id='vec8$VAL' placeholder='Number of elements'> <br><button id='' class='btn btn-custom-outline-brown' onclick='vecinput(prevSelection[0])'>Generate row</button> <br><div class='vecinps'><input value='0' type='text' id='1'><input value='0' type='text' id='2'><input value='0' type='text' id='3'></div><button id='vec8$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='for9'> For <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='START'> Enter the start value of Counter </label> <input value='0' type='text' name='' id='for9$START' placeholder='Start'> <br><label class='visually-hidden' for='END'> Enter the end value of counter </label> <input value='3' type='text' name='' id='for9$END' placeholder='End'> <br><label class='visually-hidden' for='STEP'> Enter the step value of counter</label> <input value='' type='text' name='' value='' id='for9$STEP' placeholder='Step (Default 1)'> <br><button id='for9$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva10'> Evaluate <span class='showvarname'>@IX[i]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='IX[i]' type='text' name='Variable' id='eva10$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='FLAPC.indexOf(FLAPC[i])' type='text' name='' id='eva10$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva10$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva24'> Evaluate <span class='showvarname'>@PriorityOrder </span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='PriorityOrder' type='text' name='Variable' id='eva24$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='Sort(FLAPC)' type='text' name='' id='eva24$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva24$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb12'> Print Block <span class='showvarname'>@PriorityOrder</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='' type='text' name='' id='opb12$VAL' placeholder='Enter the message you want to display'> <input value='PriorityOrder' type='text' name='' id='opb12$VAR' placeholder='Value'> <br><button id='opb12$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb13'> Print Block <span class='showvarname'>@IX</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='' type='text' name='' id='opb13$VAL' placeholder='Enter the message you want to display'> <input value='IX' type='text' name='' id='opb13$VAR' placeholder='Value'> <br><button id='opb13$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb14'> Print Block <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='Printing the unit commitment schedule for the given load demand \n' type='text' name='' id='opb14$VAL' placeholder='Enter the message you want to display'> <input value='' type='text' name='' id='opb14$VAR' placeholder='Value'> <br><button id='opb14$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst15'> Constant <span class='showvarname'>@PD </span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='PD' type='text' name='Variable' id='cst15$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='700' type='text' name='' id='cst15$VAL' placeholder='Value'> <br><button id='cst15$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='if16'> If <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='OP1'>Enter the Operand 1</label> <input value='PD' type='text' name='' id='if16$OP1' placeholder='Operand One'> <br><label class='visually-hidden' for='OP'>Enter the operator</label> <select name='' id='if16$OP'> <option title='Lesser Than or Equal to' value='<='>≤</option> <option title='Greater Than' value='>'>&gt;</option> <option title='Lesser Than' value='<'> &lt; </option> <option title='Equals' value='=='>=</option> <option title='Greater Than or Equal to' value='>='>≥</option> <option title='Not Equals' value='!='>≠</option> </select> <br><label class='visually-hidden' for='OP2'>Enter the Operand 2</label> <input value='Pmax[0]' type='text' name='' id='if16$OP2' placeholder='Operand Two'> <br><button id='if16$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb17'> Print Block <span class='showvarname'>@IX[0]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='The committed unit no. is: ' type='text' name='' id='opb17$VAL' placeholder='Enter the message you want to display'> <input value='IX[0]' type='text' name='' id='opb17$VAR' placeholder='Value'> <br><button id='opb17$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eli18' draggable='false'> Else If <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='OP1'> Enter the Operand 1 </label> <input value='PD' type='text' name='' id='eli18$OP1' placeholder='Operand One'> <br><label class='visually-hidden' for='OP'> enter the operator</label> <select name='' id='eli18$OP'> <option title='Greater Than' value='>'>&gt;</option> <option title='Lesser Than' value='<'> &lt; </option> <option title='Equals' value='='>=</option> <option title='Greater Than or Equal to' value='>='>≥</option> <option title='Lesser Than or Equal to' value='<='>≤</option> <option title='Not Equals' value='!='>≠</option> </select> <br><label class='visually-hidden' for='OP2'> enter the Operand 2</label> <input value='Pmax[0]' type='text' name='' id='eli18$OP2' placeholder='Operand Two'> <br><button id='eli18$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='if25'> If <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='OP1'>Enter the Operand 1</label> <input value='PD' type='text' name='' id='if25$OP1' placeholder='Operand One'> <br><label class='visually-hidden' for='OP'>Enter the operator</label> <select name='' id='if25$OP'> <option title='Lesser Than' value='<'> &lt; </option> <option title='Greater Than' value='>'>&gt;</option> <option title='Equals' value='=='>=</option> <option title='Greater Than or Equal to' value='>='>≥</option> <option title='Lesser Than or Equal to' value='<='>≤</option> <option title='Not Equals' value='!='>≠</option> </select> <br><label class='visually-hidden' for='OP2'>Enter the Operand 2</label> <input value='Pmax[0]+Pmax[1]' type='text' name='' id='if25$OP2' placeholder='Operand Two'> <br><button id='if25$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb20' draggable='false'> Print Block <span class='showvarname'>@IX[0]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='The committed unit nos. order are: ' type='text' name='' id='opb20$VAL' placeholder='Enter the message you want to display'> <input value='IX[0]' type='text' name='' id='opb20$VAR' placeholder='Value'> <br><button id='opb20$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb26'> Print Block <span class='showvarname'>@IX[1]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='' type='text' name='' id='opb26$VAL' placeholder='Enter the message you want to display'> <input value='IX[1]' type='text' name='' id='opb26$VAR' placeholder='Value'> <br><button id='opb26$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eli19'> Else If <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='OP1'> Enter the Operand 1 </label> <input value='PD' type='text' name='' id='eli19$OP1' placeholder='Operand One'> <br><label class='visually-hidden' for='OP'> enter the operator</label> <select name='' id='eli19$OP'> <option title='Greater Than or Equal to' value='>='>≥</option> <option title='Greater Than' value='>'>&gt;</option> <option title='Lesser Than' value='<'> &lt; </option> <option title='Equals' value='='>=</option> <option title='Lesser Than or Equal to' value='<='>≤</option> <option title='Not Equals' value='!='>≠</option> </select> <br><label class='visually-hidden' for='OP2'> enter the Operand 2</label> <input value='Sum(Pmax)' type='text' name='' id='eli19$OP2' placeholder='Operand Two'> <br><button id='eli19$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb21'> Print Block <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='The committed unit nos. order are: ' type='text' name='' id='opb21$VAL' placeholder='Enter the message you want to display'> <input value='' type='text' name='' id='opb21$VAR' placeholder='Value'> <br><button id='opb21$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb27'> Print Block <span class='showvarname'>@ IX[0]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='' type='text' name='' id='opb27$VAL' placeholder='Enter the message you want to display'> <input value='IX[0]' type='text' name='' id='opb27$VAR' placeholder='Value'> <br><button id='opb27$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb28'> Print Block <span class='showvarname'>@IX[1]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='' type='text' name='' id='opb28$VAL' placeholder='Enter the message you want to display'> <input value='IX[1]' type='text' name='' id='opb28$VAR' placeholder='Value'> <br><button id='opb28$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb29'> Print Block <span class='showvarname'>@IX[2]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='' type='text' name='' id='opb29$VAL' placeholder='Enter the message you want to display'> <input value='IX[2]' type='text' name='' id='opb29$VAR' placeholder='Value'> <br><button id='opb29$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div>"

let supremecode;

// var maincode = "";
if (screen.width < 1250) {
    alert("The simulator will not be displayed properly on your device, please use a wider screen.")
}

function drag_handler(ev) { ev.preventDefault(); }

function drag_start_handler(ev) {

    if (ev.target.id.includes("-")) {
        deselect();
    }
    let props = Array.from(document.getElementsByClassName("details"));
    props.forEach(element => {
        element.style.display = "none";
    });
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
        // document.getElementById("dragbut").innerHTML = "drag";
        document.getElementById("dragbut").style.backgroundColor = "transparent";
        document.getElementById("dragbut").style.color = "black";
        if (ev.target.classList.contains("highlight")) {
            return;
        }
        if (["For", "While", "If", "Else", "Else If", "Test Input Block"].includes(ev.target.firstChild.textContent.trim())) {
            if (!ev.target.classList.contains("highlight")) {
                ev.target.appendChild(prevSelection[0]);
            }
        } else {
            document.getElementById("interface").appendChild(prevSelection[0]);
        }


    } else {
        // console.log("block path length is",getpath(ev.target).length);
        if (getpath(ev.target).length > max_level) {
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
        ////

        // console.log("clone id- ", clone.id);
        if (["For", "While", "If", "Else", "Else If"].includes(ev.target.firstChild.textContent.trim())) {
            if (!ev.target.classList.contains("highlight")) {
                ev.target.appendChild(clone);
                ev.target.lastElementChild.id = clone.id;
                ////
                let details = ev.target.lastElementChild.getElementsByClassName("details")[0];
                let childs = details.getElementsByTagName("input");
                childs = Array.from(childs);
                childs = childs.concat(Array.from(details.getElementsByTagName("button")));
                childs = childs.concat(Array.from(details.getElementsByTagName("select")));
                ////
                for (let index = 0; index < childs.length; index++) {
                    // const element = array[index];
                    if (childs[index].id) {
                        childs[index].id = clone.id + "$" + childs[index].id;
                    }
                }
            }
        } else {
            document.getElementById("interface").appendChild(clone);
            document.getElementById("interface").lastElementChild.id = clone.id;
            // console.log(document.getElementById("interface").lastElementChild);
            let details = document.getElementById("interface").lastElementChild;
            let childs = [];
            if (!["Break", "Continue"].includes(details.textContent.trim()))
                details = details.getElementsByClassName("details")[0];
            childs = details.getElementsByTagName("input");
            childs = Array.from(childs);
            childs = childs.concat(Array.from(details.getElementsByTagName("button")));
            childs = childs.concat(Array.from(details.getElementsByTagName("select")));
            console.log(childs);
            for (let index = 0; index < childs.length; index++) {
                // const element = array[index];
                if (childs[index].id) {
                    childs[index].id = clone.id + "$" + childs[index].id;
                }
            }
        }
        ////
    }

}




// select highkight


function dragbu(event) {
    // document.getElementById("dragbut").innerHTML = "dragstarted";
    document.getElementById("dragbut").style.backgroundColor = "black";
    document.getElementById("dragbut").style.color = "white";
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
    let element;
    while (prevSelection.length > 0) {
        element = prevSelection.pop()
        element.classList.remove("highlight");
        element.classList.remove("error_block");
        // if(element.getElementsByClassName("details").length>0){
        //     element.getElementsByClassName("details")[0].style.display = "none";
        // }
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
    // document.getElementById("delbut").disabled = true;
    // document.getElementById("upbut").disabled = true;
    // document.getElementById("downbut").disabled = true;
    // document.getElementById("dragbut").innerHTML = "drag";
    // document.getElementById("dragbut").disabled = true;
    // document.getElementById("stepo").disabled = true;
    // document.getElementById("stepi").disabled = true;
}

const delallel = () => {
    // document.getElementById("interface").innerHTML = "";
    if (confirm('Are you sure you want to delete all the blocks?')) {
        while (document.getElementById("interface").lastElementChild.id != "drop-box") {
            document.getElementById("interface").lastElementChild.remove();
        }
    } else {
        console.log('cancelled delete all action');
    }


    // document.getElementById("delbut").disabled = true;
    // document.getElementById("upbut").disabled = true;
    // document.getElementById("downbut").disabled = true;
    // document.getElementById("dragbut").innerHTML = "drag";
    // document.getElementById("dragbut").disabled = true;
    // document.getElementById("stepo").disabled = true;
    // document.getElementById("stepi").disabled = true;
}


function checkButtonStatus() {
    let upbut = document.getElementById("upbut");
    let dragbut = document.getElementById("dragbut");
    let downbut = document.getElementById("downbut");
    let stepi = document.getElementById("stepi");
    let stepo = document.getElementById("stepo");
    let setbut = document.getElementById("setbut");
    let delbut = document.getElementById("delbut");
    let delallbut = document.getElementById("delallbut");

    if (prevSelection.length == 0) {
        delallbut.disabled = false;
    } else {
        delallbut.disabled = true;

    }

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


function showprops() {
    if (prevSelection[0].getElementsByClassName("details").length > 0)
        prevSelection[0].getElementsByClassName("details")[0].style.display = "block";

}

addEventListener("dblclick", (event) => {

    if (event.target.classList.contains("selectable")) {
        if (prevSelection.length > 0) {
            if (prevSelection[0].getElementsByClassName("details").length > 0)
                prevSelection[0].getElementsByClassName("details")[0].style.display = "block";

        }
    }
})


addEventListener("click", (event) => {
    // console.log("details",event.detail)
    const target = event.target;
    if (target.id == "interface") {
        deselect();
        let props = Array.from(document.getElementsByClassName("details"));
        props.forEach(element => {
            element.style.display = "none";
        });
    }
    if (target.classList.contains("selectable")) {
        // single click

        if (event.detail == 1) {
            let props = Array.from(document.getElementsByClassName("details"));
            props.forEach(element => {
                element.style.display = "none";
            });

            if (prevSelection.length == 1 && !event.ctrlKey && !event.shiftKey) {
                if (target.classList.contains("highlight")) {
                    prevSelection[0].draggable = false;
                    // document.getElementById("dragbut").innerHTML = "drag";
                    document.getElementById("dragbut").style.backgroundColor = "transparent";
                    document.getElementById("dragbut").style.color = "black";


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


    }
    // else{

    //     deselect();
    // }
    checkButtonStatus();

});





addEventListener("keyup", (ev) => {
    if (ev.key == "Shift") {
        ifshiftpressed = false;
    }
})

// BLOCKS 
function ok(event) {
    deselect();
    let ID = event.target.id;
    ID = ID.split("$")[0];
    document.getElementById(ID).getElementsByClassName("details")[0].style.display = "none";
    let varname = "";

    try {
        varname = document.getElementById(ID + "$" + "VAR").value;
    } catch (err) {
        if (!err.message == "Cannot read properties of null (reading 'value')") {
            console.error(err.message)
        }
        varname = ""
    }
    if (varname) {
        document.getElementById(ID).firstElementChild.innerHTML = `@${varname}`;
    } else {
        document.getElementById(ID).firstElementChild.innerHTML = ``;

    }



}

function vecinput(block) {
    let columns = document.getElementById(block.id + "$" + "VAL").value;
    let divblock = block.getElementsByClassName("details")[0];
    divblock = divblock.getElementsByClassName("vecinps")[0];
    divblock.innerHTML = "";
    if (!columns || columns < 0) {
        alert("Invalid input");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    }
    let inpcount = 1;
    for (let index = 0; index < columns; index++) {
        divblock.appendChild(document.createElement("input"));
        divblock.lastElementChild.type = "text";
        divblock.lastElementChild.id = inpcount;
        inpcount++;
    }

}

function matinput(block) {
    let rows, columns;
    rows = document.getElementById(block.id + "$" + "ROW").value;
    columns = document.getElementById(block.id + "$" + "COL").value;
    let divblock = block.getElementsByClassName("details")[0];
    divblock = divblock.getElementsByClassName("matinps")[0];
    divblock.innerHTML = "";
    if (!rows || !columns || rows < 0 || columns < 0) {
        alert("Invalid input");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
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
    varname = document.getElementById(block.id + "$" + "VAR").value;

    valname = document.getElementById(block.id + "$" + "VAL").value;;
    if (!valname || !varname || !isNaN(varname)) {
        alert("Invalid input const")
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;

    }
    // varname = "a";
    // valname = "3";
    return ` let ${varname} = ${valname} ;\n`;
    // block.innerHTML += " : " + varname;
    //  " let a = 3"
}

var booleanBlock = (block) => {
    let varname, valname;
    // varname = "bo";
    // valname = "true";
    varname = document.getElementById(block.id + "$" + "VAR").value;
    valname = document.getElementById(block.id + "$" + "VAL").value;
    if (!valname || !varname || !isNaN(varname)) {
        alert("Invalid input")
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    }
    // block.innerHTML += " : " + varname;
    return ` let ${varname} = ${valname} ;\n`;
}

var evalBlock = (block) => {
    let evalValue, varname;
    varname = document.getElementById(block.id + "$" + "VAR").value;
    evalValue = document.getElementById(block.id + "$" + "EVALUATE").value;
    if (!evalValue || !varname) {
        alert("Invalid input")
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    }
    evalValue = evalValue.split(" ").join("");
    console.log(evalValue);
    return ` ${varname} =  ${evalValue} ;\n`
        // return `console.log(${evalValue})`;
}

var matevalBlock = (block) => {
    let evalValue;
    evalValue = document.getElementById(block.id + "$" + "").value;
    if (!evalValue) {
        alert("Empty 'outputVal' block");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
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
            block.classList.add("error_block");
            prevSelection.push(block);
            showprops();
            throw 0;
        }

        if (element == "+") {
            if (evallist[index - 1] == "(") {
                alert("wrong brackets");
                block.classList.add("error_block");
                prevSelection.push(block);
                showprops();
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
                code += `math.multiply(${evallist[index + 1]},-1);`

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
                block.classList.add("error_block");
                prevSelection.push(block);
                showprops();
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
                block.classList.add("error_block");
                prevSelection.push(block);
                showprops();
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
                block.classList.add("error_block");
                prevSelection.push(block);
                showprops();
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
    return code + "\n";
}

var matmath = (block) => {
    let op1, op2, op, varname;
    varname = document.getElementById(block.id + "$" + "VAR").value;
    op1 = document.getElementById(block.id + "$" + "OP1").value;
    op = document.getElementById(block.id + "$" + "OP").value;
    op2 = document.getElementById(block.id + "$" + "OP2").value;
    // console.log("op1",op1);
    // console.log("op2",op2);
    // console.log("op is",op);
    let code1 = ``;
    if (!varname || !op1 || !op2) {
        alert("Invalid Input");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    }
    if (isNaN(op1) && op1[0] == '-') {
        op1 = Array.from(op1);
        op1.shift()
        code1 += ` ${op1} =math.multiply(${op1},-1);`
    }
    if (isNaN(op2) && op2[0] == '-') {
        op2 = Array.from(op1);
        op2.shift()

        code1 += `${op2}=math.multiply(${op2},-1);`
    }
    if (op == "+") { code1 += ` let ${varname}= math.add(${op1},${op2});` } else if (op == "-") { code1 += `let ${varname}=math.subtract(${op1},${op2});` } else if (op == "*") { code1 += `let ${varname}=math.multiply(${op1},${op2});` } else if (op == "/") { code1 += `let ${varname}=math.divide(${op1},${op2});` } else if (op == "%") { code1 += `let ${varname}=math.mod(${op1},${op2});` }

    // eval(code1);
    // console.log()
    return code1;

}

var outputBlock = (block) => {
    let variable, message1;
    variable = document.getElementById(block.id + "$" + "VAR").value;
    message1 = document.getElementById(block.id + "$" + "VAL").value;
    if (!variable)
        variable = "\n";


    // msg.innerHTML = message + `${variable}`;
    // document.getElementById("OUTPUT-CONSOLE").appendChild(msg);
    // return 'console.log("outputted successfully ")';
    return `
    msg.innerHTML = " ${message1}" +eval( ${variable});
    document.getElementById("OUTPUT-CONSOLE").appendChild(msg);
    console.log("outputted successfully ");
    
    
    `
}

var matrixBlock = (block) => {
    let varname = document.getElementById(block.id + "$" + "VAR").value;
    let rows, columns;
    rows = document.getElementById(block.id + "$" + "ROW").value;
    columns = document.getElementById(block.id + "$" + "COL").value;
    if (rows < 0 || columns < 0 || !rows || !columns || !isNaN(varname) || !varname) {
        alert("Invalid input");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    } else if (rows > 10) {
        alert(`Exceeded the limit of no. of rows in matrix ${varname}, value should not be greater than 10`)
    } else if (columns > 10) {
        alert(`Exceeded the limit of no. of columns in matrix ${varname}, value should not be greater than 10`)
    }
    let array = [];
    let matrix_inputs = block.getElementsByClassName("details")[0].getElementsByClassName("matinps")[0].getElementsByTagName("input");
    for (let index = 0; index < matrix_inputs.length; index++) {
        array.push(matrix_inputs[index].value);
    }


    return `
    const ${varname}1 =[${array}];
    
    const ${varname} = [];
    while(${varname}1.length) ${varname}.push(${varname}1.splice(0,${columns}));
        
    console.log("matrix is ",${varname});\n
    `
}

var breakBlock = (block) => { return "break;"; } // NOT
var continueBlock = (block) => { return "continue;"; } // NOT

var identityBlock = (block) => {
    let varname = document.getElementById(block.id + "$" + "VAR").value;
    let rows = document.getElementById(block.id + "$" + "ROW").value;
    if (!varname || !isNaN(varname) || rows < 0 || !rows) {
        alert("invalid input in identity block");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    } else if (rows > 10) {
        alert(`Exceeded the limit of no. of rows in matrix ${varname}, value should not be greater than 10`)
    }
    let array = [];
    for (let i = 0; i < rows; i++) {
        // const element = array[index];
        for (let j = 0; j < rows; j++) {
            i == j ? array.push(1) : array.push(0);
        }
    }
    return `
    let ${varname}1 = [${array}];
    let ${varname} = [];
    while(${varname}1.length) ${varname}.push(${varname}1.splice(0,${rows}));
    console.log("Identity is",${varname});\n
    `;
}

var transposeBlock = (block) => {

    let varname = document.getElementById(block.id + "$" + "VAR").value;
    let matrix = document.getElementById(block.id + "$" + "MAT").value;
    if (!matrix || !varname || !isNaN(matrix) || !isNaN(varname)) {
        alert("Invalid ");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    }
    console.log("transpose variable name is", matrix);

    return `
    if(typeof ${matrix}[0] == "object")
    {    const ${varname} = new Array(${matrix}[0].length);
        for(let i=0;i<${varname}.length;i++){
            ${varname}[i] = new Array(${matrix}.length).fill("#");
        }

        for(let i=0;i<${varname}.length;i++){
            for(let j=0;j<${varname}[0].length;j++){
                ${varname}[i][j] = ${matrix}[j][i];
            }
        }
        console.log("Transpose is",${varname});}
    else{
        const ${varname} = [];
        for(let i=0;i<${matrix}.length;i++){
            ${varname}.push([${matrix}[i]]);
        }
    }
    
    `
}



var forBlock = (block) => {
    let forarr = getpath(block).filter(x => x == "For");
    const cnt = forarr.length - 1;
    let iterator_var = String.fromCharCode(cnt + 105);

    let initVal, endVal, op, subroutine, step;
    subroutine = subRoutine(block);
    initVal = document.getElementById(block.id + "$" + "START").value;
    endVal = document.getElementById(block.id + "$" + "END").value;
    step = document.getElementById(block.id + "$" + "STEP").value;
    console.log("step is ", step);
    // op = document.getElementById(block.id+"$" + "").value;

    if (!initVal || !endVal) {
        alert("start or end value not given");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
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
        }\n`
    } else {
        return `for(let ${iterator_var}=${initVal};${iterator_var}<${endVal};${iterator_var}${op}){
            ${subroutine}
        }\n`
    }

    // if(!initVal)




}

var elseBlock = (block) => {
    let subroutine = subRoutine(block);
    console.log("subroutine is", subroutine);
    return `else{
        ${subroutine}
    }\n`
}

var ifBlock = (block) => {

    let subroutine = subRoutine(block);

    let op1, op2, op;
    op1 = document.getElementById(block.id + "$" + "OP1").value;
    op = document.getElementById(block.id + "$" + "OP").value;
    op2 = document.getElementById(block.id + "$" + "OP2").value;
    if (!op1 || !op2) {
        alert("No input in if");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
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


var elseifBlock = (block) => {


    let subroutine = subRoutine(block);
    let op1, op2, op;
    op1 = document.getElementById(block.id + "$" + "OP1").value;
    op = document.getElementById(block.id + "$" + "OP").value;
    op2 = document.getElementById(block.id + "$" + "OP2").value;
    if (!op1 || !op2) {
        alert("Invalid input");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
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
    op1 = document.getElementById(block.id + "$" + "OP1").value;
    op = document.getElementById(block.id + "$" + "OP").value;
    op2 = document.getElementById(block.id + "$" + "OP2").value;
    if (!op1 || !op2) {
        alert("No input in while");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    }
    let condition = ` ${op1} ${op} ${op2} `;

    return `
    
    while(${condition}){
        ${subroutine}
    }

    `
}


var vectorBlock = (block) => {
    let varname = document.getElementById(block.id + "$" + "VAR").value;
    let columns = document.getElementById(block.id + "$" + "VAL").value;
    if (columns < 0 || !columns || !isNaN(varname) || !varname) {
        alert("Invalid input");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    } else if (columns > 10) {
        alert(`Exceeded the limit of no. of columns in matrix ${varname}, value should not be greater than 10`)
    }
    let array = [];
    console.log()
    let vector_inputs = document.getElementById(block.id).getElementsByClassName("vecinps")[0].getElementsByTagName("input")
    for (let index = 0; index < vector_inputs.length; index++) {
        array.push(vector_inputs[index].value);
    }
    return `
    let ${varname} =[${array}];
          
    console.log("vector is ",${varname});\n
    `

}


var unityMatrix = (block) => {
    let varname = document.getElementById(block.id + "$" + "VAR").value;
    let rows = document.getElementById(block.id + "$" + "ROW").value;
    let columns = document.getElementById(block.id + "$" + "COL").value;
    if (!rows || !columns || rows < 0 || columns < 0 || !varname || !isNaN(varname)) {
        alert("Invalid input");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    } else if (rows > 10) {
        alert(`Exceeded the limit of no. of rows in matrix ${varname}, value should not be greater than 10`)
    } else if (columns > 10) {
        alert(`Exceeded the limit of no. of columns in matrix ${varname}, value should not be greater than 10`)
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
    console.log(blocksofcode);
    // blocksofcode.splice(0,1);
    // return blocksofcode;
    for (let index = 0; index < blocksofcode.length; index++) {

        const element = blocksofcode[index];
        if (!element.id) {
            continue;
        }
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
            case "Row Combine":
                code = row_com(element);
                break;
            case "Column Combine":
                code = col_com(element);
                break;
            case "Boolean":
                console.log("running boolean");
                code = booleanBlock(element);
                break;

            case "Matrix Evaluate":
                // code = matevalBlock(element);
                code = matmath(element);
                break;
            case "Print Block":
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
            case "Zeros Matrix":
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
            case "Absolute":
                code = absoluteBlock(element);
                break;
            case "Continue":
                code = continueBlock(element);
                break;
            case "Vector":
                code = vectorBlock(element);
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
    let varname = document.getElementById(block.id + "$" + "VAR").value;
    let rows = document.getElementById(block.id + "$" + "ROW").value;
    let columns = document.getElementById(block.id + "$" + "COL").value;
    let zeroarr = [];
    if (!varname || !isNaN(varname) || !rows || rows < 0 || columns < 0 || !columns) {
        alert("invalid input in zeromatrix block");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    } else if (rows > 10) {
        alert(`Exceeded the limit of no. of rows in matrix ${varname}, value should not be greater than 10`)
    } else if (columns > 10) {
        alert(`Exceeded the limit of no. of columns in matrix ${varname}, value should not be greater than 10`)
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
    let absValue, varname;
    varname = document.getElementById(block.id + "$" + "VAR").value;
    absValue = document.getElementById(block.id + "$" + "VAL").value;
    if (!absValue) {
        alert("No input given");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    }
    return ` let ${varname} = Math.abs(${absValue}) ;\n`;
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
        console.log("logged")

    } catch (error) {
        console.log("error is ", error);
    }


}

function compile(mainblock) {
    // window.maincode.concat("2");

    let maincode = `
    const msg = document.createElement("div")
    msg.style.borderBottom = "1px solid black"
    msg.style.height = "25px";
    `;
    let blocksofcode = mainblock.children;

    // return blocksofcode;
    for (let index = 0; index < blocksofcode.length; index++) {

        const element = blocksofcode[index];
        if (!element.id) {
            continue;
        }
        if (element.id == "drop-box") {
            // console.log("drop-box rejected")
            continue;
        }
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
            case "Row Combine":
                code = row_com(element);
                break;
            case "Element Wise Multiply":
                code = DotMultiply(element);
                break;
            case "Element Wise Divide":
                code = DotDivide(element);
                break;
            case "Column Combine":
                code = col_com(element);
                break;
            case "Boolean":
                console.log("running boolean");
                code = booleanBlock(element);
                break;

            case "Matrix Evaluate":
                // code = matevalBlock(element);
                code = matmath(element);
                break;
            case "Print Block":
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
            case "Zeros Matrix":
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
            case "Absolute":
                code = absoluteBlock(element);
                break;
            case "Continue":
                code = continueBlock(element);
                break;
            case "Vector":
                code = vectorBlock(element);
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


var Sin = (num) => { return Math.sin(num); }
var Cos = (num) => { return Math.cos(num); }
var Tan = (num) => { return Math.tan(num); }
var Sinh = (num) => { return Math.sinh(num); }
var Cosh = (num) => { return Math.cosh(num); }
var Tanh = (num) => { return Math.tanh(num); }
var Sqrt = (num) => { return Math.sqrt(num); }
var Abs = (num) => { return Math.abs(num); }
var Max = (num1, num2) => { return Math.max(num1, num2) }
var Sort = (arr) => { return arr.sort() }
var Sum = (arr)=>{
    let sum=0;
    for (let idx = 0; idx < arr.length; idx++) {
        sum+= arr[idx];
    }
    return sum;
}

let prebuilton = false;

function prebuilt() {
    console.log("prebuilt");
    let interface = document.getElementById("interface");
    if (!prebuilton) {
        interface.innerHTML = "";
        interface.innerHTML = prebuilt_code;
        prebuilton = true;
        document.getElementById("prebuilt").innerHTML = " RevertBack"
    } else {

        document.getElementById("prebuilt").innerHTML = " PreBuilt"
        interface.innerHTML = `
        <div id="drop-box">
            <span>you can drop the blocks here</span>
        </div>
        `;
        prebuilton = false;
    }

}


var row_com = (block) => {
    let matrix1, matrix2, varname;
    varname = document.getElementById(block.id + "$" + "VAR").value
    matrix1 = document.getElementById(block.id + "$" + "M1").value;
    matrix2 = document.getElementById(block.id + "$" + "M2").value;
    if (!varname || !isNaN(varname) || !matrix1 || !isNaN(matrix1) || !matrix2 || !isNaN(matrix3)) {
        alert("Invalid input const")
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;

    }
    return `
    if(typeof ${matrix1}[0] == "number"){
        ${matrix1} = [${matrix1}];
    }
    if(typeof ${matrix2}[0] == "number"){
        ${matrix2} = [${matrix2}];
    }
    if(${matrix1}[0].length !=${matrix2}[0].length){
        alert("number of rows must mathc while combining");
        throw "hello";
    }
    let ${varname} = math.concat(${matrix1},${matrix2},dim=0);
    console.log("combined matrix is",${varname});
    `
}
var col_com = (block) => {
    let matrix1, matrix2, varname;
    varname = document.getElementById(block.id + "$" + "VAR").value
    matrix1 = document.getElementById(block.id + "$" + "M1").value;
    matrix2 = document.getElementById(block.id + "$" + "M2").value;
    if (!varname || !isNaN(varname) || !matrix1 || !isNaN(matrix1) || !matrix2 || !isNaN(matrix3)) {
        alert("Invalid input const")
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;

    }
    return `
    if(typeof ${matrix1}[0] == "number"){
        // ${matrix1} = [${matrix1}];
        for(let ii = 0; ii<${matrix1}.length;ii++ ){
            ${matrix1}[ii] = [${matrix1}[ii]];
        }
    }
    if(typeof ${matrix2}[0] == "number"){
        // ${matrix2} = [${matrix2}];
        for(let ii = 0; ii<${matrix2}.length;ii++ ){
            ${matrix2}[ii] = [${matrix2}[ii]];
        }
    }
    if(${matrix1}.length !=${matrix2}.length){
        alert("number of rows must mathc while combining");
        throw "hello";
    }
    let ${varname} = math.concat(${matrix1},${matrix2});
    console.log("combined matrix is",${varname});
    `
}

var DotMultiply = (block) => {
    let m1, m2, varname;
    varname = document.getElementById(block.id + "$" + "VAR").value;
    m1 = document.getElementById(block.id + "$" + "M1").value;
    m2 = document.getElementById(block.id + "$" + "M2").value;
    if (!varname || !m1 || !m2 || !isNaN(m1) || !isNaN(m2)) {
        alert("Invalid Input");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    }

    return `  
    
    let ${varname} = math.dotMultiply(${m1},${m2});
    console.log(${varname});
    `
}

var DotDivide = (block) => {
    let m1, m2, varname;
    varname = document.getElementById(block.id + "$" + "VAR").value;
    m1 = document.getElementById(block.id + "$" + "M1").value;
    m2 = document.getElementById(block.id + "$" + "M2").value;
    if (!varname || !m1 || !m2 || !isNaN(m1) || !isNaN(m2)) {
        alert("Invalid Input");
        block.classList.add("error_block");
        prevSelection.push(block);
        showprops();
        throw 0;
    }

    return `  
    
    let ${varname} = math.dotDivide(${m1},${m2});
    console.log(${varname});

    `
}