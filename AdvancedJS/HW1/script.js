// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

// Создание объекта музыкальной коллекции
const musicCollection = {
    albums: [
        { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
        { title: "Thriller", artist: "Michael Jackson", year: 1982 },
        { title: "Back in Black", artist: "AC/DC", year: 1980 },
        { title: "The Wall", artist: "Pink Floyd", year: 1979 },
        { title: "Rumours", artist: "Fleetwood Mac", year: 1977 }
    ],
    [Symbol.iterator]() {
        let index = 0;
        const albums = this.albums;
        return {
            next() {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

// Использование цикла for...of для перебора и вывода альбомов
for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}


// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

// Создание коллекций для поваров и блюд
const chefs = new Map();
chefs.set('Пицца "Маргарита"', 'Виктор');
chefs.set('Пицца "Пепперони"', 'Виктор');
chefs.set('Суши "Филадельфия"', 'Ольга');
chefs.set('Суши "Калифорния"', 'Ольга');
chefs.set('Тирамису', 'Дмитрий');
chefs.set('Чизкейк', 'Дмитрий');

// Создание объектов клиентов
const clientAlexey = { name: 'Алексей' };
const clientMaria = { name: 'Мария' };
const clientIrina = { name: 'Ирина' };

// Создание коллекции для заказов клиентов
const orders = new Map();
orders.set(clientAlexey, ['Пицца "Пепперони"', 'Тирамису']);
orders.set(clientMaria, ['Суши "Калифорния"', 'Пицца "Маргарита"']);
orders.set(clientIrina, ['Чизкейк']);

// Функция для вывода заказов и поваров, готовящих блюда
function printOrdersAndChefs() {
    for (const [client, dishes] of orders) {
        console.log(`Клиент ${client.name} заказал:`);
        dishes.forEach(dish => {
            const chef = chefs.get(dish);
            console.log(`- ${dish} (Повар: ${chef})`);
        });
        console.log('');
    }
}

// Вывод заказов и поваров
printOrdersAndChefs();
