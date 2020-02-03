// var pickRandomWord = function(words) {
//   return words[Math.floor(Math.random() * words.length)];
// };

// var animals = ["Тигр", "Лев", "Собака", "Курица", "Мышь"];
// pickRandomWord(animals);

// var randomBodyParts = ["глаз", "нос", "череп"];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// var randomString =
//   "У тебя " +
//   pickRandomWord(randomBodyParts) +
//   " словно " +
//   pickRandomWord(randomAdjectives) +
//   " " +
//   pickRandomWord(randomWords) +
//   "!!!";
// randomString;

// var generateRandomInsult = function() {
//   var randomBodyParts = ["глаз", "нос", "череп"];
//   var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//   var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//   var randomString =
//     "У тебя " +
//     pickRandomWord(randomBodyParts) +
//     " словно " +
//     pickRandomWord(randomAdjectives) +
//     " " +
//     pickRandomWord(randomWords) +
//     "!!!";
//     return randomString;
// };
// generateRandomInsult();

// var fifthLetter = function (name) {
//   if (name.length < 5) {
//     return;
//   }
//   return "Пятая буква вашего имени: " + name[4] + "!";
// };

// function add(arg1, arg2) {
//   return arg1 + arg2;
// };
// function multiply(arg1, arg2) {
//   return arg1 * arg2;
// };
// add(multiply(36325, 9824), 777);

// function areArraysSame (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//     return true;
// };
// areArraysSame([1, 2, 3], [1, 2, 3]);

//Создаем функции для игры "Виселица"
var pickWord = function() {
  // Возвращает случайно выбранное слово
  var words = [
    "молоко",
    "солнце",
    "апельсин",
    "дерево",
    "город",
    "диван",
    "кирпич"
  ];
  return words[Math.floor(Math.random() * words.length)];
};
var setupAnswerArray = function(word) {
  // Возвращает итоговый массив для заданного слова word
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
};
var showPlayerProgress = function(answerArray) {
  // С помощью alert отображает текущее состояние игры
  alert(answerArray.join(" "));
};
var getGuess = function() {
  // Запрашивает ответ игрока с помощью prompt
  return prompt("Угадайте букву или нажмите Отмена для выхода из игры");
};
var updateGameState = function(guess, word, answerArray) {
  // Обновляет answerArray согласно ответу игрока (guess)
  // возвращает число, обозначающее, сколько раз буква guess
  // встречается в слове, чтобы можно было обновить значение
  // remainingLetters
  var appearances = 0;
  for (var j = 0; j < word.length; j++) {
    if (word[j] === guess.toLowerCase() && answerArray[j] === "_") {
      answerArray[j] = guess.toLowerCase();
      appearances++;
    }
  }
  return appearances;
};
var showAnswerAndCongratulatePlayer = function(answerArray) {
  // С помощью alert показывает игроку отгаданное слово
  // и поздравляет его с победой
  showPlayerProgress(answerArray);
  if (remainingTimes >= 0) {
    alert("Отлично. Было загадано слово: " + word);
  } else {
    alert("Плохо! Было загадано слово: " + word);
  }
};

// word: загаданное слово
var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
var remainingTimes = 10;
while (remainingLetters > 0 && remainingTimes > 0) {
  showPlayerProgress(answerArray);
  // guess: ответ игрока
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    remainingTimes--;
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    remainingTimes--;
    // correctGuesses: количество открытых букв
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}
showAnswerAndCongratulatePlayer(answerArray);