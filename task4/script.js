const linkText = document.querySelector('#linkText');

linkText.addEventListener('click', function(event) {
    const userText = prompt('Введите текст');
    this.textContent = userText;
    event.preventDefault();
})
