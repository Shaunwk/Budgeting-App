// Toggle menu to show and hide links
const toggle = document.querySelector('.toggle');
const linksList = document.querySelector('.links-list');
const toggleIcon = document.querySelector('.material-symbols-outlined');


toggle.addEventListener('click', function (){
  linksList.classList.toggle('links-open');
  toggleIcon.classList.toggle('icon-open');
  toggle.classList.toggle('toggle-open');
});




// Add income and delete with total shown
const incomeData = JSON.parse(localStorage.getItem('income')) || [];
let total = 0;

function renderIncomeList() {
    const incomeList = document.getElementById('income-list');
    incomeList.innerHTML = ''; // Clear the existing list
  
    total = 0; // Reset the total amount
  
    incomeData.forEach((income, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${income.title} - $${income.amount.toFixed(2)}`;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        deleteIncome(index);
      });
  
      listItem.appendChild(deleteButton);
      incomeList.appendChild(listItem);
  
      total += income.amount;
    });
  
    // Update the total display
    const totalDisplay = document.getElementById('income-amount-total');
    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
  }

function deleteIncome(index) {
  total -= incomeData[index].amount;
  incomeData.splice(index, 1);

  // Update the localStorage and re-render the income list
  localStorage.setItem('income', JSON.stringify(incomeData));
  renderIncomeList();
}

renderIncomeList();

const incomeAddButton = document.getElementById('income-add-button');
incomeAddButton.addEventListener('click', addIncome);

function addIncome() {
  // Get the input values
  const descriptionInput = document.getElementById('income-title-input');
  const amountInput = document.getElementById('income-amount-input');

  const description = descriptionInput.value;
  const amount = parseFloat(amountInput.value);

  if (description.trim() === '' || isNaN(amount)) {
    alert('Please enter a valid description and amount.');
    return;
  }

  // Clear the input fields
  descriptionInput.value = '';
  amountInput.value = '';

  // Update the income array and total
  const incomeInput = { title: description, amount };
  incomeData.push(incomeInput);
  total += amount;

  // Update the localStorage and re-render the income list
  localStorage.setItem('income', JSON.stringify(incomeData));
  renderIncomeList();
}




// Use this to clear all storage if needed localStorage.removeItem('income'); 