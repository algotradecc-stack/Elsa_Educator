let currentScene = 0;
let viewCount = 1;

function loadScene() {
    document.getElementById('emoji-art').innerText = scenes[currentScene].emoji;
    document.getElementById('answer-box').innerText = "Look *here* at the picture! 🧐 Click a button!";
    document.getElementById('view-count').innerText = viewCount;
}

function showAnswer(questionType) {
    document.getElementById('answer-box').innerHTML = scenes[currentScene][questionType];
}

function nextScene() {
    // Pick a completely random scene from the 50 available
    currentScene = Math.floor(Math.random() * scenes.length);
    viewCount++;
    loadScene();
}

// Initialize with a random scene immediately when the page opens
window.onload = function() {
    currentScene = Math.floor(Math.random() * scenes.length);
    loadScene();
};