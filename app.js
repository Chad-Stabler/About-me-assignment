// import functions

// grab DOM elements
const showButton = document.getElementById('btn');
const animal = document.getElementById('animalDiv');
console.log(showButton, animal, 'Validate that we grabbed the elements');
// set event listeners
.hidden{ display: none;}; 
showButton.addEventListener('click', () => {
    console.log(' show button clicked', 'validate button is connected');
    animal.classList.remove('hidden');
});

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
