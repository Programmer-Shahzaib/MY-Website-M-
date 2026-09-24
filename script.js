let btnNo = document.querySelector("#no");
let popup = document.querySelector("#popup");
let close = document.querySelector("#close");

let messages = [
    "Are you really sure? ❤️",
    "Think again please 🥺",
    "Come on, give it another thought 💗",
    "I don't think that's the right answer 😭",
    "Wait... are you really saying no? 😳",
    "Please don't do this to me 🥹",
    "Just think about it one more time 💕",
    "Are you absolutely sure? 👀",
    "Maybe you should reconsider 😭❤️",
    "Nooo, try again! 🥺💗",
    "I know you don't really mean that 😭",
    "Come on, you can change your mind 💖",
    "Give it another chance? 🥹",
    "The button is asking you to reconsider 😂❤️",
    "Okay... but are you REALLY sure? 😭"
];

btnNo.addEventListener("mouseover", () => {
    let maxX = window.innerWidth <= 700 ? 140 : 250;
    let maxY = window.innerWidth <= 700 ? 140 : 250;

    let x = Math.random() * maxX - maxX / 8;
    let y = Math.random() * maxY - maxY / 8;

    btnNo.style.position = "relative";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
});

btnNo.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * messages.length);

    popup.style.display = "flex";

    document.querySelector("#message").innerText =
        messages[randomNumber];
});

close.addEventListener("click", () => {
    popup.style.display = "none";

    btnNo.style.left = "0px";
    btnNo.style.top = "0px";
});
