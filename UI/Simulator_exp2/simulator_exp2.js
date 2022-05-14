function Simulate() {

    let pd = document.getElementById("pd").value
    pd = eval(pd)
    console.log("pd", pd, typeof pd)
    if (!pd || isNaN(pd)) {
        alert("pd value given is incorrect. setting to 1")
        document.getElementById("pd").value = 1
        pd = 1
    }


    //Format for costdata Input: [ Unit_no a(i) b(i) d(i)]
    //Data of each unit needs to be entered as a new row
    let costdata1 = []
    let costdtarr = document.getElementById("costdata").getElementsByClassName("matinps")[0].getElementsByTagName("input");
    Array.from(costdtarr).forEach(element => {
        costdata1.push(eval(element.value))
        if (!element.value || isNaN(element.value)) {
            alert("matrix element value given is incorrect. setting to 1")
            element.value = 1
        }
    });

    let columns = document.getElementById("costdatacol").value
    columns = eval(columns)
    let costdata = [];

    while (costdata1.length) costdata.push(costdata1.splice(0, columns));
    console.log("costdata", costdata, typeof costdata)

    let ng = costdata.length
    let uno = math.zeros(ng)["_data"]
    let a = math.zeros(ng)["_data"]
    let b = math.zeros(ng)["_data"]
    let c = math.zeros(ng)["_data"]
    let p = math.zeros(ng)["_data"]
    let ifc = math.zeros(ng)["_data"]

    for (i = 0; i < ng; i++) {
        uno[i] = costdata[i][0]
        a[i] = costdata[i][1]
        b[i] = costdata[i][2]
        c[i] = costdata[i][3]
    }
    let lambda = document.getElementById("lambda").value
    let delp = document.getElementById("delp").value // power mismatch 0.1 MW allowed PG=PD+PL
    let dellambda = document.getElementById("dellambda").value // Del lambda =0

    lambda = eval(lambda)
    delp = eval(delp)
    dellambda = eval(dellambda)
    let iter = 0

    while (delp >= 0.001) {
        let sum = 0;
        let totgam = 0;
        iter = iter + 1;
        lambda = lambda + dellambda;

        for (i = 0; i < 3; i++) {
            p[i] = (lambda - b[i]) / (2 * a[i]); //calculating individual power generation
            sum = sum + p[i]; //sum of power generation
            totgam = totgam + 0.5 * (1 / a[i]); //calculation of (1/2a[i]);
            ifc[i] = lambda; //incremental fuel cost (df/dPi)
        }
        delp = pd - sum;
        dellambda = delp / totgam; //dellambda=(PD-sum(PGEN))/2Ci
    }
    let totgencost = 0
    for (i = 0; i < ng; i++) {

        totgencost = totgencost + (a[i] * p[i] * p[i]) + (b[i] * p[i]) + c[i];
    }
    console.log(lambda)
    for (let i = 0; i < p.length; i++) {
        p[i] = p[i].toFixed(2)
    }
    for (let i = 0; i < ifc.length; i++) {
        ifc[i] = ifc[i].toFixed(2)
    }
    let opt_gen = [uno, p];
    //output display
    //Lambda
    //Unit No    Optimal Generation
    console.log(opt_gen)
    //Incremental Fuel Cost
    console.log(ifc[0])
    //Total Generation Cost
    console.log(totgencost)
    let outputs = document.getElementById("OUTPUT")
    outputs.style.border = "0.25rem solid black"
    let heading = document.createElement("div")
    heading.innerHTML = "Results:"
    heading.style.fontWeight = "900"
    heading.id = "result"
    outputs.appendChild(heading)
    let ans2 = document.createElement("div")
    let ans1 = document.createElement("div")
    let ans3 = document.createElement("div")
    let ans4 = document.createElement("div")
    ans1.innerHTML = "Output of Economic Dispatch Problem Lambda is " + lambda.toFixed(2) + " unit"
    ans2.innerHTML = '**Optimal Generation** Unit No  Optimal Generation (in MW)' + opt_gen + ' unit'
    ans3.innerHTML = 'Incremental Fuel Cost and Penalty factors are:     Unit No    IFC     Penalty Factor ' + ifc[0] + ' unit'
    ans4.innerHTML = 'Total Generation Cost = INR  ' + totgencost.toFixed(2) + ' per hour'
    ans1.style.marginBottom = "1rem"
    ans2.style.marginBottom = "1rem"
    ans3.style.marginBottom = "1rem"
    ans3.style.maxWidth = "100%"
    ans4.style.marginBottom = "1rem"
    outputs.appendChild(ans1)
    outputs.appendChild(ans2)
    outputs.appendChild(ans3)
    outputs.appendChild(ans4)



}

function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}
const degsToRads = deg => (deg * Math.PI) / 180.0;

const radsToDegs = rad => rad * 180 / Math.PI;

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
            divblock.lastElementChild.classList.add('Margin_Addition');
            console.log("ids are ", divblock.lastElementChild.classList)
            inpcount++;

        }
        divblock.appendChild(document.createElement("br"))
        divblock.appendChild(document.createElement("br"))
    }

}
