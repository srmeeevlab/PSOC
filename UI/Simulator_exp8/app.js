var range = (start, stop, step) => {
    let rangelst = []
    for (let j = start; j <= stop; j += step) {
        rangelst.push(j)
    }
    return rangelst //for positive vals
}

//for tak

let v = []

//for tc

//for i
let i = []
    // i = np * Ipv - np * Id * (Math.exp(q * (v + isc * rs) / (k * tck * a * ns)) - 1) - np * (Math.abs(ish));
    // for (let ele = 0; ele)

let P = []

function question() {
    i = []
    v = []
    P = []
    let k = 1.38 * Math.pow(10, -23)
    const q = 1.6 * Math.pow(10, -19)
        // const Chart = require('chart.js');
    let eg = (Math.random() * 100 + 1)
    let a = (Math.random() * 100 + 1)
    let ns = (Math.random())
    let np = (Math.random() * 50 + 1)
    let rs = Math.random()
    let rsh = (Math.random() * 10000 + 1)
    let voc = (Math.random() * 100 + 1)
    let isc = (Math.random() * 10 + 1)
    let vmp = (Math.random() * 50 + 1)
    let imp = (Math.random() * 10 + 1)
    let pm = Math.floor((Math.random() * 100 + 1))

    let it = np * isc

    let io = (Math.random())
    let ki = Math.random()
    let kv = Math.random() * -1
    let kp = Math.random()
    console.log(typeof eg)
    console.log(
            eg,
            a,
            ns,
            np,
            rs,
            rsh,
            voc,
            isc,
            vmp,
            imp,
            pm,
            it,
            io,
            ki,
            kv,
            kp,
        )
        //console.log(range(0, 2, 0.5));
    v = range(0, voc, 0.1)
    let vsz = v.length
    let ta = Math.floor(Math.random() * 100)
    console.log('ta type', typeof ta)
    let tak = ta + 273

    let noct = Math.floor(Math.random() * 100)
    console.log('notc type', typeof noct)
        //for gravity
    let g = Math.floor(Math.random() * 2000)
    console.log('g type', typeof g)
    let tc = ta + ((noct - 20) * g) / 1000
    console.log('tc', tc)
    let tck = tc + 273
    console.log('tck', tck)

    //for vt
    let vt = (ns * k * tck) / q
    console.log('vt is', vt)
        //for ipv
    let Ipv = (isc + ki * (tck - tak)) * (g / 1000)
    console.log('ipv', Ipv)
        //for id

    let Id =
        io *
        Math.pow(tck / tak, 3) *
        Math.exp(((q * eg) / (k * a)) * (1 / tak - 1 / tck))

    let ish = ((Ipv - Id) * rs) / (rs + rsh)
    console.log('id ish', Id, ish)
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
    console.log('v is', v)
    console.log('i is', i)
    console.log('P is', P)
}


function exe() {
    i = []
    v = []
    P = []
    let k = 1.38 * Math.pow(10, -23)
    const q = 1.6 * Math.pow(10, -19)
        // const Chart = require('chart.js');
    let eg = (document.getElementById('eg').value)
    if (!eg || isNaN(eg)) {
        alert("eg is invalid. Setting to 1")
        document.getElementById('eg').value = 1
        eg = 1
    } else {
        eg = eval(eg)
    }
    let a = 1.3
        // if (!a || isNaN(a)) {
        //     alert("a is invalid. Setting to 1")
        //     document.getElementById('a').value = 1
        //     a = 1
        // } else {
        //     a = eval(a)
        // }
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
        // if (!vmp || isNaN(vmp)) {
        //     alert("vmp is invalid. Setting to 1")
        //     document.getElementById('vmp').value = 1
        //     vmp = 1
        // } else {
        //     vmp = eval(vmp)
        // }
    let imp = 5.71
        // if (!imp || isNaN(imp)) {
        //     alert("imp is invalid. Setting to 1")
        //     document.getElementById('imp').value = 1
        //     imp = 1
        // } else {
        //     imp = eval(imp)
        // }
    let pm = 235
        // if (!pm || isNaN(pm)) {
        //     alert("pm is invalid. Setting to 1")
        //     document.getElementById('pm').value = 1
        //     pm = 1
        // } else {
        //     pm = eval(pm)
        // }
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
        // if (!kv || isNaN(kv)) {
        //     alert("kv is invalid. Setting to 1")
        //     document.getElementById('kv').value = 1
        //     kv = 1
        // } else {
        //     kv = eval(kv)
        // }
    let kp = -0.0047
        // if (!kp || isNaN(kp)) {
        //     alert("kp is invalid. Setting to 1")
        //     document.getElementById('kp').value = 1
        //     kp = 1
        // } else {
        //     kp = eval(kp)
        // }

    let it = np * isc
    console.log(typeof eg)
    console.log(
            eg,
            a,
            ns,
            np,
            rs,
            rsh,
            voc,
            isc,
            vmp,
            imp,
            pm,
            it,
            io,
            ki,
            kv,
            kp,
        )
        //console.log(range(0, 2, 0.5));
    v = range(0, voc, 0.1)
    let vsz = v.length
    let ta = Number(document.getElementById('ta').value)
    console.log('ta type', typeof ta)
    let tak = ta + 273

    let noct = Number(document.getElementById('noct').value)
    console.log('notc type', typeof noct)
        //for gravity
    let g = Number(document.getElementById('gra').value)
    console.log('g type', typeof g)
    let tc = ta + ((noct - 20) * g) / 1000
    console.log('tc', tc)
    let tck = tc + 273
    console.log('tck', tck)

    //for vt
    let vt = (ns * k * tck) / q
    console.log('vt is', vt)
        //for ipv
    let Ipv = (isc + ki * (tck - tak)) * (g / 1000)
    console.log('ipv', Ipv)
        //for id

    let Id =
        io *
        Math.pow(tck / tak, 3) *
        Math.exp(((q * eg) / (k * a)) * (1 / tak - 1 / tck))

    let ish = ((Ipv - Id) * rs) / (rs + rsh)
    console.log('id ish', Id, ish)
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
    console.log('v is', v)
    console.log('i is', i)
    console.log('P is', P)
}
/////

let holdpressed = false
let hidepressed = false
let chartcount = 0

function random_arr() {
    const arr = []
    for (let index = 0; index < 5; index++) {
        // const element = array[index];
        arr.push(Math.floor(Math.random() * 15))
    }
    // console.log("ran arr is",arr);
    return arr
}

function nonzero(NUM) {
    if (NUM > 0) return NUM
}


function PLOT() {
    // exe()
    // console.log('v', v)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16)
    chartcount++
    let chart1 = Chart1
    let chart2 = Chart2
    console.log('chart 1 is', chart1)
    console.log('chart 2 is', chart2)
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
        console.log('pushed');


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
        console.log("all vals===", chart1.data.datasets[1].data)
        chart2.data.datasets = [chart2.data.datasets[0], {
            data: P.filter(nonzero),
            label: 'V vs P' + chartcount,
            fill: false,
            borderColor: '#' + randomColor,
        }, ]

        console.log('new chart')
        let constarrI = chart1.data.datasets[0].data
        let constarrP = chart2.data.datasets[0].data
        let arr1I = chart1.data.datasets[1].data
        let arr1P = chart2.data.datasets[1].data

        // console.log("length same?", arr1.length == constarr.length)
        // console.log("same???", JSON.stringify(arr1) == JSON.stringify(constarr)
        let diffarrI = []
        let diffarrP = []
        for (let idx = 0; idx < constarrI.length; idx++) {
            diffarrI.push(constarrI[idx] - arr1I[idx])
            diffarrP.push(constarrP[idx] - arr1P[idx])
            if (((constarrI[idx] - arr1I[idx]) / constarrI[idx]) * 100 <= 5) {
                console.log("ALRIGHT")
            } else {
                console.log("WRONG")
            }

        }
        console.log("diff arr is", diffarrI, diffarrP)
        console.log("worng point cpo==ount", diffarrI.filter(nonzero), diffarrP.filter(nonzero))


    }
    // chart1.data.labels.push(labels);
    // chart2.data.labels.push(labels);
    // chart2.data.labels = labels;
    console.log('dataset1', chart1.data.datasets)
    console.log('dataset', chart2.data.datasets)
    chart1.update()
    chart2.update()
}

function HOLD() {
    holdpressed = true
    document.getElementById('holdbut').innerHTML = 'hold pressed';
}
$("#toggle").click(function() {
    chart1.data.datasets.forEach(function(ds) {
        ds.hidden = !ds.hidden;
    });
    chart1.update();
});

function HIDE() {
    chartcount++
    let chart1 = Chart1
    let chart2 = Chart2
    console.log('chart 1 is', chart1)
    console.log('chart 2 is', chart2)
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

    // console.log("length same?", arr1.length == constarr.length)
    // console.log("same???", JSON.stringify(arr1) == JSON.stringify(constarr)

    // chart1.data.labels.push(labels);
    // chart2.data.labels.push(labels);
    // chart2.data.labels = labels;
    console.log('dataset1', chart1.data.datasets)
    console.log('dataset', chart2.data.datasets)
    chart1.update()
    chart2.update()

}
// let hidepressed = false;
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
    console.log(score)
    if (score >= 70) {
        score = score - 15;
        console.log(score)
        score.innerHTML = score;
        count += 1;
        console.log(count)
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