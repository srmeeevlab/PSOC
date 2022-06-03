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
            question: "The following one is called gain matrix",
            answers: {
                a: "Gain matrix [HT R-1  H]",
                b: "Gain matrix [ZT R  H]",
                c: "Gain matrix [HT R  Z]",
                d: "Gain matrix [HT R  H]"
            },
            correctAnswer: "d"
        },
        {
            question: "Network observability is defined as",
            answers: {
                a: "All data of power system is observed",
                b: "To find error in measurement data",
                c: "To check the given measurement data is sufficient for    state estimation",
                d: "The ratio of measure data to error"
            },
            correctAnswer: "c"
        },
        {
            question: "Suppression of bad data is done by selecting estimation index function as",
            answers: {
                a: "Quadratic",
                b: "Non-quadratic",
                c: "Square",
                d: "Square root"
            },
            correctAnswer: "b"
        },
        {
            question: "The method to find bad data detection is",
            answers: {
                a: "Fast decoupled",
                b: "Newton Raphson",
                c: "Chi square",
                d: "weighted least square"
            },
            correctAnswer: "c"
        },
        {
            question: "Power system is divided into ______sub-system to reduce computational burden in state estimation",
            answers: {
                a: "3",
                b: "2",
                c: "4",
                d: "5"
            },
            correctAnswer: "a"
        } //Dont add comma here
    ];

    // ---------------------------- End -------------------------------

    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();