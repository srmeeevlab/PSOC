const math = require("mathjs")
function linedatas(num) {



    let linedata3 = [
        [1, 2, 0.01, 0.03, 0, 1],
        [1, 3, 0.02, 0.05, 0, 1],
        [2, 3, 0.03, 0.08, 0, 1]
    ];

    let linedata14 = [
        [1, 2, 0.01938, 0.05917, 0.0264, 1],
        [1, 5, 0.05403, 0.22304, 0.0246, 1],
        [2, 3, 0.04699, 0.19797, 0.0219, 1],
        [2, 4, 0.05811, 0.17632, 0.0170, 1],
        [2, 5, 0.05695, 0.17388, 0.0173, 1],
        [3, 4, 0.06701, 0.17103, 0.0064, 1],
        [4, 5, 0.01335, 0.04211, 0.0, 1],
        [4, 7, 0.0, 0.20912, 0.0, 0.978],
        [4, 9, 0.0, 0.55618, 0.0, 0.969],
        [5, 6, 0.0, 0.25202, 0.0, 0.932],
        [6, 11, 0.09498, 0.19890, 0.0, 1],
        [6, 12, 0.12291, 0.25581, 0.0, 1],
        [6, 13, 0.06615, 0.13027, 0.0, 1],
        [7, 8, 0.0, 0.17615, 0.0, 1],
        [7, 9, 0.0, 0.11001, 0.0, 1],
        [9, 10, 0.03181, 0.08450, 0.0, 1],
        [9, 14, 0.12711, 0.27038, 0.0, 1],
        [10, 11, 0.08205, 0.19207, 0.0, 1],
        [12, 13, 0.22092, 0.19988, 0.0, 1],
        [13, 14, 0.17093, 0.34802, 0.0, 1]
    ];


    let linedata30 = [
        [1, 2, 0.0192, 0.0575, 0.0264, 1],
        [1, 3, 0.0452, 0.1652, 0.0204, 1],
        [2, 4, 0.0570, 0.1737, 0.0184, 1],
        [3, 4, 0.0132, 0.0379, 0.0042, 1],
        [2, 5, 0.0472, 0.1983, 0.0209, 1],
        [2, 6, 0.0581, 0.1763, 0.0187, 1],
        [4, 6, 0.0119, 0.0414, 0.0045, 1],
        [5, 7, 0.0460, 0.1160, 0.0102, 1],
        [6, 7, 0.0267, 0.0820, 0.0085, 1],
        [6, 8, 0.0120, 0.0420, 0.0045, 1],
        [6, 9, 0.0, 0.2080, 0.0, 0.978],
        [6, 10, 0.0, 0.5560, 0.0, 0.969],
        [9, 11, 0.0, 0.2080, 0.0, 1],
        [9, 10, 0.0, 0.1100, 0.0, 1],
        [4, 12, 0.0, 0.2560, 0.0, 0.932],
        [12, 13, 0.0, 0.1400, 0.0, 1],
        [12, 14, 0.1231, 0.2559, 0.0, 1],
        [12, 15, 0.0662, 0.1304, 0.0, 1],
        [12, 16, 0.0945, 0.1987, 0.0, 1],
        [14, 15, 0.2210, 0.1997, 0.0, 1],
        [16, 17, 0.0824, 0.1923, 0.0, 1],
        [15, 18, 0.1073, 0.2185, 0.0, 1],
        [18, 19, 0.0639, 0.1292, 0.0, 1],
        [19, 20, 0.0340, 0.0680, 0.0, 1],
        [10, 20, 0.0936, 0.2090, 0.0, 1],
        [10, 17, 0.0324, 0.0845, 0.0, 1],
        [10, 21, 0.0348, 0.0749, 0.0, 1],
        [10, 22, 0.0727, 0.1499, 0.0, 1],
        [21, 23, 0.0116, 0.0236, 0.0, 1],
        [15, 23, 0.1000, 0.2020, 0.0, 1],
        [22, 24, 0.1150, 0.1790, 0.0, 1],
        [23, 24, 0.1320, 0.2700, 0.0, 1],
        [24, 25, 0.1885, 0.3292, 0.0, 1],
        [25, 26, 0.2544, 0.3800, 0.0, 1],
        [25, 27, 0.1093, 0.2087, 0.0, 1],
        [28, 27, 0.0, 0.3960, 0.0, 0.968],
        [27, 29, 0.2198, 0.4153, 0.0, 1],
        [27, 30, 0.3202, 0.6027, 0.0, 1],
        [29, 30, 0.2399, 0.4533, 0.0, 1],
        [8, 28, 0.0636, 0.2000, 0.0214, 1],
        [6, 28, 0.0169, 0.0599, 0.065, 1]
    ];

    switch (num) {
        case 3:
            linedt = linedata3;
            break;
        case 14:
            linedt = linedata14;
            break;
        case 30:
            linedt = linedata30;
            break;
    }
    return linedt;
}
function ybusppg(num) {  //% Returns ybus

    let linedata = linedatas(num); //% Calling "linedata6.m" for Line Data...
    let fb = [], tb = [], r = [], x = [], b = [], a = [], z = [], y = [];

    for (let i = 0; i < linedata.length; i++) {
        fb.push(linedata[i][0])
        tb.push(linedata[i][1])
        r.push(linedata[i][2])
        x.push(linedata[i][3])
        b.push(math.complex(0, linedata[i][4]))
        a.push(linedata[i][5])
        z.push(math.complex(r[i], x[i]))
        y.push( math.inv(math.complex(r[i], x[i])))
    }

    // console.log('fb',fb,Math.max(fb))
    let nbus = Math.max(Math.max(...fb), Math.max(...tb));    //% no. of buses...
    let nbranch = fb.length;          // % no. of branches...
    console.log("nbus",nbus);
    let ybus = math.zeros(nbus,nbus)["_data"];       // % Initialise YBus...

    //  % Formation of the Off Diagonal Elements...
    console.log('ybus',ybus)
    console.log('nbus',nbus)
    console.log('nbranch',nbranch)
    console.log("y",y)
    console.log("fb",fb)
    console.log("tb",tb)
    console.log("r",r)
    console.log("x",x)
    console.log("b",b)
    console.log("a",a)
    console.log("z",z)
    console.log("y",y)
    for (let k = 0; k < nbranch; k++) {
        //  const element = array[k];
        // ybus[fb[k]][tb[k]] -= y[k] / a[k];
        // console.log(k+" iteration")
        // console.log(ybus[fb[k]][tb[k]],math.divide(y[k],a[k]))
        // console.log(math.subtract(ybus[fb[k]][tb[k]],math.divide(y[k],a[k])))
        // console.log("types",typeof ybus[fb[k]][tb[k]],typeof math.divide(y[k],a[k]))
        
        ybus[fb[k] -1 ][tb[k]-1]=math.subtract(ybus[fb[k] -1 ][tb[k]-1],math.divide(y[k],a[k]))
        
        // console.log(ybus,fb[k],tb[k],y[k],a[k]);

        ybus[tb[k]-1][fb[k] -1 ] = ybus[fb[k] -1 ][tb[k]-1];
        // console.log("updated",ybus)

    }

    //  % Formation of Diagonal Elements....
    for (let m = 0; m < nbus; m++) {
        for (let n = 0; n < nbranch; n++) {
            // console.log(ybus[m],y[n],a[n],b[n])
            if (fb[n]-1 == m) {
                // console.log("error exp",math.divide(y[n] , math.add( math.pow(a[n], 2) , b[n])))
                // console.log("error exp type",typeof math.divide(y[n] , math.add( math.pow(a[n], 2) , b[n])))
                ybus[m][m] = math.add(ybus[m][m],math.divide(y[n] , math.add( math.pow(a[n], 2) , b[n])));
            } else if (tb[n]-1 == m) {
                ybus[m][m] = math.add(ybus[m][m],math.add(y[n] , b[n]));
            }
            // console.log("updated ybus",ybus)
        }
    }

    console.log("final ybus==",ybus)
    return ybus
}
let ybus = ybusppg(3)