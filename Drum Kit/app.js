const playSound = evt => {
  const audio = document.querySelector(`audio[data-key='${evt.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${evt.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};

function removePlaying(evt) {
  if (evt.propertyName !== "transform") return; // skip it if it's not a transform
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removePlaying));
console.log(keys);
