const node = document.createElement("div");
node.style.height = "20px";
node.style.backgroundColor = "green";
max_level = 30;
node.style.margin = "1.5em";
let count1 = 0;
let sub_arr;


function drag_handler(ev) {
  ev.preventDefault();
  // console.log("drag start - ");
}
function drag_start_handler(ev) {
  // console.log(ev.target.id);
  deselect();
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dragOver_handler(ev) {
  ev.preventDefault();
  ev.target.style.borderColor = "red";
}

function dragEnter_handler(ev) {
  ev.preventDefault();
  ev.target.style.borderColor = "red";
  if (document.getElementById("interface").firstElementChild == null) {
    node.style.marginTop = "4rem";
  } else {
    node.style.marginTop = "1.1em";
  }
  // ev.target.parentNode!=prevSelection[0]
  if(ev.target.classList.contains("highlight")){
    return;
  }
  if (ev.target != node  ) {
    ev.target.appendChild(node);
  }
}


function dragLeave_handler(ev) {
  ev.target.style.borderColor = "transparent";
  if (ev.target != node) {
    ev.target.removeChild(node);
    // node.remove();
  }
}

function drop_handler(ev) {
  ev.preventDefault();
  if (ev.target != node) {
    node.remove();
  }

  if (prevSelection.length > 0 && prevSelection[0].classList.contains("highlight")) {
    if(ev.target.classList.contains("highlight")){
      prevSelection[0].draggable = false;
      document.getElementById("dragbut").innerHTML = "drag";
      return;
    }
    
    ev.target.appendChild(prevSelection[0]);
    prevSelection[0].draggable = false;
    document.getElementById("dragbut").innerHTML = "drag";
  }
  else {

    if (ev.path.length - 8 > 10) {
      alert("max indentation reached");
      return;
    }
    ev.target.style.borderColor = "transparent";
    let id = ev.dataTransfer.getData("text/plain");
    let i = 0;
    console.log(id);
    for (i; i < id.length; i++) if (id[i] === "-") id = id.slice(i + 1, i + 4);
    console.log(id);

    const temp = document.getElementById(id);
    const clone = temp.content.cloneNode(true);
    clone.id = id + count1++;

    console.log("clone id- ", clone.id);
    ev.target.appendChild(clone);
    ev.target.lastElementChild.id = clone.id;
  }

}




// select highkight


function dragbu() {
  document.getElementById("dragbut").innerHTML = "dragstarted";
  let target = prevSelection[0];
  target.draggable = true;
  target.setAttribute("ondrag", `drag_handler(event)`);
  target.setAttribute("ondragstart", `drag_start_handler(event)`);

}

function up() {
  if (prevSelection.length == 1) {
    let target = prevSelection[0];
    if (target.previousElementSibling) {
      target.parentNode.insertBefore(target, target.previousElementSibling);
    }

  }
}
function down() {
  if (prevSelection.length == 1) {
    let target = prevSelection[0];
    if (target.nextElementSibling)
      target.parentNode.insertBefore(target, target.nextElementSibling.nextElementSibling);
  }
}



function stepout() {
  let target = prevSelection[0];
  if (target.parentNode != document.getElementById("interface"))
    target.parentNode.parentNode.insertBefore(target, target.parentNode);
}
function stepin() {
  let target = prevSelection[0];
  if (target.nextElementSibling)
    target.nextElementSibling.appendChild(target);
}

function deselect() {
  while (prevSelection.length > 0) {
    prevSelection.pop().classList.remove("highlight");
  }
  document.getElementById("delbut").disabled = true;
  document.getElementById("upbut").disabled = true;
  document.getElementById("downbut").disabled = true;
  document.getElementById("dragbut").disabled = true;
  document.getElementById("stepo").disabled = true;
  document.getElementById("stepi").disabled = true;
}

const prevSelection = [];
let count = 0;
let ifshiftpressed = false;


const delel = () => {
  while (prevSelection.length > 0) {
    prevSelection.pop().remove();
  }
  document.getElementById("delbut").disabled = true;
  document.getElementById("upbut").disabled = true;
  document.getElementById("downbut").disabled = true;
  document.getElementById("dragbut").disabled = true;
  document.getElementById("stepo").disabled = true;
  document.getElementById("stepi").disabled = true;
}


function checkButtonStatus() {
  let upbut = document.getElementById("upbut");
  let dragbut = document.getElementById("dragbut");
  let downbut = document.getElementById("downbut");
  let stepi = document.getElementById("stepi");
  let stepo = document.getElementById("stepo");
  let setbut = document.getElementById("setbut");
  let delbut = document.getElementById("delbut");

  console.log("inside chck status")
  if (prevSelection.length == 0) {
    document.getElementById("upbut").disabled = true;
    document.getElementById("downbut").disabled = true;
    document.getElementById("dragbut").disabled = true;
    document.getElementById("delbut").disabled = true;
    document.getElementById("stepo").disabled = true;
    document.getElementById("stepi").disabled = true;
    return;
  }
  let target = prevSelection[0];

  if (!target.previousElementSibling) {
    upbut.disabled = true;
    // console.log("upbut disabed")
  } else {
    upbut.disabled = false;
  }
  if (!target.nextElementSibling) {
    downbut.disabled = true;
  } else {
    downbut.disabled = false;
  }
  if (!target.nextElementSibling)
    stepi.disabled = true;
  else
    stepi.disabled = false;
  if (target.parentNode == document.getElementById("interface"))
    stepo.disabled = true;
  else
    stepo.disabled = false;

  delbut.disabled = false;
  dragbut.disabled = false;


}



addEventListener("click", (event) => {

  const target = event.target;
  if (target.classList.contains("selectable")) {
    // single click
    // [target]
    // console.log("path lne", event.path);

    let level = (event.path.length) - 8;
    console.log("path lne", level);

    if (prevSelection.length == 1 && !event.ctrlKey && !event.shiftKey) {
      if (target.classList.contains("highlight")) {
        prevSelection.pop().classList.remove("highlight");

      }
      else {
        prevSelection.pop().classList.remove("highlight");
        prevSelection.push(target);
        target.classList.add("highlight");
      }
    }
    // single select
    else if (prevSelection.length > 1 && !event.ctrlKey && !event.shiftKey) {
      deselect();
      prevSelection.push(target);
      target.classList.add("highlight");
    }

    else if (prevSelection.length > 0 && event.ctrlKey) {
      if (prevSelection.includes(target)) {
        target.classList.remove("highlight");
        let idx = prevSelection.indexOf(target);
        prevSelection.splice(idx, 1);

      } else {
        prevSelection.push(target);
        target.classList.add("highlight");
      }

      // console.log("control is presses",event.ctrlKey);
    }
    // shift slect
    else if (event.shiftKey && prevSelection[0] != undefined) {


      // console.log("shift is presses",event.shiftKey);
      let lastselectedelem = prevSelection.pop();

      // console.log(ifshiftpressed);
      // console.log("start",lastselectedelem);
      // console.log("end",target);
      if (!ifshiftpressed) {
        ifshiftpressed = true;
      }
      deselect();
      console.log(ifshiftpressed);

      const siblnglst = Array.from(document.getElementsByClassName("selectable"));
      let starttemp = siblnglst.indexOf(lastselectedelem);
      let endtemp = siblnglst.indexOf(target);

      if (endtemp > starttemp) {
        // console.log("end is greater");
        for (let i = endtemp; i >= starttemp; i--) {
          prevSelection.push(siblnglst[i]);
          siblnglst[i].classList.add("highlight");
        }
      } else {
        // console.log("start is greater");
        for (let i = endtemp; i <= starttemp; i++) {
          prevSelection.push(siblnglst[i]);
          siblnglst[i].classList.add("highlight");
        }
      }

    }
    else {
      prevSelection.push(target);
      target.classList.add("highlight");
    }



    // document.getElementById("delbut").disabled = false;
    // document.getElementById("upbut").disabled = false;
    // document.getElementById("downbut").disabled = false;
    // document.getElementById("dragbut").disabled = false;
    // document.getElementById("stepo").disabled = false;
    // document.getElementById("stepi").disabled = false;


    // if (!target.previousElementSibling) {
    //   document.getElementById("upbut").disabled = true;
    // }
    // if (!target.nextElementSibling) {
    //   document.getElementById("downbut").disabled = true;
    //   document.getElementById("stepi").disabled = true;
    // }
    // if (target.parentNode == document.getElementById("interface")) {
    //   document.getElementById("stepo").disabled = true;
    // }

  }
  checkButtonStatus();
  console.log(prevSelection);

});





addEventListener("keyup", (ev) => {

  if (ev.key == "Shift") {
    ifshiftpressed = false;
  }

})

