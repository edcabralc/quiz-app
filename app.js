const formQuiz = document.querySelector("form");
const buttonShowQuiz = document.querySelector("#btn-hero");
const quizContainer = document.querySelector(".quiz");
const userAnswersFeedbackContainer = document.querySelector(
    ".user-feedback-container"
);

const correctAnswers = ["D", "B", "A", "A", "C"];

let score = 0;

const getUserAnswers = () => {
    let userAnswers = [];

    correctAnswers.forEach((_, index) => {
        const userAnswer = formQuiz[`question${index + 1}`].value;
        userAnswers.push(userAnswer);
    });

    return userAnswers;
};

const scrollQuizContainerToCenter = () => {
    const axisYCoordenate = quizContainer.offsetTop - 20;
    scrollTo(0, axisYCoordenate);
};

const scrollQuizToTop = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    userAnswersFeedbackContainer.classList.remove("d-none");
};

const animateScoreToUser = () => {
    let counter = 0;
    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer);
        }
        userAnswersFeedbackContainer.querySelector(
            ".span"
        ).textContent = `${counter++}%`;
    }, 10);
};
const resetScore = () => (score = 0);

const calculateUserScore = (userAnswers) => {
    userAnswers.forEach((userAnswer, index) => {
        const isACorrectAnswer = userAnswer === correctAnswers[index];

        if (isACorrectAnswer) {
            score += 20;
        }
    });
};

const handleQuizSubmit = (event) => {
    event.preventDefault();

    const userAnswers = getUserAnswers();

    if (score > 0) {
        score = 0;
    }

    calculateUserScore(userAnswers);
    scrollQuizToTop();
    animateScoreToUser();
};

formQuiz.addEventListener("submit", handleQuizSubmit);
buttonShowQuiz.addEventListener("click", scrollQuizContainerToCenter);
