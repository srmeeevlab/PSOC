const quizModal = new bootstrap.Modal(document.getElementById("quizModal"));
const data = [
    [{
        title:"Question 1",
        body:"Which condition is called Surge Impedance Loading (SIL)?",
        answer: {
            option:[
                "Surge impedance loading is defined as the power load in which the total real power of the lines becomes zero. Transmission line is terminated by reactance impedance alone",
                "Surge Impedance Loading is the connected load in transmission line for which reactive power generated is equal to reactive power consumed i.e. the flow of reactive power is zero. There is an exact balance between reactive power generation and consumption."
            ]
            ,ans:"b"
        }
    },
    {
        title:"Question 2",
        body:"Choose the no loading condition of the transmission line",
        answer: {
            option:[
                "The line carries zero real power from sending end to receiving end. i. e The difference voltage angle of the sending and receiving end is zero",
                "The line carries zero reactive power from sending end to receiving end. i. e The difference in voltage magnitude of the sending and receiving end is zero"
            ],
            ans:"a"
        }
    }],
    [{
        title:"Question 1",
        body:"Choose the condition for symmetrical lossless line?",
        answer: {
            option: [
                "Vs=Vr i.e sending end voltage is equal to receiving end voltage",
                "Is=Iri.e sending end current is equal to receiving end current"
            ],
            ans:"a"
        }
    },
    {
        title:"Question 2",
        body:"The real power transfer between two buses mainly depends on ",
        answer: {
            option:[
            "Difference in voltage magnitude of sending end and receiving end",
            "Difference in voltage angle of sending end and receiving end"
        ],
            ans:"b"
        }
    },
    ],
    [{
        title:"Question 1",
        body:"A typical value of Surge impedance for the underground cable is",
        answer: {
            option:["Around 40 ohms","Around 100 ohms"],
            ans:"a"
        }
    },
    {
        title:"Question 2",
        body:"The reactive power transfer between two buses mainly depends on",
        answer: {
            option:["Difference in voltage magnitude of sending end and receiving end of the bus","Difference in voltage angle of sending end and receiving end of the bus"],
            ans:"a"
        }
    },],
    [{
        title:"Question 1",
        body:"A typical value of Surge impedance for the Over headline is",
        answer: {
            option:["Around 400 ohms","Around 40 ohms"],
            ans:"a"
        }
    },
    {
        title:"Question 2",
        body:"Typical voltage level (kV) and line length (in km) value of the long transmission line is ",
        answer: {
            option:[
                "Greater than 100 kV, Greater than 250 km",
                "Line voltage is between 20 kV and 100 kV, line length is between 100 km and 250 km"
            ],
            ans:"a"
        }
    },
    ]
]

const currentInteraction ={
    currentArray:[],
    position:0
}
function generateQuestion(data,next,previous){
    document.getElementById("quiz-previous").hidden = !previous;
    document.getElementById("quiz-next").hidden = !next;
    document.getElementById("quiz-submit").hidden = true;
    document.getElementById("quiz-title").innerHTML = data.title;
    document.getElementById("quiz-body").innerHTML = data.body;
    document.getElementById("quiz-result").innerHTML = "";
    document.getElementById("quiz-select").innerHTML = "";
    if(data.answer){
        document.getElementById("quiz-submit").hidden = false;
        let _opt = 'a';
        data.answer.option.forEach(ans => {
            const _div = document.createElement("div");
            _div.classList.add("form-check");
            
            const _input = document.createElement("input");
            _input.classList.add("form-check-input");
            setAttributes(_input,{"type":"radio","id":`quiz-ans-${_opt}`,"name":"quiz-ans"});
            
            const _label = document.createElement("label");
            _label.classList.add("form-check-label");
            _label.setAttribute("for",`quiz-ans-${_opt}`);
            _label.innerHTML = `${_opt}: ${ans}`; 
            
            if(_opt === data.answer.ans)
                _input.setAttribute("data-ans",true);
            
            _div.appendChild(_input);
            _div.appendChild(_label);
            _opt = nextChar(_opt);
            document.getElementById("quiz-select").appendChild(_div);
        });
    }
}
function setAttributes(el,attrs){
    for(var key in attrs){
        el.setAttribute(key,attrs[key]);
    }
    return el;
}
function nextChar(c) {
    return String.fromCharCode(c.charCodeAt(0) + 1);
}
function startInteraction(dataArray){
    currentInteraction.position=0
    currentInteraction.currentArray = dataArray;
    if(currentInteraction.currentArray.length === 1){
        generateQuestion(currentInteraction.currentArray[currentInteraction.position],false,false);
    }
    else
        generateQuestion(currentInteraction.currentArray[0],true,false);
    quizModal.show();
}
function nextInteraction(){
    if(currentInteraction.position+1<=currentInteraction.currentArray.length)
        currentInteraction.position++;
    if(currentInteraction.currentArray.length === 1){
        generateQuestion(currentInteraction.currentArray[currentInteraction.position],false,false);
        return;
    }
    if(currentInteraction.position+1 === currentInteraction.currentArray.length)
        generateQuestion(currentInteraction.currentArray[currentInteraction.position],false,true);
    else
        generateQuestion(currentInteraction.currentArray[currentInteraction.position],true,true);
}
function previousInteraction(){
    if(currentInteraction.position>=1)
        currentInteraction.position--;
    if(currentInteraction.currentArray.length === 1){
        generateQuestion(currentInteraction.currentArray[currentInteraction.position],false,false);
        return;
    }
    if(currentInteraction.position === 0)
        generateQuestion(currentInteraction.currentArray[currentInteraction.position],true,false);
    else
        generateQuestion(currentInteraction.currentArray[currentInteraction.position],true,true);
}
function checkAns(){
    const options = document.getElementsByName("quiz-ans");
    let selected = null;
    options.forEach((_el)=>{
        if(_el.checked)
            selected = _el;
    });
    if(selected.getAttribute("data-ans"))
        document.getElementById("quiz-result").innerHTML = "The Answer is correct";
    else
        document.getElementById("quiz-result").innerHTML = "This should not be selected";
}
