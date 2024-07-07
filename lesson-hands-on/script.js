let sports = ["baseball", "basketball", "football"];
let moreSports = sports.push("soccer");
console.log(moreSports);


let names = ["Jude", "Audra", "Meghan"];
let start = 2;
let removedItems = names.splice(start);
console.log(names);
console.log(removedItems);


let cars = [
    {
        "make": "toyota",
        "model": "tacoma",
        "condition": "used",
        "color": "black"
    },
    {
        "make": "toyota",
        "model": "camry",
        "condition": "new",
        "color": "whtie"
    },
    {
        "make": "ford",
        "model": "f-150",
        "condition": "used",
        "color": "red"
    }
]
let car = cars.find(car => car.color === "red");
console.log(car);