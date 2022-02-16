const paragraph = document.getElementById("paragraph");
const wordDiv = document.getElementById("word");
const btn = document.querySelector("button");
const microphone = document.querySelector("#microphone");
const letter = document.querySelector("#letter");

paragraph.addEventListener("input", function (e) {
  paragraph.textContent = e.target.value;

  letter.innerText = countCharacters(paragraph);

  const words = paragraph.textContent.trim().split(" ");
  if (paragraph.textContent === "") {
    wordDiv.textContent = 0;
  } else {
    wordDiv.textContent = words.length;
  }
});

microphone.addEventListener("click", function () {
  const speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";

  speech.text = paragraph.textContent;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
});

function countCharacters(para) {
  let charLength = 0;

  const chars = [
    " ",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "*",
    "(",
    ")",
    "-",
    "=",
    "?",
    ".",
    "/",
    "'",
    '"',
    "[",
    "]",
    "\\",
    ",",
  ];

  for (const element of para.value) {
    charLength++;

    for (let i = 0; i < chars.length; i++) {
      if (element === chars[i]) {
        charLength--;
      }
    }
  }

  return charLength;
  // return 0;
}
