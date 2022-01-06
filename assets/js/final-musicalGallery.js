$(document).ready(function () {
  $(".carousel").flipster({
    style: "carousel",
    spacing: -0.3,
  });
});

let audio = new Audio();

function playSong(id) {
  audio.src = "./assets/songs/" + id + ".mp3";
  audio.play();
  audio.volume = 0.5;
  console.log("Now playing: " + id);
}
