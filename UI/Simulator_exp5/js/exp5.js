const { sort } = require("mathjs")
let math = require("mathjs")

let c1 = [
    [0.01562, 79.2, 5610], // cost curve coefficients
    [0.0194, 78.5, 3100],
    [0.05784, 95.64, 936],
]
console.log(c1)
let FLAPC = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]
let Pmax = [600, 400, 200]
let m = c1.length
let n = c1[0].length
console.log(m)
console.log(n)
for (let ii = 0; ii < m; ii++) {
    FLAPC[ii] =
        (c1[ii][0] * (Pmax[ii] * Pmax[ii]) + c1[ii][1] * Pmax[ii] + c1[ii][2]) /
        Pmax[ii]
}
console.log(FLAPC)
let PriorityOrder = [0, 0, 0]
let IX = [0, 0, 0]
for (let i = 0; i < 3; i++) {
    IX[i] = FLAPC.indexOf(FLAPC[i])
}
PriorityOrder = sort(FLAPC)
console.log(FLAPC)
console.log(IX)



console.log(
    'Printing the unit commitment schedule for the given load demand \n',
)
let PD = 700

if (PD <= Pmax[0]) console.log('The committed unit no. is: %d \n', IX[0])
else if (PD > Pmax[0] && PD < Pmax[0] + Pmax[1])
    console.log('The committed unit nos. order are: %d, %d \n', IX[0], IX[1])
else if (PD >= math.sum(Pmax)) {
    console.log(
        'The committed unit nos. order are: %d, %d, %d \n',
        IX[0],
        IX[1],
        IX[2],
    )
}