const body = document.querySelector(".blue-background");

const mybutton2 = document.querySelector(".changeBackground");

const toggleColor = () => {
    body.classList.toggle("red-background")
}

mybutton2.addEventListener("click", toggleColor);