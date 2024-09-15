let quizSettings;
let questions;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft;
let timerInterval;
let planetPerformance = {};
const allPlanets = ['Sun', 'Moon', "Mercury", 'Mars', 'Jupiter', 'Saturn', 'Venus', 'Rahu', 'Ketu'];

document.addEventListener('DOMContentLoaded', function() {
    quizSettings = JSON.parse(localStorage.getItem('quizSettings'));
    if (!quizSettings) {
        alert('No quiz settings found. Redirecting to setup page.');
        window.location.href = 'planet-pre-quiz.html';
        return;
    }

    loadQuestions();
    timeLeft = quizSettings.time * 60;
    updateTimerDisplay();
    updateScoreDisplay();
    startTimer();
    displayQuestion();

    document.getElementById('endQuiz').addEventListener('click', confirmEndQuiz);
});

function loadQuestions() {
    questions = [];
    let allQuestions = [];

    quizSettings.planets.forEach(planet => {
        if (planetaryKarakatvas[planet]) {
            planetaryKarakatvas[planet].forEach(item => {
                allQuestions.push({
                    item: item,
                    correctPlanet: planet
                });
            });
        }
    });

    let seed = Date.now();
    
    for (let i = allQuestions.length - 1; i > 0; i--) {
        seed = (seed * 9301 + 49297) % 233280;
        const j = Math.floor((seed / 233280) * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }

    questions = allQuestions.slice(0, quizSettings.questions);

    if (questions.length < quizSettings.questions) {
        alert('Not enough questions available for the selected planets. Adjusting question count.');
        quizSettings.questions = questions.length;
    }
}

function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.item;

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    allPlanets.forEach((planet, index) => {
        const button = document.createElement('button');
        button.textContent = planet;
        button.classList.add('answer-btn');
        button.dataset.planet = planet;
        button.addEventListener('click', () => checkAnswer(planet));
        answersContainer.appendChild(button);
    });

    document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    const planetIndex = '123456789'.indexOf(key);
    
    if (planetIndex !== -1 && planetIndex < allPlanets.length) {
        checkAnswer(allPlanets[planetIndex]);
    } else if (key === '0' && allPlanets.length === 10) {
        checkAnswer(allPlanets[9]);
    } else if (key === 'e') {
        confirmEndQuiz();
    }
}

function checkAnswer(selectedPlanet) {
    document.removeEventListener('keydown', handleKeyPress);

    const question = questions[currentQuestionIndex];
    const correct = selectedPlanet === question.correctPlanet;
    
    if (!planetPerformance[question.correctPlanet]) {
        planetPerformance[question.correctPlanet] = { correct: 0, total: 0 };
    }
    planetPerformance[question.correctPlanet].total++;
    if (correct) {
        score++;
        planetPerformance[question.correctPlanet].correct++;
    }
    
    updateScoreDisplay();
    showFeedback(correct, question.correctPlanet);
    
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1000);
}

function showFeedback(correct, correctPlanet) {
    const feedbackElement = document.createElement('div');
    feedbackElement.textContent = correct ? 'Correct!' : `Wrong. The correct answer is ${correctPlanet}.`;
    feedbackElement.style.fontWeight = 'bold';
    feedbackElement.style.marginTop = '10px';
    feedbackElement.style.color = correct ? 'green' : 'red';
    
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.appendChild(feedbackElement);
    
    setTimeout(() => {
        quizContainer.removeChild(feedbackElement);
    }, 1000);
}

function updateScoreDisplay() {
    document.getElementById('current-score').textContent = score;
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('time-left').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function confirmEndQuiz() {
    if (confirm('Are you sure you want to end the quiz? Your current progress will be saved.')) {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timerInterval);
    const totalQuestions = questions.length;
    const attemptedQuestions = currentQuestionIndex;
    const correctAnswers = score;
    const wrongAnswers = attemptedQuestions - correctAnswers;
    const percentage = (correctAnswers / attemptedQuestions) * 100;
    
    const planetPercentages = {};
    for (const planet in planetPerformance) {
        const { correct, total } = planetPerformance[planet];
        planetPercentages[planet] = total > 0 ? (correct / total) * 100 : 0;
    }
    
    localStorage.setItem('quizResult', JSON.stringify({
        score: correctAnswers,
        attempted: attemptedQuestions,
        wrong: wrongAnswers,
        total: totalQuestions,
        percentage: percentage.toFixed(2),
        planetPercentages: planetPercentages
    }));
    
    window.location.href = 'planet-result.html';
}