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

function Show() {
    const circle2 = document.querySelector(".circle2");
    sidebar.style.display = 'flex';
}
function Show() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
}

function remove() {
    const circle1 = document.querySelector(".cirle1");
    sidebar.style.display = 'none';
}
function remove() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}


function end() {
    song.currentTime = song.duration
}
function start() {
    song.currentTime = 0
}

// function morePlay(Poster, SName, Artist, songSrc) {
//     let fx = `<div class="container">
//         <div class="card">
//             <nav class="nav">
//                 <div class="circle1" onclick="remove()">
//                     <i class="fa-solid fa-angle-left" onclick="remove()"></i>
//                 </div>

//                 <div class="circle2" onclick="Show()">
//                     <i class="fa-solid fa-bars" onclick="Show()"></i>
//                     <ul class="sidebar">
//                         <li id="Lalkara">Lalkara</li>
//                         <li>Softly</li>
//                         <li>Mexico</li>
//                         <li>Kina Chir</li>
//                         <li>White Brown Black</li>
//                         <li>Adminrin You</li>
//                         <li>Bachke Bachke</li>
//                         <li id="insane">Insane</li>
//                         <li>Take it easy</li>


//                     </ul>
//                 </div>
//             </nav>
//             <img src="${Poster}" alt="Poster" class="poster">
//             <div class="name">${SName}</div>
//             <div class="artist">${Artist}</div>

//             <audio id="song">
//                 <source src=${songSrc} type="audio/mpeg">
//             </audio>

//             <input type="range" value="0" id="progress">
//             <div class="time">
//                 <div id="current-time">0:00</div>
//                 <div>/</div>
//                 <div id="duration">0:00</div>
//             </div>

//             <div class="controls">
//                 <div onclick="start()"><i class="fa-solid fa-backward"></i></div>
//                 <div onclick="playpause()"><i class="fa-solid fa-play" id="ctrlIcon"></i></div>
//                 <div onclick="end()"><i class="fa-solid fa-forward"></i></div>
//             </div>
//         </div>
//     </div>
//     </div>`
//     document.querySelector(".container").innerHTML = fx;
// }

let artist = document.getElementById("artist");
let poster = document.getElementById("poster");
let name = document.getElementById("name");

function Lalkara() {
    song.src = "Songs/Lalkara.mp3";
    artist.innerHTML = "Diljit Dosanjh and Sultaan";
    name.innerHTML = "Lalkara";
    poster.src = "Poster/Lalkara.jpeg";
    song.play();
    ctrlIcon.classList.add("fa-play");
}
function Softly() {
    song.src = "Songs/Softly.mp3";
    artist.innerHTML = "Ikky and Karan Aujla";
    name.innerHTML = "Softly";
    poster.src = "Poster/Softly.jpg";
    song.play();
    ctrlIcon.classList.add("fa-pause");

}
function Mexico() {
    song.src = "Songs/Mexico.mp3";
    artist.innerHTML = "Karan Aujla";
    name.innerHTML = "Mexico";
    poster.src = "Poster/Mexico.jpeg";
    song.play();
    ctrlIcon.classList.add("fa-pause");
}
function KinaChir() {
    song.src = "Songs/KinaChir.mp3";
    artist.innerHTML = "The PropheC";
    name.innerHTML = "KinaChir";
    poster.src = "Poster/KinaChir.jpg";
    song.play();
    ctrlIcon.classList.add("fa-pause");
}
function White() {
    song.src = "Songs/White.mp3";
    artist.innerHTML = "Karan Aujla and Avvy Sra";
    name.innerHTML = "White Brown Black";
    poster.src = "Poster/White.jpg";
    song.play();
    ctrlIcon.classList.add("fa-pause");
}
function Admiring() {
    song.src = "Songs/AdmiringYou.mp3";
    artist.innerHTML = "Karan Aujla";
    name.innerHTML = "Admirin' You";
    poster.src = "Poster/Admirin.jpg";
    song.play();
    ctrlIcon.classList.add("fa-pause");
}
function Bachke() {
    song.src = "Songs/Bachke.mp3";
    artist.innerHTML = "Karan Aujla";
    name.innerHTML = "Bachke Bachke";
    poster.src = "Poster/bachke.jpg";
    song.play();
    ctrlIcon.classList.add("fa-pause");
}
function Insane() {
    song.src = "Songs/Insane.mp3";
    artist.innerHTML = "AP Dhillon";
    name.innerHTML = "Insane";
    poster.src = "Poster/insane.jpg";
    song.play();
    ctrlIcon.classList.add("fa-pause");
}
function Sidhu() {
    song.src = "Songs/295.mp3";
    artist.innerHTML = "Sidhu Moosewala";
    name.innerHTML = "295";
    poster.src = "Poster/295.jpg";
    song.play();
    ctrlIcon.classList.add("fa-pause");
}