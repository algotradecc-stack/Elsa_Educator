let currentScene = 0;
let viewCount = 1;
let clickedState = {
    who: false, what: false, where: false, when: false, why: false, sentence: false
};

function loadScene() {
    document.getElementById('emoji-fallback').innerText = scenes[currentScene].emoji;
    const imgElement = document.getElementById('scene-image');
    imgElement.style.display = 'block';
    imgElement.src = scenes[currentScene].image;
    document.getElementById('scene-tag').innerText = 'Parent Hint: ' + scenes[currentScene].tag;
    document.getElementById('answer-box').innerText = 'Look here at the picture! 🧐 Click a button!';
    document.getElementById('view-count').innerText = viewCount;

    // Reset checkmarks and state
    const types = ['who', 'what', 'where', 'when', 'why', 'sentence'];
    types.forEach(type => {
        clickedState[type] = false;
        document.querySelector(`#btn-${type} .tick`).innerText = '⬜';
    });

    // Disable Next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = true;
    nextBtn.innerText = 'Next (Check all boxes first!)';
}

function showAnswer(questionType) {
    document.getElementById('answer-box').innerHTML = scenes[currentScene][questionType];

    // Mark as checked
    clickedState[questionType] = true;
    document.querySelector(`#btn-${questionType} .tick`).innerText = '✅';

    // Check if all are clicked to unlock Next button
    const allClicked = Object.values(clickedState).every(val => val === true);
    if (allClicked) {
        const nextBtn = document.getElementById('next-btn');
        nextBtn.disabled = false;
        nextBtn.innerText = 'Next ➡️';
    }
}

function nextScene() {
    if (document.getElementById('next-btn').disabled) return;
    currentScene = Math.floor(Math.random() * scenes.length);
    viewCount++;
    loadScene();
}

window.onload = function() {
    currentScene = Math.floor(Math.random() * scenes.length);
    loadScene();
};