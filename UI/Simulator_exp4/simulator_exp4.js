// const math = require('mathjs')

function Simulate() {

    let outputs = document.getElementById("OUTPUT")
    outputs.innerHTML = ""
    outputs.style.border = "0.25rem solid black"
    let heading = document.createElement("div")
    heading.innerHTML = "Results:"
    heading.style.fontWeight = "900"
    heading.id = "result"
    outputs.appendChild(heading)

    //Exp no.6: economic dispatch problem(without limits and with loss)
    //pd = input ('Total Load Requirement (in MW) \n'); % Total Demand
    //Format for costdata Input: [ Unit_no a(i) b(i) d(i)]
    //Data of each unit needs to be entered as a new row
    let costdata1 = []
    let costdtarr = document.getElementById("costdata").getElementsByClassName("matinps")[0].getElementsByTagName("input");
    Array.from(costdtarr).forEach(element => {
        if (!element.value || isNaN(element.value)) {
            alert("matrix element value given is incorrect. setting to 1")
            element.value = 1
        }
        costdata1.push(eval(element.value))
    });

    let columns = document.getElementById("costdatacol").value
    if (!columns || isNaN(columns)) {
        alert("columns value given is incorrect. setting to 1 and proceeding")
        document.getElementById("costdatacol").value = 1
        columns = 1
    }
    columns = eval(columns)

    let costdata = [];

    while (costdata1.length) costdata.push(costdata1.splice(0, columns));
    console.log("costdata", costdata, typeof costdata)


    let pd = document.getElementById("pd").value
    if (!pd || isNaN(pd)) {
        alert("pd value given is incorrect. setting to 1")
        document.getElementById("pd").value = 1
        pd = 1
    }
    pd = eval(pd)
    console.log("pd", pd, typeof pd)



    //Enter the values of B coefficient
    let P = []
    let Pdt = document.getElementById("P").getElementsByClassName("vecinps")[0].getElementsByTagName("input")
    Array.from(Pdt).forEach(element => {
        if (!element.value || isNaN(element.value)) {
            alert("Vector element value given is incorrect. setting to 1 and proceeding")
            element.value = 1
        }
        P.push(eval(element.value))
    });
    let sum1 = 0;
    for (let i in P) {
        sum1 += P[i];
    }
    let e = document.getElementById("e").value

    let ng = costdata.length
    let delL = math.zeros(ng+1)["_data"]
    let uno = math.zeros(ng)["_data"]
    let a = math.zeros(ng)["_data"]
    let b = math.zeros(ng)["_data"]
    let d = math.zeros(ng)["_data"]
    let lamda0 = math.zeros(ng)["_data"]
    let lamda =0

    let p = math.zeros(ng)["_data"]
    let den = math.zeros(ng)["_data"]
    let l = math.zeros(ng)["_data"]
    let ifc = math.zeros(ng)["_data"]
    for (i = 0; i < ng; i++) {
        uno[i] = costdata[i][0]
        a[i] = costdata[i][1]
        b[i] = costdata[i][2]
        d[i] = costdata[i][3]
    }
    // console.log("uno",uno)
   
    let k=1
    // let tol=3
    // let itr=0;
    for (k = 1; k <= 6; k++) {
        for (let i = 0; i < ng; i++) {
            lamda0[i] = 2 * d[i] * P[i] + b[i];
        }
    
        let sum = 0;
        let count = lamda0.length;
    
        for (let idx = 0; idx < count; idx++) {
            sum += lamda0[idx];
        }
        lambda = sum / count;
        
        for (i = 0; i < ng; i++) {
            delL[i] = lamda0[i] - lambda;
        }
        delL[ng + 1] = pd - sum1;
        for (i = 0; i < ng; i++) {
            P[i] = P[i] - (e * delL[i]);
        }
        let balance = 0;
        let tol = 0;
        balance = pd - sum1;
        tol = balance;
        // console.log("===========")
        console.log(k.toFixed(2));
        // console.log(P[0].toFixed(2),P[1].toFixed(2),P[2].toFixed(2));
        console.log(P)
        console.log(lambda.toFixed(2));
        // console.log("===========")
        for (let idx = 0; idx < P.length; idx++) {
            // const element = P[idx];
            P[idx] = P[idx].toFixed(2)
            
        }
        let ans2 = document.createElement("div")
        let ans1 = document.createElement("div")
        let ans3 = document.createElement("div")
        // let ans4 = document.createElement("div")
        ans1.innerHTML = "k - " + k.toFixed(2) + " unit"
        ans2.innerHTML = 'P- ' + P + ' unit'
        ans3.innerHTML = 'lambda - ' + lambda.toFixed(2) + ' unit'
        // ans4.innerHTML = 'Total Generation Cost = INR  ' + totgencost.toFixed(2) + ' per hour'
        ans1.style.marginBottom = "1rem"
        ans2.style.marginBottom = "1rem"
        ans3.style.marginBottom = "1rem"
        // ans4.style.marginBottom = "1rem"
        // ans3.style.maxWidth = "100%"
        outputs.appendChild(ans1)
        outputs.appendChild(ans2)
        outputs.appendChild(ans3)
        outputs.appendChild(document.createElement("br"))
    }


    
    //End of Program

}
function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}
const degsToRads = deg => (deg * Math.PI) / 180.0;

const radsToDegs = rad => rad * 180 / Math.PI;

function vecinput() {
    let columns = document.getElementById("Pcols").value;
    let divblock = document.getElementById("P").getElementsByClassName("vecinps")[0];
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
        columns = 1
        document.getElementById("costdatarow").value = 1
        document.getElementById("costdatacol").value = 1
    }
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        if (isNaN(rows)) {
            document.getElementById("costdatarow").value = 1
        }
        if (isNaN(columns)) {
            document.getElementById("costdatacol").value = 1
        }
        rows = 1
        columns = 1
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
