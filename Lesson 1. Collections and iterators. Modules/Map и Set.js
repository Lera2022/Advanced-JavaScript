let map = new Map();

map.set("1", "str1"); // строка в качестве ключа
map.set(1, "num1"); // цифра как ключ
map.set(true, "bool1") // булево значение как ключ

// помните, обычный объект Object приводит ключи к трокам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1)); // "num1"
console.log(map.get("1")); // "str1"
console.log(map.size); // 3

// get set

let map = new Map();
map.set("1", "We")
    .set(1, "likes")
    .set(true, "JS");

console.log(map);

// Перебор коллекции Map

let recipeMap = new Map([
    ["огуруц", 500],
    ["помидор", 350],
])

47