let textInput = document.querySelector('input'); // присваиваем первой переменной значение input
let duplicateField = document.querySelector('#duplicateField'); // присваиваем второй переменной значение элемента p #duplicateField
textInput.addEventListener('keyup', function (event) { // навешиваем обработчик по отжатию клавиш
    duplicateField.textContent = event.target.value; // изменяем текст в p #duplicateField примвоением текущего значения поля ввода
});

document.querySelector('button').addEventListener('click', (event) => { // навешиваем обработчик на кнопку по клику
    event.preventDefault();
    console.log(textInput.value); // console.log присваиваем значение input
    duplicateField.textContent = ''; // Значению элемента p #duplicateField присваиваем пустое значение
    textInput.value = ''; // Значению input присваиваем пустое значение
});