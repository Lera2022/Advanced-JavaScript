/*
Задание 2:
Мы создаем приложение. У нас планируется два вида пользователей, обычные и
премиум. Общие свойства этих пользователей необходимо вынести в базовый класс.

1. Создайте базовый класс User с базовой информацией (имя и фамилия, которые
должны создаваться при создании экземпляра класса).
2. Создайте классы PremiumUser и RegularUser, которые наследуются от User. Класс
PremiumUser должен иметь свойство premiumExpiration (дата истечения срока
действия премиум аккаунта, должно задаваться при создании объекта), а у
RegularUser такого свойства нет.
3. Создайте функцию getAccountInfo(user), которая принимает объект класса User
и возвращает информацию о наличии и сроке действия премиум-аккаунта. Необходимо
использовать instanceof для проверки типа переданного пользователя и дать
соответствующий ответ из функции (в свободном формате).
*/

class User {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   *
   * @param {User} user
   */
  static getAccountInfo(user) {
    return !!user.premiumExpiration;
  }
}

class PremiumUser extends User {
  constructor(firstName, lastName, premiumExpiration) {
    super(firstName, lastName);
    this.premiumExpiration = premiumExpiration
  }
}

class RegularUser extends User {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
}

/**
 *
 * @param {PremiumUser | RegularUser} user
 */
const getAccountInfo = (user) => user instanceof PremiumUser ? 'Premium user' : 'DNISHEBROD!!!!';

const me = new PremiumUser('Elijah', 'Shcherbakov');
const notMe = new RegularUser('name', 'no name');

console.log(getAccountInfo(me));
console.log(getAccountInfo(notMe));
