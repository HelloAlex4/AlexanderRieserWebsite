function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function typeText(id, text, speed, callback) {
  let outputElement = document.getElementById(id);
  let index = 0;

  function type() {
    if (index < text.length) {
      outputElement.innerHTML += text[index];
      index++;
      setTimeout(type, getRandomNumber(speed - 50, speed + 20));
    } else if (callback) {
      callback();
    }
  }

  type();
}

function typeAllTexts() {
  const name = "ALEXANDER RIESER";
  
  typeText("name", name, 100, function() {
    document.getElementById("name").classList.add("pulsate");
  });
}

window.onload = typeAllTexts;

//added mails to the list, and adde website to break room
//created emails still need to test website availability tomorrow
//sent out 5 test emails, since I have a lot to do this week
//learned wayyyy too much french today. and no one has replied to my mails yet.
//idk did nothing today.
//first customer
//i want that green thing