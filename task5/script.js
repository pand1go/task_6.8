let textInput = document.querySelector('input');
let duplicateField = document.querySelector('#duplicateField');
textInput.addEventListener('keyup', function (event) {
    duplicateField.textContent = event.target.value;
});

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(textInput.value);
    duplicateField.textContent = '';
    textInput.value = '';
});