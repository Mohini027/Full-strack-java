const body = document.getElementById("body");
const gameScreen = document.getElementById("gameScreen");
const gameBoard = document.getElementById("gameBoard");
const scoreDisplay = document.getElementById("score");
const buttonLevel1 = document.getElementById("buttonLevel1");
const buttonLevel2 = document.getElementById("buttonLevel2");
const buttonLevel3 = document.getElementById("buttonLevel3");
const buttonLevel4 = document.getElementById("buttonLevel4");
const giftSection = document.getElementById("giftSection");
const levelCompleteMsg = document.getElementById("levelCompleteMsg");
const homeButton = document.getElementById("homeButton");
const nextLevelButton = document.getElementById("nextLevelButton");
const scorecon = document.getElementById("scorecon")
const score_value = document.getElementById("score-value")

const levelButtons = [buttonLevel1, buttonLevel2, buttonLevel3, buttonLevel4];

const backgrounds = [
    "url('../images/level1.jpeg')",
    "url('../images/level2.jpeg')",
    "url('../images/level3.jpeg')",
    "url('../images/level4.jpeg')",
    "url('../images/home.jpeg')"
];
body.style.backgroundImage = backgrounds[4];

const levelTimes = [30, 35, 40, 45]; // Time limits in seconds

let timer;
let timeLeft;
let flippedCards = [];
let matchedPairs = 0;
let currentLevel = 1;
let levelsCompleted = [true, false, false, false]; // Track completed levels

const levels = [
    ["A", "B", "A", "B", "C", "C"], // Level 1
    ["A", "B", "C", "D", "E", "E", "A", "B", "C", "D"], // Level 2
    ["🌻", "🌞", "🌞", "🙉", "🙉", "😹", "😹", "🎻", "🎻", "🌻"], // Level 3
    ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧"], // Level 4
];

const audios = {
    levelStart: new Audio("../audios/welcome.mpeg"),
    match: new Audio("../audios/match.mpeg"),
    noMatch: new Audio("../audios/noMatch.mpeg"),
    levelComplete: new Audio("../audios/congrates.mpeg"),
};

// Initialize locked/unlocked levels
levelButtons.forEach((button, index) => {
    button.disabled = !levelsCompleted[index];
    button.addEventListener("click", () => startLevel(index + 1));
});
let scorevalue=0
function startLevel(level) {
    scorevalue=0
    score_value.textContent=`${scorevalue}`
    currentLevel = level;
    resetGame();
    body.style.backgroundImage = backgrounds[level - 1];
    gameBoard.innerHTML = "";
    giftSection.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    scorecon.classList.remove('hidden')
    audios.levelStart.play();
    createBoard(levels[level - 1]);
    startTimer(levelTimes[level - 1]);
}

function createBoard(cards) {
    const shuffledCards = shuffle([...cards]);
    shuffledCards.forEach((value) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = value;
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.classList.add("flipped");
        this.textContent = this.dataset.value;
        flippedCards.push(this);

        if (flippedCards.length === 2) checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        audios.match.play();
        scorevalue+=10
        score_value.textContent=`${scorevalue}`
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedPairs++;

        if (matchedPairs === levels[currentLevel - 1].length / 2) completeLevel();
    } else {
        audios.noMatch.play();
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            card1.textContent = "";
            card2.textContent = "";
        }, 1000);
    }
    flippedCards = [];
}

function startTimer(seconds) {
    timeLeft = seconds;
    updateScoreDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateScoreDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            failLevel();
        }
    }, 1000);
}

function failLevel() {
    Swal.fire({
        title: "Time's Up!",
        text: "You failed the level.",
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Try Again",
        cancelButtonText: "Home",
    }).then((result) => {
        if (result.isConfirmed) startLevel(currentLevel);
        else goHome();
    });
}

function completeLevel() {
    clearInterval(timer);
    audios.levelComplete.play();
    Swal.fire(`Level ${currentLevel} Completed!`, "", "success").then(() => {
        levelsCompleted[currentLevel] = true;
        if(currentLevel<4)
        levelButtons[currentLevel].disabled = false;

        gameScreen.classList.add("hidden");
        giftSection.classList.remove("hidden");
        levelCompleteMsg.textContent = `You completed Level ${currentLevel}!`;

        if (currentLevel < 4) {
            nextLevelButton.classList.remove("hidden");
        } else {
            nextLevelButton.classList.add("hidden");
        }
    });
}

function resetGame() {
    clearInterval(timer);
    flippedCards = [];
    matchedPairs = 0;
}

function goHome(level) {
    // body.style.backgroundImage = "none";
    body.style.backgroundImage = backgrounds[4];
    currentLevel = level;
    resetGame();
    gameBoard.innerHTML = "";
    giftSection.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    scorecon.classList.add("hidden")
    scoreDisplay.textContent =""
}

function updateScoreDisplay() {
    scorecon.classList.remove("hidden")
    scoreDisplay.textContent = `Time Left: ${timeLeft}s`;
}

// Shuffle function
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Home and Next Level buttons
homeButton.addEventListener("click", ()=>goHome(currentLevel + 1));

nextLevelButton.addEventListener("click", () => {
    if (currentLevel < 4) startLevel(currentLevel + 1);
});
