// Toggle menu to show and hide links

const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links-list');
const header = document.querySelector('header')

toggle.addEventListener('click', function(){
    if(links.style.display === 'none'){
        links.style.display = 'block';
        toggle.style.backgroundColor = '#fff';
        
    } else{
        links.style.display = 'none';
        toggle.style.backgroundColor = '#212121'
    }
})