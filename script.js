const numberSquares = (16*16); 

const container = document.querySelector('.container');

//create divs depending on variable numberSquares
for (let i = 0; i < numberSquares; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.addEventListener('mouseout', () => {
        div.classList.add('touched');
    }); 
    container.appendChild(div); 
}

// const squares = document.querySelectorAll('.square'); 

// squares.forEach(square => {
//     square.addEventListener('mouseout', () => {
//         square.classList.add('touched'); 
//     });
// }); 