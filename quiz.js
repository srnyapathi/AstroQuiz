let quizSettings;
let questions;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft;
let timerInterval;
let housePerformance = {};

document.addEventListener('DOMContentLoaded', function() {
    quizSettings = JSON.parse(localStorage.getItem('quizSettings'));
    if (!quizSettings) {
        alert('No quiz settings found. Redirecting to setup page.');
        window.location.href = 'pre-quiz.html';
        return;
    }

    loadQuestions();
    timeLeft = quizSettings.time * 60;
    updateTimerDisplay();
    updateScoreDisplay();
    startTimer();
    displayQuestion();

    // Add event listener for the End Quiz button
    document.getElementById('endQuiz').addEventListener('click', confirmEndQuiz);
});

function loadQuestions() {
    questions = [];
    let allQuestions = [];

    // Collect all questions from selected houses
    quizSettings.houses.forEach(house => {
        if (houseKarakatva[house]) {
            houseKarakatva[house].forEach(item => {
                allQuestions.push({
                    item: item,
                    correctHouse: house
                });
            });
        }
    });

    // Create a seed based on current timestamp
    let seed = Date.now();
    
    // Shuffle all questions with a timestamp-based seed
    for (let i = allQuestions.length - 1; i > 0; i--) {
        seed = (seed * 9301 + 49297) % 233280;
        const j = Math.floor((seed / 233280) * (i + 1));
        [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }

    // Select the required number of questions
    questions = allQuestions.slice(0, quizSettings.questions);

    if (questions.length < quizSettings.questions) {
        alert('Not enough questions available for the selected houses. Adjusting question count.');
        quizSettings.questions = questions.length;
    }

    console.log('Loaded questions:', questions); // Debug log
}

// Remove the seededRandom function if it's no longer used

function displayQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.item;

    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    for (let i = 1; i <= 12; i++) {
        const button = document.createElement('button');
        button.textContent = `House ${i}`;
        button.classList.add('answer-btn');
        button.dataset.house = i.toString();
        button.addEventListener('click', () => checkAnswer(i.toString()));
        answersContainer.appendChild(button);
    }

    // Add keyboard event listener
    document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    
    // Number keys 1-9 for houses 1-9
    if (key >= '1' && key <= '9') {
        checkAnswer(key);
    }
    // '0' key for house 10, '-' for house 11, '=' for house 12
    else if (key === '0') {
        checkAnswer('10');
    }
    else if (key === '-') {
        checkAnswer('11');
    }
    else if (key === '=') {
        checkAnswer('12');
    }
    // 'e' key for End Quiz
    else if (key === 'e') {
        confirmEndQuiz();
    }
}

function checkAnswer(selectedHouse) {
    // Remove the keyboard event listener
    document.removeEventListener('keydown', handleKeyPress);

    const question = questions[currentQuestionIndex];
    const correct = selectedHouse === question.correctHouse;
    
    // Update house-wise performance
    if (!housePerformance[question.correctHouse]) {
        housePerformance[question.correctHouse] = { correct: 0, total: 0 };
    }
    housePerformance[question.correctHouse].total++;
    if (correct) {
        score++;
        housePerformance[question.correctHouse].correct++;
    }
    
    updateScoreDisplay();
    showFeedback(correct, question.correctHouse);
    
    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1000); // Short delay before next question
}

function showFeedback(correct, correctHouse) {
    const feedbackElement = document.createElement('div');
    feedbackElement.textContent = correct ? 'Correct!' : `Wrong. The correct answer is House ${correctHouse}.`;
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
    
    // Calculate house-wise percentages
    const housePercentages = {};
    for (const house in housePerformance) {
        const { correct, total } = housePerformance[house];
        housePercentages[house] = total > 0 ? (correct / total) * 100 : 0;
    }
    
    localStorage.setItem('quizResult', JSON.stringify({
        score: correctAnswers,
        attempted: attemptedQuestions,
        wrong: wrongAnswers,
        total: totalQuestions,
        percentage: percentage.toFixed(2),
        housePercentages: housePercentages
    }));
    
    window.location.href = 'result.html';
}