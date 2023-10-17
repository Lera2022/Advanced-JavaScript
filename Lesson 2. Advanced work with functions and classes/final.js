// разработать систему регистрации пользователей для веб-приложения.

// Глобальный объект
const App = {};

// Защищённые свойства класса
class User {
    // Защищённое свойство _name
    #
    _name;

    constructor(name) {
        this.#_name = name;
    }

    getName() {
        return this.#_name;
    }
}

// Функция регистрации пользователя
App.registerUser = (name, email, password) => {
    try {
        // Проверка введённых данных
        if (!name || !email || !password) {
            throw new Error('Не все данные были введены') ж
        }

        // Создание экземпляра класса User
        const user = new User(name);

        // Дополнительная обработка и сохранение пользователя
        const userData = {
            name: user.getName(),
            email,
            password
        };
        // Здесь можно добавить логику сохранения пользователя в базу данных или отправку данных на сервер

        console.log('Пользователь успешно зарегистрирован:', user.getName());
        console.log('Дополнительные данные пользователя:', userData);
    } catch (error) {
        console.log('Ошибка регистрации:', error.message);
    } finally {
        console.log('Завершение регистрации пользователя');
    }
}

// Вызов функции регистрации пользователя
App.registerUser('John Doe', 'john@example.com', 'password123');
App.registerUser('Jane Smith', '', 'password456');