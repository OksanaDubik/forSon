const video = document.querySelector("video");
const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-pause");
const volume = document.querySelector(".volume");
const timing = document.querySelector(".timing");
const currentTimeEl = document.querySelector(".currentTime");

let progressIdentifier = null;
let wasVideoPlaying = false;


window.addEventListener("load", function () {//при загрузке страницы, устанавливаем максимальную длину
    timing.min = 0;
    timing.max = video.duration; //тайминга равную длине видео
})

pauseBtn.addEventListener("click", function () {
    if (!video.paused) {
        video.pause();
        clearInterval(progressIdentifier);
    }
});
playBtn.addEventListener("click", function () {
    if (video.paused) {
        video.play();
        progressIdentifier = setInterval(changeProgress, 100);
    }
});

//ручное перетаскивание ползунка видео
timing.addEventListener("mousedown", function (){
    wasVideoPlaying = !video.paused;
   if (wasVideoPlaying){
       video.pause();
       clearInterval(progressIdentifier);
   }


});

//видео начнется от той отметки, куда перетащили ползунок
timing.addEventListener("change", function (){
    video.currentTime =  timing.value;
    if (wasVideoPlaying){
        video.play();
        progressIdentifier=setInterval(changeProgress, 100);

    }else {
        changeProgress();
    }
})


//устанавливаем в поле тайминга сколько времени прошло
function changeProgress() {
    currentTimeEl.innerText = video.currentTime;
    timing.value = video.currentTime;
}

video.addEventListener("ended", function () {
    clearInterval(progressIdentifier);

    changeProgress();
});
volume.addEventListener("change", function (){
    video.volume = volume.value;
})