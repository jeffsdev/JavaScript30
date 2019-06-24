function activateDrumPad(e) {
  const kc = e.keyCode;
  const sound = document.querySelector(`audio[data-key='${kc}']`);
  const pad = document.querySelector(`div[data-key='${kc}']`);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
    pad.classList.add('playing');
  } 
}

function removeTransition(e) {
  if (e.propertyName === 'transform') {
    this.classList.remove('playing');
  }
}   

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', activateDrumPad);  