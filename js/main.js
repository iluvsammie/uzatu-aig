const btn = document.getElementById("audioBtn");
const audio = document.getElementById("audio");

let playing = false;

btn.addEventListener("click", () => {

  if (playing) {
    audio.pause();
    btn.innerHTML = "♪";
  } else {
    audio.play();
    btn.innerHTML = "❚❚";
  }

  playing = !playing;

});