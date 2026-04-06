
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let noScale = 1;
let yesScale = 1;

function moveNoButton() {
  const padding = 60;
  const maxX = window.innerWidth - padding;
  const maxY = window.innerHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  noScale -= 0.1;
  if (noScale > 0.3) {
    noBtn.style.transform = `scale(${noScale})`;
  }

  yesScale += 0.1;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  message.style.display = "flex";
  message.innerHTML = "You are mine now 😈❤️";
  startHearts();
});

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 200);
}