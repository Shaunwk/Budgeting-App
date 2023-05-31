// Toggle menu to show and hide links
const toggle = document.querySelector('.toggle');
const linksList = document.querySelector('.links-list');
const toggleIcon = document.querySelector('.toggle-hamburger-icon');
const toggleIconClose = document.querySelector('.toggle-close-icon');


toggle.addEventListener('click', function (){
  linksList.classList.toggle('links-open');
  toggleIcon.classList.toggle('icon-open');
  toggle.classList.toggle('toggle-open-style-change');
  toggleIconClose.classList.toggle('toggle-close-icon-visible');
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
date.addEventListener('keyup', function(hitEnter){
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
  plannedAmount.value = formattedNumber;
}

// Retrieve the stored value from localStorage on page load
const storedValue = localStorage.getItem('plannedAmount');
if (storedValue) {
  displayText(storedValue);
}

// Add event listener for the Enter key press
plannedAmount.addEventListener('keyup', function(event) {
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





//User Input Savings Goal
const savingsGoalInput = document.getElementById('savings-goal-input');

savingsGoalInput.setAttribute('autocomplete', 'off');

function displaySavings(text) {
  const formattedSavings = parseFloat(text).toLocaleString();
  savingsGoalInput.value = formattedSavings;
}

const getSavingsGoal = localStorage.getItem('savingsGoal');
if (getSavingsGoal) {
  displaySavings(getSavingsGoal);
}

savingsGoalInput.addEventListener('keyup', function (confirmed) {
  if (confirmed.key === 'Enter') {
    const savingsGoal = savingsGoalInput.value;

    if (!isNaN(savingsGoal)) {
            displaySavings(savingsGoal);

    localStorage.setItem('savingsGoal', savingsGoal);
    } else {
      alert('Invalid input. Please enter a number.');
    }
    
    savingsGoalInput.blur();
  }
});

// Savings goal % of planned Income









// User Input Income
const incomeTitle = document.getElementById('income-title-input');
const incomeAmount = document.getElementById('income-amount-input');

incomeTitle.setAttribute('autocomplete', 'off');
incomeAmount.setAttribute('autocomplete', 'off');

incomeTitle.addEventListener('keyup', function(event){
  if(event.key === 'Enter'){
    incomeTitle.blur();
  }
})

function displayIncome(input){
  const formattedAmount = parseFloat(input).toLocaleString();
  incomeAmount.value = `$${formattedAmount}`;
}

incomeAmount.addEventListener('keyup', function(event){
  if(event.key === 'Enter'){
    const amountInput = incomeAmount.value;
    
    if(!isNaN(amountInput)){
      displayIncome(amountInput);
    } else {
      alert('Invalid input. Please enter a number.')
    }
    incomeAmount.blur();
  }
})

//Add user income input and save it in a div in local storage when the button is clicked
const incomeList = document.getElementById('income-list');
const incomeAddButton = document.getElementById('income-add-button');

// Retrieve the stored income inputs from localStorage on page load
const storedIncomeInputs = localStorage.getItem('income-input');
if (storedIncomeInputs) {
  // Parse the stored inputs as JSON and convert them to an array of objects
  const incomeInputs = JSON.parse(storedIncomeInputs);

  // Create a list item for each input and append it to the income list
  incomeInputs.forEach(incomeInput => {
    const listItem = document.createElement('li');
    listItem.textContent = `${incomeInput.title} ${incomeInput.amount}`;
    incomeList.appendChild(listItem);
  });
}

incomeAddButton.addEventListener('click', function () {
  const addedIncomeTitle = incomeTitle.value;
  const addedIncomeAmount = incomeAmount.value;

  if (!addedIncomeTitle || !addedIncomeAmount) {
    alert('Please enter both a title and an amount.');
    return;
  }

  const addedIncomeInput = {
    title: addedIncomeTitle,
    amount: addedIncomeAmount
  };

  // Retrieve existing income inputs from localStorage
  const storedIncomeInputs = localStorage.getItem('income-input');

  let incomeInputs = [];
  if (storedIncomeInputs) {
    // Parse the stored inputs as JSON and convert them to an array of objects
    incomeInputs = JSON.parse(storedIncomeInputs);
  }

  // Add the new input to the array of income inputs
  incomeInputs.push(addedIncomeInput);

  // Update localStorage with the updated inputs
  localStorage.setItem('income-input', JSON.stringify(incomeInputs));

  // Create a new list item for the new input and append it to the income list
  const listItem = document.createElement('li');
  listItem.textContent = `${addedIncomeTitle} ${addedIncomeAmount}`;
  incomeList.appendChild(listItem);

  // Clear the add income fields
  incomeTitle.value = '';
  incomeAmount.value = '';
});






  
console.log(localStorage)






// Clear local storage and refresh the page
function clearLocalStorage() {
  localStorage.clear();
  location.reload();
}





