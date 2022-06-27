let button = document.querySelector("#b")
let squares = document.querySelectorAll("td")

function restart() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
}

button.addEventListener('click', restart)

// coding the game

function game() {
    if (this.textContent === "") {
        this.textContent = "X"
    } else if (this.textContent === "X") {
        this.textContent = "O"
    } else {
        this.textContent = ""
    }
}

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', game)
}