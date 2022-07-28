

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


let prebuilt_code = `<div id='drop-box'> <span>you can drop the blocks here</span></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='mat0'> Matrix <span class='showvarname'> : costdata</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='costdata' type='text' name='Variable' id='mat0$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='ROW'>Enter the number of rows of the matrix</label> <input value='3' type='text' name='' id='mat0$ROW' placeholder='Number of Rows'> <br><label class='visually-hidden' for='COL'>Enter the number of Column of the matrix</label> <input value='4' type='text' name='' id='mat0$COL' placeholder='Number of Columns'> <br><button id='' class='btn btn-custom-outline-brown' onclick='matinput(prevSelection[0])'>Generate Table</button> <br><div class='matinps'><input value='1' type='text' id='1'><input value='6' type='text' id='2'><input value='0.5' type='text' id='3'><input value='0.0006' type='text' id='4'><br><br><input value='2' type='text' id='5'><input value='5' type='text' id='6'><input value='0.6' type='text' id='7'><input value='0.0005' type='text' id='8'><br><br><input value='3' type='text' id='9'><input value='3' type='text' id='10'><input value='0.4' type='text' id='11'><input value='0.0007' type='text' id='12'><br><br></div><button id='mat0$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst1' draggable='false'> Constant <span class='showvarname'> : ng</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='ng' type='text' name='Variable' id='cst1$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='3' type='text' name='' id='cst1$VAL' placeholder='Value'> <br><button id='cst1$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='vec2' draggable='false'> Vector <span class='showvarname'> : P</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='P' type='text' name='Variable' id='vec2$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the Number of elements</label> <input value='3' type='text' name='' id='vec2$VAL' placeholder='Number of elements'> <br><button id='' class='btn btn-custom-outline-brown' onclick='vecinput(prevSelection[0])'>Generate row</button> <br><div class='vecinps'><input value='150' type='text' id='1'><input value='100' type='text' id='2'><input value='250' type='text' id='3'></div><button id='vec2$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst3'> Constant <span class='showvarname'> : sum1</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='sum1' type='text' name='Variable' id='cst3$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='0' type='text' name='' id='cst3$VAL' placeholder='Value'> <br><button id='cst3$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='for4'> For <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='START'> Enter the start value of Counter </label> <input value='0' type='text' name='' id='for4$START' placeholder='Start'> <br><label class='visually-hidden' for='END'> Enter the end value of counter </label> <input value='3' type='text' name='' id='for4$END' placeholder='End'> <br><label class='visually-hidden' for='STEP'> Enter the step value of counter</label> <input value='' type='text' name='' value='' id='for4$STEP' placeholder='Step (Default 1)'> <br><button id='for4$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva5'> Evaluate <span class='showvarname'> : sum1</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='sum1' type='text' name='Variable' id='eva5$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='sum1+P[i]' type='text' name='' id='eva5$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva5$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst6'> Constant <span class='showvarname'> : Pd</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='Pd' type='text' name='Variable' id='cst6$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='500' type='text' name='' id='cst6$VAL' placeholder='Value'> <br><button id='cst6$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst7'> Constant <span class='showvarname'> : e</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='e' type='text' name='Variable' id='cst7$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='10' type='text' name='' id='cst7$VAL' placeholder='Value'> <br><button id='cst7$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='vec8'> Vector <span class='showvarname'> : delL</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='delL' type='text' name='Variable' id='vec8$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the Number of elements</label> <input value='4' type='text' name='' id='vec8$VAL' placeholder='Number of elements'> <br><button id='' class='btn btn-custom-outline-brown' onclick='vecinput(prevSelection[0])'>Generate row</button> <br><div class='vecinps'><input value='0' type='text' id='1'><input value='0' type='text' id='2'><input value='0' type='text' id='3'><input value='0' type='text' id='4'></div><button id='vec8$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='vec9' draggable='false'> Vector <span class='showvarname'> : uno</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='uno' type='text' name='Variable' id='vec9$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the Number of elements</label> <input value='3' type='text' name='' id='vec9$VAL' placeholder='Number of elements'> <br><button id='' class='btn btn-custom-outline-brown' onclick='vecinput(prevSelection[0])'>Generate row</button> <br><div class='vecinps'><input value='0' type='text' id='1'><input value='0' type='text' id='2'><input value='0' type='text' id='3'></div><button id='vec9$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='vec10' draggable='false'> Vector <span class='showvarname'> : a</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='a' type='text' name='Variable' id='vec10$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the Number of elements</label> <input value='3' type='text' name='' id='vec10$VAL' placeholder='Number of elements'> <br><button id='' class='btn btn-custom-outline-brown' onclick='vecinput(prevSelection[0])'>Generate row</button> <br><div class='vecinps'><input value='0' type='text' id='1'><input value='0' type='text' id='2'><input value='0' type='text' id='3'></div><button id='vec10$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='vec11' draggable='false'> Vector <span class='showvarname'> : b</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='b' type='text' name='Variable' id='vec11$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the Number of elements</label> <input value='3' type='text' name='' id='vec11$VAL' placeholder='Number of elements'> <br><button id='' class='btn btn-custom-outline-brown' onclick='vecinput(prevSelection[0])'>Generate row</button> <br><div class='vecinps'><input value='0' type='text' id='1'><input value='0' type='text' id='2'><input value='0' type='text' id='3'></div><button id='vec11$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='vec12' draggable='false'> Vector <span class='showvarname'> : d</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='d' type='text' name='Variable' id='vec12$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the Number of elements</label> <input value='3' type='text' name='' id='vec12$VAL' placeholder='Number of elements'> <br><button id='' class='btn btn-custom-outline-brown' onclick='vecinput(prevSelection[0])'>Generate row</button> <br><div class='vecinps'><input value='0' type='text' id='1'><input value='0' type='text' id='2'><input value='0' type='text' id='3'></div><button id='vec12$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='vec13'> Vector <span class='showvarname'> : lamda0</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='lamda0' type='text' name='Variable' id='vec13$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the Number of elements</label> <input value='3' type='text' name='' id='vec13$VAL' placeholder='Number of elements'> <br><button id='' class='btn btn-custom-outline-brown' onclick='vecinput(prevSelection[0])'>Generate row</button> <br><div class='vecinps'><input value='0' type='text' id='1'><input value='0' type='text' id='2'><input value='0' type='text' id='3'></div><button id='vec13$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst14' draggable='false'> Constant <span class='showvarname'> : lambda</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='lambda' type='text' name='Variable' id='cst14$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='0' type='text' name='' id='cst14$VAL' placeholder='Value'> <br><button id='cst14$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='for15'> For <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='START'> Enter the start value of Counter </label> <input value='0' type='text' name='' id='for15$START' placeholder='Start'> <br><label class='visually-hidden' for='END'> Enter the end value of counter </label> <input value='3' type='text' name='' id='for15$END' placeholder='End'> <br><label class='visually-hidden' for='STEP'> Enter the step value of counter</label> <input value='' type='text' name='' value='' id='for15$STEP' placeholder='Step (Default 1)'> <br><button id='for15$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva23' draggable='false'> Evaluate <span class='showvarname'> : uno[i]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='uno[i]' type='text' name='Variable' id='eva23$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='costdata[i][0]' type='text' name='' id='eva23$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva23$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva24'> Evaluate <span class='showvarname'> : a[i]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='a[i]' type='text' name='Variable' id='eva24$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='costdata[i][1]' type='text' name='' id='eva24$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva24$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva25'> Evaluate <span class='showvarname'> : b[i]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='b[i]' type='text' name='Variable' id='eva25$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='costdata[i][2]' type='text' name='' id='eva25$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva25$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva26' draggable='false'> Evaluate <span class='showvarname'> : d[i]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='d[i]' type='text' name='Variable' id='eva26$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='costdata[i][3]' type='text' name='' id='eva26$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva26$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst20'> Constant <span class='showvarname'> : k</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='k' type='text' name='Variable' id='cst20$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='1' type='text' name='' id='cst20$VAL' placeholder='Value'> <br><button id='cst20$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst21'> Constant <span class='showvarname'> : tol</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='tol' type='text' name='Variable' id='cst21$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='3' type='text' name='' id='cst21$VAL' placeholder='Value'> <br><button id='cst21$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst22'> Constant <span class='showvarname'> : itr</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='itr' type='text' name='Variable' id='cst22$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='0' type='text' name='' id='cst22$VAL' placeholder='Value'> <br><button id='cst22$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='for28'> For <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='START'> Enter the start value of Counter </label> <input value='0' type='text' name='' id='for28$START' placeholder='Start'> <br><label class='visually-hidden' for='END'> Enter the end value of counter </label> <input value='6' type='text' name='' id='for28$END' placeholder='End'> <br><label class='visually-hidden' for='STEP'> Enter the step value of counter</label> <input value='' type='text' name='' value='' id='for28$STEP' placeholder='Step (Default 1)'> <br><button id='for28$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='for29' draggable='false'> For <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='START'> Enter the start value of Counter </label> <input value='0' type='text' name='' id='for29$START' placeholder='Start'> <br><label class='visually-hidden' for='END'> Enter the end value of counter </label> <input value='3' type='text' name='' id='for29$END' placeholder='End'> <br><label class='visually-hidden' for='STEP'> Enter the step value of counter</label> <input value='' type='text' name='' value='' id='for29$STEP' placeholder='Step (Default 1)'> <br><button id='for29$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva31' draggable='false'> Evaluate <span class='showvarname'> : lamda0[j]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='lamda0[j]' type='text' name='Variable' id='eva31$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='2 * d[j] * P[j] + b[j]' type='text' name='' id='eva31$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva31$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst32'> Constant <span class='showvarname'> : sum</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='sum' type='text' name='Variable' id='cst32$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='0' type='text' name='' id='cst32$VAL' placeholder='Value'> <br><button id='cst32$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst33' draggable='false'> Constant <span class='showvarname'> : count</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='count' type='text' name='Variable' id='cst33$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='3' type='text' name='' id='cst33$VAL' placeholder='Value'> <br><button id='cst33$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='for34' draggable='false'> For <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='START'> Enter the start value of Counter </label> <input value='0' type='text' name='' id='for34$START' placeholder='Start'> <br><label class='visually-hidden' for='END'> Enter the end value of counter </label> <input value='3' type='text' name='' id='for34$END' placeholder='End'> <br><label class='visually-hidden' for='STEP'> Enter the step value of counter</label> <input value='' type='text' name='' value='' id='for34$STEP' placeholder='Step (Default 1)'> <br><button id='for34$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva35'> Evaluate <span class='showvarname'> : sum</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='sum' type='text' name='Variable' id='eva35$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='sum+lamda0[j]' type='text' name='' id='eva35$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva35$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva36'> Evaluate <span class='showvarname'> : lambda</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='lambda' type='text' name='Variable' id='eva36$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='sum/count' type='text' name='' id='eva36$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva36$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='for37'> For <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='START'> Enter the start value of Counter </label> <input value='0' type='text' name='' id='for37$START' placeholder='Start'> <br><label class='visually-hidden' for='END'> Enter the end value of counter </label> <input value='3' type='text' name='' id='for37$END' placeholder='End'> <br><label class='visually-hidden' for='STEP'> Enter the step value of counter</label> <input value='' type='text' name='' value='' id='for37$STEP' placeholder='Step (Default 1)'> <br><button id='for37$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva38' draggable='false'> Evaluate <span class='showvarname'> : delL[j]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='delL[j]' type='text' name='Variable' id='eva38$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='lamda0[j] - lambda' type='text' name='' id='eva38$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva38$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva39'> Evaluate <span class='showvarname'> : delL[ng+1]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='delL[ng+1]' type='text' name='Variable' id='eva39$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='Pd-sum1' type='text' name='' id='eva39$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva39$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='for40'> For <span class='showvarname'></span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='START'> Enter the start value of Counter </label> <input value='0' type='text' name='' id='for40$START' placeholder='Start'> <br><label class='visually-hidden' for='END'> Enter the end value of counter </label> <input value='3' type='text' name='' id='for40$END' placeholder='End'> <br><label class='visually-hidden' for='STEP'> Enter the step value of counter</label> <input value='' type='text' name='' value='' id='for40$STEP' placeholder='Step (Default 1)'> <br><button id='for40$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva41'> Evaluate <span class='showvarname'> : P[j]</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='P[j]' type='text' name='Variable' id='eva41$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='P[j] - (e * delL[j])' type='text' name='' id='eva41$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva41$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='cst44'> Constant <span class='showvarname'> : balance</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='balance' type='text' name='Variable' id='cst44$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='VAL'>Enter the value</label> <input value='0' type='text' name='' id='cst44$VAL' placeholder='Value'> <br><button id='cst44$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva46'> Evaluate <span class='showvarname'> : balance</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='balance' type='text' name='Variable' id='eva46$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='Pd-sum1' type='text' name='' id='eva46$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva46$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='eva47'> Evaluate <span class='showvarname'> : tol</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAR'>Enter the variable name</label> <input value='tol' type='text' name='Variable' id='eva47$VAR' placeholder='Variable Name'> <br><label class='visually-hidden' for='EVALUATE'> enter the expression to evaluate </label> <input value='balance' type='text' name='' id='eva47$EVALUATE' placeholder='Evaluate/Math Operations'> <br><button id='eva47$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb48'> Print Block <span class='showvarname'> : k</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='output k is' type='text' name='' id='opb48$VAL' placeholder='Enter the message you want to display'> <input value='k' type='text' name='' id='opb48$VAR' placeholder='Value'> <br><button id='opb48$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb49' draggable='false'> Print Block <span class='showvarname'> : P</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='output p is' type='text' name='' id='opb49$VAL' placeholder='Enter the message you want to display'> <input value='P' type='text' name='' id='opb49$VAR' placeholder='Value'> <br><button id='opb49$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div><div class='pl-3 pt-2 noselect selectable bordered-box' id='opb50'> Print Block <span class='showvarname'> : lambda</span> <div class='details pb-2' style='display: none;'> <label class='visually-hidden' for='VAL'>Enter the value to output</label> <input value='output lambda is' type='text' name='' id='opb50$VAL' placeholder='Enter the message you want to display'> <input value='lambda' type='text' name='' id='opb50$VAR' placeholder='Value'> <br><button id='opb50$OK' class='btn btn-custom-outline-brown' onclick='ok(event)'> Ok </button> </div></div></div>`;

let exp_number = 5;
let supremecode;


if (screen.width < 1250) {
    alert("The simulator will not be displayed properly on your device, please use a wider screen.")
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




// select highkight


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

        }
        if (document.getElementById("interface").childNodes.length == 1) {
            document.getElementById("delallbut").disabled = true;
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
    try {
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
    } catch (error) {

    }



}

function vecinput(block) {
    let columns = document.getElementById(block.id + "$" + "VAL").value;
    let divblock = block.getElementsByClassName("details")[0];
    divblock = divblock.getElementsByClassName("vecinps")[0];
    divblock.innerHTML = "";
    if (!columns) {
        columns = 1
        document.getElementById(block.id + "$" + "VAL").value = 1
    }
    if (columns >= 25) {
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
    if (rows >= 10 || columns >= 10) {
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

    return ` let ${varname} = ${valname} ;\n`;

}

var booleanBlock = (block) => {
    let varname, valname;

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
    ${block.id}print.innerHTML="${message1}" +eval(${variable});
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
    let path = [];
    let ele = block;
    while (ele.id != "interface") {
        path.push(ele.firstChild.textContent.trim());
        ele = ele.parentNode;
    }

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

    let vector_inputs = document.getElementById(block.id).getElementsByClassName("vecinps")[0].getElementsByTagName("input")
    for (let index = 0; index < vector_inputs.length; index++) {
        array.push(vector_inputs[index].value);
    }
    return `
    let ${varname} =[${array}];
          
    //console.log("vector is ",${varname});\n
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
            alert("No input");
            return;
        }


        eval(maincode);


    } catch (error) {

    }


}

function compile(mainblock) {

    let maincode = `
    const msg = document.createElement("p")
    msg.style.borderBottom = "1px solid black"
    // msg.style.height = "25px";
    let lastoutput;
    `;
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
    
    // document.getElementById("OUTPUT_CONSOLE").appendChild(msg);`
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
var Sqrt = (num) => { return math.sqrt(num); }
var Sind = (num) => { return math.sin(degrees_to_radians(num)); }
var Cosd = (num) => { return math.cos(degrees_to_radians(num)); }
var Tand = (num) => { return math.tan(degrees_to_radians(num)); }
var Sinhd = (num) => { return math.sinh(degrees_to_radians(num)); }
var Coshd = (num) => { return math.cosh(degrees_to_radians(num)); }
var Tanhd = (num) => { return math.tanh(degrees_to_radians(num)); }
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

    try {
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
    } catch (error) {

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
