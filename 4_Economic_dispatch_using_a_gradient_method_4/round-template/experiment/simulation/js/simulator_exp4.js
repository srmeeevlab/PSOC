
function Simulate() {

    let outputs = document.getElementById("OUTPUT")
    outputs.innerHTML = ""
    outputs.style.border = "0.25rem solid black"
    let heading = document.createElement("div")
    heading.innerHTML = "Results:"
    heading.style.fontWeight = "900"
    heading.id = "result"
    outputs.appendChild(heading)
    let alrtmsggiven = false;

    let costdata1 = []
    let costdtarr = document.getElementById("costdata").getElementsByClassName("matinps")[0].getElementsByTagName("input");
    Array.from(costdtarr).forEach(element => {
        if (!element.value || isNaN(element.value)) {
            if (!alrtmsggiven) {
                alert("matrix element value given is incorrect. setting to 1")
                alrtmsggiven = true
            }
            element.value = 1
        }
        costdata1.push(eval(element.value))
    });

    let columns = document.getElementById("costdatacol").value
    if (document.getElementById("costdatacol").disabled == false) {

        document.getElementById("costdatacol").value = 1
        columns = 1
    }
    if (!columns || isNaN(columns)) {
        alert("columns value given is incorrect. setting to 1 and proceeding")
        document.getElementById("costdatacol").value = 1
        columns = 1
    }
    columns = eval(columns)

    let costdata = [];

    while (costdata1.length) costdata.push(costdata1.splice(0, columns));


    let pd = document.getElementById("pd").value
    if (!pd || isNaN(pd)) {
        alert("pd value given is incorrect. setting to 1")
        document.getElementById("pd").value = 1
        pd = 1
    }
    pd = eval(pd)




    let P = []
    let Pdt = document.getElementById("P").getElementsByClassName("vecinps")[0].getElementsByTagName("input")
    alrtmsggiven = false
    Array.from(Pdt).forEach(element => {
        if (!element.value || isNaN(element.value)) {
            if (!alrtmsggiven) {
                alert("Vector element value given is incorrect. setting to 1 and proceeding")
                alrtmsggiven = true
            }
            element.value = 1
        }
        P.push(eval(element.value))
    });
    let sum1 = 0;
    for (let i in P) {
        sum1 += P[i];
    }
    let e = document.getElementById("e").value
    if (!e || isNaN(e)) {
        alert("e value given is incorrect. setting to 1")
        document.getElementById("e").value = 1
        e = 1
    }
    e = eval(e)
    let ng = costdata.length
    let delL = math.zeros(ng + 1)["_data"]
    let uno = math.zeros(ng)["_data"]
    let a = math.zeros(ng)["_data"]
    let b = math.zeros(ng)["_data"]
    let d = math.zeros(ng)["_data"]
    let lamda0 = math.zeros(ng)["_data"]
    let lamda = 0

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


    let k = 1
    let newps = []
    let newlambs = []
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


        newps.push(Array.from(P))
        newlambs.push(lambda)

    }

    console.log("newps", newps)
    let ans1 = document.createElement("div")
    ans1.style.marginBottom = "1rem"

    let rows=''

    for (let i = 0; i < newps.length; i++) {
        rows+= `<tr>
            <td rowspan="${newps[i].length}">${i+1}</td>
            <td rowspan="${newps[i].length}">${newlambs[i].toFixed(4)}</td>
            <td>${(newps[i][0].toFixed(4))}</td>
        </tr>`
        for (let j = 1; j < newps[i].length; j++) {
            rows+= `<tr>
                <td>${(newps[i][j].toFixed(4))}</td>
            </tr>`
        }
    }
    let tab1 = `
        <table>
            <thead>
                <th>Iteration No</th>
                <th>Lambda (Rs/hr)</th>
                <th>P (MW)</th>
            <thead>
            ${rows}
        </table>
    `

    ans1.innerHTML=tab1
    outputs.appendChild(ans1)



}
function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}
const degsToRads = deg => (deg * Math.PI) / 180.0;

const radsToDegs = rad => rad * 180 / Math.PI;

function vecinput() {
    let columns = document.getElementById("Pcols").value;
    if (columns > 10) {
        alert("matrix limit - 10. you have given " + columns + " setting columns to 10")
        document.getElementById("Pcols").value = 10
        columns = 10
    }
    let divblock = document.getElementById("P").getElementsByClassName("vecinps")[0];
    divblock.innerHTML = "";

    if (!columns || columns <= 0 || isNaN(columns)) {
        columns = 1
        document.getElementById("Pcols").value = 1
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
    if (columns > 10) {
        alert("matrix limit - 10x10. you have given " + rows + "x" + columns + " setting columns to 10")
        document.getElementById("costdatacol").value = 10
        columns = 10
    }
    if (rows > 10) {
        alert("matrix limit - 10x10. you have given " + rows + "x" + columns + " setting rows to 10")
        document.getElementById("costdatarow").value = 10
        rows = 10
    }
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

        for (let index = 0; index < columns; index++) {

            divblock.appendChild(document.createElement("input"));
            divblock.lastElementChild.type = "text";
            divblock.lastElementChild.id = inpcount;
            divblock.lastElementChild.classList.add('Margin_Addition');
            // console.log("ids are ", divblock.lastElementChild.classList)
            inpcount++;

        }
        divblock.appendChild(document.createElement("br"))
        divblock.appendChild(document.createElement("br"))
    }

}
