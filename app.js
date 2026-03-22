let currentScene = 0;
let viewCount = 1;
let clickedState = {
    who: false, what: false, where: false, when: false, why: false, sentence: false
};

// Create a shuffled list of all scene indices so every scene appears once per round
let shuffledQueue = [];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getNextScene() {
    // If the queue is empty, refill and reshuffle for the next round
    if (shuffledQueue.length === 0) {
        shuffledQueue = shuffleArray([...Array(scenes.length).keys()]);
    }
    return shuffledQueue.pop();
}

function loadScene() {
    document.getElementById('emoji-fallback').innerText = scenes[currentScene].emoji;
    const imgElement = document.getElementById('scene-image');
    imgElement.style.display = 'block';
    imgElement.src = scenes[currentScene].image;
    document.getElementById('scene-tag').innerText = 'Parent Hint: ' + scenes[currentScene].tag;
    document.getElementById('answer-box').innerText = 'Look at this picture ' + (currentScene + 1) + ' and learn! 🧐 Click a button!';
    document.getElementById('view-count').innerText = viewCount;

    // Reset checkmarks and state
    const types = ['who', 'what', 'where', 'when', 'why', 'sentence'];
    types.forEach(type => {
        clickedState[type] = false;
        document.querySelector('#btn-' + type + ' .tick').innerText = '⬜';
    });

    // Disable Next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = true;
    nextBtn.innerText = 'Next (Check all boxes first!)';
}

function showAnswer(questionType) {
    document.getElementById('answer-box').innerHTML = scenes[currentScene][questionType];

    clickedState[questionType] = true;
    document.querySelector('#btn-' + questionType + ' .tick').innerText = '✅';

    const allClicked = Object.values(clickedState).every(val => val === true);
    if (allClicked) {
        const nextBtn = document.getElementById('next-btn');
        nextBtn.disabled = false;
        nextBtn.innerText = 'Next ➡️';
    }
}

function nextScene() {
    if (document.getElementById('next-btn').disabled) return;
    currentScene = getNextScene();
    viewCount++;
    loadScene();
}

window.onload = function() {
    // Fill and shuffle on first load
    shuffledQueue = shuffleArray([...Array(scenes.length).keys()]);
    currentScene = shuffledQueue.pop();
    loadScene();
};