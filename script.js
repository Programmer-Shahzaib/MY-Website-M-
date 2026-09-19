let btnNo = document.querySelector("#no");
let popup = document.querySelector("#popup");
let close = document.querySelector("#close");

let messages = [
    "Are you really sure? ❤️",
    "Think again please 🥺",
    "Come on, give it another thought 💗",
    "I don't think that's the right answer 😭",
];

btnNo.addEventListener("mouseover", () => {
    let maxX = window.innerWidth <= 500 ? 80 : 200;
    let maxY = window.innerWidth <= 500 ? 80 : 200;

    let x = Math.random() * maxX - maxX / 2;
    let y = Math.random() * maxY - maxY / 2;

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
