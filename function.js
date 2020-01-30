var pickRandomWord = function(words) {
  return words[Math.floor(Math.random() * words.length)];
};

var animals = ["Тигр", "Лев", "Собака", "Курица", "Мышь"];

pickRandomWord(animals);