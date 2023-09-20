const musicContainer = document.getElementById('music-container')

const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const audio = document.getElementById('audio')
cosnt progressBtn = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')

const title = document.getElementById('title')
const cover = document.getElementById('cover')

const songs = ['blue-reeves', 'slow-snow', 'the-roads']

last songIndex = 2

function loadSong(song) {
    title.innerText = song
    audio.sec = '../assest/audio/$(song).mp3'
    cover.src = `../assets/images/$(song).jpg`
}

// play song
function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
}

// pause song 
function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
}

function prevSong() {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length-1
    }
    //load song()
    loadSong(song[songIndex])
    playsong()
}
function nextSong() {
    songIndex++
    if(songIndex > songs.length-1) {
        songIndex = 0
    }
    loadSong(song[songIndex])
    playsong()
}

//progress bar setup
function updateProgress(e) {
    const (duration, currentTime) = e.srcElement
    const progressPercent = (currentTime/duration) * 100
    progressContainer.style.width = '$(progessPercent)%'
}
  function setProgress(e)
    const width = this.clientwidth
    const clickX = o.offsetX
    const duration = audio.duration 
audio.currentTime = (click)

//click audio function 
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer,classlist.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }}

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', )

