// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// function Ang(radians) {
//     var pi = math.PI;
//     return radians * (180 / pi);
// }
const math = require("mathjs")
let basemva = 100;
let accuracy = 0.01;
let maxiter = 5;
let Coeff = [
    [1, 1, 60, 200, 140],
    [2, 2, 75, 150, 120]
];
let F = math.zeros(Coeff.length)["_data"];
let Acost = math.zeros(Coeff.length)["_data"];
let Bcost = math.zeros(Coeff.length)["_data"];
let Ccost = math.zeros(Coeff.length)["_data"];
for (let i = 0; i < Coeff.length; i++) {
    F[i] = Coeff[i][1];
    Acost[i] = Coeff[i][2];
    Bcost[i] = Coeff[i][3];
    Ccost[i] = Coeff[i][4];
}
console.log("F A B C", F, Acost, Bcost, Ccost)
let Fno = math.max(...F);

let busdata = [
    [1, 1, 1.04, 0, 20, 10, 0, 0, 0, 0, 0],
    [2, 2, 1.04, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 1.00, 0, 150, 6, 0, 0, 0, 0, 0]
];
//create empty arrays
let bno = math.zeros(busdata.length)["_data"];
let bcode = math.zeros(busdata.length)["_data"];
let V = math.zeros(busdata.length)["_data"];
let Ang = math.zeros(busdata.length)["_data"];
let PD = math.zeros(busdata.length)["_data"];
let QD = math.zeros(busdata.length)["_data"];
let PG = math.zeros(busdata.length)["_data"];
let QG = math.zeros(busdata.length)["_data"];
let Qmin = math.zeros(busdata.length)["_data"];
let Qmax = math.zeros(busdata.length)["_data"];
let Qinj = math.zeros(busdata.length)["_data"];
for (let i = 0; i < busdata.length; i++) {
    bno[i] = busdata[i][0];
    bcode[i] = busdata[i][1];
    V[i] = busdata[i][2];
    Ang[i] = busdata[i][3];
    PD[i] = (busdata[i][4]) / basemva;
    QD[i] = busdata[i][5] / basemva;
    PG[i] = busdata[i][6];
    QG[i] = busdata[i][7];
    Qmin[i] = busdata[i][8];
    Qmax[i] = busdata[i][9];
    Qinj[i] = busdata[i][10];
}
console.log("bno", bno)
console.log("bcode", bcode)
console.log("V", V)
console.log("Ang", Ang)
console.log("PD", PD)
console.log("QD", QD)
console.log("PG", PG)
console.log("QG", QG)
console.log("Qmin", Qmin)
console.log("Qmax", Qmax)
console.log("Qinj", Qinj)

let linedata = [
    [1, 2, 0.02, 0.08, 0.02, 1, 295],
    [1, 3, 0.02, 0.08, 0.02, 1, 295],
    [2, 3, 0.02, 0.08, 0.02, 1, 295]
];
// let j = math.sqrt(-1);
// let i = math.sqrt(-1);
let sb = math.zeros(linedata.length)["_data"];
let eb = math.zeros(linedata.length)["_data"];
let r = math.zeros(linedata.length)["_data"];
let x = math.zeros(linedata.length)["_data"];
let b = math.zeros(linedata.length)["_data"];
let tap = math.zeros(linedata.length)["_data"];

for (i = 0; i < linedata.length; i++) {
    sb[i] = linedata[i][0];
    eb[i] = linedata[i][1];
    r[i] = linedata[i][2];
    x[i] = linedata[i][3];
    b[i] = (linedata[i][4]) * 5;
    tap[i] = linedata[i][5];
}
console.log("tap==", tap)
let nbr = linedata.length;
for (let i = 0; i < nbr; i++) {
    if (tap[i] <= 0) {
        tap[i] = 1;
    }
}
console.log("sb", sb)
console.log("eb", eb)
console.log("r", r)
console.log("x", x)
console.log("b", b)
console.log("tap", tap)

let nbus = math.max(math.max(...sb), math.max(...eb));
console.log("nbus", nbus)
// let Z = r + j * x;
// console.log("complex of x ",math.complex(x))
// let Z = math.add(r, math.complex(0,x))
let Z = []
for (let index = 0; index < r.length; index++) {
    Z.push(math.complex(r[index], x[index]))

}
let y = math.dotDivide(math.ones(nbr)["_data"], Z)
let Y = math.zeros(nbus, nbus)["_data"]
console.log("Z y Y", Z, y, Y)
for (let k = 0; k < nbr; k++) {
    // Y[sb[k] - 1][eb[k] - 1] = Y[sb[k] - 1][eb[k] - 1] - y[k] / tap[k];
    // Y[eb[k] - 1][sb[k] - 1] = Y[sb[k] - 1][eb[k] - 1];

    Y[sb[k] - 1][eb[k] - 1] = math.divide(
        math.subtract(
            Y[sb[k] - 1][eb[k] - 1],
            y[k],
        ),
        tap[k]
    )
    Y[eb[k] - 1][sb[k] - 1] = Y[sb[k] - 1][eb[k] - 1];

} //needs to be checked
console.log("Y here", Y)
for (let n = 0; n < nbus; n++) {
    for (let k = 0; k < nbr; k++) {
        if (sb[k] - 1 == n) {
            console.log("is err her 1")
            // Y[n][n] = Y[n][n] + y[k] / math.pow(tap[k], 2) + b[k];
            Y[n][n] = math.add(Y[n][n], b[k], math.divide(y[k], math.pow(tap[k], 2)))
            console.log("is err her 2")
        } else if (eb[k] - 1 == n) {
            console.log("no")
            // Y[n][n] = Y[n][n] + y[k] + b[k];
            Y[n][n] = math.add(Y[n][n], y[k], b[k])
            console.log("no 2")
        }
    }
}
console.log("Y==", Y)
//let G=math.//line 69 of matlab
let G = math.re(Y);
let B = math.im(Y);
console.log("G B", G, B)
let ns = 0;
let ng = 0;
let nl = 0;
let ngs = math.zeros(nbus)["_data"];
let nss = math.zeros(nbus)["_data"];
for (let k = 0; k < nbus; k++) {
    if (bcode[k] == 1) {
        ns = ns + 1;
    }
    if (bcode[k] == 2) {
        ng = ng + 1;
    }
    if (bcode[k] == 0) {
        nl = nl + 1;
    }
    ngs[k] = ng;
    nss[k] = ns;
    //insert ngs and nss ka k
}
let Pdem = math.sum(PD);
let Qdem = math.sum(QD);
let lamiter1 = 0;
let lamiter2 = 0;
for (let i = 0; i < (ns + ng); i++) {
    lamiter1 = lamiter1 + Bcost[i] / (2 * Acost[i]);
    lamiter2 = lamiter2 + 1 / (2 * Acost[i]);
}
console.log("Pdem Qdem lamiter1 lamiter2", Pdem, Qdem, lamiter1, lamiter2)
let lambdap = math.zeros(nbus)["_data"]
let lambdaq = math.zeros(nbus)["_data"]
let Pg = math.zeros(nbus)["_data"]
let Qg = math.zeros(nbus)["_data"]
for (let i = 0; i < nbus; i++) {
    if (bcode[i] != 0) {
        lambdap[i] = (Pdem + lamiter1) / lamiter2;
        lambdaq[i] = 0;
        Pg[i] = ((lambdap[i] - Bcost[i]) / (2 * Acost[i]));
        Qg[i] = Pg[i] * Qdem / Pdem;
    } else if (bcode[i] == 0) {
        lambdap[i] = 0;
        lambdaq[i] = 0;
        Pg[i] = 0;
        Qg[i] = 0;
    }
}
console.log("Some updates bfr while loo")
console.log("lambdap", lambdap)
console.log("lambdaq", lambdaq)
console.log("Pg", Pg)
console.log("Qg", Qg)
console.log("=========")
let iter = 0;
let maxerror = 1;
let Q = math.zeros(nbus)["_data"]

let Psp = math.zeros(nbus)["_data"]
let Qsp = math.zeros(nbus)["_data"]
let P = math.zeros(nbus)["_data"]
let Pcal = math.zeros(nbus)["_data"]
let Qcal = math.zeros(nbus)["_data"]

while (maxerror >= accuracy && iter <= maxiter) {
    iter = iter + 1;
    for (let iii = 0; iii < nbus; iii++) {
        for (let jjj = 0; jjj < nbus; jjj++) {
            // Pcal[iii] = Pcal[iii] + V[iii] * V[jjj] * (G[iii][jjj] * math.cos(Ang[iii] - Ang[jjj]) + B[iii][jjj] * math.sin(Ang[iii] - Ang[jjj]));
            Pcal[iii] = math.add(
                Pcal[iii],
                math.multiply(
                    V[iii], V[jjj],
                    math.add(
                        math.multiply(G[iii][jjj], math.cos(Ang[iii] - Ang[jjj])),
                        math.multiply(B[iii][jjj], math.sin(Ang[iii] - Ang[jjj]))
                    )
                )
            )
            // Qcal[iii] = Qcal[iii] + V[iii] * V[jjj] * (G[iii][jjj] * math.sin(Ang[iii] - Ang[jjj]) - B[iii][jjj] * math.cos(Ang[iii] - Ang[jjj]));
            Qcal[iii] = math.add(
                Pcal[iii],
                math.multiply(
                    V[iii], V[jjj],
                    math.subtract(
                        math.multiply(G[iii][jjj], math.sin(Ang[iii] - Ang[jjj])),
                        math.multiply(B[iii][jjj], math.cos(Ang[iii] - Ang[jjj]))
                    )
                )
            )
        }
    }


    for (let i = 0; i < nbus; i++) {
        Psp[i] = Pg[i] - PD[i];
        Qsp[i] = Qg[i] - QD[i];
        P[i] = Pcal[i];
        Q[i] = Qcal[i];
    }
    if (iter == 1) {
        console.log('    Bus  Voltage  Angle    -----Load (p.u)---  ---Gen(p.u)--    Calcul_Power              Lambda          ')
        console.log('    No.  Mag.     Degree     PD        QD      PG       QG       Pcal      Qcal      LambdaP      LambdaQ ')
        console.log("\n")
        for (let n = 0; n < nbus; n++) {
            console.log(
                n
                , V[n]
                , Ang[n]
                , PD[n]
                , QD[n]
                , Pg[n]
                , Qg[n]
                , Pcal[n]
                , Qcal[n]
                , lambdap[n]
                , lambdaq[n]
            );

        }
    }
    let xxx1 = math.zeros(ns + ng)["_data"]
    for (let i = 0; i < (ng + ns); i++) {
        xxx1[i] = 2 * Acost[i] * Pg[i] + Bcost[i] - lambdap[i];
    }
    console.log("xxx1", xxx1)
    let DLDPG = math.transpose(xxx1);
    console.log("tr xxx1", DLDPG)
    let dd11 = math.zeros(nbus)["_data"]
    let dd12 = math.zeros(nbus)["_data"]
    let qq11 = math.zeros(nbus)["_data"]
    let qq12 = math.zeros(nbus)["_data"]

    for (let k = 0; k < nbus; k++) {
        if (bcode[k] != 1) { //need to modify this
            for (let i = 0; i < nbus; i++) {
                if (i != k) {
                    // dd11[k] = dd11[k] + lambdap[i] * V[i] * V[k] * (G[i][k] * math.sin(Ang[i] - Ang[k]) - B[i][k] * math.cos(Ang[i] - Ang[k]));
                    dd11[k] = math.add(
                        dd11[k],
                        math.multiply(lambdap[i], V[i], V[k],
                            math.subtract(
                                math.multiply(G[i][k], math.sin(Ang[i] - Ang[k])),
                                math.multiply(B[i][k], matanh.cos(Ang[i] - Ang[k]))
                            )
                        )
                    )
                    if (bcode[i] == 0) {
                        // qq11[k] = qq11[k] + lambdaq[i] * V[i] * V[k] * (-G[i][k] * math.cos(Ang[i] - Ang[k]) - B[i][k] * math.sin(Ang[i] - Ang[k]));
                        qq11[k] = math.add(
                            qq11[k],
                            math.multiply(lambdaq[i], V[i], V[k],
                                math.subtract(
                                    math.multiply(-G[i][k], math.cos(Ang[i] - Ang[k])),
                                    math.multiply(B[i][k], matanh.sin(Ang[i] - Ang[k]))
                                )
                            )
                        )
                    }
                } else if (i == k) {
                    for (let s = 0; s < nbus; s++) {
                        if (k != (s)) {
                            // dd12[k] = dd12[k] + lambdap[k] * V[k] * V[s] * (-G[k][s] * math.sin(Ang[k] - Ang[s]) + B[k][s] * math.cos(Ang[k] - Ang[s]));
                            dd12[k] = math.add(
                                dd12[k], math.multiply(
                                    lambdap[k], V[k], V[s],
                                    math.add(
                                        math.multiply(-G[k][s], math.sin(Ang[k] - Ang[s])),
                                        math.multiply(B[k][s], math.cos(Ang[k] - Ang[s]))
                                    )
                                )
                            )
                            if (bcode[k] == 0) {
                                // qq12[k] = qq12[k] + lambdaq[k] * V[k] * V[s] * (G[k][s] * math.cos(Ang[k] - Ang[s]) + B[k][s] * math.sin(Ang[k] - Ang[s]));
                                qq12[k] = math.add(
                                    qq12[k], math.multiply(
                                        lambdaq[k], V[k], V[s],
                                        math.add(
                                            math.multiply(G[k][s], math.cos(Ang[k] - Ang[s])),
                                            math.multiply(B[k][s], math.sin(Ang[k] - Ang[s]))
                                        )
                                    )
                                )
                            }
                        }
                    }
                }
            }

        }

    }
    console.log(dd11, qq11, dd12, qq12, math.add(dd11, qq11, dd12, qq12))
    let xxx2 = math.add(dd11, qq11, dd12, qq12)
    console.log("xxx2", xxx2)
    let DLDEL = math.transpose(xxx2.slice(1, nbus)) ///not known
    console.log("DLDEL", DLDEL)
    let pv11 = math.zeros(nbus)["_data"]
    let pv12 = math.zeros(nbus)["_data"]
    let qv11 = math.zeros(nbus)["_data"]
    let qv12 = math.zeros(nbus)["_data"]
    for (let k = 0; k < nbus; k++) {
        if (bcode[k] == 0) {
            for (let i = 0; i < nbus; i++) {
                if (i != (k)) {
                    // pv11[k] = pv11[k] + lambdap[i] * V[i] * (G[i][k] * math.cos(Ang[i] - Ang[k]) + B[i][k] * math.sin(Ang[i] - Ang[k]));
                    pv11[k] = math.add(
                        pv11[k], math.multiply(
                            lambdap[i], V[i], math.add(
                                math.multiply(G[i][k], math.cos(Ang[i] - Ang[k])),
                                math.multiply(B[i][k], math.sin(Ang[i] - Ang[k]))
                            )
                        )
                    )
                    if (bcode[i] == 0) {
                        // qv11[k] = qv11[k] + lambdaq[i] * V[i] * (G[i][k] * math.sin(Ang[i] - Ang[k]) - B[i][k] * math.cos(Ang[i] - Ang[k]));
                        qv11[k] = math.add(
                            qv11[k], math.multiply(
                                lambdaq[i], V[i], math.subtract(
                                    math.multiply(G[i][k], math.sin(Ang[i] - Ang[k])),
                                    math.multiply(B[i][k], math.cos(Ang[i] - Ang[k]))
                                )
                            )
                        )
                    }
                } else if (i == k) {
                    for (let s = 0; s < nbus; s++) {
                        if (k != (s)) {
                            // pv12[k] = pv12[k] + lambdap[k] * V[s] * (G[k][s] * math.cos(Ang[k] - Ang[s]) + B[k][s] * math.sin(Ang[k] - Ang[s]));
                            pv12[k] = math.add(
                                pv12[k], math.multiply(
                                    lambdap[k], V[s], math.add(
                                        math.multiply(G[k][s], math.cos(Ang[k] - Ang[s])),
                                        math.multiply(B[k][s], math.sin(Ang[k] - Ang[s]))

                                    )
                                )
                            )
                            // qv12[k] = qv12[k] + lambdap[k] * V[s] * (G[k][s] * math.sin(Ang[k] - Ang[s]) - B[k][s] * math.cos(Ang[k] - Ang[s]));
                            qv12[k] = math.add(
                                qv12[k], math.multiply(
                                    lambdap[k], V[s], math.subtract(
                                        math.multiply(G[k][s], math.sin(Ang[k] - Ang[s])),
                                        math.multiply(B[k][s], math.cos(Ang[k] - Ang[s]))

                                    )
                                )
                            )
                        } else if (k == s) {
                            // pv12[k] = pv12[k] + lambdap[k] * 2 * V[k] * G[k][k];
                            pv12[k] = math.add(
                                pv12[k], math.multiply(lambdap[k], 2, V[k], G[k][k])
                            )
                            // qv12[k] = qv12[k] - lambdap[k] * 2 * V[k] * B[k][k];
                            qv12[k] = math.subtract(
                                qv12[k], math.multiply(lambdap[k], 2, V[k], B[k][k])
                            )
                        }
                    }
                }
            }
        }
    }
    // ==============================
    xxx3 = math.add(pv11, qv11, pv12, qv12);
    let DLDV = xxx3.slice(ns + ng)///need to code

    xxx5 = math.zeros(nbus)["_data"];
    xxx4 = math.zeros(nbus)["_data"];
    for (let i = 0; i < nbus; i++) {
        xxx5[i] = P[i] - Pg[i] + PD[i];
    }
    console.log("err here")
    let DLDLAMP = math.transpose(xxx5);
    console.log("no err")
    for (let k = 0; k < nbus; k++) {
        if (bcode[k] == 0) {
            xxx4[k] = Q[k] - Qg[k] + QD[k];
        }
    }
    let DLDLAMQ = xxx4.slice(ns + ng)//need to code
    console.log("HPGMSASDD INI")
    let JACOBIAN = [
        DLDPG,
        DLDEL,
        DLDV,
        DLDLAMP,
        DLDLAMQ
    ].flat();
    console.log("JACOBIAN", JACOBIAN)
    JACOBIAN = math.multiply(JACOBIAN, -1)
    console.log("HPGMSASDD INI")
    // Example:-Variable [DX] is size [1x9] matrix for 3 bus system [H][DX]=-[J]
    // =========================================================================
    // Solve the equation [H][DX]=-[J] and find [DX]====% H=[ d2Ldpg  d2Lddel d2Ldv d2LdlamP d2LdlamQ];
    // Hessian [H] Matrix Element computation % Example for 3 bus system [H] size is (9x9) matrix
    // =========================================================================
    //  HPGPG		HPGDEL	  HPGDV     HPGLAMP     HPGLAMQ
    //  HDELPG		HDEL	  HDELDV    HDELLAMP	HDELLAMQ
    //  HDVPG		HDVDEL	  HDVDV	    HDVLAMP		HDVLAMQ
    //  HLAMPPG		HLAMPDEL  HLAMPDV	HLAMPP      HLAMPQ
    //  HLAMQPG		HLAMQDEL  HLAMQDV	HLAMQP      HLAMQQ
    // =========================================================================

    let HPGPG = math.zeros(ng + ns, ng + ns)["_data"]
    let HPGDEL = math.zeros(ng + ns, ng + ns)["_data"]
    let HPGDV = math.zeros(ng + ns, ng + ns)["_data"]
    let HPGLAMP = math.zeros(ng + ns, ng + ns)["_data"]
    let HPGLAMQ = math.zeros(ng + ns, ng + ns)["_data"]
    console.log("HPGMSASDD INI")
    for (let ii = 0; i < nbus; ii++) {
        if (bcode[ii] != 0) {
            for (let jj = 0; jj < nbus; jj++) {
                if (bcode[jj] != (0)) {
                    if (ii == jj) {
                        // HPGPG[ii][jj] = 2 * Acost[ii];
                        HPGPG[ii][jj] = math.multiply(2, Acost[ii])
                    } else if (ii != jj) {
                        HPGPG[ii][jj] = 0;
                    }
                }
                if (bcode[jj] != (1)) {
                    if (ii == jj) {
                        HPGDEL[ii][jj] = 0;
                    } else if (ii != jj) {
                        HPGDEL[ii][jj] = 0;
                    }
                }
                if (ii == jj) {
                    HPGLAMP[ii][jj] = -1;
                } else if (ii != (jj)) {
                    HPGLAMP[ii][jj] = 0;
                }
                if (bcode[jj] == 0) {
                    if (ii == jj) {
                        HPGDV[ii][jj] = 0;
                        HPGLAMQ[ii][jj] = 0;
                    } else if (ii != (jj)) {
                        HPGDV[ii][jj] = 0;
                        HPGLAMPQ[ii][jj] = 0;
                    }
                }
            }
        }
    }

    //292 to 294
    // HPGDEL = HPGDEL(:, 2:nbus);
    // HPGDV = HPGDV(:, ns + ng + 1:nbus);
    // HPGLAMQ = HPGLAMQ(:, ns + ng + 1:nbus);
    console.log("line 391 done")
    let HPGDEL__1 = []
    let HPGDV__1 = []
    let HPGLAMQ__1 = []
    for (const arr of HPGDEL) {
        HPGDEL__1.push(arr.slice(1))
    }
    for (const arr of HPGDV) {
        HPGDV__1.push(arr.slice(1))
    }
    for (const arr of HPGLAMQ) {
        HPGLAMQ__1.push(arr.slice(1))
    }
    HPGDEL = HPGDEL__1
    HPGDV = HPGDV__1
    HPGLAMQ = HPGLAMQ__1

    let YY1 = [...HPGPG, ...HPGDEL, ...HPGDV, ...HPGLAMP, ...HPGLAMQ]; // HESSIAN FIRST ROW
    //==========================================================================
    // HDELPG	HDEL	 HDELLAMP	HDELDV	HDELLAMQ ===HESSIAN===SCEOND_ROW===
    console.log("line 411 done")


    let HDELPG = math.zeros(nbus, nbus)["_data"];
    let HDEL = math.zeros(nbus, nbus)["_data"];
    let HDELDV = math.zeros(nbus, nbus)["_data"];
    let HDELLAMP = math.zeros(nbus, nbus)["_data"];
    let HDELLAMQ = math.zeros(nbus, nbus)["_data"];
    console.log("line 419 done")

    let HPPP = 0
    for (let ii = 0; ii < nbus; ii++) {
        console.log("423 ")
        if (bcode[ii] != 1) {
            for (let kk = 0; kk < nbus; kk++) {
                if (bcode[kk] != 1) {
                    HDELPG[ii][kk] = 0;
                }
            }
        }
    }
    console.log("line 430 done")

    let HDELPS = math.zeros(nbus)["_data"];
    let HDELSQ = math.zeros(nbus)["_data"];
    let HDELOFFP1 = math.zeros(nbus)["_data"];
    let HDELOFFQ2 = math.zeros(nbus)["_data"];
    //Calculation of Self and Mutual Term of HDEL  % Generalized code
    console.log("line 434 done")
    for (let ii = 0; ii < nbus; ii++) {
        if (bcode[ii] != 1) {
            for (let kk = 0; kk < nbus; kk++) {
                if (bcode[kk] != 1) {
                    if (ii == kk) {
                        for (let jj = 0; jj < nbus; jj++) {
                            if (jj != kk) {
                                // HDELPS[jj] = - lambdap[jj] * V[jj] * V[kk] * ((G[jj][kk]) * math.cos(Ang[jj] - Ang[kk]) + B[jj][kk] * math.sin(Ang[jj] - Ang[kk]));
                                HDELPS[jj] = math.multiply(
                                    -lambdap[jj], V[jj], V[kk], math.add(
                                        math.multiply(G[jj][kk]), math.cos(Ang[jj] - Ang[kk]),
                                        math.multiply(B[jj][kk], math.sin(Ang[jj] - Ang[kk]))
                                    )
                                )
                                if (bcode[jj] == 0) {
                                    // HDELSQ[jj] = lambdap[jj] * V[jj] * V[kk] * (-G[jj][kk] * math.cos(Ang[jj] - Ang[kk]) + B[jj][kk] * math.sin(Ang[jj] - Ang[kk]));
                                    HDELPS[jj] = math.multiply(
                                        lambdap[jj], V[jj], V[kk], math.add(
                                            math.multiply(-G[jj][kk]), math.cos(Ang[jj] - Ang[kk]),
                                            math.multiply(B[jj][kk], math.sin(Ang[jj] - Ang[kk]))
                                        )
                                    )
                                }
                            } else if (jj == kk) {
                                for (let ss = 0; ss < nbus; ss++) {
                                    if (ss != kk) {
                                        // HPPP = HPPP + V[kk] * V[ss] * (-G[kk][ss] * math.cos(Ang[kk] - Ang[ss]) + B[kk][ss] * math.sin(Ang[kk] - Ang[ss]));
                                        HPPP = math.add(
                                            HPPP, math.multiply(
                                                V[kk], V[ss], math.add(
                                                    math.multiply(-G[kk][ss], math.cos(Ang[kk] - Ang[ss])),
                                                    math.multiply(B[kk][ss], math.sin(Ang[kk] - Ang[ss]))
                                                )
                                            )
                                        )
                                    }
                                }
                                HDELPS[jj] = HPPP * lambdap[jj];
                            }
                        }
                        HDEL[ii][kk] = math.sum(HDELPS) + math.sum(HDELSQ);
                    }
                    if (ii != kk) {
                        for (let jj = 0; jj < nbus; jj++) {
                            if (bcode[kk] == 2 || bcode[kk] == 0) {
                                if (ii == jj) {
                                    // HDELOFFP1[jj] = lambdap[jj] * V[ii] * V[kk] * (G[ii][kk] * math.cos(Ang[ii] - Ang[kk]) + B[ii][kk] * math.sin(Ang[ii] - Ang[kk]));
                                    HDELOFFP1[jj] = math.multiply(
                                        lambdap[jj], V[ii], V[kk], math.add(
                                            math.multiply(G[ii][kk], math.cos(Ang[ii] - Ang[kk])),
                                            math.multiply(B[ii][kk], math.sin(Ang[ii] - Ang[kk]))
                                        )
                                    )
                                }
                                if (kk == jj) {
                                    // HDELOFFP1[jj] = lambdap[jj] * V[kk] * V[ii] * (G[kk][ii] * math.cos(Ang[kk] - Ang[ii]) + B[kk][ii] * math.sin(Ang[kk] - Ang[ii]));
                                    HDELOFFP1[jj] = math.multiply(
                                        lambdap[jj], V[ii], V[kk], math.add(
                                            math.multiply(G[kk][ii], math.cos(Ang[kk] - Ang[ii])),
                                            math.multiply(B[kk][ii], math.sin(Ang[kk] - Ang[ii]))
                                        )
                                    )
                                }
                                if (bcode[jj] == 0) {
                                    if (jj == ii) {
                                        // HDELOFFQ2[jj] = lambdaq[jj] * V[ii] * V[kk] * (G[ii][kk] * math.sin(Ang[ii] - Ang[kk]) - B[ii][kk] * math.cos(Ang[ii] - Ang[kk]));
                                        HDELOFFQ2[jj] = math.multiply(
                                            lambdaq[jj], V[ii], V[kk], math.subtract(
                                                math.multiply(G[ii][kk], math.sin(Ang[ii] - Ang[kk])),
                                                math.multiply(B[ii][kk], math.cos(Ang[ii] - Ang[kk]))
                                            )
                                        )
                                    }
                                    if (jj == kk) {
                                        // HDELOFFQ2[jj] = lambdaq[jj] * V[kk] * V[ii] * (G[kk][ii] * math.sin(Ang[kk] - Ang[ii]) - B[kk][ii] * math.cos(Ang[kk] - Ang[ii]));
                                        HDELOFFQ2[jj] = math.multiply(
                                            lambdaq[jj], V[ii], V[kk], math.subtract(
                                                math.multiply(G[kk][ii], math.sin(Ang[kk] - Ang[ii])),
                                                math.multiply(B[kk][ii], math.cos(Ang[kk] - Ang[ii]))
                                            )
                                        )
                                    }
                                }
                            }
                        }
                        HDEL[ii][kk] = math.sum(HDELOFFP1) + math.sum(HDELOFFQ2);
                    }
                }
            }
        }
        //364 and 365
        HDELPS = math.zeros(nbus)["_data"];
        HDELSQ = math.zeros(nbus)["_data"];
        hs = 0;
        HDELOFFP1 = math.zeros(nbus)["_data"];
        HDELOFFQ2 = math.zeros(nbus)["_data"];
    }
    let HDELP12 = math.zeros(nbus)["_data"]
    let HDELP22 = math.zeros(nbus)["_data"]
    let HDELP33 = math.zeros(nbus)["_data"]
    let HDELQ12 = math.zeros(nbus)["_data"]
    let HDELQ22 = math.zeros(nbus)["_data"]
    let HDELQ33 = math.zeros(nbus)["_data"]
    let SAMTQ = 0;
    let SAMTOT = 0;
    console.log("line 496 done")
    for (let ii = 0; ii < nbus; ii++) {
        if (bcode[ii] != 1) {
            for (let kk = 0; kk < nbus; kk++) {
                if (bcode[kk] == 0) {
                    if (ii != kk) {
                        for (let ss = 0; ss < nbus; ss++) {
                            if (ss == ii) {
                                // HDELP12[ss] = lambdap[ii] * V[ii] * ((-G[ii][kk]) * math.sin(Ang[ii] - Ang[kk]) + B[ii][kk] * math.cos(Ang[ii] - Ang[kk]));
                                HDELP12[ss] = math.multiply(
                                    lambdap[ii], V[ii], math.add(
                                        math.multiply(-G[ii][kk], math.sin(Ang[ii] - Ang[kk])),
                                        math.multiply(B[ii][kk], math.cos(Ang[ii] - Ang[kk]))
                                    )
                                )
                            }
                            if (ss == kk) {
                                // HDELP12[ss] = lambdap[kk] * V[ii] * ((G[kk][ii]) * math.sin(Ang[kk] - Ang[ii]) - B[kk][ii] * math.cos(Ang[kk] - Ang[ii]));
                                HDELP12[ss] = math.multiply(
                                    lambdap[kk], V[ii], math.subtract(
                                        math.multiply(G[kk][ii], math.sin(Ang[kk] - Ang[ii])),
                                        math.multiply(B[kk][ii], math.cos(Ang[kk] - Ang[ii]))
                                    )
                                )
                            }
                            if (bcode[ss] == 0) {
                                if (ss == kk) {
                                    HDELQ12[ss] = lambdaq[kk] * V[ii] * ((-G[kk][ii]) * math.cos(Ang[kk] - Ang[ii]) - B[kk][ii] * math.sin(Ang[kk] - Ang[ii]));
                                    HDELQ12[ss] = math.multiply(
                                        lambdaq[kk], V[ii], math.subtract(
                                            math.multiply(-G[kk][ii], math.cos(Ang[kk] - Ang[ii])),
                                            math.multiply(B[kk][ii], math.sin(Ang[kk] - Ang[ii]))
                                        )
                                    )
                                }
                            }
                        }
                        HDELDV[ii][kk] = math.sum(HDELP12) + math.sum(HDELQ12);
                    }
                }
                if (ii == kk) {
                    for (let nn = 0; nn < nbus; nn++) {
                        if (nn != kk) {
                            // HDELP22[nn] = lambdap[nn] * V[nn] * (G[nn][ii]) * (math.sin(Ang[nn] - Ang[ii]) - B[nn][ii] * math.cos(Ang[nn] - Ang[ii]));
                            HDELP22[nn] = math.multiply(
                                lambdap[nn], V[nn], math.subtract(
                                    math.multiply(G[nn][ii], math.sin(Ang[nn] - Ang[ii])),
                                    math.multiply(B[nn][ii], math.cos(Ang[nn] - Ang[ii]))
                                )
                            )
                            if (bcode[nn] == 0) {
                                //HDELQ22[nn] = lambdaq[nn] * V[nn] * ((-G[nn][ii]) * (math.cos(Ang[nn] - Ang[ii]) - B[nn][ii] * math.sin(Ang[nn] - Ang[ii])));
                                HDELQ22[nn] = math.multiply(
                                    lambdaq[nn], V[nn], math.subtract(
                                        math.multiply(-G[nn][ii], math.cos(Ang[nn] - Ang[ii])),
                                        math.multiply(B[nn][ii], math.sin(Ang[nn] - Ang[ii]))
                                    )
                                )
                            }
                        } else if (nn == kk) {
                            for (let ff = 0; ff < nbus; ff++) {
                                if (ff != kk) {
                                    // SAMTOT = SAMTOT + V[ff] * (-G[kk][ff] * math.sin(Ang[kk] - Ang[ff]) + B[kk][ff] * math.cos(Ang[kk] - Ang[ff]));
                                    SAMTOT = math.add(
                                        SAMTOT,
                                        math.multiply(
                                            V[ff],
                                            math.add(
                                                math.multiply(-G[kk][ff] * math.sin(Ang[kk] - Ang[ff])),
                                                math.multiply(B[kk][ff] * math.cos(Ang[kk] - Ang[ff]))
                                            )
                                        )
                                    )
                                    // SAMTQ = SAMTQ + V[ff] * (G[kk][ff] * math.cos(Ang[kk] - Ang[ff]) + B[kk][ff] * math.sin(Ang[kk] - Ang[ff]));
                                }
                            }
                            HDELP33[nn] = lambdap[nn] * SAMTOT;
                            HDELQ33[nn] = lambdaq[nn] * SAMTQ;
                        }
                    }
                    HDELDV[ii][kk] = math.sum(HDELP22) + math.sum(HDELQ22) + math.sum(HDELP33) + math.sum(HDELQ33);
                }
            }
        }
    }


    ///////varun

    HDELP12 = math.zeros(nbus)["_data"];
    HDELQ12 = math.zeros(nbus)["_data"];
    HDELP22 = math.zeros(nbus)["_data"];
    HDELQ22 = math.zeros(nbus)["_data"];
    HDELP33 = math.zeros(nbus)["_data"];
    HDELQ33 = math.zeros(nbus)["_data"];
    SAMTQ = 0;
    SAMTOT = 0;

    let HDELLAMPA = 0;
    let HDELLAMQA = 0;
    for (let iii = 0; iii < nbus; iii++) {
        if (bcode[iii] != 1) {
            for (let jjj = 0; jjj < nbus; jjj++) {
                if (iii != jjj) {
                    // HDELLAMP[iii][jjj] = V[jjj] * V[iii] * ((G[jjj][iii]) * math.sin(Ang[jjj] - Ang[iii]) - B[jjj][iii] * math.cos(Ang[jjj] - Ang[iii]));
                    HDELLAMP[iii][jjj] = math.multiply(
                        V[jjj], V[iii],
                        math.subtract(
                            math.multiply((G[jjj][iii]), math.sin(Ang[jjj] - Ang[iii])),
                            math.multiply(B[jjj][iii], math.cos(Ang[jjj] - Ang[iii]))
                        )
                    )
                    if (bcode[jjj] == 0) {
                        // HDELLAMQ[iii][jjj] = V[jjj] * V[iii] * ((-G[jjj][iii]) * math.cos(Ang[jjj] - Ang[iii]) - B[jjj][iii] * math.sin(Ang[jjj] - Ang[iii]));
                        HDELLAMQ[iii][jjj] = math.multiply(
                            V[jjj], V[iii],
                            math.subtract(
                                math.multiply((-G[jjj][iii]) * math.cos(Ang[jjj] - Ang[iii])),
                                math.multiply(B[jjj][iii] * math.sin(Ang[jjj] - Ang[iii]))
                            )
                        )
                    }
                } else if (iii == jjj) {
                    for (let kkk = 0; kkk < nbus; kkk++) {
                        if (iii != kkk) {
                            // HDELLAMPA = HDELLAMPA + V[iii] * V[kkk] * ((-G[iii][kkk]) * math.sin(Ang[iii] - Ang[kkk]) + B[iii][kkk] * math.cos(Ang[iii] - Ang[kkk]));
                            HDELLAMPA = math.add(
                                HDELLAMPA,
                                math.multiply(
                                    V[iii], V[kkk],
                                    math.add(
                                        math.multiply((-G[iii][kkk]), math.sin(Ang[iii] - Ang[kkk])),
                                        math.multiply(B[iii][kkk], math.cos(Ang[iii] - Ang[kkk]))
                                    )
                                )
                            )
                            if (bcode[jjj] == 0) {
                                // HDELLAMQA = HDELLAMQA + V[jjj] * V[kkk] * ((G[jjj][kkk]) * math.cos(Ang[iii] - Ang[kkk]) + B[iii][kkk] * math.sin(Ang[iii] - Ang[kkk]));
                                HDELLAMQA = math.add(
                                    HDELLAMQA,
                                    math.multiply(
                                        V[jjj], V[kkk],
                                        math.add(
                                            math.multiply((G[jjj][kkk]), math.cos(Ang[iii] - Ang[kkk])),
                                            math.multiply(B[iii][kkk], math.sin(Ang[iii] - Ang[kkk]))
                                        )

                                    )
                                )
                            }
                        }
                    }
                    HDELLAMP[iii][jjj] = HDELLAMPA;
                    HDELLAMQ[iii][jjj] = HDELLAMQA;

                }
            }
            HDELLAMPA = 0;
            HDELLAMQA = 0;
        }
    }
    //446 to 457


    // YYY1 = HDELPG (2:nbus, 2:nbus);
    // YYY2 = HDEL (2:nbus, 2:nbus);
    // YYY3 = HDELDV (2:nbus, ns + ng + 1:nbus); % Error Identified
    // YYY4 = HDELLAMP(2:nbus, :);
    // YYY5 = HDELLAMQ(2:nbus, ns + ng + 1:nbus);



    let YYY1 = []
    let YYY2 = []
    let YYY3 = []
    let YYY4 = []
    let YYY5 = []

    for (const arr of HDELPG.slice(1, nbus)) {
        YYY1.push(arr.slice(1, nbus))
    }
    for (const arr of HDEL.slice(1, nbus)) {
        YYY2.push(arr.slice(1, nbus))
    }
    for (const arr of HDELDV.slice(1, nbus)) {
        YYY3.push(arr.slice(ns + ng, nbus))
    }
    for (const arr of HDELLAMP.slice(1, nbus)) {
        YYY4.push(arr)
    }
    for (const arr of HDELLAMQ.slice(1, nbus)) {
        YYY5.push(arr.slice(ns + ng, nbus))
    }

    // ====HESSIAN==MATRIX===============END OF SECOND_ROW======================

    //  HDELPG	HDEL HDELDV   HDELLAMP HDELLAMQ
    // AAA2=[ HDELPG	HDEL HDELDV   HDELLAMP HDELLAMQ]%====HESSIAN===SECOND_ROW

    let YY2 = [YYY1, YYY2, YYY3, YYY4, YYY5];

    // ====HESSIAN==MATRIX=============================THIRD_ROW
    // HDVPG		HDVDEL	  HDVDV	    HDVLAMP		HDVLAMQ

    let HDVPG = math.zeros(nbus, nbus)["_data"];
    let HDVDEL = math.zeros(nbus, nbus)["_data"];
    let HDVDV = math.zeros(nbus, nbus)["_data"];
    let HDVLAMP = math.zeros(nbus, nbus)["_data"];
    let HDVLAMQ = math.zeros(nbus, nbus)["_data"];
    for (let iii = 0; iii < nbus; iii++) {
        if (bcode[iii] == 0) {
            for (let jjj = 0; jjj < nbus; jjj++) {
                if (bcode[jjj] == 1 || bcode[jjj] == 2) {
                    HDVPG[iii][jjj] = 0;
                }
            }
        }
    }
    let HDVP12 = math.zeros(nbus)["_data"];
    let HDVQ12 = math.zeros(nbus)["_data"];
    let HDVP22 = math.zeros(nbus)["_data"];
    let HDVQ22 = math.zeros(nbus)["_data"];
    let HDVP33 = math.zeros(nbus)["_data"];
    let HDVQ33 = math.zeros(nbus)["_data"];
    let SUMDVP = 0;
    let SUMDVQ = 0;
    for (let ii = 0; ii < nbus; ii++) {
        if (bcode[ii] == 0) {
            for (let kk = 0; kk < nbus; kk++) {
                if (bcode[kk] != 1) {
                    if (ii != kk) {
                        for (let ss = 0; ss < nbus; ss++) {
                            if (ss == ii) {
                                // ramans
                                // HDVP12[ss] = lambdap[ii] * V[kk] * ((G[ii][kk] * math.sin(Ang[ii] - Ang[kk]) - B[ii][kk] * math.cos(Ang[ii] - Ang[kk]))); //% "lambda" error identified and corrected

                                HDVP12[ss] = math.multiply(
                                    lambdap[ii], V[kk],
                                    math.subtract(
                                        math.multiply(G[ii][kk], math.sin(Ang[ii] - Ang[kk])),
                                        math.multiply(B[ii][kk] * math.cos(Ang[ii] - Ang[kk]))
                                    )
                                )
                            }
                            if (ss == kk) {
                                // HDVQ12[ss] = lambdaq[kk] * V[kk] * ((-G[ii][kk] * math.sin(Ang[kk] - Ang[ii]) + B[kk][ii] * math.cos(Ang[ii] - Ang[kk]))); // % "-ve sign" error identified and corrected

                                HDVQ12[ss] = math.multiply(
                                    lambdaq[kk], V[kk],
                                    math.add(
                                        math.multiply(-G[ii][kk], math.sin(Ang[kk] - Ang[ii])),
                                        math.multiply(B[kk][ii], math.cos(Ang[ii] - Ang[kk]))
                                    )
                                )
                            }
                            if (bcode[ss] == 0) {
                                if (ss == ii) {
                                    // HDVQ12[ss] = lambdaq[ii] * V[kk] * ((-G[ii][kk] * math.cos(Ang[ii] - Ang[kk]) - B[ii][kk] * math.sin(Ang[ii] - Ang[kk])));

                                }
                            }
                        }
                        HDVDEL[ii][kk] = math.sum(HDVP12) + math.sum(HDVQ12);
                    }
                    // ramasn ends
                    if (ii == kk) {
                        for (let nn = 0; nn < nbus; nn++) {
                            if (nn != kk) {
                                // HDVP22[nn] = lambdap[nn] * V[nn] * (G[nn][ii] * math.sin(Ang[nn] - Ang[ii]) - B[nn][ii] * math.cos(Ang[nn] - Ang[ii])); //Errors identified and corrected
                                HDVP22[nn] = math.multiply(
                                    lambdap[nn], V[nn],
                                    math.subtract(
                                        math.multiply(G[nn][ii], math.sin(Ang[nn] - Ang[ii])),
                                        math.multiply(B[nn][ii], math.cos(Ang[nn] - Ang[ii]))
                                    )
                                )
                                if (bcode[nn] == 0) {
                                    // HDVQ22[nn] = lambdaq[nn] * V[nn] * (-G[nn][ii] * math.cos(Ang[nn] - Ang[ii]) - B[nn][ii] * math.sin(Ang[nn] - Ang[ii]));
                                    HDVQ22[nn] = math.multiply(
                                        lambdaq[nn], V[nn],
                                        math.subtract(
                                            math.multiply(-G[nn][ii], math.cos(Ang[nn] - Ang[ii])),
                                            math.multiply(B[nn][ii], math.sin(Ang[nn] - Ang[ii]))
                                        )
                                    )
                                }
                            } else if (nn == kk) {
                                for (let ff = 1; ff < nbus; ff++) {

                                    if (ff != kk) {
                                        // SUMDVP = SUMDVP + V[ff] * (-G[kk][ff] * math.sin(Ang[kk] - Ang[ff]) + B[kk][ff] * math.cos(Ang[kk] - Ang[ff]));
                                        // SUMDVQ = SUMDVQ + V[ff] * (G[kk][ff] * math.cos(Ang[kk] - Ang[ff]) + B[kk][ff] * math.sin(Ang[kk] - Ang[ff]));
                                        SUMDVP = math.add(
                                            SUMDVP,
                                            math.multiply(
                                                V[ff],
                                                math.add(
                                                    math.multiply(-G[kk][ff], math.sin(Ang[kk] - Ang[ff])),
                                                    math.multiply(B[kk][ff], math.cos(Ang[kk] - Ang[ff]))
                                                )
                                            )
                                        )
                                        SUMDVQ = math.add(
                                            SUMDVQ,
                                            math.multiply(
                                                V[ff],
                                                math.add(
                                                    math.multiply(G[kk][ff], math.cos(Ang[kk] - Ang[ff])),
                                                    math.multiply(B[kk][ff], math.sin(Ang[kk] - Ang[ff]))
                                                )
                                            )
                                        )
                                    }

                                }

                                // HDVP33[nn] = lambdap[nn] * SUMDVP;
                                // HDVQ33[nn] = lambdaq[nn] * SUMDVQ;
                                HDVP33[nn] = math.multiply(lambdap[nn], SUMDVP);
                                HDVQ33[nn] = math.multiply(lambdaq[nn], SUMDVQ);

                            }

                        }
                        HDVDEL[ii][kk] = math.sum(HDVP22) + math.sum(HDVQ22) + math.sum(HDVP33) + math.sum(HDVQ33);
                    }

                }
            }
            HDVP12 = math.zeros(nbus)["_data"];
            HDVQ12 = math.zeros(nbus)["_data"];
            HDVP22 = math.zeros(nbus)["_data"];
            HDVQ22 = math.zeros(nbus)["_data"];
            HDVP33 = math.zeros(nbus)["_data"];
            HDVQ33 = math.zeros(nbus)["_data"];
            HDVQ33 = math.zeros(nbus)["_data"];
            SUMDVP = 0;
            SUMDVQ = 0;
        }
    }
    let HDVDVP12 = math.zeros(nbus)["_data"];
    let HDVDVQ12 = math.zeros(nbus)["_data"];
    let HDVDVP = math.zeros(nbus)["_data"];
    let HDVDVQ = math.zeros(nbus)["_data"];

    for (let ii = 0; ii < nbus; ii++) {
        if (bcode[ii] == 0) {
            for (let kk = 0; kk < nbus; kk++) {
                if (bcode[kk] == 0) {
                    if (ii != kk) {
                        for (let ss = 0; ss < nbus; ss++) {
                            if (ss == ii) {
                                // HDVDVP12[ss] = lambdap[ii] * (G[ii][kk] * math.cos(Ang[ii] - Ang[kk]) + B[ii][kk] * math.sin(Ang[ii] - Ang[kk]));
                                // HDVDVQ12[ss] = lambdaq[ii] * (G[ii][kk] * math.sin(Ang[ii] - Ang[kk]) - B[ii][kk] * math.cos(Ang[ii] - Ang[kk]));
                                HDVDVP12[ss] = math.multiply(
                                    lambdap[ii],
                                    math.add(
                                        math.multiply(G[ii][kk], math.cos(Ang[ii] - Ang[kk])),
                                        math.multiply(G[ii][kk], math.cos(Ang[ii] - Ang[kk]))
                                    )
                                )
                                HDVDVQ12[ss] = math.multiply(
                                    lambdaq[ii],
                                    math.subtract(
                                        G[ii][kk] * math.sin(Ang[ii] - Ang[kk]),
                                        B[ii][kk] * math.cos(Ang[ii] - Ang[kk])
                                    )
                                )

                            }
                            if (ss == kk) {
                                // HDVDVP12[ss] = lambdap[kk] * (G[kk][ii] * math.cos(Ang[kk] - Ang[ii]) + B[kk][ii] * math.sin(Ang[kk] - Ang[ii]));
                                // HDVDVQ12[ss] = lambdaq[kk] * (G[kk][ii] * math.sin(Ang[kk] - Ang[ii]) - B[kk][ii] * math.cos(Ang[kk] - Ang[ii]));
                                HDVDVP12[ss] = math.multiply(
                                    lambdap[kk],
                                    math.add(
                                        math.multiply(
                                            G[kk][ii], math.cos(Ang[kk] - Ang[ii])
                                        ),
                                        math.multiply(B[kk][ii], math.sin(Ang[kk] - Ang[ii]))
                                    )
                                )
                                HDVDVQ12[ss] = math.multiply(
                                    lambdaq[kk],
                                    math.subtract(
                                        G[kk][ii] * math.sin(Ang[kk] - Ang[ii]),
                                        B[kk][ii] * math.cos(Ang[kk] - Ang[ii])
                                    )
                                )
                            }
                        }
                        HDVDV[ii][kk] = math.sum(HDVDVP12) + math.sum(HDVDVQ12);
                    }
                    if (ii == kk) {
                        for (let nn = 0; nn < nbus; nn++) {
                            if (nn == kk) {
                                // HDVDVP[nn] = lambdap[nn] * 2 * G[nn][ii];
                                // HDVDVQ[nn] = lambdaq[nn] * 2 * (-B[nn][ii]);

                                HDVDVP[nn] = math.multiply(lambdap[nn], 2, (G[nn][ii]))
                                HDVDVQ[nn] = math.multiply(lambdaq[nn], 2, (-B[nn][ii]))

                            }
                        }
                        HDVDV[ii][kk] = math.sum(HDVDVP) + math.sum(HDVDVQ);
                    }
                }
            }
            HDVDVP12 = math.zeros(nbus)["_data"];
            HDVDVQ12 = math.zeros(nbus)["_data"];
            HDVDVP = math.zeros(nbus)["_data"];
            HDVDVQ = math.zeros(nbus)["_data"];
        }
    }
    let HDVLAMPA = 0;
    let HDVLAMQA = 0;
    for (let iii = 0; iii < nbus; iii++) {
        if (bcode[iii] == 0) {
            for (let jjj = 0; jjj < nbus; jjj++) {
                if (iii != jjj) {
                    // HDVLAMP[iii][jjj] = V[jjj] * ((G[jjj][iii] * math.cos(Ang[jjj] - Ang[iii])) + B[jjj][iii] * math.sin(Ang[jjj] - Ang[iii]));
                    HDVLAMP[iii][jjj] = math.multiply(
                        V[jjj],
                        math.add(
                            math.multiply(G[jjj][iii] * math.cos(Ang[jjj] - Ang[iii])),
                            math.multiply(B[jjj][iii] * math.sin(Ang[jjj] - Ang[iii]))
                        )
                    )
                    if (bcode[jjj] == 0) {
                        // HDVLAMQ[iii][jjj] = V[jjj] * ((G[jjj][iii] * math.sin(Ang[jjj] - Ang[iii])) - B[jjj][iii] * math.cos(Ang[jjj] - Ang[iii]));
                        HDVLAMQ[iii][jjj] = math.multiply(
                            V[jjj],
                            math.subtract(
                                math.multiply(G[jjj][iii], math.sin(Ang[jjj] - Ang[iii])),
                                math.multiply(B[jjj][iii] * math.cos(Ang[jjj] - Ang[iii]))
                            )
                        )
                    }
                } else if (iii == jjj) {

                    for (let kkk = 0; kkk < nbus; kkk++) {
                        if (iii != kkk) {
                            // HDVLAMPA = HDVLAMPA + V[kkk] * (G[jjj][kkk] * math.cos(Ang[jjj] - Ang[kkk]) + B[jjj][kkk] * math.sin(Ang[jjj] - Ang[kkk]));
                            // HDVLAMQA = HDVLAMQA + V[kkk] * (G[jjj][kkk] * math.sin(Ang[jjj] - Ang[kkk]) - B[jjj][kkk] * math.cos(Ang[jjj] - Ang[kkk]));
                            HDVLAMPA = math.add(
                                HDVLAMPA,
                                math.multinomial(
                                    V[kkk],
                                    math.add(
                                        math.multiply(G[jjj][kkk], math.cos(Ang[jjj] - Ang[kkk])),
                                        math.multiply(B[jjj][kkk] * math.sin(Ang[jjj] - Ang[kkk]))
                                    )
                                )
                            )
                            HDVLAMQA = math.add(
                                math.multiply(
                                    V[kkk],
                                    math.subtract(
                                        math.multiply(G[jjj][kkk], math.cos(Ang[jjj] - Ang[kkk])),
                                        math.multiply(B[jjj][kkk], math.cos(Ang[jjj] - Ang[kkk]))
                                    )
                                )
                            )
                        } else if (iii == kkk) {
                            // HDVLAMPA = HDVLAMPA + 2 * V[kkk] * G[iii][kkk];
                            // HDVLAMQA = HDVLAMQA - 2 * V[kkk] * B[iii][kkk];
                            HDVLAMPA = math.add(
                                HDVLAMPA,
                                math.multiply(2, V[kkk], G[iii][kkk])
                            )
                            HDVLAMQA = math.add(
                                HDVLAMQA,
                                math.multiply(2, V[kkk], G[iii][kkk])
                            )

                        }

                    }
                    HDVLAMP[iii][jjj] = HDVLAMPA;
                    HDVLAMQ[iii][jjj] = HDVLAMQA;

                }
            }
            HDVLAMPA = 0;
            HDELLAMQA = 0;
        }
    }
    //592 tp 600

    let XXX1 = HDVPG.slice(ns + ng, nbus).slice(1, nbus)
    let XXX2 = HDVDEL.slice(ns + ng, nbus).slice(1, nbus)
    let XXX3 = HDVDV.slice(ns + ng, nbus).slice(ns + ng, nbus)
    let XXX4 = HDVLAMP.slice(ns + ng, nbus)
    let XXX5 = HDVLAMQ.slice(ns + ng, nbus).slice(ns + ng, nbus)

    //% AAA3=[ HDVPG HDVDEL	  HDVDV	  HDVLAMP	HDVLAMQ]%====HESSIAN===THIRD_ROW
    let YY3 = [XXX1, XXX2, XXX3, XXX4, XXX5]; //====HESSIAN===THIRD_ROW
    //%HLAMPPG HLAMPDEL  HLAMPDV	HLAMP	HLAMPQ%====HESSIAN===FOURTH_ROW
    let HLAMPPG = math.zeros(nbus, nbus)["_data"];
    let HLAMPDEL = math.zeros(nbus, nbus)["_data"];
    let HLAMPDV = math.zeros(nbus, nbus)["_data"];
    let HLAMPP = math.zeros(nbus, nbus)["_data"];
    let HLAMPQ = math.zeros(nbus, nbus)["_data"];
    for (let iii = 0; iii < nbus; iii++) {
        for (let jjj = 0; jjj < nbus; jjj++) {
            if (iii == jjj) {
                HLAMPPG[iii][jjj] = -1;
            }
        }
    }
    let HLAMPDELA = 0;
    for (let iii = 0; iii < nbus; iii++) {
        for (jjj = 0; jjj < nbus; jjj++) {
            if (bcode[jjj] == 0) {
                if (iii != jjj) {
                    // HLAMPDEL[iii][jjj] = V[iii] * V[jjj] * ((G[iii][jjj] * math.sin(Ang[iii] - Ang[jjj])) - B[iii][jjj] * math.cos(Ang[iii] - Ang[jjj]));
                    HLAMPDEL[iii][jjj] = math.multiply(
                        V[iii], V[jjj],
                        math.subtract(
                            math.multiply(
                                G[iii][jjj], math.sin(Ang[iii] - Ang[jjj])
                            ),
                            math.multiply(B[iii][jjj] * math.cos(Ang[iii] - Ang[jjj]))
                        )
                    )

                } else if (iii == jjj) {
                    for (let kkk = 0; kkk < nbus; kkk++) {
                        if (kkk != iii) {
                            // HLAMPDELA = HLAMPDELA + V[iii] * V[kkk] * ((-G[iii][kkk] * math.sin(Ang[iii] - Ang[jjj])) + B[iii][kkk] * math.cos(Ang[iii] - Ang[jjj]));
                            HLAMPDELA = math.add(
                                HLAMPDELA,
                                math.multiply(
                                    V[iii], V[kkk],
                                    math.add(
                                        math.multiply(
                                            -G[iii][kkk], math.sin(Ang[iii] - Ang[jjj])
                                        ),
                                        math.multiply(
                                            B[iii][kkk] * math.cos(Ang[iii] - Ang[jjj])
                                        )
                                    )
                                )
                            )
                        }
                    }
                    HLAMPDEL[iii][jjj] = HLAMPDELA;
                }
            }
        }
        HLAMPDELA = 0;
    }

    // Raman's Task Starts
    let HLAMPDVA = 0;
    for (let iii = 0; iii < nbus; iii++) {
        for (jjj = 0; jjj < nbus; jjj++) {
            if (bcode[jjj] == 0) {
                if (iii != jjj) {
                    // HLAMPDV[iii][jjj] = V[iii] * ((G[iii][jjj] * math.cos(Ang[iii] - Ang[jjj])) + B[iii][jjj] * math.sin(Ang[iii] - Ang[jjj]));

                    HLAMPDV[iii][jjj] = math.multiply(
                        math.add(
                            math.multiply(G[iii][jjj], math.cos(Ang[iii] - Ang[jjj])),
                            math.multiply(B[iii][jjj], math.sin(Ang[iii] - Ang[jjj]))
                        )
                    )
                } else if (iii == jjj) {
                    for (let kkk = 0; kkk < nbus; kkk++) {
                        if (kkk != iii) {
                            // HLAMPDVA = HLAMPDVA + V[iii] * ((G[iii][kkk] * math.cos(Ang[iii] - Ang[jjj])) + B[iii][kkk] * math.sin(Ang[iii] - Ang[jjj]));

                            HLAMPDVA = math.add(HLAMPDVA,
                                math.multiply(
                                    V[iii],
                                    math.add(
                                        math.multiply(G[iii][kkk], math.cos(Ang[iii] - Ang[jjj])),
                                        math.multiply(B[iii][kkk], math.sin(Ang[iii] - Ang[jjj]))
                                    )
                                )
                            )
                        } else if (kkk == iii) {
                            // HLAMPDVA = HLAMPDVA + 2 * V[kkk] * G[iii][kkk];

                            HLAMPDVA = math.add(

                                HLAMPDVA,
                                math.multiply(

                                    math.multiply(

                                        2,
                                        V[kkk]
                                    ),

                                    G[iii][kkk]
                                )
                            )
                        }
                    }
                    HLAMPDV[iii][jjj] = HLAMPDVA;
                }
            }
        }
        HLAMPDVA = 0;
    }
    // Raman's Task Ends
    for (let uuu = 0; uuu < nbus; uuu++) {
        for (let vvv = 0; vvv < nbus; vvv++) {
            HLAMPP[uuu][vvv] = 0;
            if (bcode[vvv] == 0) {
                HLAMPQ[uuu][vvv] = 0;
            }
        }
    }
    //665 to 675

    let ZZZ1 = []
    let ZZZ2 = []
    let ZZZ3 = []
    let ZZZ4 = HLAMPP
    let ZZZ5 = []
    for (const arr of HLAMPPG) {
        ZZZ1.push(arr.slice(0, ng + ns))
    }
    for (const arr of HLAMPPG) {
        ZZZ2.push(arr.slice(1, nbus))
    }
    for (const arr of HLAMPPG) {
        ZZZ3.push(arr[ng + ns])
    }
    for (const arr of HLAMPPG) {
        ZZZ5.push(arr[ng + ns])
    }

    // AAA4=[ HLAMPPG	HLAMPDEL  HLAMPDV	HLAMPP	HLAMPQ]

    let YY4 = [ZZZ1, ZZZ2, ZZZ3, ZZZ4, ZZZ5];

    //==================== HESSIAN MATRIX LAST ROW==============================
    //HLAMQPG HLAMQDEL  HLAMQDV	HLAMQP	HLAMQQ








    let HLAMQPG = math.zeros(nbus, nbus)["_data"];
    let HLAMQDEL = math.zeros(nbus, nbus)["_data"];
    let HLAMQDV = math.zeros(nbus, nbus)["_data"];
    let HLAMQP = math.zeros(nbus, nbus)["_data"];
    let HLAMQQ = math.zeros(nbus, nbus)["_data"];

    for (let uuu = 0; uuu < nbus; uuu++) {
        if (bcode[uuu] != 0) {
            for (let vvv = 0; vvv < nbus; vvv++) {
                if (bcode[vvv] == 0) {
                    HLAMQPG[uuu][vvv] = 0;
                }
            }
        }
    }
    let HLAMQDELA = 0;
    for (let iii = 0; iii < nbus; iii++) {
        if (bcode[jjj] == 0) {
            for (jjj = 0; jjj < nbus; jjj++) {
                if (iii != jjj) {
                    // HLAMQDEL[iii][jjj] = V[iii] * V[jjj] * ((-G[iii][jjj] * math.cos(Ang[iii] - Ang[jjj])) - B[iii][jjj] * math.sin(Ang[iii] - Ang[jjj]));
                    HLAMQDEL[iii][jjj] = math.multiply(
                        V[iii], V[jjj],
                        math.subtract(
                            math.multiply(-G[iii][jjj], math.cos(Ang[iii] - Ang[jjj])),
                            math.multiply(B[iii][jjj], math.sin(Ang[iii] - Ang[jjj]))
                        )
                    )
                } else if (iii == jjj) {
                    for (let kkk = 0; kkk < nbus; kkk++) {
                        if (kkk != iii) {
                            // HLAMQDELA = HLAMQDELA + V[iii] * V[kkk] * ((G[iii][kkk] * math.cos(Ang[iii] - Ang[jjj])) + B[iii][kkk] * math.sin(Ang[iii] - Ang[kkk]));
                            HLAMQDELA = math.add(
                                HLAMQDELA,
                                math.multiply(
                                    V[iii], V[kkk],
                                    math.add(
                                        math.multiply(G[iii][kkk], math.cos(Ang[iii] - Ang[jjj])),
                                        math.multiply(B[iii][kkk], math.sin(Ang[iii] - Ang[kkk]))
                                    )
                                )
                            )
                        }
                    }
                    HLAMQDEL[iii][jjj] = HLAMPDELA;
                }
            }
        }
        HLAMPDELA = 0;
    }
    let HLAMQDVA = 0;
    for (let iii = 0; iii < nbus; iii++) {
        if (bcode[iii] == 0) {
            for (jjj = 0; jjj < nbus; jjj++) {
                if (bcode[jjj] == 0) {
                    if (iii != jjj) {
                        // HLAMQDV[iii][jjj] = V[iii] * ((G[iii][jjj] * math.sin(Ang[iii] - Ang[jjj])) - B[iii][jjj] * math.cos(Ang[iii] - Ang[jjj]));
                        HLAMQDV[iii][jjj] = math.multiply(
                            V[iii]
                            , math.subtract(
                                math.multiply(G[iii][jjj], math.sin(Ang[iii] - Ang[jjj])),
                                math.multiply(B[iii][jjj] * math.cos(Ang[iii] - Ang[jjj]))
                            )
                        )
                    } else if (iii == jjj) {
                        for (let kkk = 0; kkk < nbus; kkk++) {
                            if (kkk != iii) {
                                // HLAMQDVA = HLAMQDVA + V[kkk] * ((G[iii][kkk] * math.sin(Ang[iii] - Ang[kkk])) - B[iii][kkk] * math.cos(Ang[iii] - Ang[kkk]));
                                HLAMQDVA = math.add(
                                    HLAMQDVA,
                                    math.multiply(
                                        V[kkk],
                                        math.subtract(
                                            math.multiply(
                                                G[iii][kkk],
                                                math.sin(Ang[iii] - Ang[kkk])
                                            ),
                                            math.multiply(
                                                B[iii][kkk],
                                                math.cos(Ang[iii] - Ang[kkk])
                                            )
                                        )
                                    )
                                )
                            } else if (kkk == iii) {
                                // HLAMPDVA = HLAMPDVA - 2 * V[kkk] * B[iii][kkk];
                                HLAMPDVA = math.subtract(
                                    HLAMPDVA,
                                    math.multiply(
                                        2,
                                        V[kkk],
                                        B[iii][kkk]
                                    )
                                )
                            }
                        }
                        HLAMQDV[iii][jjj] = HLAMQDVA;
                    }
                }
            }

            HLAMPDVA = 0;
        }
    }
    // 740 to 750
    let MMM1 = []
    let MMM2 = []
    let MMM3 = []
    let MMM4 = []
    let MMM5 = []
    for (const arr of HLAMQPG.slice(ns + ng, nbus)) {
        MMM1.push(arr.slice(1, nbus))
    }
    for (const arr of HLAMQPG.slice(ns + ng, nbus)) {
        MMM2.push(arr.slice(1, nbus))
    }
    for (const arr of HLAMQPG.slice(ns + ng, nbus)) {
        MMM3.push(arr.slice(ns + ng, nbus))
    }
    for (const arr of HLAMQPG.slice(ns + ng, nbus)) {
        MMM4.push(arr)
    }
    for (const arr of HLAMQPG.slice(ns + ng, nbus)) {
        MMM5.push(arr.slice(ns + ng, nbus))
    }

    let YY5 = [MMM1, MMM2, MMM3, MMM4, MMM5]
    console.log("Hessian matrix");
    let HMATRIX = [
        [YY1],
        [YY2],
        [YY3],
        [YY4],
        [YY5]
    ];
    console.log("Mismatch vector");
    let DMISM = HMATRIX / JACOBIAN;
    console.log("Iterations");
    console.log(iter);
    maxerror = math.sqrt(math.sum(math.dotPow(DMISM, 2)));
    // variable updation
    // '********************************************************************'
    // Variables vector [Pg,Ang,V,lambdap,lambdaq]
    // ********************************************************************'

    for (let ii = 0; ii < nbus; ii++) {
        if (bcode[ii] != 0) {
            // Pg[ii] = Pg[ii] + DMISM[ii];
            Pg[ii] = math.add(
                Pg[ii], DMISM[ii]
            )
        }
        if (bcode[ii] != 1) {
            // Ang[ii] = Ang[ii] + DMISM[ng + ns - 1 + ii - 1];
            Ang[ii] = math.add(
                Ang[ii],
                DMISM[ng + ns - 1 + ii - 1]
            )
        }
        if (bcode[ii] == 0) {
            // V[ii] = V[ii] + DMISM[nbus - 1 + ii - 1];
            V[ii] = math.add(
                V[ii], DMISM[nbus - 1 + ii - 1]
            )
        }
        lambdap[ii] = lambdap[ii] + DMISM[2 * nbus + ii - 1 - 1];
        if (bcode[ii] == 0) {
            // lambdaq[ii] = lambdaq[ii] + DMISM[3 * nbus - ng - ns + ii - 1 - 1];
            lambdaq[ii] = math.add(
                lambdaq[ii],
                DMISM[3 * nbus - ng - ns + ii - 1 - 1]
            )
        }
    }
    //********************************************************************'
    if (iter == maxiter && maxerror > accuracy) {
        console.log("WARNING: Iterative solution did not converge after");
        console.log(iter);
        console.log("iterations")
        console.log('Press Enter to terminate the iterations and print the results \n')
        converge = 0;

    }
    console.log("breaking")

}




console.log("Total cost");
let FPg = math.zeros(nbus)["_data"];
let LAMPPP = math.zeros(nbus)["_data"];
let LAMQQQ = math.zeros(nbus)["_data"];
for (let jjj = 0; jjj < nbus; jjj++) {
    if (bcode[jjj] != 0) {
        // FPg[jjj] = Acost[jjj] * math.pow(Pg[jjj], 2) + Bcost[jjj] * Pg[jjj] + Ccost[jjj];
        // PEMDAS
        FPg[jjj] = math.add(
            math.add(
                math.multiply(
                    Acost[jjj], math.pow(Pg[jjj], 2)
                ),
                math.multiply(

                    Bcost[jjj],
                    Pg[jjj]
                )
            ),
            Ccost[jjj]
        )
    }



    LAMPPP[jjj] = lambdap[jjj] * (P[jjj] - Pg[jjj] + PD[jjj]);
    if (bcode[jjj] == 0) {
        // LAMQQQ[jjj] = lambdaq[jjj] * (Q[jjj] - Qg[jjj] + QD[jjj]);
        LAMQQQ[jjj] = math.multiply(
            lambdaq[jjj],
            math.add(
                Q[jjj], -Qg[jjj], QD[jjj]
            )
        )
    }
}

let TCOST = math.sum(FPg) + math.sum(LAMPPP) + math.sum(LAMQQQ);
console.log(TCOST);
console.log("Iterations");
console.log(iter);
console.log("************Bus Voltages, Real/Reactive Power and Lambda Real/Reactive*******************************************");
// let head;
//need to define array here
// console.log(head);
console.log('    Bus  Voltage  Angle    -----Load (p.u)---  ---Gen(p.u)--    Calcul_Power---        ---Lambda---       ')
console.log('    No.  Mag.     Radian     PD        QD      PG       QG       Pcal      Qcal      LambdaP      LambdaQ ')
console.log("\n")
console.log(V)
for (let n = 0; n < nbus; n++) {
    console.log(n
        , V[n]
        , Ang[n]
        , PD[n]
        , QD[n]
        , Pg[n]
        , Qg[n]
        , Pcal[n]
        , Qcal[n]
        , lambdap[n]
        , lambdaq[n])
}
let Pgd = math.zeros(nbus)["_data"];
let Qgd = math.zeros(nbus)["_data"];
let S = math.zeros(nbus)["_data"];
for (let n = 0; n < nbus; n++) {
    // Pgd[n] = Pg[n] - PD[n];
    Pgd[n] = math.subtract(Pg[n], PD[n])
    // Qgd[n] = Qg[n] - QD[n];
    Qgd[n] = math.subtract(Qg[n], QD[n])
    S[n] = math.add(
        Pgd[n],
        math.complex(Qgd[n])
    );
}
// Vc = V * (math.cos(Ang) + j * math.sin(Ang));
let Vc = math.multiply(
    V,
    math.add(
        math.cos(Ang),
        math.complex(math.sin(Ang))
    )
)

let SLT = 0;
let SL = 0
let Snk = 0
let Skn = 0
console.log("Line Flow and Losses\n");
console.log("--Line--  Power at bus & line flow    --Line loss--  Transformer\n");
console.log(" from  to    MW      Mvar     MVA       MW      Mvar      tap\n");
for (let n = 0; n < nbus; n++) {
    let busprt = 0;
    for (let L = 0; L < nbr; L++) {
        if (busprt == 0) {
            console.log("\n");
            console.log("n");
            console.log(Pgd[n] * basemva);
            console.log(Qgd[n] * basemva);
            console.log(math.abs(S[n] * basemva));
            busprt = 1;
        }
        if (sb[L] - 1 == n) {
            k = eb[L] - 1;
            // In = (Vc[n] - tap[L] * Vc[k]) * y[L] / math.pow(tap[L], 2) + b[L] / tap[L] ** 2 * Vc[n];
            // Ik = (Vc[k] - Vc[n] / tap[L]) * y[L] + b[L] * Vc[k];
            // Snk = Vc[n] * math.conj(In) * basemva;
            // Skn = Vc[k] * math.conj(Ik) * basemva;
            In = math.add(
                math.divide(
                    math.subtract(
                        Vc[n],
                        math.multiply(tap[L], Vc[k])
                    ),
                    tap[L] ** 2
                ),
                math.divide(
                    math.multiply(b[L], Vc[n]),
                    tap[L] ** 2
                )
            )
            Ik = math.add(
                math.multiply(b[L], Vc[k]),
                math.multiply(
                    y[L],
                    math.divide(
                        math.subtract(Vc[k], Vc[n])
                        , tap[L]
                    )
                )
            )
            Snk = math.multiply(Vc[k], basemva, math.conj(In))
            Skn = math.multiply(Vc[k], basemva, math.conj(Ik))
            SL = Snk + Skn;
            SLT = SLT + SL;
        }

        if (sb[L] - 1 == n || eb[L] - 1 == n) {
            console.log(k);
            console.log(math.re(Snk));
            console.log(math.im(Snk));
            console.log(math.abs(Snk));
            console.log(math.re(SL));
            if (sb[L] - 1 == n && tap[L] != 1) {
                console.log(math.im(SL));
                console.log(tap[L]);
            } else {
                console.log(math.im(SL));
            }
        }
    }
}
SLT = SLT / 2;
console.log("\n");
console.log("Total Loss");
console.log(math.re(SLT));
console.log(math.im(SLT));
console.log("Run completed successfully");