const msg = document.createElement("p")
msg.style.borderBottom = "1px solid black"
// msg.style.height = "25px";
let pi = 3.1416;
let Vnom = 735 * 0.001;
let freq = 60;
let km = 800;
let l = 0.9323 * 0.001;
let c = 12.2 * (10 ** -9);
let delta = 0;

let Z0 = Sqrt(l / c);
let SIL = Vnom ** 2 / Z0;
let Vs = Vnom;
let Vr = Vnom;
let Beta = (2 * pi * freq * (Sqrt(l * c)) * 180) / pi;
let Ps_max = ((Vs * Vs)) / ((Z0) * Sin(Beta * km));
let Ps = Ps_max * (Sin(delta));
let Qr = (Vr ** 2) * Cos(Beta * km) - (Vs * Vr * Cos(delta)) / (Z0 * Sin(Beta * km));


if (Qr < 0) {
    msg.innerHTML = " Q is surplus..So Inductive nature of reactive power is required" + eval();
    document.getElementById("OUTPUT-CONSOLE").appendChild(msg); console.log("outputted successfully ");



}



else if (Qr > 0) {

    msg.innerHTML = " Q is insufficient..So Capacitive nature of reactive power is required" + eval();
    document.getElementById("OUTPUT-CONSOLE").appendChild(msg); console.log("outputted successfully ");



}

else {

    msg.innerHTML = " No compensation required" + eval(); document.getElementById("OUTPUT-CONSOLE").appendChild(msg);
    console.log("outputted successfully ");



}
let aa = 2 * Cos((Beta * km) / 2) ** 2;
let bb = 4 * (Cos((Beta * km) / 2) ** 4);
let P0 = SIL;
let Vmp = Sqrt((1 / aa)) + Sqrt((1 / bb)) - ((Ps / P0) ** 2) * ((Tan((Beta * km) / 2) ** 2));
let Vmn = Sqrt(1 / aa) - Sqrt(1 / bb) - ((Ps / P0) ** 2) * (Tan((Beta * km) / 2) ** 2);
let m1 = Abs(Vmp);
let m2 = Abs(Vmn);
let Vmpp = Max(m1, m2);
let Vm = Vmpp * Vnom;

msg.innerHTML = " Acutal voltage at the midd-point without mid-point compensation is" + eval(Vm);
document.getElementById("OUTPUT-CONSOLE").appendChild(msg); console.log("outputted successfully ");



msg.innerHTML = " Reactive power is required to maintain the mid-point voltage at 1 per unit" + eval(Qr);
document.getElementById("OUTPUT-CONSOLE").appendChild(msg); console.log("outputted successfully ");