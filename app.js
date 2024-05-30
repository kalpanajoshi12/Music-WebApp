const playicon = document.querySelector("#play")
const audiofile = document.querySelector("audio")
const TotalTime = document.querySelector(".totalTime")
const CurrentTime = document.querySelector(".currentTime")
const mymovaiableContainer = document.querySelector(".movable")
const heartIcon = document.querySelector("#like")
const shuffleIcon = document.querySelector("#shuffle")
const backward = document.querySelector("#backward")

let isAudioPlaying = false

function playtheaudio(){
  audiofile.play()
  isAudioPlaying = true
  playicon.classList.replace("fa-play","fa-pause")
  
}
function pausetheaudio(){
    audiofile.pause()
    isAudioPlaying = false
    playicon.classList.replace("fa-pause","fa-play")
}

playicon.addEventListener("click" , function(){
  if(isAudioPlaying){
    pausetheaudio()
  }else{
    playtheaudio()
  }
})

//forward button logic-----------

const myimage = document.querySelector("img")
const singerName = document.querySelector(".song-name")
const songName = document.querySelector(".singer-name")

const songsData = [
   {
    Image:"second.jpg",
    audio : "AUDIOFILES/audio2.mp3",
    singerName:"Atif Aslam",
    songName: "tu jane na"
},

{
    Image:"third.jpg",
    audio : "AUDIOFILES/audio3.mp3",
    singerName:"Arman malik",
    songName: "tu jane na"
}
,
{
    Image:"forth.jpg",
    audio : "AUDIOFILES/audio4.mp3",
    singerName:"shreya",
    songName: "tu jane na"
},

{
    Image:"fifth.jpg",
    audio : "AUDIOFILES/audio5.mp3",
    singerName:"neha kakar",
    songName: "tu jane na"
}
]

const forwordicon = document.querySelector("#forward")

function changedata(info){
    myimage.src = info.Image
    audiofile.src = info.audio
    singerName.textContent = info.singerName
    songName.textContent = info.songName

}
let songindex = 0
forwordicon.addEventListener("click", function(){

    if(songindex > songsData.length-1){
        songindex = 0
    }
    changedata( songsData[songindex] )
    playtheaudio()
    songindex++
})

//faltching song current time and total time

audiofile.addEventListener("timeupdate", function(output){

    let fatchedtime = output.srcElement.currentTime
    let fatchedduration = output.srcElement.duration

   

    let  percentageofaTotalAudioPlayed = fatchedtime /fatchedduration * 100

    mymovaiableContainer.style.width = `${percentageofaTotalAudioPlayed}%`

   

    let durationinMinutus = Math.floor(fatchedduration / 60)
    let durationinseconds = Math.floor(fatchedduration % 60)


    TotalTime.textContent = `${durationinMinutus}:${durationinseconds}`

    

    let currentTimeinMinutus = Math.floor(fatchedtime / 60)
    let currentTimeinseconds = Math.floor(fatchedtime % 60)

    if(currentTimeinseconds<10){
        currentTimeinseconds = `0${currentTimeinseconds}`
    }
    
    CurrentTime.textContent = `${currentTimeinMinutus}:${currentTimeinseconds}`

  
})


   heartIcon.addEventListener("click", function(){
    heartIcon.style.color = "red"

    localStorage.setItem(songName.textContent, singerName,textContent)
   })

   shuffleIcon.addEventListener("click", function(){

    let randomIndex = Math.floor(Math.random()*4)
    changedata(songsData[randomIndex])
    playtheaudio()
       
   })

   backward.addEventListener("click" , function(){
     if(songindex<0){
       songindex = songsData.length-1
        
     }
     songindex--
     changedata(songsData[songindex])
      playtheaudio()
        
   })