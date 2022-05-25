(function () {
    // Functions
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                console.log('this is', currentQuestion, questionNumber)
                if (currentQuestion.question) {
                    // variable to store the list of possible answers
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
                        `<div class="slide">
                            <div class="question"> ${currentQuestion.question} </div>
                            <div class="answers"> ${answers.join("")} </div>
                            </div>`
                    );
                } else if (currentQuestion.note) { // the object will note as the heading and content as the text
                    output.push(
                        ` 
                            <div class='slide'>
                                <div class="question">  ${currentQuestion.note} </div>
                                <div class="answers"> ${currentQuestion.content} </div>
                            </div>
                        `
                    )
                }
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            if (currentQuestion.question) {// find selected answer
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                // if answer is correct
                if (userAnswer === currentQuestion.correctAnswer) {
                    // add to the number of correct answers
                    numCorrect++;

                    // color the answers green
                    answerContainers[questionNumber].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else {
                    // color the answers red
                    answerContainers[questionNumber].style.color = 'red';
                }
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
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
            question: "Transmission loss is",
            answers: {
                a: " Function of real power generation",
                b: " independent of real power generation",
                c: "function of reactive power generation",
                d: "function of bus voltage magnitude and its angle"
            },
            correctAnswer: "a"
        },
        {
            note: "hi there here as note to look for",
            content: " yo there i know this is tought but we gotta do what we gott di"
        }
    ];

    // Kick things off
    buildQuiz();

    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    // Show the first slide
    showSlide(currentSlide);

    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();