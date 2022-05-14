const math = require("mathjs")


//bbus
function busdatas(num) {


    let busdata3 = [
        [1, 1, 1.006, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 1.00, 0, 0, 0.0, 0.0, 0.0, 0, 0],
        [3, 3, 1.00, 0, 0, 00, 0.0, 0.0, 0, 0]
    ];

    let busdata14 = [
        [1, 1, 1.060, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 1.045, 0, 40, 42.4, 21.7, 12.7, -40, 50],
        [3, 2, 1.010, 0, 0, 23.4, 94.2, 19.0, 0, 40],
        [4, 3, 1.0, 0, 0, 0, 47.8, -3.9, 0, 0],
        [5, 3, 1.0, 0, 0, 0, 7.6, 1.6, 0, 0],
        [6, 2, 1.070, 0, 0, 12.2, 11.2, 7.5, -6, 24],
        [7, 3, 1.0, 0, 0, 0, 0.0, 0.0, 0, 0],
        [8, 2, 1.090, 0, 0, 17.4, 0.0, 0.0, -6, 24],
        [9, 3, 1.0, 0, 0, 0, 29.5, 16.6, 0, 0],
        [10, 3, 1.0, 0, 0, 0, 9.0, 5.8, 0, 0],
        [11, 3, 1.0, 0, 0, 0, 3.5, 1.8, 0, 0],
        [12, 3, 1.0, 0, 0, 0, 6.1, 1.6, 0, 0],
        [13, 3, 1.0, 0, 0, 0, 13.5, 5.8, 0, 0],
        [14, 3, 1.0, 0, 0, 0, 14.9, 5.0, 0, 0]
    ];

    let busdata30 = [
        [1, 1, 1.06, 0, 0, 0, 0, 0, 0, 0],
        [2, 2, 1.043, 0, 40, 50.0, 21.7, 12.7, -40, 50],
        [3, 3, 1.0, 0, 0, 0, 2.4, 1.2, 0, 0],
        [4, 3, 1.06, 0, 0, 0, 7.6, 1.6, 0, 0],
        [5, 2, 1.01, 0, 0, 37.0, 94.2, 19.0, -40, 40],
        [6, 3, 1.0, 0, 0, 0, 0.0, 0.0, 0, 0],
        [7, 3, 1.0, 0, 0, 0, 22.8, 10.9, 0, 0],
        [8, 2, 1.01, 0, 0, 37.3, 30.0, 30.0, -10, 40],
        [9, 3, 1.0, 0, 0, 0, 0.0, 0.0, 0, 0],
        [10, 3, 1.0, 0, 0, 0, 5.8, 2.0, 0, 0],
        [11, 2, 1.082, 0, 0, 16.2, 0.0, 0.0, -6, 24],
        [12, 3, 1.0, 0, 0, 0, 11.2, 7.5, 0, 0],
        [13, 2, 1.071, 0, 0, 10.6, 0.0, 0.0, -6, 24],
        [14, 3, 1.0, 0, 0, 0, 6.2, 1.6, 0, 0],
        [15, 3, 1.0, 0, 0, 0, 8.2, 2.5, 0, 0],
        [16, 3, 1.0, 0, 0, 0, 3.5, 1.8, 0, 0],
        [17, 3, 1.0, 0, 0, 0, 9.0, 5.8, 0, 0],
        [18, 3, 1.0, 0, 0, 0, 3.2, 0.9, 0, 0],
        [19, 3, 1.0, 0, 0, 0, 9.5, 3.4, 0, 0],
        [20, 3, 1.0, 0, 0, 0, 2.2, 0.7, 0, 0],
        [21, 3, 1.0, 0, 0, 0, 17.5, 11.2, 0, 0],
        [22, 3, 1.0, 0, 0, 0, 0.0, 0.0, 0, 0],
        [23, 3, 1.0, 0, 0, 0, 3.2, 1.6, 0, 0],
        [24, 3, 1.0, 0, 0, 0, 8.7, 6.7, 0, 0],
        [25, 3, 1.0, 0, 0, 0, 0.0, 0.0, 0, 0],
        [26, 3, 1.0, 0, 0, 0, 3.5, 2.3, 0, 0],
        [27, 3, 1.0, 0, 0, 0, 0.0, 0.0, 0, 0],
        [28, 3, 1.0, 0, 0, 0, 0.0, 0.0, 0, 0],
        [29, 3, 1.0, 0, 0, 0, 2.4, 0.9, 0, 0],
        [30, 3, 1.0, 0, 0, 0, 10.6, 1.9, 0, 0]
    ];

    switch (num) {
        case 3:
            busdt = busdata3;
            break;
        case 14:
            busdt = busdata14;
            break;
        case 30:
            busdt = busdata30;
            break;
    }
    return busdt;
}

// line
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

// /zdata
function zdatas(num) {


    let zdata3 = [
        [1, 1, 1.006, 1, 0, 0.004],
        [2, 1, 0.968, 2, 0, 0.004],
        [3, 2, -0.501, 2, 0, 0.010],
        [4, 3, -0.286, 2, 0, 0.010],
        [5, 4, 0.888, 1, 2, 0.008],
        [6, 4, 1.173, 1, 3, 0.008],
        [7, 5, 0.568, 1, 2, 0.008],
        [8, 5, 0.663, 1, 3, 0.008]
    ];
    let zdata14 = [

        [1, 1, 1.06, 1, 0, 9e-4],

        [2, 2, 0.1830, 2, 0, 1e-4],
        [3, 2, -0.9420, 3, 0, 1e-4],
        [4, 2, 0.00, 7, 0, 1e-4],
        [5, 2, 0.00, 8, 0, 1e-4],
        [6, 2, -0.0900, 10, 0, 1e-4],
        [7, 2, -0.0350, 11, 0, 1e-4],
        [8, 2, -0.0610, 12, 0, 1e-4],
        [9, 2, -0.1490, 14, 0, 1e-4],

        [10, 3, 0.3523, 2, 0, 1e-4]
        [11, 3, 0.0876, 3, 0, 1e-4],
        [12, 3, 0.00, 7, 0, 1e-4],
        [13, 3, 0.2103, 8, 0, 1e-4],
        [14, 3, -0.0580, 10, 0, 1e-4],
        [15, 3, -0.0180, 11, 0, 1e-4],
        [16, 3, -0.0160, 12, 0, 1e-4],
        [17, 3, -0.0500, 14, 0, 1e-4],

        [18, 4, 1.5708, 1, 2, 64e-6],
        [19, 4, 0.7340, 2, 3, 64e-6],
        [20, 4, -0.5427, 4, 2, 64e-6],
        [21, 4, 0.2707, 4, 7, 64e-6],
        [22, 4, 0.1546, 4, 9, 64e-6],
        [23, 4, -0.4081, 5, 2, 64e-6],
        [24, 4, 0.6006, 5, 4, 64e-6],
        [25, 4, 0.4589, 5, 6, 64e-6],
        [26, 4, 0.1834, 6, 13, 64e-6],
        [27, 4, 0.2707, 7, 9, 64e-6],
        [28, 4, -0.0816, 11, 6, 64e-6],
        [29, 4, 0.0188, 12, 13, 64e-6],

        [30, 5, -0.1748, 1, 2, 64e-6],
        [31, 5, 0.0594, 2, 3, 64e-6],
        [32, 5, 0.0213, 4, 2, 64e-6],
        [33, 5, -0.1540, 4, 7, 64e-6],
        [34, 5, -0.0264, 4, 9, 64e-6],
        [35, 5, -0.0193, 5, 2, 64e-6],
        [36, 5, -0.1006, 5, 4, 64e-6],
        [37, 5, -0.2084, 5, 6, 64e-6],
        [38, 5, 0.0998, 6, 13, 64e-6],
        [39, 5, 0.1480, 7, 9, 64e-6],
        [40, 5, -0.0864, 11, 6, 64e-6],
        [41, 5, 0.0141, 12, 13, 64e-6]
    ];

    let zdata30 = [
        [1, 1, 1.06, 1, 0, 9e-4],
        [2, 2, -0.0760, 4, 0, 1e-4],
        [3, 2, -0.9420, 5, 0, 1e-4],
        [4, 2, 0.00, 6, 0, 1e-4],
        [5, 2, -0.3000, 8, 0, 1e-4],
        [6, 2, -0.0580, 10, 0, 1e-4],
        [7, 2, 0.00, 11, 0, 1e-4],
        [8, 2, 0.00, 13, 0, 1e-4],
        [9, 2, -0.0621, 14, 0, 1e-4],
        [10, 2, -0.0819, 15, 0, 1e-4],
        [11, 2, -0.0350, 16, 0, 1e-4],
        [12, 2, -0.0320, 18, 0, 1e-4],
        [13, 2, -0.0220, 20, 0, 1e-4],
        [14, 2, -0.1750, 21, 0, 1e-4],
        [15, 2, -0.0870, 24, 0, 1e-4],
        [16, 2, 0.00, 25, , 0, 1e-4],
        [18, 2, 0.00, 28, 0, 1e-4],
        [19, 2, -0.0240, 29, 0, 1e-4],
        [20, 3, -0.0160, 4, 0, 1e-4],
        [21, 3, 0.1538, 5, 0, 1e-4],
        [22, 3, 0.00, 6, 0, 1e-4],
        [23, 3, 0.2096, 8, 0, 1e-4],
        [24, 3, -0.0200, 10, 0, 1e-4],
        [25, 3, 0.2066, 11, , 0, 1e-4]
        [27, 3, -0.0160, 14, 0, 1e-4],
        [28, 3, -0.0250, 15, 0, 1e-4],
        [29, 3, -0.0180, 16, 0, 1e-4],
        [30, 3, -0.0090, 18, 0, 1e-4],
        [31, 3, -0.0070, 20, 0, 1e-4],
        [32, 3, -0.1120, 21, 0, 1e-4],
        [33, 3, -0.0670, 24, 0, 1e-4],
        [34, 3, 0.00, 25, 0, 1e-4],
        [35, 3, -0.0230, 26, 0, 1e-4],
        [36, 3, 0.00, 28, 0, 1e-4],
        [37, 3, -0.0090, 29, 0, 1e-4],
        [38, 4, 0.4377, 2, 4, 64e-6],
        [39, 4, 0.8213, 2, 5, 64e-6],
        [40, 4, -0.8487, 3, 1, 64e-6],
        [41, 4, -0.8160, 4, 3, 64e-6],
        [42, 4, 0.7161, 4, 6, 64e-6],
        [43, 4, -0.1475, 5, 7, 64e-6],
        [44, 4, -0.5836, 6, 2, 64e-6],
        [45, 4, -0.3772, 7, 6, 64e-6],
        [46, 4, -0.2705, 9, 6, 64e-6],
        [47, 4, -0.1539, 10, 6, 64e-6],
        [48, 4, -0.2705, 10, 9, 64e-6],
        [49, 4, 0.0810, 12, 14, 64e-6],
        [50, 4, -0.1786, 15, 12, 64e-6],
        [51, 4, 0.0623, 15, 18, 64e-6],
        [52, 4, 0.0423, 16, 17, 64e-6],
        [53, 4, -0.0480, 17, 10, 64e-6],
        [54, 4, -0.0623, 19, 20, 64e-6],
        [55, 4, -0.0844, 20, 10, 64e-6],
        [56, 4, -0.1760, 21, 10, 64e-6],
        [57, 4, 0.00, 21, 22, 64e-6],
        [58, 4, -0.0554, 22, 10, 64e-6],
        [59, 4, 0.0177, 23, 24, 64e-6],
        [60, 4, -0.0549, 24, 22, 64e-6],
        [61, 4, -0.0500, 25, 27, 64e-6],
        [62, 4, -0.1832, 27, 28, 64e-6],
        [63, 4, -0.1883, 28, 6, 64e-6],
        [64, 4, 0.0370, 29, 30, 64e-6],
        [65, 4, -0.0693, 30, 27, 64e-6],
        [66, 5, 0.0451, 2, 4, 64e-6],
        [67, 5, 0.0402, 2, 5, 64e-6],
        [68, 5, 0.0577, 3, 1, 64e-6],
        [69, 5, 0.0687, 4, 3, 64e-6],
        [70, 5, -0.2202, 4, 6, 64e-6],
        [71, 5, 0.1027, 5, 7, 64e-6],
        [72, 5, 0.0624, 6, 2, 64e-6],
        [73, 5, 0.0089, 7, 6, 64e-6],
        [74, 5, 0.1463, 9, 6, 64e-6],
        [75, 5, 0.0244, 10, 6, 64e-6],
        [76, 5, -0.1599, 10, 9, 64e-6],
        [77, 5, 0.0327, 12, 14, 64e-6],
        [78, 5, -0.0977, 15, 12, 64e-6],
        [79, 5, 0.0310, 15, 18, 64e-6],
        [80, 5, 0.0420, 16, 17, 64e-6],
        [81, 5, -0.0167, 17, 10, 64e-6],
        [82, 5, -0.0133, 19, 20, 64e-6],
        [83, 5, -0.0205, 20, 10, 64e-6],
        [84, 5, -0.0973, 21, 10, 64e-6],
        [85, 5, 0.00, 21, 22, 64e-6],
        [86, 5, -0.0361, 22, 10, 64e-6],
        [87, 5, 0.0248, 23, 24, 64e-6],
        [88, 5, -0.0353, 24, 22, 64e-6],
        [89, 5, -0.0309, 25, 27, 64e-6],
        [90, 5, -0.0219, 27, 28, 64e-6],
        [91, 5, 0.0399, 28, 6, 64e-6],
        [92, 5, 0.0061, 29, 30, 64e-6],
        [93, 5, -0.0136, 30, 27, 64e-6]
    ];

    switch (num) {
        case 3:
            zdt = zdata3;
            break;
        case 14:
            zdt = zdata14;
            break;
        case 30:
            zdt = zdata30;
            break;
    }
    return zdt;
}

function pol2rect(rho, theta) {
    return rho * Math.cos(theta) + j * rho * Math.sin(theta);
}

// % Program to form Admittance And Impedance Bus Formation....
// % with Transformer Tap setting..

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

// % Line Data for B-Bus (Shunt Admittance)Formation.

function bbusppg(num) {    //% Returns B-bus..
    console.log("========bbus===========")
    let linedata = linedatas(num);
    let fb = [], tb = [], b = [];
    for (let i = 0; i < linedata.length; i++) {
        // const element = array[index];
        fb.push(linedata[i][0])
        tb.push(linedata[i][1])
        b.push(linedata[i][4])

    }
    let nbus = Math.max(Math.max(...fb), Math.max(...tb));    //% no. of buses...
    let nbranch = fb.length;          // % no. of branches...
    let bbus = math.zeros(nbus, nbus)["_data"];

    console.log("lindata",linedata)
    console.log("fb",fb)
    console.log("tb",tb)
    console.log("b",b)
    console.log("nbus",nbus)
    console.log("nbranch",nbranch)
    console.log("bbus",bbus)
    for (let k = 0; k < nbranch; k++) {
        bbus[fb[k]-1][tb[k]-1] = b[k];
        bbus[tb[k]-1][fb[k]-1] = bbus[fb[k]-1][tb[k]-1];
        
    }
    console.log("bbus",bbus)
    return bbus;
}



// Power System State Estimation using Weighted Least Square Method..
//Sample study system:  IEEE - 14 or IEEE - 30 bus system..(for IEEE-14 bus system replace 30 by 14)...
// Text book example problem: Power system state estimation
// 3 bus system considered now...also you can test 14 bus and 30 bus system
let num = 3; // 3 BUS

let ybus = ybusppg(num); // Get YBus..
let zdata = zdatas(num); // Get Measurement data..

console.log('ybus',ybus)
console.log('zdata',zdata)

let bpq = bbusppg(num); // Get B data..
console.log('bpq',bpq)

let zdata_fromnbus = [],zdata_tonbus=[];
zdata.forEach(element => {
    zdata_fromnbus.push(element[3])
    zdata_tonbus.push(element[4])
});
let nbus = Math.max(Math.max(...zdata_fromnbus),Math.max(...zdata_tonbus)); // Get number of buses..
console.log('nbus',nbus)

let H=[];

let type=[],z=[],fbus=[],tbus=[],Ri=math.zeros(zdata.length,zdata.length)["_data"];
for (let i = 0; i < zdata.length; i++) {
    // const element = array[i];
    type.push(zdata[i][1])
    z.push(zdata[i][2]) //value
    fbus.push(zdata[i][3]) //from
    tbus.push(zdata[i][4]) // to
    Ri[i][i] = zdata[i][5]
    
}

console.log('type',type)
console.log('fbus',fbus)
console.log('tbus',tbus)
console.log('z',z)
console.log('Ri',Ri)
var V = math.ones(nbus)["_data"]; // Initialize the bus voltages..


let del = math.zeros(nbus)["_data"]; // Initialize the bus angles..
let E = [[...del].slice(1), [...V]].flat();   // State Vector..
console.log('V',V)
console.log('del',del)
console.log('E',E)
// ========================

function real(ybus) {
    let real_matrix = new Array(ybus.length);
    for (let i = 0; i < real_matrix.length; i++) {
        real_matrix[i] = new Array(ybus[i].length)
    }
    for (let i = 0; i < ybus.length; i++) {
        for (let j = 0; j < ybus[i].length; j++) {
            real_matrix[i][j] = math.re(ybus[i][j])
            // console.log("math.re",math.re(ybus[i][j]))
        }
        
    }
    // console.log(real_matrix)
    return real_matrix
}
function imag(ybus) {
    let imag_matrix = new Array(ybus.length);
    for (let i = 0; i < imag_matrix.length; i++) {
        imag_matrix[i] = new Array(ybus[i].length)
    }
    for (let i = 0; i < ybus.length; i++) {
        for (let j = 0; j < ybus[i].length; j++) {
            imag_matrix[i][j] = math.im(ybus[i][j])
            // console.log("math.im",math.im(ybus[i][j]))
        }
        
    }
    // console.log(imag_matrix)
    return imag_matrix
}

let G = real(ybus);
let B = imag(ybus);
console.log('G',G)
console.log('B',B)
// ========================
let vi=[],ppi=[],qi=[],pf=[],qf=[];

// #NOTE  : here index values are appended ac to js but in matlab indexed are +1ed  


for (let index = 0; index < type.length; index++) {

    switch (type[index]) {
        case 1:
            vi.push(index)
            break;
        case 2:
            ppi.push(index)
            break;
        case 3:
            qi.push(index)
            break
        case 4:
            pf.push(index)
            break;
        case 5:
            qf.push(index);
            break;
    
        default:
            break;
    }
}
// vi = type.indexOf(1)
// vi = find(type == 1); // Index of voltage magnitude measurements..
// ppi = type.indexOf(2); // Index of real power injection measurements..
// qi = type.indexOf(3); // Index of reactive power injection measurements..
// pf = type.indexOf(4); // Index of real powerflow measurements..
// qf = type.indexOf(5); // Index of reactive powerflow measurements..

let nvi = (vi.length); // Number of Voltage measurements..
let npi = (ppi.length); // Number of Real Power Injection measurements..
let nqi = (qi.length); // Number of Reactive Power Injection measurements..
let npf = (pf.length); // Number of Real Power Flow measurements..
let nqf = (qf.length); // Number of Reactive Power Flow measurements..
console.log("The values of vi are", vi);
console.log("The values of ppi are", ppi);
console.log("The values of qi are", qi);
console.log("The values of pf are", pf);
console.log("The values of qf are", qf);
console.log('nvi',nvi)
console.log("npi is ",npi)
console.log("nqi is ",nqi)
console.log("npf is ",npf)
console.log("nqf is ",nqf)

let iter = 1;
let tol = 5;

do{
    
    //Measurement Function, h
    let m,n;

    let h1 = [];

    vi.forEach(element => {
        h1.push( V[fbus[element]-1] )
    });

    let h2 = math.zeros(npi)["_data"];
    let h3 = math.zeros(nqi)["_data"];
    let h4 = math.zeros(npf)["_data"];
    let h5 = math.zeros(nqf)["_data"];

    for (let i = 0; i < npi; i++) {
        
        m = fbus[ppi[i]] -1 
        for (let k = 0; k < nbus; k++) {
            
            // console.log("type is",typeof (math.add(math.multiply(V[m],V[k],G[m][k],Math.cos(del[m]-del[k])),math.multiply(B[m][k],Math.sin(del[m]-del[k])))))
            // console.log("h2[i] is",(math.add(math.multiply(V[m],V[k],G[m][k],Math.cos(del[m]-del[k])),math.multiply(B[m][k],Math.sin(del[m]-del[k])))))

            h2[i]=math.add(
                        h2[i],
                        math.multiply(
                            V[m],
                            V[k],
                            math.add(
                            math.multiply(G[m][k],Math.cos(del[m]-del[k])),
                            math.multiply(B[m][k],Math.sin(del[m]-del[k]))
                            )
                        )
                        
            )
            // console.log("h2[i]==",h2[i])
            // h2[i] +=  V[m]*V[k]*(G[m][k]*Math.cos(del[m]-del[k]) + B[m][k]*Math.sin(del[m]-del[k]))
            // console.log("h2",V[m],V[k],G[m][k],del[m],del[k],B[m][k])
        }
    }

    for (let i = 0; i < nqi; i++) {
        m = fbus[qi[i]] -1
        for (let k = 0; k < nbus; k++) {
            h3[i] = math.add(
                    h3[i],
                    math.multiply(
                        V[m],
                        V[k],
                        math.subtract(
                            math.multiply(G[m][k],Math.sin(del[m]-del[k])),
                            math.multiply(B[m][k],Math.cos(del[m]-del[k])),
                        )
                    ) 
            )
            // h3[i] +=  V[m]*V[k]*(G[m][k]*Math.sin(del[m]-del[k]) + B[m][k]*Math.cos(del[m]-del[k]))
        }
    }
    for (let i = 0; i < npf; i++) { //2
        m = fbus[pf[i]]-1
        n = tbus[pf[i]]-1
        
        // h4[i] = (-V[m])**2*G[m][n] - V[m]*V[n]*(-G[m][n])*Math.cos(del[m]-del[n]) - B[m][n]*Math.sin(del[m]-del[n]);
        h4[i] = math.subtract( 
                        math.multiply(G[m][n],-1,math.pow(V[m],2)),
                        math.multiply(
                            V[m],
                            V[n],
                            math.subtract(
                                math.multiply(-G[m][n],Math.cos(del[m]-del[n])),
                                math.multiply(B[m][n],Math.sin(del[m]-del[n]))
                            )
                        )
        )
                
    }
    for (let i = 0; i < nqf; i++) {
        m=fbus[qf[i]]-1
        n=tbus[qf[i]]-1
        // h5[i] = (-V[m])**2*(-B[m][n]+bpq[m][n]) - V[m]*V[n]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n]));
        h5[i] = math.subtract(
                        math.multiply(-1,math.pow(V[m],2),
                            // m=1 n=2 / m=1 n=3
                            math.add(-B[m][n],bpq[m][n])
                        ),
                        math.multiply(
                            V[m],
                            V[n],
                            math.add(
                                math.multiply(-G[m][n],Math.sin(del[m]-del[n])),
                                math.multiply(B[m][n],Math.cos(del[m]-del[n]))
                            )
                        )
        )
                
    }

    console.log("h1",h1)
    console.log("h2",h2)
    console.log("h3",h3)
    console.log("h4",h4)
    console.log("h5",h5)
    
    let h = [...h1, ...h2, ...h3, ...h4, ...h5];
    console.log('h',h)
    // Residue..
    // ==========

    let r = math.subtract(z, h);
    console.log('z',z)
    console.log('r',r)
    // ==========
    
    // Jacobian..
    // H11 - Derivative of V with respect to angles.. All Zeros
    let H11 = math.zeros(nvi,nbus-1)["_data"];

    // H12 - Derivative of V with respect to V.. 
    let H12 = math.zeros(nvi,nbus)["_data"];

    for (let k = 0; k < nvi; k++) {
        for (let n = 0; n < nbus; n++) {
            if(n==k){
                H12[k][n] = 1;
            }            
        }
    }


    // H21 - Derivative of Real Power Injections with Angles..
    let H21 = math.zeros(npi,nbus-1)["_data"];

    for (let i = 0; i < npi; i++) {
    
        m = fbus[ppi[i]]-1;
        for (let k = 0; k < nbus-1; k++) {
            if(k+1 == m){
                for (let n = 0; n < nbus; n++) {
                    // H21[i][k]+= V[m]*V[n]*(
                        // -G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n])
                        // );            
                    H21[i][k] = math.add(
                        H21[i][k],
                        math.multiply(
                            V[m],
                            V[n],
                            math.add(
                                math.multiply(-G[m][n],Math.sin(del[m]-del[n])),
                                math.multiply(B[m][n],Math.cos(del[m]-del[n]))
                            )
                        ),
                            
                        
                    )
                    // console.log("H21[i][k]",i,k,H21[i][k])
                }
                // H21[i][k] -= V[m]**2*B[m][m];
                H21[i][k] = math.subtract(
                    H21[i][k],
                    math.multiply( math.pow(V[m],2),B[m][m] )
                )
                console.log("after subtraction H21[i][k]",i,k,H21[i][k])
            }else{
                // H21[i][k] = V[m]* V[k+1]*(G[m][k+1]*Math.sin(del[m]-del[k+1])) - B[m][k+1]*Math.cos(del[m]-del[k+1]);
                H21[i][k] = math.multiply(
                        V[m],
                        V[k+1],
                        math.subtract(
                            math.multiply(G[m][k+1],Math.sin(del[m]-del[k+1])),
                            math.multiply(B[m][k+1],Math.cos(del[m]-del[k+1]))
                        )
                    )
                    
            }            
        }
    }


    
    
    // H22 - Derivative of Real Power Injections with V..
    let H22 = math.zeros(npi,nbus)["_data"];
    for (let i = 0; i < npi; i++) {
    
        m = fbus[ppi[i]]-1;
        for (let k = 0; k < nbus; k++) {
            if(k == m){
                for (let n = 0; n < nbus; n++) {
                    // H22[i][k]+= *V[n]*(G[m][n]*Math.cos(del[m]-del[n]) + B[m][n]*Math.sin(del[m]-del[n]));            
                    H22[i][k] = math.add(
                        H22[i][k],
                        math.multiply(
                            V[n],
                            math.add(
                                math.multiply(G[m][n],Math.cos(del[m]-del[n])),
                                math.multiply(B[m][n],Math.sin(del[m]-del[n]))
                            )
                        )
                        
                    )
                }
                // H22[i][k] += V[m]*G[m][m];
                H22[i][k] = math.add(
                    H22[i][k],
                    math.multiply(V[m],G[m][m]),
                )
            }else{
                // H22[i][k] = V[m]*(G[m][k]*Math.cos(del[m]-del[k]) - B[m][k]*Math.sin(del[m]-del[k]));
                H22[i][k] = math.multiply(
                    V[m],
                    math.add(
                        math.multiply(G[m][k],Math.cos(del[m]-del[k])),
                        math.multiply(B[m][k],Math.sin(del[m]-del[k]))
                    )
                )
            }            
        }
    }

    
    // H31 - Derivative of Reactive Power Injections with Angles..
    let H31 = math.zeros(nqi,nbus-1)["_data"];
    for (let i = 0; i < nqi; i++) {
    
        m = fbus[ppi[i]]-1;
        for (let k = 0; k < nbus-1; k++) {
            if(k+1 == m){
                for (let n = 0; n < nbus; n++) {
                    // H31[i][k]+= V[m]*V[n]*(G[m][n]*Math.cos(del[m]-del[n]) + B[m][n]*Math.sin(del[m]-del[n]));            
                    H31[i][k] = math.add(
                        H31[i][k],
                        math.multiply(
                            V[m],
                            V[n],
                            math.add(
                                math.multiply(G[m][n],Math.cos(del[m]-del[n])),
                                math.multiply(B[m][n],Math.sin(del[m]-del[n]))
                            )
                        )
                    )
                }
                // H31[i][k] -= V[m]**2*G[m][m];
                H31[i][k] = math.subtract(
                    H31[i][k],
                    math.multiply( math.pow(V[m],2),G[m][m] )
                )
            }else{
                // H31[i][k] = V[m]* V[k+1]*(-G[m][k+1]*Math.cos(del[m]-del[k])) - B[m][k+1]*Math.sin(del[m]-del[k]);
                H31[i][k] = math.multiply(
                        V[m],
                        V[k+1],
                        math.subtract(
                            math.multiply(-G[m][k+1],Math.cos(del[m]-del[k+1])),
                            math.multiply(B[m][k+1],Math.sin(del[m]-del[k+1]))
                        )
                )
                
            }            
        }
    }

    // H32 - Derivative of Reactive Power Injections with V..
    let H32 = math.zeros(nqi,nbus)["_data"];
    for (let i = 0; i < nqi; i++) {
        m = fbus[qi[i]]-1;
        for (let k = 0; k < nbus; k++) {
            if(k == m){
                for (let n = 0; n < nbus; n++) {
                    // H32[i][k]+= V[n]*(G[m][n]*Math.sin(del[m]-del[n]) - B[m][n]*Math.cos(del[m]-del[n]));   
                    H32[i][k] = math.add( 
                        H32[i][k],
                        math.multiply(
                            V[n],
                            math.subtract(
                                math.multiply(G[m][n],Math.sin(del[m]-del[n])),
                                math.multiply(B[m][n],Math.cos(del[m]-del[n]))
                            )
                        ),
                    )         
                }
                // H32[i][k] -= V[m]*B[m][m];
                H32[i][k] = math.subtract(
                    H32[i][k],
                    math.multiply(V[m],B[m][m])
                    )
            }else{
                // H32[i][k] = V[m]*(G[m][k]*Math.sin(del[m]-del[k])) - B[m][k]*Math.cos(del[m]-del[k]);
                H32[i][k] = math.multiply(
                    V[m],
                    math.subtract(
                       math.multiply(G[m][k],Math.sin(del[m]-del[k])),
                       math.multiply(B[m][k],Math.cos(del[m]-del[k]))
                    )
                )
            }            
        }
    }

    
    // H41 - Derivative of Real Power Flows with Angles..
    
    let H41 = math.zeros(npf,nbus-1)["_data"];
    // console.log("with zeros H41",H41)
    for (let i = 0; i < npf; i++) {
    
        m = fbus[pf[i]]-1;
        n= tbus[pf[i]]-1;

        for (let k = 0; k < nbus-1; k++) {
            
            if(k+1 == m){
                
                // H41[i][k]= V[m]*V[n]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n]));            
                H41[i][k] = math.multiply(
                    V[m],
                    V[n],
                    math.add(
                        math.multiply(-G[m][n],Math.sin(del[m]-del[n])),
                        math.multiply(B[m][n],Math.cos(del[m]-del[n]))   
                    )
                )
                // console.log("If H41",i,k,H41[i][k])
            }else if(k+1==n){    
                // H41[i][k] = -V[m]* V[n]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n]));
                H41[i][k] = math.multiply(
                    -V[m],
                    V[n],
                    math.add(
                        math.multiply(-G[m][n],Math.sin(del[m]-del[n])),
                        math.multiply(B[m][n],Math.cos(del[m]-del[n]))
                    )
                )
                // console.log("else If H41",i,k,H41[i][k])
            }else{
                // H41[i][k] = 0;
                H41[i][k] = 0;
                // console.log("else H41",i,k,H41[i][k])
            }           
            // console.log(`at iteration i ${i} k ${k} lst is`,H41) 
        }
    }
    
    // H42 - Derivative of Real Power Flows with V..
    let H42 = math.zeros(npf,nbus)["_data"];
    for (let i = 0; i < npf; i++) {
    
        m = fbus[pf[i]]-1;
        n= tbus[pf[i]]-1;

        for (let k = 0; k < nbus; k++) {
            if(k == m){
                // H42[i][k] = -V[n]*(-G[m][n]*Math.cos(del[m]-del[n]) - B[m][n]*Math.sin(del[m]-del[n])) - 2*G[m][n]*V[m] ;
                H42[i][k] = math.subtract(
                    math.multiply(
                        -V[n],
                        math.subtract(
                            math.multiply(-G[m][n],Math.cos(del[m]-del[n])),
                            math.multiply(B[m][n],Math.sin(del[m]-del[n]))
                        )
                    ),
                    math.multiply(2,G[m][n],V[m])
                )
            }
            else if(k == n){         
                // H42[i][k]= -V[m]*(-G[m][n]*Math.cos(del[m]-del[n]) - B[m][n]*Math.sin(del[m]-del[n]));   
                H42[i][k] = math.multiply(
                    -V[m],
                    math.subtract(
                        math.multiply(-G[m][n],Math.cos(del[m]-del[n])),
                        math.multiply(B[m][n],Math.sin(del[m]-del[n]))
                    )
                )
            }else{
                H42[i][k] = 0;

            }            
        }
    }
    
    
    // H51 - Derivative of Reactive Power Flows with Angles..
    let H51 = math.zeros(nqf,nbus-1)["_data"];
    for (let i = 0; i < nqf; i++) {
    
        m = fbus[qf[i]]-1;
        n= tbus[qf[i]]-1;

        for (let k = 0; k < nbus-1; k++) {
            if(k+1 == m){
                // H51[i][k] = -V[m]*V[n]*(-G[m][n]*Math.cos(del[m]-del[n]) - B[m][n]*Math.sin(del[m]-del[n])) ;}
                H51[i][k] = math.multiply(
                    -V[m],
                    V[n],
                    math.subtract(
                        math.multiply(-G[m][n],Math.cos(del[m]-del[n])),
                        math.multiply(B[m][n],Math.sin(del[m]-del[n]))
                    )
                )
            }
            else if(k+1 == n){         
                // H51[i][k]= V[m]*V[n]*(-G[m][n]*Math.cos(del[m]-del[n]) - B[m][n]*Math.sin(del[m]-del[n]));   
                H51[i][k] = math.multiply(
                    V[m],
                    V[n],
                    math.subtract(
                        math.multiply(-G[m][n],Math.cos(del[m]-del[n])),
                        math.multiply(B[m][n],Math.sin(del[m]-del[n]))
                    )
                )
            }else{
                H51[i][k] = 0;
            }            
        }
    }
    
    // H52 - Derivative of Reactive Power Flows with V..
    let H52 = math.zeros(nqf,nbus)["_data"];
    for (let i = 0; i < nqf; i++) {
    
        m = fbus[qf[i]]-1;
        n= tbus[qf[i]]-1;

        for (let k = 0; k < nbus; k++) {
            if(k == m){
                // H52[i][k] = -V[n]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n])) - 2*V[m]*(-B[m][n]+ bpq[m][n]) ;}
                H52[i][k] = math.subtract(
                    math.multiply(
                        -V[n],
                        math.add(
                            math.multiply(-G[m][n],Math.sin(del[m]-del[n])),
                            math.multiply(B[m][n],Math.cos(del[m]-del[n]))
                        )
                    ),
                    math.multiply(
                        2,
                        V[m],
                        math.add(
                            -B[m][n],
                            bpq[m][n]
                        )
                    )
                )
            }else if(k == n){         
                // H52[i][k]= -V[m]*(-G[m][n]*Math.sin(del[m]-del[n]) + B[m][n]*Math.cos(del[m]-del[n]));   
                H52[i][k] = math.multiply(
                    -V[m],
                    math.add(
                        math.multiply(-G[m][n],Math.sin(del[m]-del[n])),
                        math.multiply(B[m][n],Math.cos(del[m]-del[n]))
                    )
                )
            }else{
                H52[i][k] = 0;
            }            
        }
    }
    // Measurement Jacobian, H..
   
     H = [
        ...math.concat(H11,H12),
        ...math.concat(H21,H22),
        ...math.concat(H31,H32),
        ...math.concat(H41,H42),
        ...math.concat(H51,H52)
    ]
    console.log('H',H)
    // Gain Matrix, Gm..
    // let Gm = math.transpose(H)*math.inv(Ri)*H;
   

    let Gm = math.multiply(math.transpose(H),math.inv(Ri),H)
    console.log('Gm',Gm)
    
    //Objective Function..
    /*
    for (let idx = 0; idx < r.length; idx++) {
        r[idx] = r[idx]**2;
    }*/
    let r_power_2 = []
    for (const i of r) {
        r_power_2.push(i**2)
    }

  
    let J = math.sum(math.multiply(math.inv(Ri),r_power_2));  
   console.log('J',J)
    // State Vector..
   
    
    let dE = math.multiply(
        math.multiply(
            math.multiply(
                math.inv(Gm),math.transpose(H)
            ),
            math.inv(Ri)
        ),
        math.transpose(r)
    )
    console.log('dE',dE)
    
    // let dE = math.inv(Gm)*(math.transpose(H)*math.inv(Ri)*r);
    E  = math.add(E,dE)
    console.log('updated E',E)
    
    for (let i = 1; i < del.length; i++) {
        del[i] = E[i-1]
        
    }
    console.log('updated del',del)
    // V = E(nbus:end);
    // console.log(V,E)
    // V = [...E.slice(nbus-1)]
    V = [...E].slice(nbus-1)
    console.log('updated V',V)
    // console.log("V done",V)
    console.log("\n\n---------------------------iter ",iter,'\n\n')
    iter = iter + 1;

    tol = math.max(math.abs(dE));
    // console.log("tol done")
    
}while(tol > Math.exp(-4))
// ==============
// let CvE = diag(math.inv(math.transpose(H)*math.inv(Ri)*H)); // Covariance matrix..
let CvE =  math.diag(math.inv(math.multiply(math.transpose(H),math.inv(Ri),H)))
console.log('Cve',CvE)
// ==============
// console.log(Math.PI,del)
// let Del = math.divide(180,math.multiply(Math.PI,del));
let Del=[]
del.forEach(element => {
    Del.push((180/Math.PI)*element)
});
// console.log("came out")
let E2 = [...V, ...Del]; // Bus Voltages and angles..

console.log('Del',Del)
console.log("E2",E2)
console.log('-------- State Estimation ------------------');
console.log('--------------------------');
console.log('| Bus |    V   |  Angle  | ');
console.log('| No  |   pu   |  Degree | ');
console.log('--------------------------');
console.log(V)
console.log(nbus)

for (let m = 0; m < nbus; m++) {
    console.log("//4g",m)
    console.log("//8.f",V[m])
    console.log("//8.4f",Del[m])
    console.log("\n")
}
console.log('---------------------------------------------');