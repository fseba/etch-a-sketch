let rainbowModeToggle = false; 
let colors = ['rgba(255, 0, 0, 1)',
             'rgba(255, 154, 0, 1)',
             'rgba(208, 222, 33, 1)',
             'rgba(79, 220, 74, 1)',
             'rgba(63, 218, 216, 1)',
             'rgba(47, 201, 226, 1)',
             'rgba(28, 127, 238, 1)',
             'rgba(95, 21, 242, 1)',
             'rgba(186, 12, 248, 1)',
             'rgba(251, 7, 217, 1)'];

const container = document.querySelector('.container');
const btnSize = document.querySelector('.btnSize');
const btnReset = document.querySelector('.btnReset');
const btnSwitch = document.querySelector('.btnSwitch'); 
const body = document.querySelector('body');

//Add square creation with user input to button 
btnSize.addEventListener('click', () => {
    removeAllChildNodes(container);
    createSquares(getUserInput());
});

//Add reset function to button 
btnReset.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach((touchedDiv) => {
        touchedDiv.classList.remove('touched');
        touchedDiv.style.backgroundColor = ''; 
    });
});

//Switch to activate rainbow mode
btnSwitch.addEventListener('change', (e) => {
    rainbowModeToggle = e.target.checked;  
    body.classList.toggle('rainbow');
});

function createSquares(numberSquares) {
    //set quantity of grid columns 
    container.style.gridTemplateColumns = `repeat(${numberSquares}, 1fr)`;

    //create divs depending on input
    for (let i = 0; i < numberSquares * numberSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        //color the divs depending on mode
        div.addEventListener('mouseout', () => {
            if(rainbowModeToggle) {
                if(!div.style.backgroundColor) {
                div.style.backgroundColor = (`${colors[Math. floor(Math. random() * 10)]}`);
                };
            } else {
                div.classList.add('touched');
            };
    }); 
    container.appendChild(div); 
    };
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//limit for the user input
function getUserInput() {
    const userInput = parseInt(prompt('How much rows and columns? Please enter a number from 1 and 100.'));
    if (userInput > 100) {
        alert('Max allowed grid size is 100 x 100! Please choose again.');
        return getUserInput();
    } else if (userInput < 1) {
        alert('Please enter a number greater 0.');
        return getUserInput();
    };
    return userInput;
}

window.onload = createSquares(16);