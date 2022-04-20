// import functions

// grab DOM elements
const showButton = document.getElementById('btn');
const animal = document.getElementById('animalDiv');
const pic = document.getElementById('animalPic');
console.log(showButton, animal, 'Validate that we grabbed the elements');
// set event listeners 
showButton.addEventListener('click', () => {
    console.log(' show button clicked', 'validate button is connected');
    animal.classList.toggle('hidden');
    pic.classList.toggle('hidden');
});

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
