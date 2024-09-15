document.addEventListener('DOMContentLoaded', function() {
    const houseGrid = document.getElementById('houseGrid');
    const selectedHouses = new Set();
    const totalQuestionsElement = document.getElementById('totalQuestions');

    function updateTotalQuestions() {
        let totalQuestions = 0;
        selectedHouses.forEach(house => {
            if (houseKarakatva[house]) {
                totalQuestions += houseKarakatva[house].length;
            }
        });
        totalQuestionsElement.textContent = `Total available questions: ${totalQuestions}`;
        
        // Update max value of questions input
        const questionsInput = document.getElementById('questions');
        questionsInput.max = totalQuestions;
        if (parseInt(questionsInput.value) > totalQuestions) {
            questionsInput.value = totalQuestions;
        }
    }

    // Create 12 house buttons
    for (let i = 1; i <= 12; i++) {
        const button = document.createElement('button');
        button.textContent = `House ${i}`;
        button.classList.add('house-button', 'selected');
        button.setAttribute('type', 'button'); // Prevent form submission on click
        selectedHouses.add(i.toString()); // Add house to selected set by default
        button.addEventListener('click', function() {
            this.classList.toggle('selected');
            if (selectedHouses.has(i.toString())) {
                selectedHouses.delete(i.toString());
            } else {
                selectedHouses.add(i.toString());
            }
            updateTotalQuestions();
        });
        houseGrid.appendChild(button);
    }

    // Initial update of total questions
    updateTotalQuestions();

    document.getElementById('quizSetupForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const time = document.getElementById('time').value;
        const questions = document.getElementById('questions').value;

        if (selectedHouses.size === 0) {
            alert('Please select at least one house');
            return;
        }

        // Get the quiz type from the URL (if needed)
        const urlParams = new URLSearchParams(window.location.search);
        const quizType = urlParams.get('type');

        // Store the quiz settings in localStorage
        localStorage.setItem('quizSettings', JSON.stringify({
            time: time,
            questions: questions,
            houses: Array.from(selectedHouses),
            type: quizType
        }));

        // Redirect to the quiz page
        window.location.href = 'quiz.html';
    });
});
