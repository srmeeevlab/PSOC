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
            question: "The Gain Matrix ‘G’ of power system becomes more ill-condition if the condition number is",
            answers: {
                a: "Decrease in number",
                b: "Moderate in number",
                c: "Increase in number",
                d: "1"
            },
            correctAnswer: "c"
        },
        {
            question: "The condition number for Gain Matrix ‘G’ is define as",
            answers: {
                a: "Rank of Gain Matrix ‘G’",
                b: "Ratio of largest to smallest eigenvalue",
                c: "GG-1",
                d: "Inverse of G"
            },
            correctAnswer: "b"
        },
        {
            question: "The solution of state estimation in power system is affected by",
            answers: {
                a: "Ill conditioning",
                b: "Computer storage requirement",
                c: "Time requirement",
                d: "All of above"
            },
            correctAnswer: "d"
        },
        {
            question: "State estimation of power system by only active and reactive power injection is same as",
            answers: {
                a: "Load flow study",
                b: "Optimum power flow analysis",
                c: "Economical dispatch",
                d: "Load forecasting"
            },
            correctAnswer: "a"
        },
        {
            question: "In only real and reactive power injection, 2N number of elements of measurement vector ‘z’ is used to estimate ________ number of elements of state vector ‘x’",
            answers: {
                a: "N-1",
                b: "2N-1",
                c: "N",
                d: "2N-2"
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