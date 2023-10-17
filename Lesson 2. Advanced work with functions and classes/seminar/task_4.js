/*
Задание 4:
Пользователи вашего сайта могут добавлять элементы в список. Но есть условие:
введенное значение должно содержать от 3 до 10 символов.

Создайте HTML-структуру:

```
<input type="text" class="user-input">
<button class="add-button">Добавить</button>
<ul class="item-list"></ul>
<div class="error-message"></div>
```

Необходимо обрабатывать событие добавления элемента в список. Функция,
обрабатывающая событие, должна выбрасывать исключение, если длина введенного
значения не соответствует требованиям.
Если исключение было выброшено, необходимо добавить сообщение об ошибке в div.
Не важно, была ошибка или нет, после того как мы совершим попытку добавления
данных, необходимо вывести в консоль "Попытка добавления элемента завершена."
*/

const userInputEl = document.querySelector('#userInput');
const submitBtn = document.querySelector('#addUserInput');
const errDiv = document.querySelector('.error-message');
const listMessagesUl = document.querySelector('.item-list')


/**
 *
 * @param str
 * @returns {boolean}
 */
const checkInputLength = (str) => {
  return str.length > 2 && str.length < 11;
}

submitBtn.addEventListener('click', () => {
  errDiv.textContent = '';
  const message = userInputEl.value;
  console.log('There was an attempt to add an element to the list')
  if (!checkInputLength(message)) {
    errDiv.textContent = `${message} Not valid`;
    return;
  }
  listMessagesUl.insertAdjacentHTML("beforeend", `<li>${message}</li>`)
})
