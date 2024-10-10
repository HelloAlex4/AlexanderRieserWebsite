function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function typeText(id, text, speed) {
  let outputElement = document.getElementById(id);
  let index = 0;

  function type() {
    if (index < text.length) {
      outputElement.innerHTML += text[index];
      index++;
      setTimeout(type, getRandomNumber(speed - 50, speed + 20)); // Adjust the speed here
    }
  }

  type(); // Start the typing process
}

function typeAllTexts() {
  typeText("output", 'ALEXANDER RIESER',140);
  typeText("1", 'About Me',100);
  typeText("2", 'Projects',100);
  typeText("3", 'Blog',100);
  typeText("4", 'Contact',100);
}

window.onload = typeAllTexts;