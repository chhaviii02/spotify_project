console.log("Welcome to spotify");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "tere hawale", filepath: "songs/1.mp3", coverpath: "cover/1.jpg"},
    {songName: "Tum si hi", filepath: "songs/2.mp3", coverpath: "cover/2.jpg"},
    {songName: "gulabi sadi", filepath: "songs/3.mp3", coverpath: "cover/3.jpg"},
    {songName: "heat waves", filepath: "songs/4.mp3", coverpath: "cover/4.jpg"},
    {songName: "I wanna be yours", filepath: "songs/5.mp3", coverpath: "cover/5.jpg"}
]
songitem.forEach((element , i )=> {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//handle play pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// listen to event
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})
// Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
//     element.addEventListener('click' , ()=>){
//         console.log(e.target);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//     }
// }) 