// let dog = {
//   name: "FIdo",
//   weight: 20.2,
//   age: 4,
//   breed: "mixed",
//   ativity: "fetch balls"
// };
// let bark;
// if (dog.weight > 20) {
//   bark = "WOOF WOOF";
// } else {
//   bark = "woof woof";
// }
// let speak = dog.name + " says " + bark + " when he wants to " + dog.ativity;
// console.log(speak);

// let taxi = {
//   make: "Webville Motors",
//   model: "Taxi",
//   year: 1957,
//   color: "yellow",
//   passengers: 4,
//   convertible: false,
//   mileage: 1021
// };
// function prequal(car) {
//   if (car.mileage > 10000) {
//     return false;
//   } else if (car.year > 1960) {
//     return false;
//   }
//   return true;
// }

// let worthALook = prequal(taxi);
// if (worthALook) {
//   console.log("You gotta check out this " + taxi.make + " " + taxi.model);
// } else {
//   console.log("You should really pass on the " + taxi.make + " " + taxi.model);
// }

function getSecret (file, secretPassword) {
  file.opened += 1;
  if (secretPassword == file.password) {
    return file.contents;
  } else {
    return "Invalid password! No secret for you."
  }
}
function setSecret (file, secretPassword, secret) {
  if (secretPassword == file.password) {
    file.opened = 0;
    file.contents = secret;
  }
}

let superSecretFile = {
  level: "classified",
  opened: 0,
  password: 2,
  contents: "Dr. Evel's next meeting is in Detroit."
};

let secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Dr. Evel's next meeting is in Philadelphia.");
secret = getSecret(superSecretFile, 2);
console.log(secret);