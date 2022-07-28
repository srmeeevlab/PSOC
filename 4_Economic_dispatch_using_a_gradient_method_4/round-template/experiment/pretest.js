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
            question: "Economic dispatch by gradient method is not recommended for",
            answers: {
                a: "Cubic Input-output characteristics of a plant",
                b: "More complex Input-output characteristics function of a plant",
                c: "Non-linear Input-output characteristics of a plant",
                d: "Piece wise linear Input-output characteristics of a plant"
            },
            correctAnswer: "d"
        },
        {
            question: "The gradient method is based on the idea that a set of steps can be used to find the minimum of a function f(x).",
            answers: {
                a: "Upward direction",
                b: "Downward direction",
                c: "Clockwise direction",
                d: "Anticlockwise direction"
            },
            correctAnswer: "b"
        },
        {
            question: "Which one is used to convergence of gradients method to speed up?",
            answers: {
                a: "<img src=\"./images/pretest_question3_option_a.png\"\/>",
                b: "<img src=\"./images/pretest_question3_option_b.png\"\/>",
                c: "<img src=\"./images/pretest_question3_option_c.png\"\/>",
                d: "<img src=\"./images/pretest_question3_option_d.png\"\/>"
            },
            correctAnswer: "c"
        },
        {
            question: "In gradient method, there are six power plants are used for economic dispatch problem for the given power demand. What is the size of the gradient matrix for the gradient method-1?",
            answers: {
                a: "7x1",
                b: "1x6",
                c: "1x7",
                d: "6x1"
            },
            correctAnswer: "d"
        },
        {
            question: "The drawback of general gradient method for solving the economic dispatch problem is",
            answers: {
                a: "Violating the equality criteria",
                b: "Violating the inequality criteria",
                c: "Inaccurate solution and lambda updated each iteration",
                d: "Incompatible gradient vector for the linear input-output cost characteristics of the power plant"
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