const linkText = document.querySelector('#linkText'); // Присваиваем первой константе элемент по id

linkText.addEventListener('click', function(event) { // Навешиваем обработчик по клику
    const userText = prompt('Введите текст'); // Присваиваем второй константе значение функции prompt
    this.textContent = userText; // Изменяем текст в ссылке на введенный в prompt
    event.preventDefault(); // Сбрасываем поведение ссылки
})
