// from Math import sin

const node = document.createElement("div");
node.style.height = "20px";
node.id = "green-blk"
node.style.backgroundColor = "#AD8B73";
node.classList.add("pl-3", "py-3");
max_level = 30;
let count1 = 0;
let sub_arr;
const prevSelection = [];
let count = 0;
let ifshiftpressed = false;
let jsonexp = {
    1: `
    <div class="pl-3 pt-2 noselect selectable bordered-box" id="cst0">
    Constant
    <span class="showvarname">@pi</span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst0$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst0$VAL" placeholder="Value">
        <br>
        <button id="cst0$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>

     
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva1">
    Evaluate
    <span class="showvarname">@Vnom</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva1$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva1$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva1$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst2">
    Constant
    <span class="showvarname">@freq</span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst2$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst2$VAL" placeholder="Value">
        <br>
        <button id="cst2$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst3">
    Constant
    <span class="showvarname">@km</span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst3$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst3$VAL" placeholder="Value">
        <br>
        <button id="cst3$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva4">
    Evaluate
    <span class="showvarname">@l</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva4$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva4$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva4$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva5">
    Evaluate
    <span class="showvarname">@c</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva5$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva5$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva5$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst6">
    Constant
    <span class="showvarname">@delta</span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst6$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst6$VAL" placeholder="Value">
        <br>
        <button id="cst6$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva7">
    Evaluate
    <span class="showvarname">@Z0</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva7$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva7$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva7$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva8">
    Evaluate
    <span class="showvarname">@SIL</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva8$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva8$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva8$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst9">
    Constant
    <span class="showvarname">@Vs</span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst9$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst9$VAL" placeholder="Value">
        <br>
        <button id="cst9$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst10">
    Constant
    <span class="showvarname">@Vr</span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst10$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst10$VAL" placeholder="Value">
        <br>
        <button id="cst10$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva11">
    Evaluate
    <span class="showvarname">@Beta</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva11$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva11$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva11$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva12">
    Evaluate
    <span class="showvarname">@Ps_max</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva12$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva12$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva12$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva13">
    Evaluate
    <span class="showvarname">@Ps</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva13$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva13$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva13$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva14">
    Evaluate
    <span class="showvarname">@Qr</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva14$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva14$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva14$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="if15">
    If
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="OP1">Enter the Operand 1</label>
        <input type="text" name="" id="if15$OP1" placeholder="Operand One">
        <br>
        <label for="OP">Enter the operator</label>
        <select name="" id="if15$OP">
            <option title="Greater Than" value=">">&gt;</option>
            <option title="Lesser Than" value="<">
                &lt; </option>
            <option title="Equals" value="==">=</option>
            <option title="Greater Than or Equal to" value=">=">≥</option>
            <option title="Lesser Than or Equal to" value="<=">≤</option>
            <option title="Not Equals" value="!=">≠</option>
        </select>
        <br>

        <label for="OP2">Enter the Operand 2</label>
        <input type="text" name="" id="if15$OP2" placeholder="Operand Two">
        <br>
        <button id="if15$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="opb16">
        Output Block
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="VAL">Enter the value to output</label>
            <input type="text" name="" id="opb16$VAL" placeholder="Value">
            <br>
            <button id="opb16$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>


</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eli17">
    Else If
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="OP1"> Enter the Operand 1 </label>
        <input type="text" name="" id="eli17$OP1" placeholder="Operand One">
        <br>
        <label for="OP"> enter the operator</label>
        <select name="" id="eli17$OP">
            <option title="Greater Than" value=">">&gt;</option>
            <option title="Lesser Than" value="<">
                &lt; </option>
            <option title="Equals" value="=">=</option>
            <option title="Greater Than or Equal to" value=">=">≥</option>
            <option title="Lesser Than or Equal to" value="<=">≤</option>
            <option title="Not Equals" value="!=">≠</option>
        </select>
        <br>
        <label for="OP2"> enter the Operand 2</label>
        <input type="text" name="" id="eli17$OP2" placeholder="Operand Two">
        <br>
        <button id="eli17$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
    <div class="pl-3 pt-2 noselect selectable bordered-box" id="opb18" draggable="false">
        Output Block
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="VAL">Enter the value to output</label>
            <input type="text" name="" id="opb18$VAL" placeholder="Value">
            <br>
            <button id="opb18$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="els19">
    Else
    <div class="pl-3 pt-2 noselect selectable bordered-box" id="opb20">
        Output Block
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="VAL">Enter the value to output</label>
            <input type="text" name="" id="opb20$VAL" placeholder="Value">
            <br>
            <button id="opb20$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>
</div>



<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva21">
    Evaluate
    <span class="showvarname">@aa</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva21$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva21$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva21$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva22">
    Evaluate
    <span class="showvarname">@bb</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva22$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva22$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva22$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst23">
    Constant
    <span class="showvarname">@P0</span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst23$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst23$VAL" placeholder="Value">
        <br>
        <button id="cst23$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva24">
    Evaluate
    <span class="showvarname">@Vmp</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva24$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva24$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva24$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva25">
    Evaluate
    <span class="showvarname">@Vmn</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva25$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva25$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva25$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva26">
    Evaluate
    <span class="showvarname">@m1</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva26$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva26$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva26$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva27">
    Evaluate
    <span class="showvarname">@m2</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva27$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva27$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva27$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva28">
    Evaluate
    <span class="showvarname">@Vmpp</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva28$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva28$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva28$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>
<div class="pl-3 pt-2 noselect selectable bordered-box" id="eva29" draggable="false">
    Evaluate
    <span class="showvarname">@Vm</span>
    <div class="details pb-2" style="display: none;">

        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="eva29$VAR" placeholder="Variable Name">
        <br>
        <label for="EVALUATE"> enter the expression to evaluate </label>
        <input type="text" name="" id="eva29$EVALUATE" placeholder="Evaluate/Math Operations">
        <br>
        <button id="eva29$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>
<div class="pl-3 pt-2 noselect selectable bordered-box" id="opb30">
    Output Block
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAL">Enter the value to output</label>
        <input type="text" name="" id="opb30$VAL" placeholder="Value">
        <br>
        <button id="opb30$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="opb31">
    Output Block
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAL">Enter the value to output</label>
        <input type="text" name="" id="opb31$VAL" placeholder="Value">
        <br>
        <button id="opb31$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>
    `,
    4: `
    <div id="drop-box"></div>


<div class="pl-3 pt-2 noselect selectable bordered-box" id="mat0">
    Matrix
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="mat0$VAR" placeholder="Variable Name">
        <br>
        <label for="ROW">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat0$ROW" placeholder="Number of Rows">
        <br>
        <label for="COL">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat0$COL" placeholder="Number of Columns">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="matinput(prevSelection[0])">Generate
            Table</button>
        <br>
        <div class="matinps"></div>
        <button id="mat0$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst1">
    Constant
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst1$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst1$VAL" placeholder="Value">
        <br>
        <button id="cst1$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="vec2">
    Vector
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="vec2$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the Number of elements</label>
        <input type="text" name="" id="vec2$VAL" placeholder="Number of elements">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="vecinput(prevSelection[0])">Generate
            row</button>
        <br>
        <div class="vecinps"></div>
        <button id="vec2$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst3">
    Constant
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst3$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst3$VAL" placeholder="Value">
        <br>
        <button id="cst3$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="for4">
    For
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="START"> Enter the start value of Counter </label>
        <input type="text" name="" id="for4$START" placeholder="Start">
        <br>
        <label for="END"> Enter the end value of counter </label>
        <input type="text" name="" id="for4$END" placeholder="End">
        <br>
        <label for="STEP"> Enter the step value of counter</label>
        <input type="text" name="" value="" id="for4$STEP" placeholder="Step (Default 1)">
        <br>


        <button id="for4$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva5">
        Evaluate
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva5$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva5$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva5$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst6">
    Constant
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst6$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst6$VAL" placeholder="Value">
        <br>
        <button id="cst6$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst7">
    Constant
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst7$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst7$VAL" placeholder="Value">
        <br>
        <button id="cst7$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="vec8">
    Vector
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="vec8$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the Number of elements</label>
        <input type="text" name="" id="vec8$VAL" placeholder="Number of elements">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="vecinput(prevSelection[0])">Generate
            row</button>
        <br>
        <div class="vecinps"></div>
        <button id="vec8$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="vec9">
    Vector
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="vec9$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the Number of elements</label>
        <input type="text" name="" id="vec9$VAL" placeholder="Number of elements">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="vecinput(prevSelection[0])">Generate
            row</button>
        <br>
        <div class="vecinps"></div>
        <button id="vec9$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="vec10">
    Vector
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="vec10$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the Number of elements</label>
        <input type="text" name="" id="vec10$VAL" placeholder="Number of elements">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="vecinput(prevSelection[0])">Generate
            row</button>
        <br>
        <div class="vecinps"></div>
        <button id="vec10$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="vec11">
    Vector
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="vec11$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the Number of elements</label>
        <input type="text" name="" id="vec11$VAL" placeholder="Number of elements">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="vecinput(prevSelection[0])">Generate
            row</button>
        <br>
        <div class="vecinps"></div>
        <button id="vec11$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="vec12">
    Vector
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="vec12$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the Number of elements</label>
        <input type="text" name="" id="vec12$VAL" placeholder="Number of elements">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="vecinput(prevSelection[0])">Generate
            row</button>
        <br>
        <div class="vecinps"></div>
        <button id="vec12$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="vec13">
    Vector
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="vec13$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the Number of elements</label>
        <input type="text" name="" id="vec13$VAL" placeholder="Number of elements">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="vecinput(prevSelection[0])">Generate
            row</button>
        <br>
        <div class="vecinps"></div>
        <button id="vec13$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst14">
    Constant
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst14$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst14$VAL" placeholder="Value">
        <br>
        <button id="cst14$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="for15">
    For
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="START"> Enter the start value of Counter </label>
        <input type="text" name="" id="for15$START" placeholder="Start">
        <br>
        <label for="END"> Enter the end value of counter </label>
        <input type="text" name="" id="for15$END" placeholder="End">
        <br>
        <label for="STEP"> Enter the step value of counter</label>
        <input type="text" name="" value="" id="for15$STEP" placeholder="Step (Default 1)">
        <br>


        <button id="for15$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva16">
        Evaluate
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva16$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva16$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva16$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva17">
        Evaluate
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva17$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva17$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva17$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva18">
        Evaluate
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva18$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva18$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva18$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva19">
        Evaluate
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva19$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva19$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva19$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst20">
    Constant
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst20$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst20$VAL" placeholder="Value">
        <br>
        <button id="cst20$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst21">
    Constant
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst21$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst21$VAL" placeholder="Value">
        <br>
        <button id="cst21$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst22">
    Constant
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst22$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst22$VAL" placeholder="Value">
        <br>
        <button id="cst22$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="for23">
    For
    <span class="showvarname"></span>
    <div class="details pb-2" style="display: none;">
        <label for="START"> Enter the start value of Counter </label>
        <input type="text" name="" id="for23$START" placeholder="Start">
        <br>
        <label for="END"> Enter the end value of counter </label>
        <input type="text" name="" id="for23$END" placeholder="End">
        <br>
        <label for="STEP"> Enter the step value of counter</label>
        <input type="text" name="" value="" id="for23$STEP" placeholder="Step (Default 1)">
        <br>


        <button id="for23$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="for24">
        For
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="START"> Enter the start value of Counter </label>
            <input type="text" name="" id="for24$START" placeholder="Start">
            <br>
            <label for="END"> Enter the end value of counter </label>
            <input type="text" name="" id="for24$END" placeholder="End">
            <br>
            <label for="STEP"> Enter the step value of counter</label>
            <input type="text" name="" value="" id="for24$STEP" placeholder="Step (Default 1)">
            <br>


            <button id="for24$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
        <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva25">
            Evaluate
            <span class="showvarname"></span>
            <div class="details pb-2" style="display: none;">

                <label for="VAR">Enter the variable name</label>
                <input type="text" name="Variable" id="eva25$VAR" placeholder="Variable Name">
                <br>
                <label for="EVALUATE"> enter the expression to evaluate </label>
                <input type="text" name="" id="eva25$EVALUATE" placeholder="Evaluate/Math Operations">
                <br>
                <button id="eva25$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
            </div>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="cst26">
        Constant
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="cst26$VAR" placeholder="Variable Name">
            <br>
            <label for="VAL">Enter the value</label>
            <input type="text" name="" id="cst26$VAL" placeholder="Value">
            <br>
            <button id="cst26$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="cst27">
        Constant
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="cst27$VAR" placeholder="Variable Name">
            <br>
            <label for="VAL">Enter the value</label>
            <input type="text" name="" id="cst27$VAL" placeholder="Value">
            <br>
            <button id="cst27$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="for28">
        For
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="START"> Enter the start value of Counter </label>
            <input type="text" name="" id="for28$START" placeholder="Start">
            <br>
            <label for="END"> Enter the end value of counter </label>
            <input type="text" name="" id="for28$END" placeholder="End">
            <br>
            <label for="STEP"> Enter the step value of counter</label>
            <input type="text" name="" value="" id="for28$STEP" placeholder="Step (Default 1)">
            <br>


            <button id="for28$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>



        <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva30">
            Evaluate
            <span class="showvarname"></span>
            <div class="details pb-2" style="display: none;">

                <label for="VAR">Enter the variable name</label>
                <input type="text" name="Variable" id="eva30$VAR" placeholder="Variable Name">
                <br>
                <label for="EVALUATE"> enter the expression to evaluate </label>
                <input type="text" name="" id="eva30$EVALUATE" placeholder="Evaluate/Math Operations">
                <br>
                <button id="eva30$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
            </div>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva31">
        Evaluate
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva31$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva31$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva31$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="for32">
        For
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="START"> Enter the start value of Counter </label>
            <input type="text" name="" id="for32$START" placeholder="Start">
            <br>
            <label for="END"> Enter the end value of counter </label>
            <input type="text" name="" id="for32$END" placeholder="End">
            <br>
            <label for="STEP"> Enter the step value of counter</label>
            <input type="text" name="" value="" id="for32$STEP" placeholder="Step (Default 1)">
            <br>


            <button id="for32$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>

        <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva41">
            Evaluate
            <span class="showvarname"></span>
            <div class="details pb-2" style="display: none;">

                <label for="VAR">Enter the variable name</label>
                <input type="text" name="Variable" id="eva41$VAR" placeholder="Variable Name">
                <br>
                <label for="EVALUATE"> enter the expression to evaluate </label>
                <input type="text" name="" id="eva41$EVALUATE" placeholder="Evaluate/Math Operations">
                <br>
                <button id="eva41$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
            </div>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva33">
        Evaluate
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva33$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva33$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva33$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="for34">
        For
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="START"> Enter the start value of Counter </label>
            <input type="text" name="" id="for34$START" placeholder="Start">
            <br>
            <label for="END"> Enter the end value of counter </label>
            <input type="text" name="" id="for34$END" placeholder="End">
            <br>
            <label for="STEP"> Enter the step value of counter</label>
            <input type="text" name="" value="" id="for34$STEP" placeholder="Step (Default 1)">
            <br>


            <button id="for34$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>

        <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva42">
            Evaluate
            <span class="showvarname"></span>
            <div class="details pb-2">

                <label for="VAR">Enter the variable name</label>
                <input type="text" name="Variable" id="eva42$VAR" placeholder="Variable Name">
                <br>
                <label for="EVALUATE"> enter the expression to evaluate </label>
                <input type="text" name="" id="eva42$EVALUATE" placeholder="Evaluate/Math Operations">
                <br>
                <button id="eva42$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
            </div>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="cst35">
        Constant
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="cst35$VAR" placeholder="Variable Name">
            <br>
            <label for="VAL">Enter the value</label>
            <input type="text" name="" id="cst35$VAL" placeholder="Value">
            <br>
            <button id="cst35$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="cst36">
        Constant
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="cst36$VAR" placeholder="Variable Name">
            <br>
            <label for="VAL">Enter the value</label>
            <input type="text" name="" id="cst36$VAL" placeholder="Value">
            <br>
            <button id="cst36$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva37">
        Evaluate
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva37$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva37$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva37$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva38">
        Evaluate
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva38$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva38$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva38$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="opb39">
        Output Block
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="VAL">Enter the value to output</label>
            <input type="text" name="" id="opb39$VAL" placeholder="Value">
            <br>
            <button id="opb39$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="opb40">
        Output Block
        <span class="showvarname"></span>
        <div class="details pb-2" style="display: none;">
            <label for="VAL">Enter the value to output</label>
            <input type="text" name="" id="opb40$VAL" placeholder="Value">
            <br>
            <button id="opb40$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>
</div>

    
    `,
    2: `
    <div class="pl-3 pt-2 noselect selectable bordered-box" id="mat0">
    Matrix
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="mat0$VAR" placeholder="Variable Name">
        <br>
        <label for="ROW">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat0$ROW" placeholder="Number of Rows">
        <br>
        <label for="COL">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat0$COL" placeholder="Number of Columns">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="matinput(prevSelection[0])">Generate
            Table</button>
        <br>
        <div class="matinps"><input type="text" id="1"><input type="text" id="2"><input type="text" id="3"><input
                type="text" id="4"><br><br><input type="text" id="5"><input type="text" id="6"><input type="text"
                id="7"><input type="text" id="8"><br><br><input type="text" id="9"><input type="text" id="10"><input
                type="text" id="11"><input type="text" id="12"><br><br></div>
        <button id="mat0$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst1">
    Constant
    <span class="showvarname">
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst1$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst1$VAL" placeholder="Value">
        <br>
        <button id="cst1$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst2">
    Constant
    <span class="showvarname">
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst2$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst2$VAL" placeholder="Value">
        <br>
        <button id="cst2$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="opb3">
    Output Block
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAL">Enter the value to output</label>
        <input type="text" name="" id="opb3$VAL" placeholder="Value">
        <br>
        <button id="opb3$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="mat4">
    Matrix
    <span class="showvarname">
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="mat4$VAR" placeholder="Variable Name">
        <br>
        <label for="ROW">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat4$ROW" placeholder="Number of Rows">
        <br>
        <label for="COL">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat4$COL" placeholder="Number of Columns">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="matinput(prevSelection[0])">Generate
            Table</button>
        <br>
        <div class="matinps"><input type="text" id="1"><input type="text" id="2"><input type="text" id="3"><br><br>
        </div>
        <button id="mat4$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="mat5" draggable="false">
    Matrix
    <span class="showvarname">
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="mat5$VAR" placeholder="Variable Name">
        <br>
        <label for="ROW">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat5$ROW" placeholder="Number of Rows">
        <br>
        <label for="COL">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat5$COL" placeholder="Number of Columns">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="matinput(prevSelection[0])">Generate
            Table</button>
        <br>
        <div class="matinps"><input type="text" id="1"><input type="text" id="2"><input type="text" id="3"><br><br>
        </div>
        <button id="mat5$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="mat6">
    Matrix
    <span class="showvarname">
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="mat6$VAR" placeholder="Variable Name">
        <br>
        <label for="ROW">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat6$ROW" placeholder="Number of Rows">
        <br>
        <label for="COL">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat6$COL" placeholder="Number of Columns">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="matinput(prevSelection[0])">Generate
            Table</button>
        <br>
        <div class="matinps"><input type="text" id="1"><input type="text" id="2"><input type="text" id="3"><br><br>
        </div>
        <button id="mat6$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="mat7">
    Matrix
    <span class="showvarname">
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="mat7$VAR" placeholder="Variable Name">
        <br>
        <label for="ROW">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat7$ROW" placeholder="Number of Rows">
        <br>
        <label for="COL">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat7$COL" placeholder="Number of Columns">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="matinput(prevSelection[0])">Generate
            Table</button>
        <br>
        <div class="matinps"><input type="text" id="1"><input type="text" id="2"><input type="text" id="3"><br><br>
        </div>
        <button id="mat7$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="mat8">
    Matrix
    <span class="showvarname">
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="mat8$VAR" placeholder="Variable Name">
        <br>
        <label for="ROW">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat8$ROW" placeholder="Number of Rows">
        <br>
        <label for="COL">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat8$COL" placeholder="Number of Columns">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="matinput(prevSelection[0])">Generate
            Table</button>
        <br>
        <div class="matinps"><input type="text" id="1"><input type="text" id="2"><input type="text" id="3"><br><br>
        </div>
        <button id="mat8$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="mat9" draggable="false">
    Matrix
    <span class="showvarname">
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="mat9$VAR" placeholder="Variable Name">
        <br>
        <label for="ROW">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat9$ROW" placeholder="Number of Rows">
        <br>
        <label for="COL">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat9$COL" placeholder="Number of Columns">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="matinput(prevSelection[0])">Generate
            Table</button>
        <br>
        <div class="matinps"></div>
        <button id="mat9$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="for10">
    For
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="START"> Enter the start value of Counter </label>
        <input type="text" name="" id="for10$START" placeholder="Start">
        <br>
        <label for="END"> Enter the end value of counter </label>
        <input type="text" name="" id="for10$END" placeholder="End">
        <br>
        <label for="STEP"> Enter the step value of counter</label>
        <input type="text" name="" value="" id="for10$STEP" placeholder="Step (Default 1)">
        <br>


        <button id="for10$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva11">
        Evaluate
        <span class="showvarname">

        </span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva11$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva11$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva11$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva12">
        Evaluate
        <span class="showvarname">
        </span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva12$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva12$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva12$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva13">
        Evaluate
        <span class="showvarname">
        </span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva13$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva13$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva13$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva15">
        Evaluate
        <span class="showvarname">
        </span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva15$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva15$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva15$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>
</div>



<div class="pl-3 pt-2 noselect selectable bordered-box" id="opb16">
    Output Block
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAL">Enter the value to output</label>
        <input type="text" name="" id="opb16$VAL" placeholder="Value">
        <br>
        <button id="opb16$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst17">
    Constant
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst17$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst17$VAL" placeholder="Value">
        <br>
        <button id="cst17$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst18">
    Constant
    <span class="showvarname">
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst18$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst18$VAL" placeholder="Value">
        <br>
        <button id="cst18$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst19">
    Constant
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst19$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst19$VAL" placeholder="Value">
        <br>
        <button id="cst19$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst20">
    Constant
    <span class="showvarname">
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst20$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst20$VAL" placeholder="Value">
        <br>
        <button id="cst20$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="whi21">
    While
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="OP1"> Enter the Operand 1</label>
        <input type="text" name="" id="whi21$OP1" placeholder="Operand One">
        <br>

        <label for="OP"> enter the operator </label>
        <select name="" id="whi21$OP">
            <option title="Greater Than" value=">">&gt;</option>
            <option title="Lesser Than" value="<">
                &lt; </option>
            <option title="Equals" value="==">=</option>
            <option title="Greater Than or Equal to" value=">=">≥</option>
            <option title="Lesser Than or Equal to" value="<=">≤</option>
            <option title="Not Equals" value="!=">≠</option>
        </select>
        <br>

        <label for="OP2"> enter the Operand 2 </label>
        <input type="text" name="" id="whi21$OP2" placeholder="Operand Two">
        <br>
        <button id="whi21$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="cst22">
        Constant
        <span class="showvarname">
        </span>
        <div class="details pb-2" style="display: none;">
            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="cst22$VAR" placeholder="Variable Name">
            <br>
            <label for="VAL">Enter the value</label>
            <input type="text" name="" id="cst22$VAL" placeholder="Value">
            <br>
            <button id="cst22$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="cst23">
        Constant
        <span class="showvarname">

        </span>
        <div class="details pb-2" style="display: none;">
            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="cst23$VAR" placeholder="Variable Name">
            <br>
            <label for="VAL">Enter the value</label>
            <input type="text" name="" id="cst23$VAL" placeholder="Value">
            <br>
            <button id="cst23$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva24">
        Evaluate
        <span class="showvarname">
        </span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva24$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva24$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva24$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva26">
        Evaluate
        <span class="showvarname">

        </span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva26$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva26$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva26$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="for28">
        For
        <span class="showvarname">

        </span>
        <div class="details pb-2" style="display: none;">
            <label for="START"> Enter the start value of Counter </label>
            <input type="text" name="" id="for28$START" placeholder="Start">
            <br>
            <label for="END"> Enter the end value of counter </label>
            <input type="text" name="" id="for28$END" placeholder="End">
            <br>
            <label for="STEP"> Enter the step value of counter</label>
            <input type="text" name="" value="" id="for28$STEP" placeholder="Step (Default 1)">
            <br>


            <button id="for28$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>

        <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva30">
            Evaluate
            <span class="showvarname">
            </span>
            <div class="details pb-2" style="display: none;">

                <label for="VAR">Enter the variable name</label>
                <input type="text" name="Variable" id="eva30$VAR" placeholder="Variable Name">
                <br>
                <label for="EVALUATE"> enter the expression to evaluate </label>
                <input type="text" name="" id="eva30$EVALUATE" placeholder="Evaluate/Math Operations">
                <br>
                <button id="eva30$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
            </div>
        </div>

        <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva31">
            Evaluate
            <span class="showvarname">
            </span>
            <div class="details pb-2" style="display: none;">

                <label for="VAR">Enter the variable name</label>
                <input type="text" name="Variable" id="eva31$VAR" placeholder="Variable Name">
                <br>
                <label for="EVALUATE"> enter the expression to evaluate </label>
                <input type="text" name="" id="eva31$EVALUATE" placeholder="Evaluate/Math Operations">
                <br>
                <button id="eva31$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
            </div>
        </div>

        <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva32">
            Evaluate
            <span class="showvarname">

            </span>
            <div class="details pb-2" style="display: none;">

                <label for="VAR">Enter the variable name</label>
                <input type="text" name="Variable" id="eva32$VAR" placeholder="Variable Name">
                <br>
                <label for="EVALUATE"> enter the expression to evaluate </label>
                <input type="text" name="" id="eva32$EVALUATE" placeholder="Evaluate/Math Operations">
                <br>
                <button id="eva32$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
            </div>
        </div>

        <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva33">
            Evaluate
            <span class="showvarname">

            </span>
            <div class="details pb-2" style="display: none;">

                <label for="VAR">Enter the variable name</label>
                <input type="text" name="Variable" id="eva33$VAR" placeholder="Variable Name">
                <br>
                <label for="EVALUATE"> enter the expression to evaluate </label>
                <input type="text" name="" id="eva33$EVALUATE" placeholder="Evaluate/Math Operations">
                <br>
                <button id="eva33$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
            </div>
        </div>




    </div>


    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva34" draggable="false">
        Evaluate
        <span class="showvarname">
        </span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva34$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva34$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva34$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>
    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva37" draggable="false">
        Evaluate
        <span class="showvarname">

        </span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva37$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva37$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva37$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="cst38">
    Constant
    <span class="showvarname">
        cost
    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="cst38$VAR" placeholder="Variable Name">
        <br>
        <label for="VAL">Enter the value</label>
        <input type="text" name="" id="cst38$VAL" placeholder="Value">
        <br>
        <button id="cst38$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="for39">
    For
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="START"> Enter the start value of Counter </label>
        <input type="text" name="" id="for39$START" placeholder="Start">
        <br>
        <label for="END"> Enter the end value of counter </label>
        <input type="text" name="" id="for39$END" placeholder="End">
        <br>
        <label for="STEP"> Enter the step value of counter</label>
        <input type="text" name="" value="" id="for39$STEP" placeholder="Step (Default 1)">
        <br>


        <button id="for39$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>

    <div class="pl-3 pt-2 noselect selectable bordered-box" id="eva40">
        Evaluate
        <span class="showvarname">
            cost
        </span>
        <div class="details pb-2" style="display: none;">

            <label for="VAR">Enter the variable name</label>
            <input type="text" name="Variable" id="eva40$VAR" placeholder="Variable Name">
            <br>
            <label for="EVALUATE"> enter the expression to evaluate </label>
            <input type="text" name="" id="eva40$EVALUATE" placeholder="Evaluate/Math Operations">
            <br>
            <button id="eva40$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
        </div>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="opb41" draggable="false">
    Output Block
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAL">Enter the value to output</label>
        <input type="text" name="" id="opb41$VAL" placeholder="Value">
        <br>
        <button id="opb41$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="mat42">
    Matrix
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAR">Enter the variable name</label>
        <input type="text" name="Variable" id="mat42$VAR" placeholder="Variable Name">
        <br>
        <label for="ROW">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat42$ROW" placeholder="Number of Rows">
        <br>
        <label for="COL">Enter the number of rows of the matrix</label>
        <input type="text" name="" id="mat42$COL" placeholder="Number of Columns">
        <br>
        <button id="" class="btn btn-custom-outline-brown" onclick="matinput(prevSelection[0])">Generate
            Table</button>
        <br>
        <div class="matinps"><input type="text" id="1"><input type="text" id="2"><br><br></div>
        <button id="mat42$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="opb43">
    Output Block
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAL">Enter the value to output</label>
        <input type="text" name="" id="opb43$VAL" placeholder="Value">
        <br>
        <button id="opb43$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="opb44">
    Output Block
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAL">Enter the value to output</label>
        <input type="text" name="" id="opb44$VAL" placeholder="Value">
        <br>
        <button id="opb44$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>

<div class="pl-3 pt-2 noselect selectable bordered-box" id="opb45">
    Output Block
    <span class="showvarname">

    </span>
    <div class="details pb-2" style="display: none;">
        <label for="VAL">Enter the value to output</label>
        <input type="text" name="" id="opb45$VAL" placeholder="Value">
        <br>
        <button id="opb45$OK" class="btn btn-custom-outline-brown" onclick="ok(event)"> Ok </button>
    </div>
</div>
    `
}
const prebuilt_code = jsonexp[2];

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
                let childs = ev.target.lastElementChild.getElementsByClassName("details")[0].children;

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
            let childs = document.getElementById("interface").lastElementChild;
            if (!["Break", "Continue"].includes(childs.textContent.trim()))
                childs = childs.getElementsByClassName("details")[0].children;

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
    let output;
    output = document.getElementById(block.id + "$" + "VAL").value;
    if (!output)
        output = "\n";
    return `console.log("output is",${output}); \n`;
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

    let maincode = "";
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
var sqrt = (num) => { return Math.sqrt(num); }
var Abs = (num) => { return Math.abs(num); }
var max = (num1, num2) => { return Math.max(num1, num2) }
var sort = (arr) => { return arr.sort() }

function prebuilt() {
    console.log("prebuilt");
    let interface = document.getElementById("interface");
    interface.innerHTML = "";

    interface.innerHTML = prebuilt_code;
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