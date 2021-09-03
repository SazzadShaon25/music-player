
function setSongName (songId){

    const songNameText = document.getElementById(songId).innerText;
    const songName = document.getElementById('song-name');
    songName.innerText = songNameText ;
}

function audioSong (songId){

    const  audioGet = document.getElementById(songId).innerText;
    audioSet(audioGet);
}

function imagesSet(imagesName){

    const songImages = imagesName ;
    console.log(songImages);
    
    const musicDrive = document.getElementById('music-drive');
    musicDrive.innerHTML =`
    <img src="/images/${songImages}" class="w-100 p-2 rounded mx-auto d-block " alt="">
    `;
}

function audioSet (audioName){


    const audioTrack = document.getElementById("audio-set");
    // audioTrack.classList.add("audio-player");
    audioTrack.innerHTML = `
    
   
    <audio class="ms-5 mt-3 audio-player w-75"  src="/audio/${audioName}" controls autoplay></audio>
    


    `;


}
const firstName = document.getElementById("first-song").addEventListener("click",function(){
    audioSong("first-song");
   
    setSongName("first-song");
    imagesSet("Duure Duure.PNG");
 

});
// function firstSong() {
    
    

// }


function secondSong(){
    audioSong("second-song");
    setSongName("second-song");
    imagesSet("AKasher Nilima.PNG");

}
function thirdSong(){
    audioSong("third-song");
    setSongName("third-song");
    imagesSet("Shoto Danar Projapoti.jpg");
    

}


// const fourthSong(){

    
    
// }
const fourthName = document.getElementById("fourth-song").addEventListener("click",function(){

    audioSong("fourth-song")
    setSongName("fourth-song");
    imagesSet("Mombati.PNG");

});
function fifthSong(){
    audioSong("fifth-song");
    setSongName("fifth-song");
    imagesSet("Level Five-60's Love.PNG");
}
function sixthSong(){
    audioSong("sixth-song");
    setSongName("sixth-song");
    imagesSet("perfect.PNG");
}
function seventhSong(){
    audioSong("seventh-song");
    setSongName("seventh-song");
    imagesSet("Uthshorgo.PNG");
}
function eighthSong(){
    audioSong("eigth-song");
    setSongName("eigth-song");
    imagesSet("Bhindeshi Tara.jpg");
}
function ninthSong(){
    audioSong("ninth-song");
    setSongName("ninth-song");
    imagesSet("Fire Eshona.PNG");
}
function tenthSong(){
    audioSong("tenth-song");
    setSongName("tenth-song");
    imagesSet("Valobasha tarpor.jpg");
}




   
    
    
