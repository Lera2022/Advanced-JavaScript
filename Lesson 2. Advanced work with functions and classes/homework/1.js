"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books.
2. Реализуйте геттер allBooks, который возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books;
    constructor(initialBooks) {
        if (new Set(initialBooks).size !== initialBooks.length) {
          throw new Error('Начальный список книг содержит дубликаты.');
        }
        this.#books = initialBooks;
      }
    allBooks() {
        return this.#books;
    }
    addBook(title) {
        try {
            let index = this.#books.indexOf(title);
            if (index !== -1) {
                throw new Error(`книга ${title} уже есть в библиотеке`);
            } else {
                this.#books.push(title);
            }
        } catch (error) {
            console.log('Ошибка добавления:', error);
        }
    }
    removeBook(title) {
        let index = this.#books.indexOf(title);
        if (index !== -1) {
            this.#books.splice(index, 1);
        }
        try {
            let index = this.#books.indexOf(title);
        if (index !== -1) {
            this.#books.splice(index, 1);
        } else {
                throw new Error(`книги с таким названием ${title} нет в списке`);
            }
        } catch (error) {
            console.log('Ошибка удаления:', error);
        }
    }
    hasBook(title) {
        let index = this.#books.indexOf(title);
        if (index !== -1) {
            return true;
        } else {
            return false
        }
    }
}

const books = ["1984", "Brave New World", "Fahrenheit 451", "Fahrenheit 451"];
const books2 = ["1984", "Brave New World", "Fahrenheit 451"];
// const library = new Library(books);
const library2 = new Library(books2);
console.log(library2.allBooks());
library2.addBook('1984');
console.log(library2.allBooks());
library2.addBook('1985');
console.log(library2.allBooks());
library2.removeBook('1985');
console.log(library2.allBooks());
library2.removeBook('1986');
console.log(library2.allBooks());
console.log(library2.hasBook('Bravade New World'));
console.log(library2.hasBook('Brave New World'));