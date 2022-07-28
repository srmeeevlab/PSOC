"use strict";

import data, { instructions } from "./data.js";

let currentInstructionIndex = -1;
let sleepTime = 3500;

const setInstruction = (index) => {
  if (index < instructions.length && currentInstructionIndex < index) {
    currentInstructionIndex = index;
    document.getElementById("instructions").innerHTML =
      instructions[currentInstructionIndex].message;

    instructions[currentInstructionIndex].elementId.forEach((id, ind) => {
      if (ind === 0)
        document.getElementById(id).scrollIntoView({
          behavior: "smooth",
        });
      document.getElementById(id).classList.add("highlight");
    });
    sleep(sleepTime - 600).then(() =>
      instructions[currentInstructionIndex].elementId.forEach((id) =>
        document.getElementById(id).classList.remove("highlight")
      )
    );
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const setMultipleInstructions = (indexes) =>
  indexes.forEach((val, ind) =>
    sleep(sleepTime * ind).then(() => setInstruction(val))
  );

const setMolecule = (angle, animate = false) => {
  let width = 400;
  if (window.innerWidth < 900) {
    width = window.innerWidth;
  }
  const movie = new ChemDoodle.MovieCanvas3D("movie", width, 400);
  if (data[angle] !== null) {
    if (animate) {
      for (let angle = -180; angle <= 180; angle += 3) {
        movie.addFrame([ChemDoodle.readXYZ(data[angle]["geometry"])], []);
      }
    } else {
      movie.addFrame([ChemDoodle.readXYZ(data[angle]["geometry"])], []);
    }

    movie.styles.set3DRepresentation("Ball and Stick");
    movie.styles.atoms_displayLabels_3D = true;
    movie.styles.backgroundColor = "transparent";
    movie.loadMolecule(movie.frames[0].mols[0]);
    if (animate) {
      movie.startAnimation();
    }
  }
  return movie;
};

const initChart = () => {
  const xyValues = Object.keys(data).map((key) => ({
    x: key,
    y: data[key]["energy"],
  }));

  return new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [
        {
          pointRadius: 4,
          pointBackgroundColor: "rgb(0,0,255)",
          pointBorderColor: "rgb(133, 193, 233)",
          data: xyValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Angle (in degree)",
            },
          },
        ],

        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Energy (Ha)",
            },
          },
        ],
      },
    },
  });
};

const highlightChart = (angle) => {
  chart.data.datasets[0].pointBackgroundColor = [];
  chart.data.datasets[0].pointRadius = [];
  for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
    if (parseInt(chart.data.datasets[0].data[i]["x"]) === parseInt(angle)) {
      chart.data.datasets[0].pointRadius[i] = 5;
      chart.data.datasets[0].pointBackgroundColor[i] = "red";
    } else {
      chart.data.datasets[0].pointBackgroundColor[i] = "white";
    }
  }
  chart.update();
  // update dom values
  document.getElementById("angle").innerHTML = angle;
  document.getElementById("energy").innerHTML = data[angle]["energy"];
  document.getElementById("angle-slider").value = angle;
};

const setAngle = (angle) => {
  setMolecule(angle);
  highlightChart(angle);
};

// init
setInstruction(0);

const chart = initChart();
setAngle(document.getElementById("angle-slider").value);
let stopAnim = true;

const stopAnimation = () => {
  stopAnim = true;
};

const playLoop = async () => {
  const movie = setMolecule(-180, true);
  let angle = -180;
  let reverse = false;
  while (true) {
    highlightChart(angle);
    await new Promise((r) => setTimeout(r, 56));
    if (angle === 180) {
      reverse = true;
    }
    if (!reverse) {
      angle += 3;
    } else {
      angle -= 3;
      if (angle < -180) {
        animateButton.innerHTML = "Start Animation";
        stopAnim = true;
      }
    }
    if (stopAnim) {
      movie.stopAnimation();
      break;
    }
  }
};

// event listeners
const angleSlider = document.getElementById("angle-slider");
angleSlider.addEventListener("input", () => {
  if (stopAnim) {
    setAngle(angleSlider.value);
  }
});
angleSlider.addEventListener("mouseup", () =>
  setMultipleInstructions([1, 2, 3, 4])
);

angleSlider.addEventListener("touchend", () =>
  setMultipleInstructions([1, 2, 3, 4])
);

const animateButton = document.getElementById("animate-button");
animateButton.addEventListener("click", () => {
  if (stopAnim) {
    animateButton.innerHTML = "Stop Animation";
    stopAnim = false;
    playLoop();
  } else {
    animateButton.innerHTML = "Start Animation";
    stopAnim = true;
  }
});
