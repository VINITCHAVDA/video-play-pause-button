var video = document.getElementById("video");
var btn = document.getElementById("btn");
function btnn() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "pause";
  } else {
    video.pause();
    btn.innerHTML = "play";
  }
}
