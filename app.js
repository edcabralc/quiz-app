const formQuiz = document.querySelector("form");
const userAnswersFeedback = document.querySelector(".answers-container");

const correctAnswers = ["A", "A", "A", "A", "A"];

const handleQuizSubmit = (event) => {
    event.preventDefault();

    const userAnswers = [
        formQuiz.question1.value,
        formQuiz.question2.value,
        formQuiz.question3.value,
        formQuiz.question4.value,
        formQuiz.question5.value,
    ];

    let score = 0;

    const showUserScore = (userAnswer, index) => {
        const isACorrectAnswer = userAnswer === correctAnswers[index];

        if (isACorrectAnswer) {
            score += 20;
        }
    };

    userAnswers.forEach(showUserScore);
    scrollTo(0, 0);
    userAnswersFeedback.classList.add("show");
    userAnswersFeedback.textContent = `Você acertou ${score}% das respostas`;
};

formQuiz.addEventListener("submit", handleQuizSubmit);
