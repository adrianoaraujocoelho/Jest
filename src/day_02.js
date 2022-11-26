/*
'''TODO'''
Day 2: Strings to Integers
Write a function called convert_add that takes a list of strings 
as an argument and converts it to integers and sums the list. For 
example [‘1’, ‘3’, ‘5’] should be converted to [1, 3, 5] and
summed to 9.


*/

const x = ["1", "3", "5"];

var times = [
  "Flamengo",
  "Vasco",
  "Corinthians",
  "Fluminense",
  "Corinthians",
  "Fluminense",
  "Palmeiras",
  "Vasco",
];

module.exports = {
  convertAdd(x) {
    novo_x = [];
    var i = 0;
    var start = 0;
    x.forEach((element) => {
      novo_x.push(parseInt(element));
      sum = start += novo_x[i];
      i++;
    });
    return sum;
  },

  hasDuplicates(arrayParam) {
    let arrayTemp = [];
    let repeatItens = [];

    for (let prop of arrayParam) {
      if (arrayTemp.includes(prop)) {
        repeatItens.push(prop);
      } else {
        arrayTemp.push(prop);
      }
    }

    return repeatItens;
  },
};

/*
'''TODO'''
 Extra Challenge: Duplicate Names

Write a function called check_duplicates that takes a list of 
strings as an argument. The function should check if the list has 
any duplicates. If there are duplicates, the function should return 
the duplicates. If there are no duplicates, the function should 
return "No duplicates". For example, the list of fruits below 
should return apple as a duplicate and list of names should 
return "no duplicates".
fruits = ['apple', 'orange', 'banana', 'apple']
names = ['Yoda', 'Moses', 'Joshua', 'Mark']




*/
