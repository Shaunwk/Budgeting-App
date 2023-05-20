// Toggle menu to show and hide links
const toggle = document.querySelector('.toggle');
const linksList = document.querySelector('.links-list');
const toggleIcon = document.querySelector('.material-symbols-outlined');


toggle.addEventListener('click', function (){
  linksList.classList.toggle('links-open');
  toggleIcon.classList.toggle('icon-open');
  toggle.classList.toggle('toggle-open');
});






// User input date
const date = document.getElementById('date');

// Prevent the dropdown showing previous entries as suggestions
date.setAttribute('autocomplete', 'off'); 

// Retrieve the stored value from localStorage on page load
const storedDate = localStorage.getItem('entered-date');
if (storedDate) {
  date.value = storedDate;
}

//Event listener for hitting enter key
date.addEventListener('keydown', function(hitEnter){
 if(hitEnter.key === 'Enter'){
   
   // Store the value in localStorage
   localStorage.setItem('entered-date', date.value);
   date.blur();
 }
});






//User input Planned Income
const plannedAmount = document.getElementById('planned-amount-input');

// Prevent the dropdown showing previous entries as suggestions
plannedAmount.setAttribute('autocomplete', 'off');

//parseFloat(text) converts the input 'text' into a floating-point number so it is treated as a number instead of a string
//toLocaleString converts the parsed number into a localized string representation. This function ensures that the number is formatted according to the user's locale, including the appropriate decimal seperator.
function displayText(text) {
  const formattedNumber = parseFloat(text).toLocaleString();
  plannedAmount.value = `$${formattedNumber}`;
}

// Retrieve the stored value from localStorage on page load
const storedValue = localStorage.getItem('plannedAmount');
if (storedValue) {
  displayText(storedValue);
}

// Add event listener for the Enter key press
plannedAmount.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const userInput = plannedAmount.value;
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




// User Input Income
const incomeTitle = document.getElementById('income-title-input');
const incomeAmount = document.getElementById('income-amount-input');

incomeTitle.setAttribute('autocomplete', 'off');
incomeAmount.setAttribute('autocomplete', 'off');






// Clear local storage and refresh the page
function clearLocalStorage() {
  localStorage.clear();
  location.reload();
}

