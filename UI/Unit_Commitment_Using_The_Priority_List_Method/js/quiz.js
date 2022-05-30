const quizModal = new bootstrap.Modal(document.getElementById("quizModal"));
const data = [
    [{
        title:"Question 1",
        body:"Unit commitment (UC) is an optimization problem used to determine the operation schedule of the generating units at every hour interval with varying loads under different constraints and environments",
        answer: {
            option:["Yes", "No"],
            ans:"a"
        }
    },
    
    ],
    [{
        title:"Question 1",
        body:"Operating reserve is the amount of unused capacity in online energy assets which can compensate for power shortages or frequency drops within a given period of time",
        answer: {
            option:["Yes", "No"],
            ans:"b"
        }
    },
    {
        title:"Question 2",
        body:"Hot reserve is the generating capacity which is available for service but not normally ready for immediate loading.",
        answer: {
            option:["Yes", "No"],
            ans:"b"
        } 
    },
    ],
    [{
        title:"Question 1",
        body:"Minimum up time is the minimum time for which a unit must run.",
        answer: {
            option:["Yes", "No"],
            ans:"a"
        } 
    },
    ],
    [{
        title:"Question 1",
        body:"Unit commitment considers economic constraint as priority.",
        answer: {
            option:["Yes", "No"],
            ans:"b"
        } 
    }
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
