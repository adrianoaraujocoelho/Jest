/*

13 | P a g e
Day 4: Only Floats

Write a function called only_floats, which takes two
parameters a and b, and returns 2 if both arguments are floats,
returns 1 if only one argument is a float, and returns 0 if neither
argument is a float. If you pass (12.1, 23) as an argument, your
function should return a 1.

# Escrever uma função chamada: only_floats
# A função recebe dois paramentros(a,b)
# Retorne 2 se ambos os paramentros forem float
# Retorne 1 se apenas um argumento for float
# Retorne 0 se nenhum dos argumento for float
# Exemplo: (12.1,13) retorno será 1

# Algoritimo
*/

module.exports = {
  only_floats(a, b) {
    function isFloat(num) {
      return Number(num) === num && num % 1 !== 0;
    }
    const array = [];
    if (isFloat(a)) {
      array.push(a);
    }
    if (isFloat(b)) {
      array.push(b);
    }
    return array.length === 0 ? 0 : array.length;
  },

  /*
Extra Challenge: Index of the Longest Word

Write a function called word_index that takes one argument,
a list of strings and returns the index of the longest word in the
list. If there is no longest word (if all the strings are of the same
length), the function should return zero (0). For example, the list
below should return 2.
words1 = ["Hate", "remorse", "vengeance"]
And this list below, shoul return zero (0)
words2 = ["Love", "Hate"]

Escreva uma função chamada word_index que receba um argumento,
uma lista de strings:
--> retorna o índice da palavra mais longa na lista.
Se não houver palavra mais longa (se todas as strings forem do mesmo length),
a função deve retornar zero (0).
Por exemplo, a lista abaixo deve retornar 2.
palavras1 = ["ódio", "remorso", "vingança"]
E esta lista abaixo, deve retornar zero (0)
palavras2 = ["Amor", "Ódio"]
*/

  word_index(words) {
    let maxLength = 0;
    let maxIndex = 0;

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.length > maxLength) {
        maxLength = word.length;
        maxIndex = i;
      }
    }

    for (let i = 0; i < words.length; i++) {
      if (i !== maxIndex && words[i].length === maxLength) {
        return 0;
      }
    }

    return maxIndex;
  },
};
