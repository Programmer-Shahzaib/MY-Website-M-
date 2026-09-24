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
let canMove = true;

document.addEventListener("mousemove", (e) => {
    let rect = btnNo.getBoundingClientRect();

    let distanceX = e.clientX - (rect.left + rect.width / 2);
    let distanceY = e.clientY - (rect.top + rect.height / 2);

    let distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 70 && canMove) {
        canMove = false;

        let maxX = window.innerWidth <= 700 ? 150 : 300;
        let maxY = window.innerWidth <= 700 ? 150 : 300;

        let x = Math.random() * maxX - maxX / 2;
        let y = Math.random() * maxY - maxY / 2;

        btnNo.style.position = "relative";
        btnNo.style.left = x + "px";
        btnNo.style.top = y + "px";

        setTimeout(() => {
            canMove = true;
        }, 300);
    }
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
