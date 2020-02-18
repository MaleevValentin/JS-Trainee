let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.lineWidth = 4;

let drawSegment = function(incorrectGuesses) {
  // ctx.lineWidth = 4;
  // if (incorrectGuesses === 0) {
  //   ctx.strokeRect(20, 20, 20, 20);
  // } else if (incorrectGuesses === 1) {
  //   ctx.beginPath();
  //   ctx.moveTo(30, 40);
  //   ctx.lineTo(30, 80);
  //   ctx.stroke();
  // } else if (incorrectGuesses === 2) {
  //   ctx.beginPath();
  //   ctx.moveTo(30, 80);
  //   ctx.lineTo(10, 110);
  //   ctx.stroke();
  // } else if (incorrectGuesses === 3) {
  //   ctx.beginPath();
  //   ctx.moveTo(30, 80);
  //   ctx.lineTo(50, 110);
  //   ctx.stroke();
  // } else if (incorrectGuesses === 4) {
  //   ctx.beginPath();
  //   ctx.moveTo(30, 60);
  //   ctx.lineTo(10, 50);
  //   ctx.stroke();
  // } else if (incorrectGuesses === 5) {
  //   ctx.beginPath();
  //   ctx.moveTo(30, 60);
  //   ctx.lineTo(50, 50);
  //   ctx.stroke();
  // }
};
// Создаем массив со словами
let words = ["молоко", "солнце", "дерево", "город", "диван", "кирпич"];

//Выбираем случайное слово
let word = words[Math.floor(Math.random() * words.length)];

//Создаем итоговый массив
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;
let remainingTimes = 10;
let incorrectGuesses = 0;

//Игровой цикл
while (remainingLetters > 0 && remainingTimes > 0) {
  //Показываем состояние игры
  alert(answerArray.join(" "));
  //Запрашиваем вариант ответа
  let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры");
  if (guess === null) {
    //Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    remainingTimes--;
    alert("Пожалуйста, введите одну букву");
  } else {
    //Обновляем состояние игры
    remainingTimes--;
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase() && answerArray[j] === "_") {
        answerArray[j] = guess.toLowerCase();
        remainingLetters--;
      } else if (word[j] !== guess) {
        incorrectGuesses++;
      }
    }
  }
  if (incorrectGuesses === 0) {
    ctx.strokeRect(20, 20, 20, 20);
  } else if (incorrectGuesses === 1) {
    ctx.beginPath();
    ctx.moveTo(30, 40);
    ctx.lineTo(30, 80);
    ctx.stroke();
  } else if (incorrectGuesses === 2) {
    ctx.beginPath();
    ctx.moveTo(30, 80);
    ctx.lineTo(10, 110);
    ctx.stroke();
  } else if (incorrectGuesses === 3) {
    ctx.beginPath();
    ctx.moveTo(30, 80);
    ctx.lineTo(50, 110);
    ctx.stroke();
  } else if (incorrectGuesses === 4) {
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(10, 50);
    ctx.stroke();
  } else if (incorrectGuesses === 5) {
    ctx.beginPath();
    ctx.moveTo(30, 60);
    ctx.lineTo(50, 50);
    ctx.stroke();
  }
}
//Конец игрового цикла

//Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
if (remainingTimes >= 0) {
  alert("Отлично. Было загадано слово: " + word);
} else {
  alert("Плохо! Было загадано слово: " + word);
}
