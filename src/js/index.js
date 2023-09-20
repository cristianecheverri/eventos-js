const buttonClick = document.getElementById('click_button');
const myForm = document.getElementById('my_form');
const mySelect = document.getElementById('myselect');
const myInput = document.getElementById('myinput');
const myDiv = document.getElementById('mydiv');

buttonClick.addEventListener('click', () => {
    alert('Me diste click');
});

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Formulario enviado');
});

mySelect.addEventListener('change', () => {
    console.log('valor: ' + mySelect.id)
});

myInput.addEventListener('input', () => {
    console.log('valor: ' + myInput.value)
});

myDiv.addEventListener('mouseover', () => {
    myDiv.classList.add('mouseover');
});

myDiv.addEventListener('mouseout', () => {
    myDiv.classList.remove('mouseover');
});


