
const node = document.createElement("div");
node.style.height = "20px";
node.id = "green-blk"
node.style.backgroundColor = "#AD8B73";
node.classList.add("pl-3", "py-3");

const Test_Output_Block = document.createElement("div")



max_level = 30;
let count1 = 0;
let sub_arr;
const prevSelection = [];
let count = 0;
let ifshiftpressed = false;



let prebuilt_code = `<div id='drop-box'> <span>you can drop the blocks here</span></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst0' draggable='false'> Constant <span class='d'> : pi</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input type='text' name='Variable' id='cst0$VAR' placeholder='Variable Name' value='pi'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input type='text' name='' id='cst0$VAL' placeholder='Value' value='3.1416'> <br><button id='cst0$OK' class='btn btn-custom-outline-brown' onclick='ok(event) '> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst1'> Constant <span class='d'> : Vnom</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input type='text' value='Vnom' name='Variable' id='cst1$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input type='text' name='' value='735000' id='cst1$VAL' placeholder='Value'> <br><button id='cst1$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst2'> Constant <span class='d'> : freq</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input type='text' value='freq' name='Variable' id='cst2$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input type='text' value='60' name='' id='cst2$VAL' placeholder='Value'> <br><button id='cst2$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst3'> Constant <span class='d'> : km</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input type='text' value='km' name='Variable' id='cst3$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input type='text' name='' value='800' id='cst3$VAL' placeholder='Value'> <br><button id='cst3$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst4'> Constant <span class='d'> : l</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input type='text' value='l' name='Variable' id='cst4$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input type='text' value='0.9323*0.001' name='' id='cst4$VAL' placeholder='Value'> <br><button id='cst4$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst5'> Constant <span class='d'> : c</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='c' type='text' name='Variable' id='cst5$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='12.2 *(10**-9)' type='text' name='' id='cst5$VAL' placeholder='Value'> <br><button id='cst5$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst6'> Constant <span class='d'> : delta</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='delta' type='text' name='Variable' id='cst6$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='0' type='text' name='' id='cst6$VAL' placeholder='Value'> <br><button id='cst6$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst7'> Constant <span class='d'> : Z0</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Z0' type='text' name='Variable' id='cst7$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Sqrt(l/c)' type='text' name='' id='cst7$VAL' placeholder='Value'> <br><button id='cst7$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst8'> Constant <span class='d'> : SIL</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='SIL' type='text' name='Variable' id='cst8$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Vnom**2 /Z0' type='text' name='' id='cst8$VAL' placeholder='Value'> <br><button id='cst8$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst9'> Constant <span class='d'> : Vs</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Vs' type='text' name='Variable' id='cst9$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Vnom' type='text' name='' id='cst9$VAL' placeholder='Value'> <br><button id='cst9$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst10'> Constant <span class='d'> : Vr</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Vr' type='text' name='Variable' id='cst10$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Vnom' type='text' name='' id='cst10$VAL' placeholder='Value'> <br><button id='cst10$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst11'> Constant <span class='d'> : Beta</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Beta' type='text' name='Variable' id='cst11$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='(2 * pi * freq * (Sqrt(l * c)) * 180) / pi' type='text' name='' id='cst11$VAL' placeholder='Value'> <br><button id='cst11$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst12'> Constant <span class='d'> : Ps_max</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Ps_max' type='text' name='Variable' id='cst12$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='((Vs * Vs)) / ((Z0) * Sind(Beta * km));' type='text' name='' id='cst12$VAL' placeholder='Value'> <br><button id='cst12$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst13'> Constant <span class='d'> : Ps</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Ps' type='text' name='Variable' id='cst13$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Ps_max * (Sind(delta))' type='text' name='' id='cst13$VAL' placeholder='Value'> <br><button id='cst13$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst14'> Constant <span class='d'> : Qr</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Qr' type='text' name='Variable' id='cst14$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='(Vr**2*Cosd(Beta*km) - (Vs*Vr*Cosd(delta)))/(Z0*Sind(Beta*km))' type='text' name='' id='cst14$VAL' placeholder='Value'> <br><button id='cst14$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='if15'> If <span class='d'> : Qr</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='OP1'>Enter the Operand 1</label> <input value='Qr' type='text' name='' id='if15$OP1' placeholder='Operand One'> <br><label class='visually-hidden' for='OP'>Enter the operator</label> <select name='' id='if15$OP'> <option title='Lesser Than' value='<'> &lt; </option> <option title='Greater Than' value='>'>&gt;</option> <option title='Equals' value='=='>=</option> <option title='Greater Than or Equal to' value='>='>≥</option> <option title='Lesser Than or Equal to' value='<='>≤</option> <option title='Not Equals' value='!='>≠</option> </select> <br><label class='visually-hidden' for='OP2'>Enter the Operand 2</label> <input value='0' type='text' name='' id='if15$OP2' placeholder='Operand Two'> <br><button id='if15$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb16'> Print Block <span class='d'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='Q is surplus..So Inductive nature of reactive power is required' type='text' name='' id='opb16$VAL' placeholder='Enter the message you want to display'> <input value='' type='text' name='' id='opb16$VAR' placeholder='Value'> <br><button id='opb16$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eli17'> Else If <span class='d'> : Qr</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='OP1'> Enter the Operand 1 </label> <input value='Qr' type='text' name='' id='eli17$OP1' placeholder='Operand One'> <br><label class='visually-hidden' for='OP'> enter the operator</label> <select name='' id='eli17$OP'> <option title='Greater Than' value='>'>&gt;</option> <option title='Lesser Than' value='<'> &lt; </option> <option title='Equals' value='='>=</option> <option title='Greater Than or Equal to' value='>='>≥</option> <option title='Lesser Than or Equal to' value='<='>≤</option> <option title='Not Equals' value='!='>≠</option> </select> <br><label class='visually-hidden' for='OP2'> enter the Operand 2</label> <input value='0' type='text' name='' id='eli17$OP2' placeholder='Operand Two'> <br><button id='eli17$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb18'> Print Block <span class='d'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='Q is insufficient..So Capacitive nature of reactive power is required' type='text' name='' id='opb18$VAL' placeholder='Enter the message you want to display'> <input value='' type='text' name='' id='opb18$VAR' placeholder='Value'> <br><button id='opb18$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='els19'> Else <div class='pl-3 pt-2 noselect selectable bordered-box' id='opb20'> Print Block <span class='d'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='No compensation required' type='text' name='' id='opb20$VAL' placeholder='Enter the message you want to display'> <input value='' type='text' name='' id='opb20$VAR' placeholder='Value'> <br><button id='opb20$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst21'> Constant <span class='d'> : aa</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='aa' type='text' name='Variable' id='cst21$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='2 * Cosd((Beta * km) / 2)** 2' type='text' name='' id='cst21$VAL' placeholder='Value'> <br><button id='cst21$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst22'> Constant <span class='d'> : bb</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='bb' type='text' name='Variable' id='cst22$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='4 * (Cosd((Beta * km) / 2)** 4)' type='text' name='' id='cst22$VAL' placeholder='Value'> <br><button id='cst22$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst23'> Constant <span class='d'> : P0</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='P0' type='text' name='Variable' id='cst23$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='SIL' type='text' name='' id='cst23$VAL' placeholder='Value'> <br><button id='cst23$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst24'> Constant <span class='d'> : Vmp</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Vmp' type='text' name='Variable' id='cst24$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Sqrt((1/aa)+Sqrt((1/bb)-((Ps/P0)*Tand(Beta*km))**2))' type='text' name='' id='cst24$VAL' placeholder='Value'> <br><button id='cst24$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst25'> Constant <span class='d'> : Vmn</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Vmn' type='text' name='Variable' id='cst25$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Sqrt((1/aa)-Sqrt((1/bb)-((Ps/P0)*Tand(Beta*km))**2))' type='text' name='' id='cst25$VAL' placeholder='Value'> <br><button id='cst25$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst26'> Constant <span class='d'>m1</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='m1' type='text' name='Variable' id='cst26$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Abs(Vmp)' type='text' name='' id='cst26$VAL' placeholder='Value'> <br><button id='cst26$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst27'> Constant <span class='d'> : m2</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='m2' type='text' name='Variable' id='cst27$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Abs(Vmn)' type='text' name='' id='cst27$VAL' placeholder='Value'> <br><button id='cst27$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst28'> Constant <span class='d'> : Vmpp</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Vmpp' type='text' name='Variable' id='cst28$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Max(m1, m2)' type='text' name='' id='cst28$VAL' placeholder='Value'> <br><button id='cst28$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst29'> Constant <span class='d'> : Vm</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Vm' type='text' name='Variable' id='cst29$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='Vmpp * Vnom' type='text' name='' id='cst29$VAL' placeholder='Value'> <br><button id='cst29$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb30'> Print Block <span class='d'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='Acutal voltage at the midd-point without mid-point compensation is' type='text' name='' id='opb30$VAL' placeholder='Enter the message you want to display'> <input value='Vm' type='text' name='' id='opb30$VAR' placeholder='Value'> <br><button id='opb30$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb31'> Print Block <span class='d'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='Reactive power is required to maintain the mid-point voltage at 1 per unit' type='text' name='' id='opb31$VAL' placeholder='Enter the message you want to display'> <input value='Qr' type='text' name='' id='opb31$VAR' placeholder='Value'> <br><button id='opb31$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div>`;

let exp_number = 5;
let supremecode;

if (screen.width < 1250) {
    alert("The simulator will not be displayed properly on your device, please use a wider screen.")
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    document.body.appendChild(para);
}

function drag_handler(ev) { ev.preventDefault(); }

function drag_start_handler(ev) {

    try {
        if (ev.target.id.includes("-")) {
            deselect();
        }
        let props = Array.from(document.getElementsByClassName("details"));
        props.forEach(element => {
            element.style.display = "none";
        });
        ev.dataTransfer.setData("text/plain", ev.target.id);
    } catch (error) {
        
    }
}

function dragOver_handler(ev) {
    try {
        ev.preventDefault();


    if (["For", "While", "If", "Else", "Else If"].includes(ev.target.firstChild.textContent.trim())) {
        if (!ev.target.classList.contains("highlight")) {
            ev.target.appendChild(node);
        }
    } else {
        document.getElementById("interface").appendChild(node);
    }
    } catch (error) {
        
    }
}

function dragEnter_handler(ev) {
    ev.preventDefault();


}


function dragLeave_handler(ev) {
    try {
        let parent = ev.target.children;
    parent = Array.from(parent);
    if (parent.includes(node)) {
        ev.target.removeChild(node);
    }
    } catch (error) {
        
    }
}

function drop_handler(ev) {
    try {
        ev.preventDefault();

    node.remove();



    if (prevSelection.length > 0) {
        prevSelection[0].draggable = false;
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
        if (getpath(ev.target).length > max_level) {
            alert("max indentation reached");
            return;
        }

        let id = ev.dataTransfer.getData("text/plain");
        let i = 0;
        for (i; i < id.length; i++)
            if (id[i] === "-") id = id.slice(i + 1, i + 4);

        const temp = document.getElementById(id);
        const clone = temp.content.cloneNode(true);
        clone.id = id + count1++;
        

        if (["For", "While", "If", "Else", "Else If"].includes(ev.target.firstChild.textContent.trim())) {
            if (!ev.target.classList.contains("highlight")) {
                ev.target.appendChild(clone);
                ev.target.lastElementChild.id = clone.id;
                
                let details = ev.target.lastElementChild.getElementsByClassName("details")[0];
                let childs = details.getElementsByTagName("input");
                childs = Array.from(childs);
                childs = childs.concat(Array.from(details.getElementsByTagName("button")));
                childs = childs.concat(Array.from(details.getElementsByTagName("select")));
                
                for (let index = 0; index < childs.length; index++) {
                    if (childs[index].id) {
                        childs[index].id = clone.id + "$" + childs[index].id;
                    }
                }
            }
        } else {
            document.getElementById("interface").appendChild(clone);
            document.getElementById("interface").lastElementChild.id = clone.id;
            let details = document.getElementById("interface").lastElementChild;
            let childs = [];
            if (!["Break", "Continue"].includes(details.textContent.trim()))
                details = details.getElementsByClassName("details")[0];
            childs = details.getElementsByTagName("input");
            childs = Array.from(childs);
            childs = childs.concat(Array.from(details.getElementsByTagName("button")));
            childs = childs.concat(Array.from(details.getElementsByTagName("select")));

            for (let index = 0; index < childs.length; index++) {
                if (childs[index].id) {
                    childs[index].id = clone.id + "$" + childs[index].id;
                }
            }
        }
    }

    } catch (error) {
        
    }
}






function dragbu(event) {
    try {
        document.getElementById("dragbut").style.backgroundColor = "black";
    document.getElementById("dragbut").style.color = "white";
    let target = prevSelection[0];
    target.draggable = true;
    target.setAttribute("ondrag", `drag_handler(event)`);
    target.setAttribute("ondragstart", `drag_start_handler(event)`);
    } catch (error) {
        
    }

}

function up() {
    if (prevSelection.length == 1) {
        let target = prevSelection[0];
        target.parentNode.insertBefore(target, target.previousElementSibling);
    }
}

function down() {
    if (prevSelection.length == 1) {
        let target = prevSelection[0];
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
   try {
    let element;
    while (prevSelection.length > 0) {
        element = prevSelection.pop()
        element.classList.remove("highlight");
        element.classList.remove("error_block");
    }
    document.getElementById("delbut").disabled = true;
    document.getElementById("setbut").disabled = true;
    document.getElementById("upbut").disabled = true;
    document.getElementById("downbut").disabled = true;
    document.getElementById("dragbut").disabled = true;
    document.getElementById("stepo").disabled = true;
    document.getElementById("stepi").disabled = true;
   } catch (error) {
    
   }
}



const delel = () => {
    while (prevSelection.length > 0) {
        prevSelection.pop().remove();
    }
}

const delallel = () => {
    try {
        if (confirm('Are you sure you want to delete all the blocks?')) {
            while (document.getElementById("interface").lastElementChild.id != "drop-box") {
                document.getElementById("interface").lastElementChild.remove();
            }
            document.getElementById("prebuilt").innerHTML = "PreBuilt"
        } else {
            console.log('cancelled delete all action');
        }
    } catch (error) {
        
    }


}


function checkButtonStatus() {
    try {
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
    } catch (error) {
        
    }


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
    try {
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

            }
            // shift slect
            else if (event.shiftKey && prevSelection[0] != undefined) {


                let lastselectedelem = prevSelection.pop();

                if (!ifshiftpressed) {
                    ifshiftpressed = true;
                }
                deselect();

                const siblnglst = Array.from(document.getElementsByClassName("selectable"));
                let starttemp = siblnglst.indexOf(lastselectedelem);
                let endtemp = siblnglst.indexOf(target);

                if (endtemp > starttemp) {
                    for (let i = endtemp; i >= starttemp; i--) {
                        prevSelection.push(siblnglst[i]);
                        siblnglst[i].classList.add("highlight");
                    }
                } else {
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
    checkButtonStatus();
    } catch (error) {
        
    }

});





addEventListener("keyup", (ev) => {
    if (ev.key == "Shift") {
        ifshiftpressed = false;
    }
})

// BLOCKS 
function ok(event) {
    try{
    deselect();
    let ID = event.target.id;
    ID = ID.split("$")[0];
    document.getElementById(ID).getElementsByClassName("details")[0].style.display = "none";
    let varname = "";

    try {
        varname = document.getElementById(ID + "$" + "VAR").value;
    } catch (err) {
        if (!err.message == "Cannot read properties of null (reading 'value')") {
        }
        varname = ""
    }
    if (varname) {
        document.getElementById(ID).firstElementChild.innerHTML = ` : ${varname}`;
    } else {
        document.getElementById(ID).firstElementChild.innerHTML = ``;

    }

    }catch(err){}

}

function vecinput(block) {
    let columns = document.getElementById(block.id + "$" + "VAL").value;
    let divblock = block.getElementsByClassName("details")[0];
    divblock = divblock.getElementsByClassName("vecinps")[0];
    divblock.innerHTML = "";
    if (!columns) {
        columns=1
        document.getElementById(block.id + "$" + "VAL").value = 1
    }
    if( columns>=25){
        alert("cannot enter more than 25 elements")
        return;
    }
    if (isNaN(columns) || columns <= 0) {
        columns = 1
        document.getElementById(block.id + "$" + "VAL").value = 1
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

    if (!rows || !columns) {
        rows = 1
        columns = 1
        document.getElementById(block.id + "$" + "COL").value = 1
        document.getElementById(block.id + "$" + "ROW").value = 1
    }
    if(rows>=10 || columns>=10){
        alert("cannot enter more than 10X10 matrix")
        return;
    }
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        if (isNaN(rows)) {
            document.getElementById(block.id + "$" + "ROW").value = 1
        }
        if (isNaN(columns)) {
            document.getElementById(block.id + "$" + "COL").value = 1
        }
        rows = 1
        columns = 1
    }


    let inpcount = 1;
    for (let i = 0; i < rows; i++) {

        for (let index = 0; index < columns; index++) {
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

    return ` ${varname} =  ${evalValue} ;\n`
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
            //console.log("added matrix is",math.add(${op1}, ${op2}));
            `;
        } else if (element == "-") {

            if (evallist[index - 1] != ")")
                op1 = evallist[index - 1];
            else if (evallist[index - 1] == "(") {
                code += `math.multiply(${evallist[index + 1]},-1);`

            } else {
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
            //console.log("subtract matrix is",math.subtract(${op1}, ${op2}));
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
            //console.log("multiply matrix is",math.multiply(${op1}, ${op2}));
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
            //console.log("divide matrix is",math.divide(${op1}, ${op2}));
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
            //console.log("mod matrix is",math.mod(${op1}, ${op2}));
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


    return code1;

}

var outputBlock = (block) => {
    let variable, message1;
    variable = document.getElementById(block.id + "$" + "VAR").value;
    message1 = document.getElementById(block.id + "$" + "VAL").value;
    if (!variable)
        variable = "1";



    return `

    let ${block.id}print=document.createElement("p")
    ${block.id}print.innerHTML="${message1} " +eval(${variable});
    msg.appendChild(${block.id}print)

    
    
    
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
        
    //console.log("matrix is ",${varname});\n
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
        for (let j = 0; j < rows; j++) {
            i == j ? array.push(1) : array.push(0);
        }
    }
    return `
    let ${varname}1 = [${array}];
    let ${varname} = [];
    while(${varname}1.length) ${varname}.push(${varname}1.splice(0,${rows}));
    //console.log("Identity is",${varname});\n
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
        //console.log("Transpose is",${varname});}
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





}

var elseBlock = (block) => {
    let subroutine = subRoutine(block);
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
    try {
        let path = [];
    let ele = block;
    while (ele.id != "interface") {
        path.push(ele.firstChild.textContent.trim());
        ele = ele.parentNode;
    }
    return path;
    } catch (error) {
        
    }
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
    let vector_inputs = document.getElementById(block.id).getElementsByClassName("vecinps")[0].getElementsByTagName("input")
    for (let index = 0; index < vector_inputs.length; index++) {
        array.push(vector_inputs[index].value);
    }
    return `
    let ${varname} =[${array}];
          
    //console.log("vector is ",${varname});
    \n
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
    
    //console.log("unity matrix is ",${varname});
    
    `
}

function subRoutine(mainblock) {

    let maincode = "";
    let blocksofcode = mainblock.children;
   
    for (let index = 0; index < blocksofcode.length; index++) {

        const element = blocksofcode[index];
        if (!element.id) {
            continue;
        }
        if (element.id == "drop-box") {

            continue;
        }
        const path = getpath(element);
        const blockname = element.firstChild.textContent.trim();
        if (blockname == "Break" || blockname == "Continue") {
            if (path.includes("For") || path.includes("While")) {

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

                code = constantBlock(element);
                break;
            case "Row Combine":
                code = row_com(element);
                break;
            case "Column Combine":
                code = col_com(element);
                break;
            case "Boolean":

                code = booleanBlock(element);
                break;

            case "Matrix Evaluate":

                code = matmath(element);
                break;
            case "Print Block":

                code = outputBlock(element);
                break;
            case "Matrix":
 
                code = matrixBlock(element);
                break;
            case "Break":
   
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

        maincode += code;

    }

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

        zeroarr.push(0);
    }
    return `
    const ${varname}1 = [${zeroarr}];
    const ${varname} = [];
    while(${varname}1.length) ${varname}.push(${varname}1.splice(0,${columns}));
        
    //console.log("zero matrix is ",${varname});
    
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

        if (maincode === "") {
            alert("No input/blocks found");
            return;
        }



        eval(maincode);


    } catch (error) {

    }


}

function compile(mainblock) {

    let blocksofcode = mainblock.children;

    if (blocksofcode.length <= 1) {
        alert("No blocks found")
        return ''
    }
    let maincode = `
    const msg = document.createElement("p")
    // msg.style.borderBottom = "1px solid black"
    // msg.style.height = "25px";
    let lastoutput;
    `;

    for (let index = 0; index < blocksofcode.length; index++) {

        const element = blocksofcode[index];
        if (!element.id) {
            continue;
        }
        if (element.id == "drop-box") {
            continue;
        }
        const path = getpath(element);
        let blockname = element.firstChild.textContent.trim();


        if (blockname == "Break" || blockname == "Continue") {
            if (path.includes("For") || path.includes("While")) {
    
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

                code = booleanBlock(element);
                break;

            case "Matrix Evaluate":

                code = matmath(element);
                break;
            case "Print Block":

                code = outputBlock(element);
                break;
            case "Matrix":

                code = matrixBlock(element);
                break;
            case "Break":
   
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
        maincode += code;

    }
    maincode += `
    //console.log("lastchild of result",document.getElementById("result_modal").firstElementChild)
    lastoutput = document.getElementById("result_modal").firstElementChild
    if(lastoutput)
        lastoutput.style.border = "none"
    
    msg.style.border = "5px solid black"
    msg.style.padding = "1rem"
    document.getElementById("result_modal").prepend(msg);
    //console.log("outputted successfully ");
    
    `
    return maincode;

}

function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}

var Sin = (num) => { return math.sin(num); }
var Cos = (num) => { return math.cos(num); }
var Tan = (num) => { return math.tan(num); }
var Sinh = (num) => { return math.sinh(num); }
var Cosh = (num) => { return math.cosh(num); }
var Tanh = (num) => { return math.tanh(num); }
var Sind = (num) => { return math.sin(degrees_to_radians(num)); }
var Cosd = (num) => { return math.cos(degrees_to_radians(num)); }
var Tand = (num) => { return math.tan(degrees_to_radians(num)); }
var Sinhd = (num) => { return math.sinh(degrees_to_radians(num)); }
var Coshd = (num) => { return math.cosh(degrees_to_radians(num)); }
var Tanhd = (num) => { return math.tanh(degrees_to_radians(num)); }
var Sqrt = (num) => { return math.sqrt(num); }
var Abs = (num) => { return math.abs(num); }
var Max = (num1, num2) => { return math.max(num1, num2) }
var Sort = (arr) => { return arr.sort() }
var Sum = (arr) => {
    let sum = 0;
    for (let idx = 0; idx < arr.length; idx++) {
        sum += arr[idx];
    }
    return sum;
}

let prebuilton = false;

function prebuilt() {
    try{
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
    }}
    catch(err){}

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
    //console.log("combined matrix is",${varname});
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
    //console.log("combined matrix is",${varname});
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
    //console.log(${varname});
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
    
    //console.log(${varname});
    `
}