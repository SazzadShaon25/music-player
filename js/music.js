
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
    
    const image = document.getElementById('song-images');
    image.setAttribute("src",`images/${songImages}`);
   
}

function audioSet (audioName){


    const audioTrack = document.getElementById("play-song");
    audioTrack.setAttribute("src",`audio/${audioName}`);
    
}
const firstName = document.getElementById("first-song").addEventListener("click",function(){
    audioSong("first-song");
   
    setSongName("first-song");
    imagesSet("Duure Duure.PNG");
 

});

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




   
    
    
