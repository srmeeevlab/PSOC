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
            question: "The function of a solar collector is to convert",
            answers: {
                a: "Solar Energy into Electricity",
                b: "Solar Energy into radiation",
                c: "Solar Energy into thermal energy",
                d: "Solar Energy into mechanical energy"
            },
            correctAnswer: "c"
        },
        {
            question: "For satellite the source of energy is.......",
            answers: {
                a: "Cryogenic storage",
                b: "Battery",
                c: "Solar cell",
                d: "Galvanic cell"
            },
            correctAnswer: "c"
        },
        {
            question: "Reflecting mirrors used for exploiting solar energy are called",
            answers: {
                a: "Mantle",
                b: "Ponds",
                c: "Diffusers",
                d: "Heliostats"
            },
            correctAnswer: "d"
        },
        {
            question: "The output of solar cell is of the order of",
            answers: {
                a: "1 W",
                b: "5 W",
                c: "10 W",
                d: "20 W"
            },
            correctAnswer: "a"
        },
        {
            question: "Photovoltaic cell or solar cell converts.",
            answers: {
                a: "Thermal energy into electricity",
                b: "Electromagnetic radiation directly into electricity",
                c: "Solar radiation into thermal energy",
                d: "Solar radiation into kinetic energy"
            },
            correctAnswer: "b"
        } //Dont add comma here
    ];

    // ---------------------------- End -------------------------------

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();