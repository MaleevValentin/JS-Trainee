// var myCrazyObject = {
//   "name": "Нелепый объект",
//   "some array": [7, 9, { 
//     purpose: "путаница",
//     numbers: 123
//   }, 3.3],
//   "random animal": "Банановая акула"
// };
// myCrazyObject["some array"][2].numbers;

// var name = "Nick";
// var otherName = "Olga";
// if (name === "Valentin") {
//   console.log("Hello dad");
// } else {
//   console.log("Hello, strangers");
// }
// if (otherName === "Olga") {
//   console.log("Hello mom");
// } else {
//   console.log("Hello stranger");
// }

// var lemonChicken = false;
// var beefWithBlackBeen = false;
// var sweetAndSourPork = false;
// if (lemonChicken) {
//   console.log("Lemon");
// } else if (beefWithBlackBeen) {
//   console.log("Been");
// } else if (sweetAndSourPork) {
//   console.log("Pork");
// } else {
//   console.log("Rice");
// }

// var animals = ["лев", "фламинго", "медведь", "удав"];
// for (var i = 0; i < animals.length; i++) {
//   console.log("В этом зоопарке есть " + animals[i] + "!");
// }

// var name = "Ник";
// for (var i = 0; i < name.length; i++) {
//   console.log("В моем имени есть буква: " + name[i]);
// }

// for (var x = 3; x < 10000; x *= 3) {
//   console.log(x);
// }

// var x = 3;
// while (x < 10000) {
//   console.log(x);
//   x *= 3;
// }

// var animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
// for (var i = 0; i < animals.length; i++) {
//   animals[i] = animals[i] + " - прекрасное животное";
// }
// console.log(animals);

// var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// var randomString = "";
// var randomNumber = 18;
// while (randomString.length < randomNumber) {
//   randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(randomString);

var input = "Fino Alla Fine!!!! Forza Juve!!!!";
var output = "";
for (var i = 0; i < input.length; i++) {
  if (input[i] === "a" || input[i] === "A") {
    output += "4";
  } else if (input[i] === "e") {
    output += "3";
  } else if (input[i] === "i") {
    output += "1";
  } else if (input[i] === "o") {
    output += "0";
  } else {
    output += input[i];
  }
}
console.log(output);