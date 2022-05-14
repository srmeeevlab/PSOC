// % Line Data for B-Bus (Shunt Admittance)Formation.

function bbusppg(num) {    //% Returns B-bus..

    linedata = linedatas(num);
    let fb = [], tb = [], b = [];
    for (let i = 0; i < linedata.length; i++) {
        // const element = array[index];
        fb.push(linedata[i][0])
        tb.push(linedata[i][1])
        b.push(linedata[i][4])

    }
    nbus = Math.max(Math.max(fb), Math.max(tb));    //% no. of buses...
    nbranch = fb.length;          // % no. of branches...
    bbus = math.zeros(nbus, nbus);

    for (let k = 1; k <= nbranch; k++) {
        bbus[fb[k-1]][tb[k-1]] = b[k-1];
        bbus[tb[k-1]][fb[k-1]] = bbus[fb[k-1]][tb[k-1]];

    }
    return bbus;
}