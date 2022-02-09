const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score-btn')
const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5; // we want to keep top 5 scores

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    }
    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score) // Sorted array of scores

    highScores.splice(5); // cuts off the rest of scores > 5

    localStorage.setItem('highScores', JSON.stringify(highScores)); // Permanently save scores
    window.location.assign('index.html');
}