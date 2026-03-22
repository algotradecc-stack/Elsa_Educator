let currentScene = 0;
let viewCount = 1;

function loadScene() {
    document.getElementById('scene-image').src = scenes[currentScene].image;
    document.getElementById('scene-tag').innerText = "Parent Hint: " + scenes[currentScene].tag;
    document.getElementById('answer-box').innerText = "Look *here* at the picture! 🧐 Click a button!";
    document.getElementById('view-count').innerText = viewCount;
}

function showAnswer(questionType) {
    document.getElementById('answer-box').innerHTML = scenes[currentScene][questionType];
}

function nextScene() {
    currentScene = Math.floor(Math.random() * scenes.length);
    viewCount++;
    loadScene();
}

window.onload = function() {
    currentScene = Math.floor(Math.random() * scenes.length);
    loadScene();
};