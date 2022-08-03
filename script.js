let color = 'black';

function createBoard(size) {
    let game = document.querySelector('.game')
    let squares = game.querySelectorAll('div');
    squares.forEach(div=> div.remove());
game.style.gridTemplateColumns = `repeat(${size} , 1fr)`; 
game.style.gridTemplateRows = `repeat(${size} , 1fr)`; 


let amount = size * size
for (let i = 0; i< amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorTool);
    square.style.backgroundColor = 'white';
    game.insertAdjacentElement("beforeend", square);
}
}

createBoard(16);

function boardSize(input) {
    if (input >=2 && input <=100) {
    createBoard(input);
    }
    else {
        console.log("Too many squares");
    }
}

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

function reset(){
    let game = document.querySelector('.game')
    let squares = game.querySelectorAll('div');
    squares.forEach(div=> div.style.backgroundColor = 'white');
}