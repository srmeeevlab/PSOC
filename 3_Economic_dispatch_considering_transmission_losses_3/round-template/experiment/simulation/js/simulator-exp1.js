// const math = require('mathjs')
function Simulate() {

    const pi = 3.1416;

    // let Vnom = 735 * (Math.pow(10, -3)); //V
    // let freq = 60; //Hz
    // let km = 800; //transmission line length
    // let l = (0.9323) * (Math.pow(10, -3)); //H/km
    // let c = 12.2 * (Math.pow(10, -9)) //F/km
    // let delta = 0; //*deg loading of the loading

    let Vnom = document.getElementById("vnom").value;
    if (!Vnom || isNaN(Vnom)) {
        alert("Vnom value given is incorrect. setting to 735")
        document.getElementById("vnom").value = 735
        Vnom = 735
    }
    let freq = document.getElementById("freq").value;
    if (!freq || isNaN(freq)) {
        alert("freq value given is incorrect. setting to 60")
        document.getElementById("freq").value = 60
        freq = 60
    }
    let km = document.getElementById("km").value;
    if (!km || isNaN(km)) {
        alert("km value given is incorrect. setting to 800")
        document.getElementById("km").value = 800
        km = 800
    }
    let l = document.getElementById("l").value;
    if (!l || isNaN(l)) {
        alert("l value given is incorrect. setting to 9323")
        document.getElementById("l").value = 0.9323
        l = 0.9323
    }
    let c = document.getElementById("c").value;
    if (!c || isNaN(c)) {
        alert("c value given is incorrect. setting to 12.2")
        document.getElementById("c").value = 12.2
        c = 12.2
    }
    let delta = document.getElementById("delta").value;
    if (!delta || isNaN(delta)) {
        alert("delta value given is incorrect. setting to 0")
        document.getElementById("delta").value = 0
        delta = 0
    }

    Vnom = eval(Vnom) * 1000 //kv
    freq = eval(freq)
    km = eval(km)
    l = eval(l) * 10 ** -3
    c = eval(c) * 10 ** -9
    delta = eval(delta)
    // 

    let Z0 = Math.sqrt(l / c);
    
    let SIL = (Math.pow(Vnom, 2)) / Z0;
    //Vs= Vr=Vnom   Symmetrical loss line
    let Vs = Vnom;
    let Vr = Vnom;
    let Beta = (2 * pi * freq * (Math.sqrt(l * c)) * 180) / pi;
    //Case(i) delta=0 ...No Load condition
    let Ps_max = ((Vs * Vs)) / ((Z0) * Math.sin(degrees_to_radians(Beta * km)));
    //finding sending end powerflow
    let Ps = Ps_max * (Math.sin(degrees_to_radians(delta))); //for no load condition power flowzero
    //Calculate the required additional reactive power to maintain 
    // receiving end voltage 1 pu
    // let Qr = (Math.pow(Vr, 2)) * Math.cos(degrees_to_radians(Beta * km)) - (Vs * Vr * (Math.cos(degrees_to_radians(delta)))) / (Z0 * Math.sin(degrees_to_radians(Beta * km)));
    let Qr = (Vr ** 2 * Math.cos(degrees_to_radians(Beta * km)) - (Vs * Vr * Math.cos(degrees_to_radians(delta)))) / (Z0 * Math.sin(degrees_to_radians(Beta * km)))

    let ans1 = document.createElement("div")
    if (Qr < 0) {
        ans1.innerHTML = "Q is surplus.So Inductor is required to absorb the excessive reactive power."
    } else if (Qr > 0) {
        ans1.innerHTML = "Q is insufficient.So Capacitive nature of reactive power is required"
    } else {
        ans1.innerHTML = "No compensation is required"
    }

    //Mid-point voltage

    aa = 2 * (Math.cos(degrees_to_radians((Beta * km) / 2)) ** 2);
    bb = 4 * (Math.cos(degrees_to_radians((Beta * km) / 2)) ** 4);
    let P0 = SIL;

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
    //Mi-point actual voltage

    let m1 = math.abs(Vmp);
    let m2 = math.abs(Vmn);
    let Vmpp = Math.max(m1, m2);
    let Vm = Vmpp * Vnom
   
    let outputs = document.getElementById("OUTPUT")
    outputs.innerHTML=""
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