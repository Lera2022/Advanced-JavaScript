/*
Задание 3:
Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить,
является ли введенное значение числом или нет, и дать соответствующий ответ.
1. Создайте HTML-структуру:

```
<input type="text" class="number-input" placeholder="Введите число">
<button class="check-button">Проверить</button>
<div class="message"></div>
```

Необходимо обрабатывать событие проверки числа пользователем, проверяющая
функция должна использовать try и catch для проверки вводимого значения.
*/

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".form__input");
const spanResult = document.querySelector(".result__current");
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  spanResult.textContent = "";
  let resultText = "";

  try {
    const value = inputEl.value;
    if (value === 'DUNGEON MASTER') {
      resultText = 'I\'m your SLAVE'
    } else if (!Number.isFinite(+value)) {
      throw new Error(`${value} Should be number`);
    } else {
      resultText = "Correct number";
    }
  } catch (e) {
    resultText = e.message;
  }
  spanResult.textContent = resultText;
});
