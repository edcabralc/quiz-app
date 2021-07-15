const correctAnswers = ["A", "A", "A", "A", "A"];

const form = document.querySelector("form");
const input = document.querySelectorAll("input");
const userAnswersFeedback = document.querySelector(".answers-container");

const handleSubmit = (event) => {
    event.preventDefault();

    const userAnswers = [
        form.question1.value,
        form.question2.value,
        form.question3.value,
        form.question4.value,
        form.question5.value,
    ];

    let score = 0;

    const showUserScore = (userAnswer, index) => {
        const isACorrectAnswer = userAnswer === correctAnswers[index];

        if (isACorrectAnswer) {
            score += 20;
            userAnswersFeedback.classList.add("show");
            userAnswersFeedback.textContent = `Você acertou ${score}% das respostas`;
            return;
        }

        userAnswersFeedback.textContent = `Você acertou ${score}% das respostas`;
    };

    userAnswers.forEach(showUserScore);
};

form.addEventListener("submit", handleSubmit);
