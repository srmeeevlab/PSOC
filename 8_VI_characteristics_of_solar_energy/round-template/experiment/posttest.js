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
            question: "In what form is solar energy is radiated from the sun?",
            answers: {
                a: "Ultraviolet Radiation",
                b: "Infrared radiation",
                c: "Electromagnetic waves",
                d: "Transverse waves"
            },
            correctAnswer: "c"
        },
        {
            question: " What is the rate of solar energy reaching the earth's surface?",
            answers: {
                a: "1026 W",
                b: "865 W",
                c: "1016 W",
                d: "1020 W"
            },
            correctAnswer: "c"
        },
        {
            question: " The value of Solar Constant is",
            answers: {
                a: "1347 W/m2",
                b: "1357 W/m2",
                c: "1367 W/m2",
                d: "1377 W/m2"
            },
            correctAnswer: "c"
        },
        {
            question: " For a step-up chopper, when the duty cycle is increased the average value of the output voltage.",
            answers: {
                a: "Increases",
                b: "Decreases",
                c: "remains the same",
                d: "none of the mentioned"
            },
            correctAnswer: "a"
        },
        {
            question: "The maximum power point tracking (MPPT) is a higher efficient DC-DC converter technology compared to 'shunt controller' and '______________' technologies.",
            answers: {
                a: "SVPWM",
                b: "series Controller",
                c: "pulse width modulation",
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