console.log("Simon Says Game");

const h4 = document.querySelector(".start");
const list = document.querySelector(".container_1 ul");
const boxes = document.querySelectorAll(".boxes");

let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
const btns = ["red", "blue", "yellow", "green"];
const scores = JSON.parse(localStorage.getItem('simonGameScores')) || [];
updateScoreList();


document.addEventListener("keypress", startGame);
boxes.forEach(box => box.addEventListener("click", handleBoxClick));

function startGame(event) {
    if (!started && event.key === "Enter") {
        started = true;
        levelUp();
    }
}

function levelUp() {
    userSeq = [];
    level++;
    h4.innerText = `(Level ${level})`;
    flashBtn();
}

function flashBtn() {
    const randomIDX = Math.floor(Math.random() * btns.length);
    const btn = document.querySelector(`#${btns[randomIDX]}`);
    if (btn) {
        gameSeq.push(btn.id);
        btn.classList.add("flash");
        setTimeout(() => btn.classList.remove("flash"), 90);
        return;
    }
    console.error("Button not found");
}

function handleBoxClick(event) {
    if (!started) return;

    const clickedColor = this.id;
    userSeq.push(clickedColor);
    checkUserSequence(clickedColor);
}

function checkUserSequence(clickedColor) {
    const currentStep = userSeq.length - 1;
    if (clickedColor === gameSeq[currentStep]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        return;
    }
    displayGameOver();
    updateScore();
    resetGame();
}

function displayGameOver() {
    h4.innerText = `Game Over...Press (Enter) to restart`;
    document.body.style.background = "linear-gradient(to right, #ff0000, #ff0000)";
    setTimeout(() => {
        document.body.style.background = "linear-gradient(to right, #4E65FF, #92EFFD)";
    }, 90);
}

function updateScore() {
    const scoreElement = document.querySelector(".score");
    if (scoreElement) {
        const score = level - 1;
        scoreElement.innerText = `Your Score : ${score}`;
        scores.push(score);
        scores.sort((a, b) => b - a);
        localStorage.setItem('simonGameScores', JSON.stringify(scores));
        updateScoreList();
        return;
    }
    console.error("Score element not found");
}

function updateScoreList() {
    list.innerHTML = "";
    scores.forEach(score => {
        const scoreItem = document.createElement("li");
        scoreItem.innerText = score;
        list.appendChild(scoreItem);
    });
}

function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}