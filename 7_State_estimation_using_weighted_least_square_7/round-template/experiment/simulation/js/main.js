const _c = (r,i=0)=>{
    return math.complex(r,i);
};
const createBusdata = (busdataMatrix)=>{
    return busdataMatrix;
};
const addRowBusData = ()=>{
    const el = document.getElementById("busDataTable");
    const length = el.querySelectorAll("tr").length;
    const newRow = document.createElement("tr");
    const id=length+1;
    newRow.innerHTML = `
    <td>
        <div>
            <label class="visually-hidden" for="sno-${id}">value for row ${id} column 1</label>
            <input class="col-6" disabled name="Bus Data: row ${id} column 1" id="sno-${id}" type="number" min="-Infinity" max="Infinity" value=${id}>
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="fb-${id}">value for row ${id} column 2</label>
            <input class="col-6 bus" id="fb-${id}" name="Bus Data: row ${id} column 2" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="tb-${id}">value for row ${id} column 3</label>
            <input class="col-6 bus" id="tb-${id}" name="Bus Data: row ${id} column 3" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="r-${id}">value for row ${id} column 4 Real part</label>
            <input class="col-4" id="r-${id}" name="Bus Data: row ${id} column 4 Real part" type="number" min="-Infinity" max="Infinity">
        +
            <label class="visually-hidden" for="x-${id}">value for row ${id} column 4 Imaginary Part</label>
            <input class="col-4" id="x-${id}" name="Bus Data: row ${id} column 4 Imaginary part" type="number" min="-Infinity" max="Infinity">
            i
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="lca-${id}">value for row ${id} column 5</label>
            <input class="col-6" id="lca-${id}" name="Bus Data: row ${id} column 5" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="tr-${id}">value for row ${id} column 6</label>
            <input class="col-6" id="tr-${id}" name="Bus Data: row ${id} column 6" type="number" min="0" max="1">
        </div>
    </td>`
    el.appendChild(newRow);
    
};
const addRowAP = ()=>{
    const el = document.getElementById("apDataTable");
    const length = el.querySelectorAll("tr").length;
    const newRow = document.createElement("tr");
    const id=length+1;
    newRow.innerHTML = `
    <td>
        <div>
            <label class="visually-hidden" for="ap-sb-${id}">value for row ${id} column 1</label>
            <input class="col-6 bus" id="ap-sb-${id}" name="Active power flow: row ${id} column 1" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="ap-rb-${id}">value for row ${id} column 2</label>
            <input class="col-6 bus" id="ap-rb-${id}" name="Active power flow: row ${id} column 2" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="ap-p-${id}">value for row ${id} column 3</label>
            <input class="col-6" id="ap-p-${id}" name="Active power flow: row ${id} column 3" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="ap-r-${id}">value for row ${id} column 4 Real part</label>
            <input class="col-4" id="ap-r-${id}" name="Active power flow: row ${id} column 4" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>`
    el.appendChild(newRow);
    updateResistanceMatrix("inc");
};
const addRowAPI = ()=>{
    const el = document.getElementById("apiDataTable");
    const length = el.querySelectorAll("tr").length;
    const newRow = document.createElement("tr");
    const id=length+1;
    newRow.innerHTML = `
    <td>
        <div>
            <label class="visually-hidden" for="api-b-${id}">value for row ${id} column 1</label>
            <input class="col-6 bus" id="api-b-${id}" name="Active power injection: row ${id} column 1" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="api-p-${id}">value for row ${id} column 2</label>
            <input class="col-6" id="api-p-${id}" name="Active power injection: row ${id} column 2" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="api-r-${id}">value for row ${id} column 3t</label>
            <input class="col-4" id="api-r-${id}" name="Active power injection: row ${id} column 3" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>`
    el.appendChild(newRow);
    updateResistanceMatrix("inc");
    
};
const addRowRP = ()=>{
    const el = document.getElementById("rpDataTable");
    const length = el.querySelectorAll("tr").length;
    const newRow = document.createElement("tr");
    const id=length+1;
    newRow.innerHTML = `
    <td>
        <div>
            <label class="visually-hidden" for="rp-sb-${id}">value for row ${id} column 1</label>
            <input class="col-6 bus" name="Rective power injection: row ${id} column 1" id="rp-sb-${id}" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="rp-rb-${id}">value for row ${id} column 2</label>
            <input class="col-6 bus" name="Rective power injection: row ${id} column 2" id="rp-rb-${id}" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="rp-q-${id}">value for row ${id} column 3</label>
            <input class="col-6" name="Rective power injection: row ${id} column 3" id="rp-q-${id}" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="rp-r-${id}">value for row ${id} column 4</label>
            <input class="col-4" name="Rective power injection: row ${id} column 4" id="rp-r-${id}" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>`
    el.appendChild(newRow);
    updateResistanceMatrix("inc");
    
};
const addRowRPI = ()=>{
    const el = document.getElementById("rpiDataTable");
    const length = el.querySelectorAll("tr").length;
    const newRow = document.createElement("tr");
    const id=length+1;
    newRow.innerHTML = `
    <td>
        <div>
            <label class="visually-hidden" for="rpi-b-${id}">value for row ${id} column 1</label>
            <input class="col-6 bus"  id="rpi-b-${id}" name="Reactive power injection: row ${id} column 1" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="rpi-q-${id}">value for row ${id} column 2</label>
            <input class="col-6" id="rpi-q-${id}"  name="Reactive power injection: row ${id} column 2" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="rpi-r-${id}">value for row ${id} column 3</label>
            <input class="col-4" id="rpi-r-${id}"  name="Reactive power injection: row ${id} column 3" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>`
    el.appendChild(newRow);
    updateResistanceMatrix("inc");
    
};
const addRowV = ()=>{
    const el = document.getElementById("VDataTable");
    const length = el.querySelectorAll("tr").length;
    const newRow = document.createElement("tr");
    const id=length+1;
    newRow.innerHTML = `
    <td>
        <div>
            <label class="visually-hidden" for="v-b-${id}">value for row ${id} column 1</label>
            <input class="col-6 bus" id="v-b-${id}"  name="Voltage at Bus: row ${id} column 1" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="v-vmag-${id}">value for row ${id} column 2</label>
            <input class="col-6" id="v-vmag-${id}" name="Voltage at Bus: row ${id} column 2" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="v-r-${id}">value for row ${id} column 3 Real part</label>
            <input class="col-4" id="v-r-${id}" name="Voltage at Bus: row ${id} column 3" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>`
    el.appendChild(newRow);
    updateResistanceMatrix("inc");
};
const addRowShunt = ()=>{
    const el = document.getElementById("shuntDataTable");
    const length = el.querySelectorAll("tr").length;
    const newRow = document.createElement("tr");
    const id=length+1;
    newRow.innerHTML = `
    <td>
        <div>
            <label class="visually-hidden" for="shunt-sno-${id}">value for row ${id} column 1</label>
            <input class="col-6" disabled name="Shunt Data: row ${id} column 1" id="shunt-sno-${id}" type="number" min="-Infinity" max="Infinity" value=${id}>
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="shunt-bus-${id}">value for row ${id} column 2</label>
            <input class="col-6 bus" id="shunt-bus-${id}" name="Shunt Data: row ${id} column 2" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>
    <td>
        <div>
            <label class="visually-hidden" for="shunt-admittance-${id}">value for row ${id} column 3</label>
            <input class="col-6" id="shunt-admittance-${id}" name="Shunt Data: row ${id} column 3" type="number" min="-Infinity" max="Infinity">
        </div>
    </td>`
    el.appendChild(newRow);
    updateResistanceMatrix("inc");
};
const deleteRowBusData = ()=>{
    const el = document.getElementById("busDataTable");
    const length = el.querySelectorAll("tr").length;
    if(length === 0){
        alert("Add someting before you could delete!");
        return;
    }
    el.removeChild(el.querySelectorAll("tr")[length-1]);
};
const deleteRowAP = ()=>{
    const el = document.getElementById("apDataTable");
    const length = el.querySelectorAll("tr").length;
    if(length === 0){
        alert("Add someting before you could delete!");
        return;
    }
    el.removeChild(el.querySelectorAll("tr")[length-1]);
    updateResistanceMatrix("dec");
};
const deleteRowAPI = ()=>{
    const el = document.getElementById("apiDataTable");
    const length = el.querySelectorAll("tr").length;
    if(length === 0){
        alert("Add someting before you could delete!");
        return;
    }
    el.removeChild(el.querySelectorAll("tr")[length-1]);
    updateResistanceMatrix("dec");
};
const deleteRowRP = ()=>{
    const el = document.getElementById("rpDataTable");
    const length = el.querySelectorAll("tr").length;
    if(length === 0){
        alert("Add someting before you could delete!");
        return;
    }
    el.removeChild(el.querySelectorAll("tr")[length-1]);
    updateResistanceMatrix("dec");
};
const deleteRowRPI = ()=>{
    const el = document.getElementById("rpiDataTable");
    const length = el.querySelectorAll("tr").length;
    if(length === 0){
        alert("Add someting before you could delete!");
        return;
    }
    el.removeChild(el.querySelectorAll("tr")[length-1]);
    updateResistanceMatrix("dec");
};
const deleteRowV = ()=>{
    const el = document.getElementById("VDataTable");
    const length = el.querySelectorAll("tr").length;
    if(length === 0){
        alert("Add someting before you could delete!");
        return;
    }
    el.removeChild(el.querySelectorAll("tr")[length-1]);
    updateResistanceMatrix("dec");
};
const deleteRowShunt = ()=>{
    const el = document.getElementById("shuntDataTable");
    const length = el.querySelectorAll("tr").length;
    if(length === 0){
        alert("Add someting before you could delete!");
        return;
    }
    el.removeChild(el.querySelectorAll("tr")[length-1]);
    updateResistanceMatrix("dec");
};
const getValue = (id)=>{
    // ////console.log("id is ",id)
    const el = document.getElementById(id);
    // //console.log(el)
    const val = el.value;
    if(Number(val) == val){
        const valNum = Number(val);
        const min = Number(el.getAttribute("min"));
        const max = Number(el.getAttribute("max"));
        if(valNum >= min){
            if(valNum <= max){
                return valNum;
            }
        }
        else{
            alert(`The value for the field ${el.name} is does not lie between the range of ${min} and ${max}`);    
        }
    }
    else{
        alert(`Enter a number for ${el.name} field`);
    }
}
const getComplex = (idr,idi)=>{
    return _c(getValue(idr),getValue(idi));
}
const makeBusMatrix = ()=>{
    const el = document.getElementById("busDataTable");
    const length = el.querySelectorAll("tr").length;
    const arr = [];
    for(i=1; i<=length; i++){
        arr.push([_c(getValue(`sno-${i}`)),_c(getValue(`fb-${i}`)),_c(getValue(`tb-${i}`)),getComplex(`r-${i}`,`x-${i}`),_c(getValue(`lca-${i}`)),_c(getValue(`tr-${i}`))]);
    }
    return arr;
};
const makeAPMatrix = ()=>{
    const el = document.getElementById("apDataTable");
    const length = el.querySelectorAll("tr").length;
    const arr = [];
    for(i=1; i<=length; i++){
        arr.push([
            _c(getValue(`ap-sb-${i}`)),
            _c(getValue(`ap-rb-${i}`)),
            _c(getValue(`ap-p-${i}`)),
            _c(getValue(`ap-r-${i}`))
        ]);
    }
    // //console.log("pdata returning is ",arr)
    return arr;
}
const makeAPIMatrix = ()=>{
    const el = document.getElementById("apiDataTable");
    const length = el.querySelectorAll("tr").length;
    const arr = [];
    for(i=1; i<=length; i++){
        arr.push([
            _c(getValue(`api-b-${i}`)),
            _c(0),_c(getValue(`api-p-${i}`)),
            _c(getValue(`api-r-${i}`))
        ]);
    }
    return arr;
}
const makeRPMatrix = ()=>{
    const el = document.getElementById("rpDataTable");
    const length = el.querySelectorAll("tr").length;
    const arr = [];
    for(i=1; i<=length; i++){
        arr.push([_c(getValue(`rp-sb-${i}`)),_c(getValue(`rp-rb-${i}`)),_c(getValue(`rp-q-${i}`)),_c(getValue(`rp-r-${i}`))]);
    }
    return arr;
}
const makeRPIMatrix = ()=>{
    const el = document.getElementById("rpiDataTable");
    const length = el.querySelectorAll("tr").length;
    const arr = [];
    for(i=1; i<=length; i++){
        arr.push([_c(getValue(`rpi-b-${i}`)),_c(0),_c(getValue(`rpi-q-${i}`)),_c(getValue(`rpi-r-${i}`))]);
    }
    return arr;
}
const makeVMatrix = ()=>{
    const el = document.getElementById("VDataTable");
    const length = el.querySelectorAll("tr").length;
    const arr = [];
    for(i=1; i<=length; i++){
        arr.push([_c(getValue(`v-b-${i}`)),_c(0),_c(getValue(`v-vmag-${i}`)),_c(getValue(`v-r-${i}`))]);
    }
    return arr;
}
const makeShuntMatrix = ()=>{
    const el = document.getElementById("shuntDataTable");
    const length = el.querySelectorAll("tr").length;
    const arr = [];
    for(i=1; i<=length; i++){
        arr.push([getValue(`shunt-sno-${i}`),getValue(`shunt-bus-${i}`),getValue(`shunt-admittance-${i}`)]);
    }
    return arr;
}
const makeResistanceMatrix = ()=>{
    const el = document.getElementById("resistance-matrix");
    const res = [];
    const length = el.querySelectorAll("input").length;
    // //console.log("length is",length)
    for(let row = 0; row<math.sqrt(length);row++){
        const row1 =[];
        // //console.log()
        for(column = 0; column<math.sqrt(length);column++){
            row1.push(_c(getValue(`rm-${row}-${column}`)));
        }
        res.push(row1);
    }
    // //console.log(res);
    return res;
}
const _nbus = ()=>{
    return getValue("nbus");
}
const fixMaxBus = ()=>{
    for(i=0; i<document.getElementsByClassName("bus").length;i++)
    {
        element = document.getElementsByClassName("bus").item(i);
        element.setAttribute("max", _nbus());
        element.setAttribute("min", 1);
        // //console.log(element);
    };
}
const updateResistanceMatrix = (n)=>{
    const el = document.getElementById("resistance-matrix");
    const inputLength = Math.sqrt(Number(el.querySelectorAll("input").length));
    if(n=="inc"){
        buildResistanceMatrix(inputLength+1,el);
    }
    if(n=="dec"){
        buildResistanceMatrix(inputLength-1,el);
    }
}
const buildResistanceMatrix = (length,el)=>{
    el.innerHTML = "";
    for(row = 0; row<length;row++){
        for(column = 0; column<length;column++){
            if(row == column){
                el.innerHTML+= `
                <label class="visually-hidden" id="rm-${row}-${column}-label" for="rm-${row}-${column}"> resistance value for row ${row+1} and column ${column+1} </label> 
                <input title="row ${row+1} and column ${column+1}" class="col-1" id="rm-${row}-${column}" name="resistance value for row ${row} and column ${column}"  type="number" max="Infinity" min="-Infinity"></input>`;
            }
            else{
                el.innerHTML+= `
                <label class="visually-hidden" id="rm-${row}-${column}-label" for="rm-${row}-${column}"> resistance value for row ${row+1} and column ${column+1} </label> 
                <input title="row ${row+1} and column ${column+1}" class="col-1" id="rm-${row}-${column}" disabled value="0" name="resistance value for row ${row} and column ${column}"  type="number" max="Infinity" min="-Infinity"></input>`;
            }
        }
        el.innerHTML+="<br>";
    }
}
const runSIM = ()=>{
    fixMaxBus();
    const busdata = makeBusMatrix();
    const pdata1 = makeAPMatrix();
    const pdata2 = makeAPIMatrix();
    const qdata1 = makeRPMatrix();
    const qdata2 = makeRPIMatrix();
    const vdata = makeVMatrix();
    const Ri = makeResistanceMatrix();
    const shunt_data = makeShuntMatrix();
    // //console.log("done with shunt")
    const npi = Number(pdata2.length);
    const nqi = Number(qdata2.length);
    const npf = Number(pdata1.length);
    const nqf = Number(qdata1.length);
    const nvi = Number(vdata.length);
    const getLastCol = (val)=>{return [val.pop()];};
    let z = [];
    const n_bus = _nbus();
    const nbus = n_bus;
    // //console.log("pdata",pdata1)
    // //console.log("pdata",pdata2)
    // //console.log("qdata",qdata1)
    // //console.log("qdata",qdata2)
    // //console.log("vdata",vdata)
    // z = z.concat(
    //     pdata2.map(getLastCol),
    //     qdata2.map(getLastCol),
    //     pdata1.map(getLastCol),
    //     qdata1.map(getLastCol),
    //     vdata.map(getLastCol)
    // );
    for (let i = 0; i < pdata1.length; i++) {
        z.push(pdata1[i][2].re)
    }
    for (let i = 0; i < pdata2.length; i++) {
        z.push(pdata2[i][2].re)
    }
    for (let i = 0; i < qdata1.length; i++) {
        z.push(qdata1[i][2].re)
    }
    for (let i = 0; i < qdata2.length; i++) {
        z.push(qdata2[i][2].re)
    }
    for (let i = 0; i < vdata.length; i++) {
        z.push(vdata[i][2].re)
    }


    // //console.log("z is",z)
    const del = math.zeros(nbus)._data; //modified
    let v = math.ones(nbus)._data; //modified
    let n =3 , iter = 1;
    const n_elements = busdata.length;
    const n_shunt = Number(shunt_data.length); 
    const ybus = math.zeros(n_bus,n_bus)._data;
    // //console.log("done with ybus")
    for (i = 0; i<n_elements;i++){
        let p = busdata[i][1].re;
        let q = busdata[i][2].re;
        let yele = math.divide(1,busdata[i][3]);
        let hlca = busdata[i][4].re;
        let ontr = busdata[i][5].re;
        ybus[p-1][p-1] = math.add(ybus[p-1][p-1],(math.divide(yele,math.multiply(ontr,ontr))), hlca);
        ybus[q-1][q-1] = math.add(ybus[q-1][q-1] , yele ,hlca);
        ybus[p-1][q-1] = math.subtract(ybus[p-1][q-1], math.divide(yele,ontr));
        ybus[q-1][p-1] = math.subtract(ybus[q-1][p-1], math.divide(yele,ontr));
    }
    if (n_shunt !== 0)
        for(j = 0; j<n_shunt;j++)
        {
            q = shunt_data[j][1];
            yele = shunt_data[j][2];
            ybus[q][q] = math.add(ybus[q][q],yele);
        }
    let E = [...del.slice(1),...v];
    const G = math.matrix(ybus).map((val)=>{return val.re})._data;
    const B = math.matrix(ybus).map((val)=>{return val.im})._data;
    // //console.log("E is",E)
    // //console.log("G is",G)
    // //console.log("B is",B)
    let tol = 5;
    // //console.log("entering while ")
    // while(tol>1e-4){
        const h1 = math.zeros(nvi)._data;
        const h2 = math.zeros(npi)._data;
        const h3 = math.zeros(nqi)._data;
        const h4 = math.zeros(npf)._data;
        const h5 = math.zeros(nqf)._data;
        for(i=0; i<nvi; i++){
            h1[i] = v[i];
        }
        for(i=0;i<npi;i++){
            const m = Number(pdata2[i][0].re) - 1;
            for(k=0; k<nbus;k++){
                // h2[i] = h2[i]+v[m]*v[k]*(G[m][k]*Math.cos(del[m]-del[k])) + B[m][k]*Math.sin(del[m] - del[k]);
                
                // //console.log( "h2",typeof h2[i])
                // //console.log(typeof B[m][k])
                // //console.log(typeof G[m][k])
                // //console.log(typeof v[m])
                h2[i] = h2[i] + v[m]*v[k]*(G[m][k]*Math.cos(del[m]-del[k]) + B[m][k]*Math.sin(del[m]-del[k]));
            }
        }
        for(i=0;i<nqi;i++){
            const m = qdata2[i][0].re - 1;
            for(k=0; k<nbus;k++){
                // h3[i] = h3[i]+v[m]*v[k]*(G[m][k]*Math.sin(del[m]-del[k])) - B[m][k]*Math.cos(del[m] - del[k]);
                h3[i] = h3[i] + v[m]*v[k]*(G[m][k]*Math.sin(del[m]-del[k]) - B[m][k]*Math.cos(del[m]-del[k]));
            }
        }
        for(i=0;i<npf;i++){
            const m = pdata1[i][0].re - 1;
            const n = pdata1[i][1].re - 1;
            h4[i] = -v[m]*v[m]*G[m][n] - v[m]*v[n]*(-G[m][n]*Math.cos(del[m]-del[n]) - B[m][n]*Math.sin(del[m]-del[n]));
        }
        for(i=0;i<nqf;i++){
            const m = qdata1[i][0].re - 1;
            const n = qdata1[i][1].re - 1;
            h5[i] = -v[m]*v[m]*(-B[m][n]) - v[m]*v[n]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n]));
        }
        // //console.log("done with h")
        let h = [...h4,...h2,...h5,...h3,...h1];
        
    
        //console.log("h is",h)
        //console.log("z is ",z)
        const r= math.subtract(math.matrix(z),math.matrix(h))._data;
        //console.log("r is",r)
        // //console.log('r is',r)
        const H11 = math.zeros(nvi,nbus-1)._data;
        const H12 = math.zeros(nvi,nbus)._data;
        for(k=0; k<nvi;k++){
            for(n=0;n<nbus;n++){
                if(n==k){
                    H12[k][n] = 1;
                }
            }
        }
        // //console.log("H21")
        const H21 = math.zeros(npi,nbus-1)._data;
        for(i=0;i<npi;i++){
            const m = pdata2[i][0].re - 1;
            for(k=0; k<nbus-1;k++){
                if(k+1 == m){
                    for(n=0;n<nbus;n++){
                        H21[i][k] = H21[i][k] + v[m]*v[n]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n]));
                    }
                    H21[i][k] = H21[i][k] - v[m]*v[m]*B[m][m];
                }
                else{
                    H21[i][k] = v[m]*v[k+1]*(G[m][k+1]*Math.sin(del[m]-del[k+1]) - B[m][k+1]*Math.cos(del[m]-del[k+1]));
                }
            }
        }
        // //console.log("H31")
        const H22 = math.zeros(npi,nbus)._data;
        for(i=0;i<npi;i++){
            const m = pdata2[i][0].re - 1;
            for(k=0; k<nbus;k++){
                if(k == m){
                    for(n=0;n<nbus;n++){
                        H22[i][k] = H22[i][k] + v[n]*(G[m][n]*Math.cos(del[m]-del[n]) + B[m][n]*Math.sin(del[m]-del[n]));
                    }
                    H22[i][k] = H22[i][k] + v[m]*G[m][m];
                }
                else{
                    H22[i][k] = v[m]*( G[m][k]*Math.cos(del[m]-del[k]) + B[m][k]*Math.sin(del[m]-del[k]))
                }
            }
        }
        // //console.log("H22")
        const H31 = math.zeros(nqi,nbus-1)._data;
        for(i=0;i<nqi;i++){
            const m = qdata2[i][0].re-1;
            for(k=0;k<nbus-1;k++){
                if(k+1 == m){
                    for(n=0;n<nbus;n++){
                        H31[i][k] = H31[i][k] + v[m]*v[n]*(G[m][n]*Math.cos(del[m]-del[n]) + B[m][n]*Math.sin(del[m]-del[n]));
                    }
                    H31[i][k] = H31[i][k] - v[m]*v[m]*G[m][m];
                }
                else{
                    H31[i][k] = v[m]*v[k+1]*(-G[m][k+1]*Math.cos(del[m]-del[k+1]) - B[m][k+1]*Math.sin(del[m]-del[k+1]));
                }
            }
        }
        // //console.log("H32")
        const H32 = math.zeros(nqi,nbus)._data;
        for(i=0;i<nqi;i++){
            const m = qdata2[i][0].re-1;
            for(k=0;k<nbus;k++){
                if(k==m){
                    for(n=0;n<nbus;n++){
                        H32[i][k] = H32[i][k] + v[n]*(G[m][n]*Math.sin(del[m]-del[n]) - B[m][n]*Math.cos(del[m]-del[n]));
                    }
                    H32[i][k] = H32[i][k] - v[m]*B[m][m];
                }
                else{
                    H32[i][k] = v[m]*(G[m][k]*Math.sin(del[m]-del[k]) - B[m][k]*Math.cos(del[m]-del[k]));
                }
            }
        }
        // //console.log("H41")
        const H41 = math.zeros(npf,nbus-1)._data;
        for(i=0;i<npf;i++){
            const m = pdata1[i][0].re-1;
            const n = pdata1[i][1].re-1;
            for(k=0;k<nbus-1;k++){
                if(k+1 == m){
                    H41[i][k] = v[m]*v[n]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n]));
                }
                else {
                    if(k+1 == n){
                        H41[i][k] = -v[m]*v[n]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n]));
                    }
                    else{
                        H41[i][k] = 0;
                    }
                }
            }
        }
        // //console.log("H42")
        const H42 = math.zeros(npf,nbus)._data;
        for(i=0;i<npf;i++){
            const m = pdata1[i][0].re-1;
            const n = pdata1[i][1].re-1;
            for(k=0;k<nbus;k++){
                if(k == m){
                    H42[i][k] = -v[n]*(-G[m][n]*Math.cos(del[m]-del[n]) - B[m][n]*Math.sin(del[m]-del[n])) - 2*G[m][n]*v[m];
                }
                else{
                    if(k==n){
                        H42[i][k] = -v[m]*(-G[m][n]*Math.cos(del[m]-del[n]) - B[m][n]*Math.sin(del[m]-del[n]));
                    }
                    else{
                        H42[i][k] = 0;
                    }
                }
            }
        }
        // //console.log("H51")
        const H51 = math.zeros(nqf, nbus-1)._data;
        for(i=0;i<nqf;i++){
            m = qdata1[i][0].re - 1;
            n = qdata1[i][1].re - 1;
            for(k=0;k<nbus-1;k++){
                if(k+1 == m){
                    H51[i][k] = -v[m]*v[n]*(-G[m][n]*Math.cos(del[m]-del[n]) - B[m][n]*Math.sin(del[m]-del[n]));
                }
                else{
                    if(k+1 == n){
                        H51[i][k] = v[m]*v[n]*(-G[m][n]*Math.cos(del[m],del[n]) - B[m][n]*Math.sin(del[m]-del[n]));
                    }
                    else{
                        H51[i][k] = 0;
                    }
                }
            }
        }
        // //console.log("H52")
        const H52 = math.zeros(nqf,nbus)._data;
        for(i=0;i<nqf;i++){
            const m = qdata1[i][0].re -1;
            const n = qdata1[i][1].re -1;
            for(k=0;k<nbus;k++){
                if(k==m){
                    H52[i][k] = -v[n]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m] - del[n]));
                }
                else{
                    if(k == n){
                        H52[i][k] = -v[m]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n]));
                    }
                    else{
                        H52[i][k] = 0;
                    }
                }
            }
        }
        //console.log("done wirh H")
        // const H = [[H21.concat(H22)], [H31.concat(H32)],[H51.concat(H52)],[H41.concat(H42)],[H11.concat(H12)]];
        // //console.log("H22",H22)
        const H = [
            ...math.concat(H21, H22),
            ...math.concat(H31, H32),
            ...math.concat(H51, H52),
            ...math.concat(H41, H42),
            ...math.concat(H11, H12)
        ]
        //console.log("H is")
        //console.log(H)
        // //console.log("h not")
        //console.log("ri ",Ri)

        // ====================

        //console.log("inv Ri")
        //console.log(math.inv(Ri))

        //console.log("transpose H")
        //console.log(math.transpose(H))
        let Gm = []
        Gm = math.multiply(math.transpose(H),math.inv(Ri))
        //console.log("Gm half is",Gm)

        Gm = math.multiply(Gm,H)
        // let Gm1 = math.multiply(math.inv(Ri),H)
        // let Gm2 = math.multiply(math.transpose(H),Gm1)
        //console.log("Gm2  is",Gm)

        const J = math.sum(math.multiply(math.inv(Ri),r,r));

        //console.log("J is",J)

        const dE = math.multiply(math.inv(Gm), math.multiply(math.transpose(H), math.inv(Ri),r));
        
        E = math.add(E,dE);

        for(i=1, j=0;i<del.length;i++,j++){
            del[i] = E[j];
        }
        // //console.log("not v")
        v = E.slice(nbus-1);
        iter = iter+1;
        tol = math.max(math.abs(dE));
        
        //console.log("del",del)
        
        //console.log("E",E)
        //console.log("v",v)
        //console.log("tol",tol)
    // }
    //console.log("done with while as well")
    // const CvE = math.diag(math.multiply(math.transpose(H),math.inv(Ri),H));
    // const Del = math.multiply((180/Math.PI),del);
    // const E2 = v.concat(Del);
    //console.log("v is",v);
    
    //console.log("del is",del);


    let outputs = document.getElementById("OUTPUT")
    outputs.innerHTML=""
    outputs.style.border = "0.25rem solid black"

    let ans3 = document.createElement("div")
    let ans4 = document.createElement("div")
    let ans5 = document.createElement("div")
    let ans6 = document.createElement("div")
    let ans7 = document.createElement("div")
    let ans8 = document.createElement("div")

    // ans2.innerHTML = "At the mid-point,the voltage without compensation is:" + Vm.toFixed(2) + " V."
    // ans3.innerHTML = 'Reactive power is required to maintain the mid-point voltage at 1 per unit ' +Qr.toFixed(2)+ ' var.'
    
//    //console.log(typeof v[0])
    ans3.innerHTML = `V1 = ${v[0].re.toFixed(4)} p.u.`
    ans4.innerHTML = `V2 = ${v[1].re.toFixed(4)} p.u`
    ans5.innerHTML = `V3 = ${v[2].re.toFixed(4)} p.u`
    ans6.innerHTML = `del1 = ${del[0].toFixed(4)} rad`
    ans7.innerHTML = `del2 = ${del[1].re.toFixed(4)} rad`
    ans8.innerHTML = `del3 = ${del[2].re.toFixed(4)} rad`

    ans3.style.marginBottom = "2rem"
    ans4.style.marginBottom = "2rem"
    ans5.style.marginBottom = "2rem"
    ans6.style.marginBottom = "2rem"
    ans7.style.marginBottom = "2rem"
    ans8.style.marginBottom = "2rem"

    let heading = document.createElement("div")
    heading.innerHTML = "Results:"
    heading.style.fontWeight = "900"
    heading.style.marginBottom = "3rem"
    heading.style.marginTop = "2rem"
    heading.id = "result"

    outputs.appendChild(heading)
    // outputs.appendChild(ans1)
    // outputs.appendChild(ans2)
    outputs.appendChild(ans3)
    outputs.appendChild(ans4)
    outputs.appendChild(ans5)
    outputs.appendChild(ans6)
    outputs.appendChild(ans7)
    outputs.appendChild(ans8)
}