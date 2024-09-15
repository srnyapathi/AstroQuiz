document.addEventListener('DOMContentLoaded', () => {
    const planetBtn = document.getElementById('planetBtn');
    const houseBtn = document.getElementById('houseBtn');

    planetBtn.addEventListener('click', () => {
        window.location.href = 'planet-pre-quiz.html';
    });

    houseBtn.addEventListener('click', () => {
        window.location.href = 'pre-quiz.html';
    });
});