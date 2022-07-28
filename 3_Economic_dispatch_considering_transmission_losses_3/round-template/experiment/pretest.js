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
            question: "The Bmn matrix is called as",
            answers: {
                a: "Real power matrix",
                b: "Reactive power matrix",
                c: "Apparent power matrix",
                d: "Loss coefficient matrix"
            },
            correctAnswer: "d"
        },
        {
            question: "Which of the following factor is used to move one optimal schedule to another when load changes are small?",
            answers: {
                a: "Base point factor",
                b: "Maximum point factor",
                c: "Penalty factor",
                d: "Participation factor"
            },
            correctAnswer: "d"
        },
        {
            question: "The term 'transmission loss' refers to the loss of ",
            answers: {
                a: " Function of real power generation",
                b: " independent of real power generation",
                c: "function of reactive power generation",
                d: "function of bus voltage magnitude and its angle"
            },
            correctAnswer: "a"
        },
        {
            question: "The loss coefficient B12 is given by",
            answers: {
                a: "<img src=\"./images/pre_Q4_a.png\"\/>",
                b: "<img src=\"./images/pre_Q4_b.png\"\/>",
                c: "<img src=\"./images/pre_Q4_c.png\"\/>",
                d: "<img src=\"./images/pre_Q4_d.png\"\/>"
            },
            correctAnswer: "b"
        },
        {
            question: "The derivation of transmission line loss is not based on which assumption?",
            answers: {
                a: "All the load currents maintain a constant ratio.",
                b: "All the lines in the system have different X/R ratios.",
                c: "All the load currents have same phase angle.",
                d: "The power factor at each station remains constant."
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