//Exp no 2/5: Economic dispatch problem(without limits and loss)

//Numerical problem
//Numerical Problem
//  Consider a system having total demand of i)320 MW ii) 200 MW,
//  which is being supplied by three generator units having the below fuel cost
//  characteristics. Find the economic load scheduling of the three units 
//  with the Maximum an minimum loads available on each unit are 150 and 39

//  C1 = 0.5 PG1^2 + 215 PG1 + 5000 Rs/hr
//  C2 = 1.0 PG2^2 + 270 PG2 + 5000 Rs/hr
//  C3 = 0.7 PG3^2 + 160 PG3 + 9000 Rs/hr

//  Cost Equation
//  Format for costdata Input: [ Unit_no a(i) b(i) c(i) ]

let costdata = [
    [1, 0.5, 215, 5000],
    [2, 1, 270, 5000],
    [3, 0.7, 160, 9000]
];

let pd = 1000; //total demand
let ng = costdata.length;
console.log(ng)
let uno = [0, 0, 0];
let a = [0, 0, 0];
let b = [0, 0, 0];
let c = [0, 0, 0];
let ifc = [0, 0, 0];


let p = [];
for (i = 0; i < ng; i++) {
    uno[i] = costdata[i][0];
    a[i] = costdata[i][1];
    b[i] = costdata[i][2];
    c[i] = costdata[i][3];

}
console.log(uno)
let lambda = 9.0; //assume an initial value
let delp = 0.1; //assume as 0.1
let dellambda = 0;
let iter = 0;

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

let totgencost = 0;
for (i = 0; i < ng; i++) {

    totgencost = totgencost + (a[i] * p[i] * p[i]) + (b[i] * p[i]) + c[i];
}
console.log(lambda)
console.log(p)
let opt_gen = [uno, p];
//output display
//Lambda
//Unit No    Optimal Generation
console.log(opt_gen)
    //Incremental Fuel Cost
console.log(ifc[0])
    //Total Generation Cost
console.log(totgencost)