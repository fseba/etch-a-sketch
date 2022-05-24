let rainbowModeToggle = false; 

const container = document.querySelector('.container');
const btnSize = document.querySelector('.btnSize');
const btnReset = document.querySelector('.btnReset');
const btnSwitch = document.querySelector('.btnSwitch'); 

//Add square creation with user input to button 
btnSize.addEventListener('click', () => {
    removeAllChildNodes(container);
    createSquares(getUserInput());
});

//Add reset function to button 
btnReset.addEventListener('click', () => {
    document.querySelectorAll('.touched').forEach((touchedDiv) => {
        touchedDiv.classList.remove('touched');
    });
});

//Switch to activate rainbow mode
btnSwitch.addEventListener('change', (e) => {
    e.target.checked ? rainbowModeToggle = true : rainbowModeToggle = false;  
});

function createSquares(numberSquares) {
    //set quantity of grid columns 
    container.style.gridTemplateColumns = `repeat(${numberSquares}, 1fr)`;

    //create divs depending on input
    for (let i = 0; i < numberSquares * numberSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseout', () => {
            if(rainbowModeToggle) {
                if(!div.style.backgroundColor) {
                div.style.backgroundColor = (`rgb(${Math. floor(Math. random() * 256)}, 
                                                ${Math. floor(Math. random() * 256)}, 
                                                ${Math. floor(Math. random() * 256)}, 0.8)`);
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