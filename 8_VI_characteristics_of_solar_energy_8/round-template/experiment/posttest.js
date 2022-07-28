// Don't touch the below code

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    // Don't touch the above code




    // Write your MCQs here --- Start --- --------------------

    const myQuestions = [{
            question: "Solar energy radiated from the sun is in the form of:",
            answers: {
                a: "Infrared radiation",
                b: "Ultraviolet Radiation",
                c: "Transverse waves",
                d: "Electromagnetic waves"
            },
            correctAnswer: "d"
        },
        {
            question: "Solar energy reaches the Earths surface at a rate of:",
            answers: {
                a: "1016 W",
                b: "1020 W",
                c: "1026 W",
                d: "856 W"
            },
            correctAnswer: "a"
        },
        {
            question: "The Solar Constant has an approximate value of:",
            answers: {
                a: "1367 W/m2",
                b: "1377 W/m2",
                c: "1357 W/m2",
                d: "1347 W/m2"
            },
            correctAnswer: "a"
        },
        {
            question: "In terms of the relation between the duty cycle and the output voltage for a step-up chopper, what happens to the average value of the output voltage when the value of the duty cycle is increased?",
            answers: {
                a: "It does not change",
                b: "It Increases",
                c: "It Decreases",
                d: "none of the mentioned"
            },
            correctAnswer: "b"
        },
        {
            question: "The Shunt Controller, and the _______ are less efficient DC-DC converter technologies when compared to the Maximum Power Point Tracking (MPPT) DC-DC converter technology.",
            answers: {
                a: "SVPWM",
                b: "Series Controller",
                c: "Pulse Width Modulation",
                d: "Vector Controller"
            },
            correctAnswer: "c"
        } //Dont add comma here
    ];

    // ---------------------------- End -------------------------------

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();