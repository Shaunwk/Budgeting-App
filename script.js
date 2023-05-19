// Toggle menu to show and hide links
const toggle = document.querySelector('.toggle');
const linksList = document.querySelector('.links-list');
const toggleIcon = document.querySelector('.material-symbols-outlined');


toggle.addEventListener('click', function (){
  linksList.classList.toggle('links-open');
  toggleIcon.classList.toggle('icon-open');
  toggle.classList.toggle('toggle-open');
});



//User input Planned Income


const plannedAmount = document.getElementById('planned-amount-input');

// Retrieve the stored value from localStorage on page load
const storedValue = localStorage.getItem('plannedAmount');
if (storedValue) {
  displayText(storedValue);
}

// Add event listener for the Enter key press
plannedAmount.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    
    
    const userInput = plannedAmount.value
    if (!isNaN(userInput)) {
      displayText(userInput);

    // Store the value in localStorage
    localStorage.setItem('plannedAmount', userInput);
    
    } else {
      alert('Invalid input. Please enter a number.');
    }
    plannedAmount.blur(); //to move focus out of the input section
  }
});

function displayText(text) {
 
  plannedAmount.value = `$${text}`;
}
