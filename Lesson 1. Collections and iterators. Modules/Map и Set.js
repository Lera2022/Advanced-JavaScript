// let map = new Map();

map.set("1", "str1"); // строка в качестве ключа
map.set(1, "num1"); // цифра как ключ
map.set(true, "bool1") // булево значение как ключ

// помните, обычный объект Object приводит ключи к трокам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"
console.log(map.size); // 3

// get set

// let map = new Map();
map.set("1", "We")
    .set(1, "likes")
    .set(true, "JS");

console.log(map);

// Перебор коллекции Map

let recipeMap = new Map([
    ["огуруц", 500],
    ["помидор", 350],
    ["лук", 50]
]);
console.log(recipeMap);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // огурец, помидор, лук
}
// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}
// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
    console.log(entry); // огурец, 500 (и так далее)
}
// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`); // огурец: 500 и так далее
});

// Работа с объектами
// Object.entries поможет создать Map:
let map = new Map(Object.entries(obj));
// Object.fromEntries поможет создать объект из Мар:
let obj = Object.fromEntries(map);

// ------ Set ------

// let buddies = [
//     'Жучка',
//     'Тузик',
//     'Булька',
//     'Тузик',
//     'Бобик',
//     'Жучка',
//     'Валера',
//     'Жучка',
//     'Тузик',
//     'Манька',
// ];

// let uniqueBuddies = new Set(buddies);

console.log(uniqueBuddies); // мы увидим, что у нас взяли 10 косточек, а собачек было всего 6

// Перевести обратно в массив нам поможет уже известный нам метод Array.from:
let buddies = [
    'Жучка',
    'Тузик',
    'Булька',
    'Тузик',
    'Бобик',
    'Жучка',
    'Валера',
    'Жучка',
    'Тузик',
    'Манька',
];

let uniqueBuddies = new Set(buddies);
console.log(uniqueBuddies);

let arr = Array.from(uniqueBuddies);