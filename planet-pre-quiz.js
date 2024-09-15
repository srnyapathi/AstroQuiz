document.addEventListener('DOMContentLoaded', function() {
    const planetGrid = document.getElementById('planetGrid');
    const selectedPlanets = new Set();
    const totalQuestionsElement = document.getElementById('totalQuestions');
    const questionsInput = document.getElementById('questions');

    function updateTotalQuestions() {
        let totalQuestions = 0;
        selectedPlanets.forEach(planet => {
            if (planetaryKarakatvas[planet]) {
                totalQuestions += planetaryKarakatvas[planet].length;
            }
        });
        totalQuestionsElement.textContent = `Total available questions: ${totalQuestions}`;
        
        // Update max value of questions input if it exists
        if (questionsInput) {
            questionsInput.max = totalQuestions;
            if (parseInt(questionsInput.value) > totalQuestions) {
                questionsInput.value = totalQuestions;
            }
        }
    }

    // Create planet buttons
    const planets = Object.keys(planetaryKarakatvas);
    for (let i = 0; i < planets.length; i++) {
        const planet = planets[i];
        const button = document.createElement('button');
        button.textContent = planet;
        button.classList.add('planet-button', 'selected');
        button.setAttribute('type', 'button'); // Prevent form submission on click
        selectedPlanets.add(planet); // Add planet to selected set by default
        button.addEventListener('click', function() {
            this.classList.toggle('selected');
            if (selectedPlanets.has(planet)) {
                selectedPlanets.delete(planet);
            } else {
                selectedPlanets.add(planet);
            }
            updateTotalQuestions();
        });
        planetGrid.appendChild(button);
    }

    // Initial update of total questions
    updateTotalQuestions();

    document.getElementById('quizSetupForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const time = document.getElementById('time').value;
        const questions = questionsInput ? questionsInput.value : null;

        if (selectedPlanets.size === 0) {
            alert('Please select at least one planet');
            return;
        }

        // Store the quiz settings in localStorage
        localStorage.setItem('quizSettings', JSON.stringify({
            time: time,
            questions: questions,
            planets: Array.from(selectedPlanets)
        }));

        // Redirect to the quiz page
        window.location.href = 'planet-quiz.html';
    });
});
