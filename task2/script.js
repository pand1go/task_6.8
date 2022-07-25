document.querySelector('#consoleLog').addEventListener('click', 
  (event) => {
    alert('Метод вывода сообщения на веб-консоль.');
})

document.querySelector('#alert').addEventListener('click', 
  (event) => {
    alert('Метод вывода сообщения в модальном окне браузера.');
})

document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    alert('Метод вывода диалогового окна с сообщением и текстовым полем для ввода данных.');
})