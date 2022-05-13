function Simulate() {

    let c11 = []
    let costdtarr = document.getElementById("c1").getElementsByClassName("matinps")[0].getElementsByTagName("input");
    Array.from(costdtarr).forEach(element => {
        if (!element.value || isNaN(element.value)) {
            alert("matrix element value given is incorrect. setting to 1")
            element.value = 1
        }
        c11.push(eval(element.value))
    });

    let columns = document.getElementById("costdatacol").value
    if (!columns || isNaN(columns)) {
        alert("columns value given is incorrect. setting to 1 and proceeding")
        document.getElementById("costdatacol").value = 1
        columns = 1
    }
    columns = eval(columns)
    let c1 = []
    while (c11.length) c1.push(c11.splice(0, columns));
    console.log("c1", c1, typeof c1)

    //Enter the values of B coefficient
    let Pmax = []
    let Pm = document.getElementById("Pmax").getElementsByClassName("vecinps")[0].getElementsByTagName("input")
    Array.from(Pm).forEach(element => {
        if (!element.value || isNaN(element.value)) {
            alert("Vector element value given is incorrect. setting to 1 and proceeding")
            element.value = 1
        }
        Pmax.push(eval(element.value))
    });

    console.log(c1)
    let FLAPC = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ]

    let m = c1.length
    let n = c1[0].length
    console.log(m)
    console.log(n)
    for (let ii = 0; ii < m; ii++) {
        FLAPC[ii] =
            (c1[ii][0] * (Pmax[ii] * Pmax[ii]) + c1[ii][1] * Pmax[ii] + c1[ii][2]) /
            Pmax[ii]
    }
    console.log(FLAPC)
    let PriorityOrder = [0, 0, 0]
    let IX = [0, 0, 0]
    for (let i = 0; i < 3; i++) {
        IX[i] = FLAPC.indexOf(FLAPC[i])
    }
    PriorityOrder = math.sort(FLAPC)
    console.log(FLAPC)
    console.log(IX)

    let PD = document.getElementById("PD").value
    if (!PD || isNaN(PD)) {
        alert("pd value given is incorrect. setting to 1")
        document.getElementById("PD").value = 1
        PD = 1
    }
    PD = eval(PD)

    if (PD <= Pmax[0]) console.log('The committed unit no. is: %d \n', IX[0])
    else if (PD > Pmax[0] && PD < Pmax[0] + Pmax[1])
        console.log('The committed unit nos. order are: %d, %d \n', IX[0], IX[1])
    else if (PD >= math.sum(Pmax)) {
        console.log(
            'The committed unit nos. order are: %d, %d, %d \n',
            IX[0],
            IX[1],
            IX[2],
        )
    }

    let outputs = document.getElementById("OUTPUT")
    outputs.innerHTML = ""
    outputs.style.border = "0.25rem solid black"
    let heading = document.createElement("div")
    heading.innerHTML = "Results:"
    heading.style.fontWeight = "900"
    heading.id = "result"
    outputs.appendChild(heading)
    let ans2 = document.createElement("div")
    let ans1 = document.createElement("div")
    ans1.innerHTML = "Printing the unit commitment schedule for the given load demand"
    if (PD <= Pmax[0]) {

        ans2.innerHTML = "The committed unit no. is:" + IX[0]
    } else if (PD > Pmax[0] && PD < Pmax[0] + Pmax[1]) {

        ans2.innerHTML = 'The committed unit numbers order are:' + IX[0] + ', ' + IX[1]
    } else if (PD >= math.sum(Pmax)) {

        ans2.innerHTML = "The committed unit numbers order are:" + IX[0] + ', ' + IX[1] + ', ' + IX[2]
    }
    ans1.style.marginBottom = "1rem"
    ans2.style.marginBottom = "1rem"
    outputs.appendChild(ans1)
    outputs.appendChild(ans2)
}

function vecinput() {
    let columns = document.getElementById("lossdatacols").value;
    let divblock = document.getElementById("lossdata").getElementsByClassName("vecinps")[0];
    divblock.innerHTML = "";
    // if (!columns || columns < 0) {
    //     alert("Invalid input");
    //     block.classList.add("error_block");
    //     prevSelection.push(block);
    //     showprops();
    //     throw 0;
    // }
    if (!columns || columns <= 0 || isNaN(columns)) {
        columns = 1
        document.getElementById("lossdatacols").value = 1
    }
    let inpcount = 1;
    for (let index = 0; index < columns; index++) {
        divblock.appendChild(document.createElement("input"));
        divblock.lastElementChild.type = "text";
        divblock.lastElementChild.id = inpcount;
        inpcount++;
    }

}

function matinput() {
    let rows, columns;
    rows = document.getElementById("costdatarow").value;
    columns = document.getElementById("costdatacol").value;
    let divblock = document.getElementById("costdata").getElementsByClassName("matinps")[0];
    divblock.innerHTML = "";
    if (!rows || !columns) {
        rows = 1
        document.getElementById("costdatarow").value = 1
        if (document.getElementById("costdatacol").disabled == false) {

            document.getElementById("costdatacol").value = 1
            columns = 1
        }
    }
    if (rows <= 1) {

        document.getElementById("costdatarow").value = 1
    }
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        if (isNaN(rows)) {
            document.getElementById("costdatarow").value = 1
        }
        if (isNaN(columns) && document.getElementById("costdatacol").disabled == false) {
            document.getElementById("costdatacol").value = 1
            columns = 1
        }
        rows = 1
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