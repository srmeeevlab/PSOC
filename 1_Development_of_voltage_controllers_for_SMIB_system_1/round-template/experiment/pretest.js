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
            question: "The long transmission line is modelled as",
            answers: {
                a: "Impedance model",
                b: "Nominal pi",
                c: "Nominal T",
                d: "Distributed Parameter model"
            },
            correctAnswer: "d"
        },
        {
            question: "The length of long transmission line (50 Hz power supply) is typically",
            answers: {
                a: "Less than 100km",
                b: "More than 250 km",
                c: "100 km to 250 km",
                d: "150 km to 250 km"
            },
            correctAnswer: "b"
        },
        {
            question: "The following transmission line is called symmetrical lossless line",
            answers: {
                a: "The voltages sent and received are the equal, regulated with neglected line resistance",
                b: "The voltages sent and received are the different with neglected line resistance",
                c: "The voltages sent and received are the 1 per unit with neglected line resistance",
                d: "The voltages sent and received are the equal, regulated with neglected line reactance"
            },
            correctAnswer: "c"
        },
        {
            question: "Under no load condition, the relative voltage angular difference between two buses in power system practically _________ degree.",
            answers: {
                a: "1",
                b: "30",
                c: "0",
                d: "90"
            },
            correctAnswer: "c"
        },
        {
            question: "In a long transmission line, the real power flow between two buses mainly depends on",
            answers: {
                a: "Difference between the RMS Voltage angles of two buses",
                b: "Difference between the current angles of incoming and outgoing buses",
                c: "The impedance angles of transmission line",
                d: "Difference between the apparent power angles of two buses"
            },
            correctAnswer: "a"
        },
        {
            question: "In a long transmission line, the reactive power flow between two buses mainly depends on ",
            answers: {
                a: "Difference between the RMS Voltage angles of two buses",
                b: "difference between the voltage magnitude of the two buses",
                c: "The impedance angles of transmission line",
                d: "Difference between the apparent power angles of two buses"
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