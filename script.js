const numberSquares = (16*16); 

const container = document.querySelector('.container'); 


for (let i = 0; i < numberSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square); 
}
