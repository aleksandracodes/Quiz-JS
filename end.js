const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('save-score-btn')
const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

username.addEventListerer('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});


saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();
}