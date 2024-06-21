let ctrlIcon = document.getElementById("ctrlIcon")
let progress = document.getElementById("progress")
let song = document.getElementById("song")

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else {
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');

// Update the current time display
song.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(song.currentTime);
});

// Update the duration display once metadata is loaded
song.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(song.duration);
});

// Function to format time from seconds to MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector(".box").style.right = "0";
}
)

document.querySelector(".fa-angle-left").addEventListener("click", () => {
    document.querySelector(".box").style.right = "-100%";
}
)