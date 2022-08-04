startInteraction(data[0]);
var range = (start, stop, step) => {
    let rangelst = []
    for (let j = start; j <= stop; j += step) {

        rangelst.push(
            Number(j.toFixed(2))
        )
    }
    return rangelst //for positive vals
}

//for tak

let v = []
let v_question = []
//for tc

//for i
let i = []
let i_question = []
    // i = np * Ipv - np * Id * (Math.exp(q * (v + isc * rs) / (k * tck * a * ns)) - 1) - np * (Math.abs(ish));
    // for (let ele = 0; ele)

let P = []
let P_question=[]
let k_question=0;
let q_question=0;
let eg_question=0;
let a_question=0;
let ns_question=0;
let np_question=0;
let rs_question=0;
let rsh_question=0;
let voc_question=0;
let isc_question=0;
let vmp_question=0;
let imp_question=0;
let pm_question=0;
let it_question=0;
let io_question=0;
let ki_question=0;
let kv_question=0;
let kp_question=0;
let vsz_question=0;
let ta_question=0;
let tak_question=0;
let noct_question=0;
let g_question=0;
let tc_question=0;
let tck_question=0;
let vt_question=0;
let Ipv_question=0;
let Id_question=0;
let ish_question=0;

function twentyerr(num=0){
     // implement error of positive or negative
    // return num*(85+Math.random()*15)/100
    let errp = Math.random()*15/100
    let a = [1,-1]
    let sign= a[Math.floor(Math.random()*a.length)]
    return num + sign*errp*num
}


function question() {
    i_question = []
    v_question = []
    P_question = []
     k_question = 1.38 * Math.pow(10, -23)
     q_question = 1.6 * Math.pow(10, -19)
     eg_question = Math.round(twentyerr(1.66),2) //1.166
     a_question = (1.3) // 1.3
     ns_question = Math.floor(twentyerr(35)) //35
     np_question = Math.floor(twentyerr(5)) //5
     rs_question = twentyerr(0.000006) //0.000006
     rsh_question = Math.round(twentyerr(5000)) //5000
     voc_question = Math.round(twentyerr(21.5),2) //21.5
     isc_question = Math.round(twentyerr(1.2),2) //1.2
     vmp_question = (17.28) //17.28
     imp_question = (5.71)// 5.71
     pm_question =(235)//235

    it_question = np_question * isc_question

    io_question =   twentyerr(0.00000002)  // 0.00000002
    ki_question = (0.0044) //0.0044
    kv_question = (-0.123) // -0.123
    kp_question = (-0.0047) // -0.0047

    v_question = range(0, voc_question, 0.1)
    vsz_question = v_question.length
    ta_question = Math.floor(twentyerr(50)) // 50
    tak_question = (ta_question) + 273

    noct_question =Math.floor(twentyerr(45)) // 45 floor
        //for gravity
    g_question = Math.floor(twentyerr(1000)) // 1000 floor
    tc_question = ta_question + ((noct_question - 20) * g_question) / 1000
    tck_question = tc_question + 273

    //for vt
    vt_question = (ns_question * k_question * tck_question) / q_question
        //for ipv
    Ipv_question = (isc_question + ki_question * (tck_question - tak_question)) * (g_question / 1000)
        //for id

    Id_question =
        io_question *
        Math.pow(tck_question / tak_question, 3) *
        Math.exp(((q_question * eg_question) / (k_question * a_question)) * (1 / tak_question - 1 / tck_question))

    ish_question = ((Ipv_question - Id_question) * rs_question) / (rs_question + rsh_question)
    v_question.forEach((element_question) => {
        i_question.push(
            np_question * Ipv_question -
            np_question *
            Id_question *
            (Math.exp((q_question * (element_question + isc_question * rs_question)) / (k_question * tck_question * a_question * ns_question)) - 1) -
            np_question * Math.abs(ish_question),
        )
    })
    for (let y = 1; y <= vsz_question; y++) {
        if (i_question[y] <= 0) 
            i_question[y] = 0
    }
    for (let y = 0; y < i_question.length; y++) {
        P_question.push(v_question[y] * i_question[y])
    }
   
    let chart1 = Chart1
    let chart2 = Chart2
    chart1.data.datasets.push({
        data:i_question.filter(nonzero),
        label: "V vs I question",
        borderColor: "#000",
        fill:false
        
    })
    chart1.data.labels = v_question.filter(nonzero)
    chart2.data.labels = v_question.filter(nonzero)
    chart2.data.datasets.push({
        data:P_question.filter(nonzero),
        label: "V vs I question",
        borderColor: "#000",
        fill:false
        
    })

    chart1.update()
    chart2.update()
}

function checkans(){
    let k=1.38 * Math.pow(10, -23)
    let q=1.6 * Math.pow(10, -19)
    let eg=Number(document.getElementById('eg').value)
    let a=1.3;
    let ns=Number(document.getElementById('ns').value);
    let np=Number(document.getElementById('np').value);
    let rs=Number(document.getElementById('rs').value);
    let rsh=Number(document.getElementById('rsh').value);
    let voc=Number(document.getElementById('voc').value);
    let isc=Number(document.getElementById('isc').value);
    let vmp=17.28;
    let imp=5.71;
    let pm=235;
    let it=np * isc;
    let io=Number(document.getElementById('io').value);
    let ki=Number(document.getElementById('ki').value);
    let kv=-0.123
    let kp=-0.0047;
    let vsz=v.length;
    let ta=Number(document.getElementById('ta').value);
    let tak=Number(ta) + 273;
    let noct=Number(document.getElementById('noct').value);
    let g=Number(document.getElementById('gra').value);
    let tc=ta + ((noct - 20) * g) / 1000
    let tck=tc + 273
    let vt=(ns * k * tck) / q
    let Ipv=(isc + ki * (tck - tak)) * (g / 1000)
    let Id=io * Math.pow(tck / tak, 3) * Math.exp(((q * eg) / (k * a)) * (1 / tak - 1 / tck));
    let ish=((Ipv - Id) * rs) / (rs + rsh);

    
    let orig = [
        eg
        ,ns
        ,np
        ,rs
        ,rsh
        ,voc
        ,isc
        ,it
        ,io
        ,vsz
        ,ta
        ,tak
        ,noct
        ,g
        ,tc
        ,tck
        ,vt
        ,Ipv
        ,Id
        ,ish
    ]
    let ques = [
        eg
        ,ns
        ,np
        ,rs
        ,rsh
        ,voc
        ,isc
        ,it
        ,io
        ,vsz
        ,ta
        ,tak
        ,noct
        ,g
        ,tc
        ,tck
        ,vt
        ,Ipv
        ,Id
        ,ish
    ]

        if(Math.abs(v.length - v_question.length)>Math.floor(0.1*v_question.length)){
        alert("number of plotted points are either too high pr too low from given points")
        return;
    }
    let errcnt =0;

    for (let idx = 0; idx < Math.min(v_question.length,v.length); idx++) {
        if(Math.abs(i[idx] - i_question[idx]) > 0.1*i_question[idx]){
            errcnt++;
        }
        if(errcnt>100){
            alert("your graph does not meet the required criteria of a relative error less than 1%.")
            break;
        }
    }
}


function exe() {
    i = []
    v = []
    P = []
    let k = 1.38 * Math.pow(10, -23)
    const q = 1.6 * Math.pow(10, -19)

    let eg = (document.getElementById('eg').value)
    if (!eg || isNaN(eg)) {
        alert("eg is invalid. Setting to 1")
        document.getElementById('eg').value = 1
        eg = 1
    } else {
        eg = eval(eg)
    }
    let a = 1.3

    let ns = (document.getElementById('ns').value)
    if (!ns || isNaN(ns)) {
        alert("ns is invalid. Setting to 1")
        document.getElementById('ns').value = 1
        ns = 1
    } else {
        ns = eval(ns)
    }
    let np = (document.getElementById('np').value)
    if (!np || isNaN(np)) {
        alert("np is invalid. Setting to 1")
        document.getElementById('np').value = 1
        np = 1
    } else {
        np = eval(np)
    }
    let rs = (document.getElementById('rs').value)
    if (!rs || isNaN(rs)) {
        alert("rs is invalid. Setting to 1")
        document.getElementById('rs').value = 1
        rs = 1
    } else {
        rs = eval(rs)
    }
    let rsh = (document.getElementById('rsh').value)
    if (!rsh || isNaN(rsh)) {
        alert("rsh is invalid. Setting to 1")
        document.getElementById('rsh').value = 1
        rsh = 1
    } else {
        rsh = eval(rsh)
    }
    let voc = (document.getElementById('voc').value)
    if (!voc || isNaN(voc)) {
        alert("voc is invalid. Setting to 1")
        document.getElementById('voc').value = 1
        voc = 1
    } else {
        voc = eval(voc)
    }
    let isc = (document.getElementById('isc').value)
    if (!isc || isNaN(isc)) {
        alert("isc is invalid. Setting to 1")
        document.getElementById('isc').value = 1
        isc = 1
    } else {
        isc = eval(isc)
    }
    let vmp = 17.28

    let imp = 5.71

    let pm = 235

    let io = (document.getElementById('io').value)
    if (!io || isNaN(io)) {
        alert("io is invalid. Setting to 1")
        document.getElementById('io').value = 1
        io = 1
    } else {
        io = eval(io)
    }
    let ki = (document.getElementById('ki').value)
    if (!ki || isNaN(ki)) {
        alert("ki is invalid. Setting to 1")
        document.getElementById('ki').value = 1
        ki = 1
    } else {
        ki = eval(ki)
    }
    let kv = -0.123

    let kp = -0.0047


    let it = np * isc

    v = range(0, voc, 0.1)
    let vsz = v.length
    let ta = Number(document.getElementById('ta').value)
    let tak = ta + 273

    let noct = Number(document.getElementById('noct').value)
        //for gravity
    let g = Number(document.getElementById('gra').value)
    let tc = ta + ((noct - 20) * g) / 1000
    let tck = tc + 273

    //for vt
    let vt = (ns * k * tck) / q
        //for ipv
    let Ipv = (isc + ki * (tck - tak)) * (g / 1000)
        //for id

    let Id =
        io *
        Math.pow(tck / tak, 3) *
        Math.exp(((q * eg) / (k * a)) * (1 / tak - 1 / tck))

    let ish = ((Ipv - Id) * rs) / (rs + rsh)
    v.forEach((element) => {
        i.push(
            np * Ipv -
            np *
            Id *
            (Math.exp((q * (element + isc * rs)) / (k * tck * a * ns)) - 1) -
            np * Math.abs(ish),
        )
    })
    for (let y = 1; y <= vsz; y++) {
        if (i[y] <= 0) i[y] = 0
    }
    for (let y = 0; y < i.length; y++) {
        P.push(v[y] * i[y])
    }

}


let holdpressed = false
let hidepressed = false
let chartcount = 1

function random_arr() {
    const arr = []
    for (let index = 0; index < 5; index++) {
        arr.push(Math.floor(Math.random() * 15))
    }
    return arr
}

function nonzero(NUM) {
    if (NUM > 0) return NUM
}


function PLOT() {

    var randomColor = Math.floor(Math.random() * 16777215).toString(16)
    chartcount++
    let chart1 = Chart1
    let chart2 = Chart2

    let arr_I = [0, 0, 0, 0, 0]
    let arr_P = [7, 8, 9, 10, 11]
    labels = [1, 2, 3, 4, 5]
        // chart1
    if (holdpressed) {
        exe()
        chart1.data.datasets.push({
            data: i.filter(nonzero),
            label: 'V vs I' + chartcount,
            borderColor: '#' + randomColor,
            fill: false,
        })
        chart2.data.datasets.push({
            data: P.filter(nonzero),
            label: 'V vs P' + chartcount,
            fill: false,
            borderColor: '#' + randomColor,
        })
        holdpressed = false
        document.getElementById('holdbut').innerHTML = 'HOLD'
            

    } else {
        exe()

        chartcount = 0
        for (let idx = 0; idx < v.length; idx++) {
            v[idx] = v[idx].toFixed(2);

        }
        chart1.data.labels = v
        chart2.data.labels = v
        chart1.data.datasets = [chart1.data.datasets[0], {
            data: i.filter(nonzero),
            label: 'V vs I' + chartcount,
            borderColor: '#' + randomColor,
            fill: false,
        }, ]
        chart2.data.datasets = [chart2.data.datasets[0], {
            data: P.filter(nonzero),
            label: 'V vs P' + chartcount,
            fill: false,
            borderColor: '#' + randomColor,
        }, ]

        let constarrI = chart1.data.datasets[0].data
        let constarrP = chart2.data.datasets[0].data
        let arr1I = chart1.data.datasets[1].data
        let arr1P = chart2.data.datasets[1].data

        let diffarrI = []
        let diffarrP = []
        for (let idx = 0; idx < constarrI.length; idx++) {
            diffarrI.push(constarrI[idx] - arr1I[idx])
            diffarrP.push(constarrP[idx] - arr1P[idx])


        }
        

    }

    chart1.update()
    chart2.update()
}

function HOLD() {
    holdpressed = true
    document.getElementById('holdbut').innerHTML = 'Held';
}

function HIDE() {
    chartcount++
    let chart1 = Chart1
    let chart2 = Chart2

    let arr_I = [0, 0, 0, 0, 0]
    let arr_P = [7, 8, 9, 10, 11]
    labels = [1, 2, 3, 4, 5]
        // chart1
    question()

    chartcount = 0
    chart1.data.labels = v
    chart2.data.labels = v
    chart1.data.datasets = [{
        data: i.filter(nonzero),
        label: 'V vs I' + chartcount,
        borderColor: '#000000',
        fill: false,
    }, ]
    chart2.data.datasets = [{
        data: P.filter(nonzero),
        label: 'V vs P' + chartcount,
        fill: false,
        borderColor: '#000000',
    }, ]

    chart1.update()
    chart2.update()

}
function hide() {
    let chart1 = Chart1
    let chart2 = Chart2
    if (!hidepressed) {
        hidepressed = true;
        chart1.data.datasets[0].hidden = true
        chart2.data.datasets[0].hidden = true
    } else {
        hidepressed = false;
        chart1.data.datasets[0].hidden = false
        chart2.data.datasets[0].hidden = false
    }
    chart1.update()
    chart2.update()

}

function SCORE() {
    let count = 0;
    let score = document.getElementById("score").innerHTML;
    if (score >= 70) {
        score = score - 15;
        score.innerHTML = score;
        count += 1;
    } else if (score > 30 && score <= 70) {
        score = score - 20;
        score.innerHTML = score;

        count += 1;
    } else {
        score = score - 25;
        score.innerHTML = score;
        count += 1;
    }
    if (count == 8) {
        alert("you are out of chances");
        score.textContent = 0;
        easyButton.onclick = "disabled";
    }

}