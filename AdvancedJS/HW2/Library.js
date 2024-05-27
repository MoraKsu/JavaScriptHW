// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books;
  
    constructor(initialBooks = []) {
      if (new Set(initialBooks).size !== initialBooks.length) {
        throw new Error("Initial book list contains duplicates");
      }
      this.#books = [...initialBooks];
    }
  
    get allBooks() {
      return [...this.#books];
    }
  
    addBook(title) {
      if (this.#books.includes(title)) {
        throw new Error(`Book "${title}" already exists in the library`);
      }
      this.#books.push(title);
    }
  
    removeBook(title) {
      const bookIndex = this.#books.indexOf(title);
      if (bookIndex === -1) {
        throw new Error(`Book "${title}" does not exist in the library`);
      }
      this.#books.splice(bookIndex, 1);
    }
  
    hasBook(title) {
      return this.#books.includes(title);
    }
}
  
  
// Создание библиотеки с начальными книгами
const myLibrary = new Library(["1984", "Brave New World", "Fahrenheit 451"]);
  
// Добавление новой книги
myLibrary.addBook("To Kill a Mockingbird");
  
// Проверка наличия книги
console.log(myLibrary.hasBook("1984"));
  
// Получение списка всех книг
console.log(myLibrary.allBooks);
  
// Удаление книги
myLibrary.removeBook("1984");
  
// Попытка добавить дубликат книги вызывает ошибку
try {
    myLibrary.addBook("Brave New World");
} catch (e) {
console.error(e.message);
}
  
// Попытка удалить несуществующую книгу вызывает ошибку
try {
myLibrary.removeBook("The Great Gatsby");
} catch (e) {
console.error(e.message);
}
