// Toggle menu to show and hide links

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function () {

    const links = document.querySelector('.links-list');
    const toggleIcon = document.querySelector('.material-symbols-outlined');

    if (links.style.display === 'none') {
        links.style.display = 'block';
        toggle.style.backgroundColor = '#fff';
        toggleIcon.style.color = "#000";

    } else {
        links.style.display = 'none';
        toggle.style.backgroundColor = '#212121';
        toggleIcon.style.color = "#fff";

    }
});


// add income 
const addIncome = document.querySelector('.add-item-button');

addIncome.addEventListener('click', function(){
    const incomeTitleInput = document.getElementById('income-title-input');
    const incomeAmountInput = document.getElementById('income-amount-input');

    
})