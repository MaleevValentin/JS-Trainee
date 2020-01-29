// Создаем массив со словами
var words = [
  "молоко",
  "солнце",
  "апельсин",
  "дерево",
  "город",
  "диван",
  "энциклопедия",
  "кирпич"
];

//Выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];

//Создаем итоговый массив
var answerArray = [];
for(var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

//Игровой цикл
while (remainingLetters > 0) {
  //Показываем состояние игры
  alert(answerArray.join(" "));
  //Запрашиваем вариант ответа
  var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры");
  if (guess === null) {
    //Выходим из игрового цикла
    break;
  } else if (guess.length !== 1) {
    alert ("Пожалуйста, введите одну букву");
  } else {
    //Обновляем состояние игры
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase()) {
        answerArray[j] = guess.toLowerCase();
        remainingLetters--;
      }
    }
  }
  //Конец игрового цикла
}

//Отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Отлично. Было загадано слово: " + word);
