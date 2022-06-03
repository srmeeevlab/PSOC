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
            question: "The Incremental loss (ITL) is given by -------------- (where L- loss, C – cost, i- no.of generating unit)",
            answers: {
                a: "<img src=\"./images/post_Q1_a.png\"\/>",
                b: "<img src=\"./images/post_Q1_b.png\"\/>",
                c: "<img src=\"./images/post_Q1_c.png\"\/>",
                d: "<img src=\"./images/post_Q1_d.png\"\/>"
            },
            correctAnswer: "a"
        },
        {
            question: "Unit of penalty factor is_________",
            answers: {
                a: "Rs",
                b: "Rs/MWh",
                c: "MW",
                d: "No units"
            },
            correctAnswer: "d"
        },
        {
            question: "For the two power plant system, the loss equation is",
            answers: {
                a: "<img src=\"./images/post_Q3_a.png\"\/>",
                b: "<img src=\"./images/post_Q3_b.png\"\/>",
                c: "<img src=\"./images/post_Q3_c.png\"\/>",
                d: "<img src=\"./images/post_Q3_d.png\"\/>"
            },
            correctAnswer: "b"
        },
        {
            question: "A power system has two generating plants and the power is being dispatched economically withP1=150 MW and P2=275 MW. The loss coefficients are B11=0.001, B12=-0.0001 and B22=0.0013. Find the penalty factor of plant 1?",
            answers: {
                a: "3245",
                b: "3245",
                c: "5545",
                d: "8845"
            },
            correctAnswer: "a"
        },
        {
            question: "<img src=\"./images/post_Q3_a.png\"\/> is called the co-ordination equation because",
            answers: {
                a: "It co-ordinates ITL with IC.",
                b: "It co-ordinates ITL with penalty factor.",
                c: "It co-ordinates real-power generation with reactive-power generation.",
                d: "It co-ordinates bus voltage magnitude with IC"
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