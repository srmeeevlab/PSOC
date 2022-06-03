// const math = require('mathjs')
startInteraction(data[0]);
function Simulate() {

    const pi = 3.1416;

    // let Vnom = 735 * (Math.pow(10, -3)); //V
    // let freq = 60; //Hz
    // let km = 800; //transmission line length
    // let l = (0.9323) * (Math.pow(10, -3)); //H/km
    // let c = 12.2 * (Math.pow(10, -9)) //F/km
    // let delta = 0; //*deg loading of the loading
    let Vnom = document.getElementById("vnom").value;
    let freq = document.getElementById("freq").value;
    let km = document.getElementById("km").value;
    let l = document.getElementById("l").value;
    let c = document.getElementById("c").value;
    let delta = document.getElementById("delta").value;

    Vnom = eval(Vnom) * 1000 //kv
    freq = eval(freq)
    km = eval(km)
    l = eval(l) * 10 ** -3
    c = eval(c) * 10 ** -9
    delta = eval(delta)
    console.log(Vnom, typeof Vnom)
    console.log(freq, typeof freq)
    console.log(km, typeof km)
    console.log(l, typeof l)
    console.log(c, typeof c)
    console.log(delta, typeof delta)

    let Z0 = Math.sqrt(l / c);
    console.log("Z0",Z0)
    let SIL = (Math.pow(Vnom, 2)) / Z0;
    console.log("SIL",SIL)
    //Vs= Vr=Vnom   Symmetrical loss line
    let Vs = Vnom;
    console.log("Vs",Vs)
    let Vr = Vnom;
    console.log("Vr",Vr)
    let Beta = (2 * pi * freq * (Math.sqrt(l * c)) * 180) / pi;
    console.log("Beta",Beta)
    //Case(i) delta=0 ...No Load condition
    let Ps_max = ((Vs * Vs)) / ((Z0) * Math.sin(degrees_to_radians(Beta * km)));
    console.log("Ps_max",Ps_max)
    //finding sending end powerflow
    let Ps = Ps_max * (Math.sin(degrees_to_radians(delta))); //for no load condition power flowzero
    console.log("Ps",Ps)
    //Calculate the required additional reactive power to maintain 
    // receiving end voltage 1 pu
    // let Qr = (Math.pow(Vr, 2)) * Math.cos(degrees_to_radians(Beta * km)) - (Vs * Vr * (Math.cos(degrees_to_radians(delta)))) / (Z0 * Math.sin(degrees_to_radians(Beta * km)));
    let Qr = (Vr ** 2 * Math.cos(degrees_to_radians(Beta * km)) - (Vs * Vr * Math.cos(degrees_to_radians(delta)))) / (Z0 * Math.sin(degrees_to_radians(Beta * km)))
    //  console.log(Beta * km)
    //  console.log(degrees_to_radians(Beta*km))
    //  console.log(Math.cos(degrees_to_radians(Beta * km)))
    //  console.log(Math.sin(degrees_to_radians(Beta * km)))
    let ans1 = document.createElement("div")
    console.log("Qr",Qr)
    if (Qr < 0) {
        console.log('Q is surplus. So Inductive nature of reactive power is required')
        ans1.innerHTML = "Q is surplus.So Inductor is required to absorb the excessive reactive power."
    } else if (Qr > 0) {
        console.log('Q is insufficient..So Capacitive nature of reactive power is required')
        ans1.innerHTML = "Q is insufficient.So Capacitive nature of reactive power is required"
    } else {
        console.log("No compensation required");
        ans1.innerHTML = "No compensation is required"
    }

    //Mid-point voltage

    aa = 2 * (Math.cos(degrees_to_radians((Beta * km) / 2)) ** 2);
    bb = 4 * (Math.cos(degrees_to_radians((Beta * km) / 2)) ** 4);
    let P0 = SIL;
    console.log("P0",P0)
    console.log("aa bb",aa,bb)
    console.log(1/aa,1/bb)
    console.log(100)
    console.log("Beta*km",Beta*km)
    console.log('Ps/p0',Ps/P0)
    // let Vmp = Math.sqrt(1 / aa) + Math.sqrt(1 / bb) - Math.pow((Ps / P0), 2) * Math.pow(Math.tan(degrees_to_radians((Beta * km) / 2)), 2);
    // let Vmn = Math.sqrt(1 / aa) - Math.sqrt(1 / bb) - Math.pow((Ps / P0), 2) * Math.pow(Math.tan(degrees_to_radians((Beta * km) / 2)), 2);

    let Vmp = math.sqrt(
        (1 / aa) + math.sqrt(
            (1 / bb) - ((Ps / P0) * Math.tan(degrees_to_radians(Beta * km))) ** 2
        )
    )
    let Vmn = math.sqrt(
        (1 / aa) - math.sqrt(
            (1 / bb) - ((Ps / P0) * (Math.tan(degrees_to_radians(Beta * km / 2)))) ** 2
        )
    )
    console.log("Vmp,Vmn",Vmp,Vmn)
    //Mi-point actual voltage

    let m1 = math.abs(Vmp);
    let m2 = math.abs(Vmn);
    console.log("m1,m2",m1,m2)
    let Vmpp = Math.max(m1, m2);
    let Vm = Vmpp * Vnom
    console.log("Vm,Vmpp",Vm,Vmpp)
    console.log('At the mid-point, the voltage without compensation is:', Vm);

    console.log('Reactive power is required to maintain the mid-point voltage at 1 per unit is', Qr);

    let outputs = document.getElementById("OUTPUT")
    outputs.style.border = "0.25rem solid black"
    let ans2 = document.createElement("div")
    let ans3 = document.createElement("div")
    ans2.innerHTML = "At the mid-point,the voltage without compensation is:" + Vm.toFixed(2) + " V."
    ans3.innerHTML = 'Reactive power is required to maintain the mid-point voltage at 1 per unit ' +Qr.toFixed(2)+ ' var.'
    ans1.style.marginBottom = "1rem"
    ans2.style.marginBottom = "1rem"
    ans3.style.marginBottom = "1rem"
    let heading = document.createElement("div")
    heading.innerHTML = "Results:"
    heading.style.fontWeight = "900"
    heading.id = "result"
    outputs.appendChild(heading)
    outputs.appendChild(ans1)
    outputs.appendChild(ans2)
    outputs.appendChild(ans3)
    
}
function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}
const degsToRads = deg => (deg * Math.PI) / 180.0;

const radsToDegs = rad => rad * 180 / Math.PI;