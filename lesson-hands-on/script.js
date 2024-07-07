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

/* There are seven primitive data types: boolean, number, string, null, undefined and symbol.
An example of this would be the variable start which is a number, the number 2.
Some examples of non-primitive data types would be: objects, arrays and functions.
An example of this would be the array sports[].
The distinction between the two can be stated by four different situations: immutability versus
mutability, storage, assignment, and comparision. This is important to know because of how you 
interact with your data. You may get what you think are erroneous outputs because of the type of
data you are working with. */