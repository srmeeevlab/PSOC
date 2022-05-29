
startInteraction(data[0]);
function Simulate() {

    
    let pd = document.getElementById("pd").value
    if(!pd || isNaN(pd)){
        alert("pd value given is incorrect. setting to 1")
        document.getElementById("pd").value = 1
        pd = 1
    }
    pd = eval(pd)
    console.log("pd",pd,typeof pd)

    
    let costdata1 =[]
    let costdtarr = document.getElementById("costdata").getElementsByClassName("matinps")[0].getElementsByTagName("input");
    let alrtmsggiven = false
    Array.from(costdtarr).forEach(element => {
        if (document.getElementById("costdatacol").disabled == false) {

            document.getElementById("costdatacol").value = 1
            columns = 1
        }

        if(!element.value || isNaN(element.value)){
            if(!alrtmsggiven){
                alert("matrix element value given is incorrect. setting to 1")
                alrtmsggiven = true;
            }
            element.value = 1
        }
        costdata1.push(eval(element.value))
        
    });


    let columns = document.getElementById("costdatacol").value
    
    if(!columns || isNaN(columns)){
        alert("columns value given is incorrect. setting to 1 and proceeding")
        document.getElementById("costdatacol").value = 1
        columns = 1
    }
    
    columns = eval(columns)

    let costdata = [];

    while (costdata1.length) costdata.push(costdata1.splice(0, columns));
    console.log("costdata",costdata,typeof costdata)
    
    
    let lossdata = []
    let lossdt = document.getElementById("lossdata").getElementsByClassName("vecinps")[0].getElementsByTagName("input")
    alrtmsggiven = false
    Array.from(lossdt).forEach(element => {
        if(!element.value || isNaN(element.value)){
            if(!alrtmsggiven){
                alert("Vector element value given is incorrect. setting to 1 and proceeding")
                alrtmsggiven = true
            }
            element.value = 1
        }
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
    if(!lambda || isNaN(lambda)){
        alert("lambda value given is incorrect. setting to 1")
        document.getElementById("lambda").value = 1
        lambda = 1
    }
    if(!delp || isNaN(delp)){
        alert("delp value given is incorrect. setting to 1")
        document.getElementById("delp").value = 1
        delp = 1
    }
    if(!dellambda || isNaN(dellambda)){
        alert("dellambda value given is incorrect. setting to 0")
        document.getElementById("dellambda").value = 0
        dellambda = 0
    }
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
        data_disp.push([iter,lambda,p[0],p[1],pl])
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
    outputs.innerHTML = ""
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
    opt_gen = opt_gen.flat()
    for (let idx = 0; idx < opt_gen.length; idx++) {
        opt_gen[idx]= opt_gen[idx].toFixed(2);
        
    }
    ifc_pf = ifc_pf.flat()
    for (let idx = 0; idx < ifc_pf.length; idx++) {
        ifc_pf[idx]= ifc_pf[idx].toFixed(2);
        
    }
    ans1.innerHTML = "Output of Economic Dispatch Problem Lambda -" + lambda.toFixed(2) + " unit"
    ans2.innerHTML = '**Optimal Generation** Unit No  Optimal Generation (in MW) ' +opt_gen+ ' unit'
    ans3.innerHTML = 'Incremental Fuel Cost and Penalty factors are:     Unit No    IFC     Penalty Factor ' +ifc_pf+ ' unit'
    ans4.innerHTML = 'Total Generation Cost = INR  ' +totgencost+ ' per hour'
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
    if(columns>10){
        alert("matrix limit - 10. you have given "+columns +" setting columns to 10")
        document.getElementById("lossdatacols").value = 10
        columns=10
    }

    let divblock = document.getElementById("lossdata").getElementsByClassName("vecinps")[0];
    divblock.innerHTML = "";

    if (!columns || columns <= 0 || isNaN(columns)) {
        columns = 1
        document.getElementById("lossdatacols").value = 1
    }
    let inpcount = 1;
    for (let index = 0; index < columns; index++) {
        divblock.appendChild(document.createElement("input"));
        divblock.lastElementChild.classList.add('Margin_Add');
        divblock.lastElementChild.type = "text";
        divblock.lastElementChild.id = inpcount;
        inpcount++;
    }

}

function matinput() {
    let rows, columns;
    rows = document.getElementById("costdatarow").value;
    columns = document.getElementById("costdatacol").value;
    if(columns>10){
        alert("matrix limit - 10x10. you have given "+rows+"x"+columns +" setting columns to 10")
        document.getElementById("costdatacol").value = 10
        columns=10
    }
    if(rows>10){
        alert("matrix limit - 10x10. you have given "+rows+"x"+columns +" setting rows to 10")
        document.getElementById("costdatarow").value = 10
        rows=10
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
            console.log("ids are ", divblock.lastElementChild.classList)
            inpcount++;

        }
        divblock.appendChild(document.createElement("br"))
        divblock.appendChild(document.createElement("br"))
    }

}
