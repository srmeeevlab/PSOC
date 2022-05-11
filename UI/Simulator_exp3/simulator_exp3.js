// const math = require('mathjs')

function Simulate() {

    //Exp no.6: economic dispatch problem(without limits and with loss)
    //pd = input ('Total Load Requirement (in MW) \n'); % Total Demand
    let pd = document.getElementById("pd").value
    pd = eval(pd)
    console.log("pd",pd,typeof pd)

    //Format for costdata Input: [ Unit_no a(i) b(i) d(i)]
    //Data of each unit needs to be entered as a new row
    let costdata1 =[]
    let costdtarr = document.getElementById("costdata").getElementsByClassName("matinps")[0].getElementsByTagName("input");
    Array.from(costdtarr).forEach(element => {
        costdata1.push(eval(element.value))
    });

    let columns = document.getElementById("costdatacol").value
    columns = eval(columns)
    let costdata = [];

    while (costdata1.length) costdata.push(costdata1.splice(0, columns));
    console.log("costdata",costdata,typeof costdata)
    
    //Enter the values of B coefficient
    let lossdata = []
    let lossdt = document.getElementById("lossdata").getElementsByClassName("vecinps")[0].getElementsByTagName("input")
    Array.from(lossdt).forEach(element => {
        lossdata.push(eval(element.value))
    });

    let ng = costdata.length
    let uno = math.zeros(ng)["_data"]
    let a = math.zeros(ng)["_data"]
    let b = math.zeros(ng)["_data"]
    let d = math.zeros(ng)["_data"]
    let p = math.zeros(ng)["_data"]
    let den = math.zeros(ng)["_data"]
    let l = math.zeros(ng)["_data"]
    let ifc = math.zeros(ng)["_data"]

    // console.log("uno",uno)
    let pl = 0
    let sum = 0
    let delpla = 0
    for (i = 0; i < ng; i++) {
        uno[i] = costdata[i][0]
        a[i] = costdata[i][1]
        b[i] = costdata[i][2]
        d[i] = costdata[i][3]
    }
    let lambda = document.getElementById("lambda").value
    let delp = document.getElementById("delp").value // power mismatch 0.1 MW allowed PG=PD+PL
    let dellambda = document.getElementById("dellambda").value // Del lambda =0

    lambda = eval(lambda)
    delp = eval(delp)
    dellambda = eval(dellambda)

    let totgencost = 0
    let B = math.zeros(ng)["_data"]
    for (i = 0; i < ng; i++) {
        B[i] = lossdata[i]
    }
    let iter = 0
    let data_disp = [] //empty data set
    while (Math.abs(delp) >= 0.001) {
        iter = iter + 1
        lambda = lambda + dellambda
        pl = 0
        sum = 0
        delpla = 0
        for (i = 0; i < ng; i++) {
            den = 2 * (d[i] + lambda * B[i] * 0.01)
            p[i] = (lambda - b[i]) / den
            pl = pl + B[i] * 0.01 * p[i] * p[i]
            sum = sum + p[i]
        }
        delp = pd + pl - sum
        for (i = 0; i < ng; i++) {
            den = (2 * (d[i] + lambda * B[i] * 0.01)) ** 2
            delpla = delpla + (d[i] + B[i] * 0.01 * b[i]) / den
        }
        dellambda = delp / delpla
        data_disp = data_disp.concat(iter, lambda, p[0], p[1], pl);
    }

    console.log('\n**Iteration-wise Output**\n')
    console.log(data_disp)
    for (i = 0; i < ng; i++) {
        den = 1 - B[i] * p[i] * 2 * 0.01
        l[i] = 1 / den
    }
    for (i = 0; i < ng; i++) {
        totgencost = totgencost + a[i] + b[i] * p[i] + d[i] * p[i] * p[i]
        ifc[i] = 2 * d[i] * p[i] + b[i]
    }

    opt_gen = [uno, p]
    ifc_pf = [uno, ifc, l]
    console.log('\n***Output of Economic Dispatch Problem***\n')
    console.log('\n Lambda - %6.4f\n', lambda)
    console.log('\n**Optimal Generation**\n')
    console.log('   Unit No  Optimal Generation (in MW) ')
    console.log(opt_gen)
    console.log('\nIncremental Fuel Cost and Penalty factors are:\n')
    console.log('    Unit No    IFC     Penalty Factor ')
    console.log(ifc_pf)
    console.log('\nTotal Generation Cost = INR %6.2f per hour\n', totgencost)
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
    ans1.innerHTML = "Output of Economic Dispatch Problem Lambda -" + lambda.toFixed(2) + " unit"
    ans2.innerHTML = '**Optimal Generation** Unit No  Optimal Generation (in MW)' +opt_gen+ ' unit'
    ans3.innerHTML = 'Incremental Fuel Cost and Penalty factors are:     Unit No    IFC     Penalty Factor ' +ifc_pf+ ' unit'
    ans4.innerHTML = 'Total Generation Cost = INR  ' +totgencost.toFixed(2)+ ' per hour'
    ans1.style.marginBottom = "1rem"
    ans2.style.marginBottom = "1rem"
    ans3.style.marginBottom = "1rem"
    ans3.style.maxWidth = "100%"
    ans4.style.marginBottom = "1rem"
    outputs.appendChild(ans1)
    outputs.appendChild(ans2)
    outputs.appendChild(ans3)
    outputs.appendChild(ans4)
    //End of Program

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
