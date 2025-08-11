// Typewriter Animation
const tr = document.querySelector(".typewriter");
const text = tr.textContent;
let index = 0;
// pehle text ko empty katr.textContent = "";
tr.textContent = "";
function typeEffect() {
  if (index < text.length) {
    tr.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 150); // speed adjust yaha (ms me)
  }
}

// animation start karo
typeEffect();
