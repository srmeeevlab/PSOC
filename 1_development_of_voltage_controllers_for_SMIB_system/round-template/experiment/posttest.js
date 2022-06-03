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
            question: "The midpoint voltage of the symmetrical lossless long transmission line is mainly depending on",
            answers: {
                a: "Current flow",
                b: "Real power flow",
                c: "Reactive power flow",
                d: "Difference between sending end angle and receiving end angle"
            },
            correctAnswer: "b"
        },
        {
            question: "The surge impedance loading of the transmission line is defined as is",
            answers: {
                a: "Different value of inductive reactance and capacitance reactance of the transmission line, only resistance exists",
                b: "Square root of ratio of inductive reactance to capacitance reactance of the transmission line",
                c: "Equal value of inductive reactance and capacitance reactance of the transmission line, only resistance exists",
                d: "Square root of ratio of capacitive reactance to inductive reactance of the transmission line	"
            },
            correctAnswer: "c"
        },
        {
            question: "The surge impedance of the symmetrical lossless transmission line is",
            answers: {
                a: "Equal value of inductive reactance and capacitance reactance of the transmission line, only resistance exists",
                b: "Different value of inductive reactance and capacitance reactance of the transmission line, only resistance exists",
                c: "Square root of ratio of the inductive reactance to capacitance reactance of the transmission line",
                d: "Square root of ratio of the capacitive reactance to inductive reactance of the transmission line"
            },
            correctAnswer: "c"
        },
        {
            question: "The formula for calculating the midpoint voltage of the symmetrical lossless long transmission line",
            answers: {
                a: "<img src=\"./images/post_Q4_a.png\"\/>",
                b: "<img src=\"./images/post_Q4_b.png\"\/>",
                c: "<img src=\"./images/post_Q4_c.png\"\/>",
                d: "<img src=\"./images/post_Q4_d.png\"\/>"
            },
            correctAnswer: "a"
        },
        {
            question: "In a 735-kV symmetrical lossless transmission line with inductance of 0.932 mH/ km, capacitance of 12.2 nF/ km, and a line length of 800 km. The surge impedance of the transmission line is",
            answers: {
                a: "246.394 Ohm",
                b: "276.394 Ohm",
                c: "225 Ohm",
                d: "285 Ohm"
            },
            correctAnswer: "b"
        },
        {
            question: "In a 735-kV symmetrical lossless transmission line with inductance of 0.932 mH/ km, capacitance of 12.2 nF/ km, and a line length of 800 km. The surge impedance loading of the transmission line is",
            answers: {
                a: "2954.5 MW",
                b: "3954.5 MW",
                c: "4954.5 MW",
                d: "1954.5 MW"
            },
            correctAnswer: "d"
        } //Dont add comma here
    ];

    // ---------------------------- End -------------------------------

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();