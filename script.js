//Sets the default color to black
let color = 'black';
//Creates the var for displaying the current size of grid
let displaySize = document.querySelector('.displaySize')
let displayError = document.querySelector('.error')


//Creates the board with whatever size selected and updates size display
function createBoard(size) {
    let game = document.querySelector('.game')
    let squares = game.querySelectorAll('div');
    squares.forEach(div=> div.remove());
game.style.gridTemplateColumns = `repeat(${size} , 1fr)`; 
game.style.gridTemplateRows = `repeat(${size} , 1fr)`; 
displaySize.textContent= `Current Size:  ${size} x ${size}`;


let amount = size * size
for (let i = 0; i< amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorTool);
    square.style.backgroundColor = 'white';
    game.insertAdjacentElement("beforeend", square);
}
}

//Sets the default board to 32x32
createBoard(32);


//The function to change the board size, displays error if out of range of 2-100
function boardSize(input) {
    if (input >=2 && input <=100) {
    createBoard(input);
    displayError.textContent= ``;

    }
    else {
        console.log("Too many squares");
        displayError.textContent= `Unsupported size!`;
    }
}

//Function that selects color, random is a bit confusing
function colorTool(){
    if(color == 'random'){
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 
    }
    else {
    this.style.backgroundColor = color; 
    }
}

function changeColor(choice) {
    color = choice;
}


//Resets the board to default
function reset(){
    let game = document.querySelector('.game')
    let squares = game.querySelectorAll('div');
    squares.forEach(div=> div.style.backgroundColor = 'white');
}