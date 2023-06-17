let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (saveEl.textContent !== 'Saved: ' ) {
        saveEl.textContent += ' - ';
    }
    
    saveEl.textContent += count;
    countEl.textContent = 0;
    count = 0;
}


function playAudio() {
    const audio = new Audio("https://bigsoundbank.com/UPLOAD/mp3/0682.mp3");
    audio.volume = 0.1;
    audio.play();
}