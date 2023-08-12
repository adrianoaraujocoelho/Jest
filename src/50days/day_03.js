/*
'''TODO'''
Day 3 Register Check

Write a function called register_check that checks how many 
students are in school. The function takes a dictionary as a 
parameter. If the student is in school, the dictionary says ‘yes’. If 
the student is not in school, the dictionary says ‘no’. Your 
function should return the number of students in school. Use the 
dictionary below. Your function should return 3.

Escreva uma função chamada register_check que verifica quantos alunos estão na escola. A função recebe um dicionário como parâmetro.Se o aluno estiver na escola, o dicionário diz "sim.Se o aluno não estiver na escola, o dicionário diz 'não'.Sua função deve retornar o número de alunos na escola. Use o dicionário abaixo. Sua função deve retornar 3

*/

/*

register = {
  Michael: "yes",
  John: "no",
  Peter: "yes",
  Mary: "yes",
};

/*
function should return the number of students in school. Use the */
/* students_in_school function you wrote earlier.*/

/*

<----------------------------------------------------------->

Extra Challenge: Lowercase Names

names = ["kerry", "dickson", "John", "Mary", 
 "carol", "Rose", "adam"]

You are given a list of names above. This list is made up of names 
of lowercase and uppercase letters. Your task is to write a code 
that will return a tuple of all the names in the list that have only
lowercase letters. Your tuple should have names sorted 
alphabetically in descending order. Using the list above, your 
code should return:
('kerry', 'dickson', 'carol', 'adam')

Você recebe uma lista = Array de nomes acima. Esta lista é composta por nomes
de letras minúsculas e maiúsculas.
 Sua tarefa é escrever um código
que retornará uma tupla de todos os nomes da lista que possuem apenas
letras minúsculas. Sua tupla deve ter nomes classificados
alfabeticamente em ordem decrescente. Usando a lista acima, seu
código deve retornar:
('kerry', 'dickson', 'carol', 'adam')

*/

names = ["kerry", "dickson", "John", "Mary", "carol", "Rose", "adam"];

module.exports = {
  register_check(register) {
    numeroDeAlunos = 0;

    Object.values(register).forEach(function (item) {
      if (item == "yes") {
        numeroDeAlunos += 1;
      }
    });
    return numeroDeAlunos;
  },

  lowerCaseNames(names) {
    nomesMinusculos = [];
    names.forEach(function (item) {
      if (item[0] == item[0].toLowerCase()) {
        nomesMinusculos.push(item);
      }
    });

    return nomesMinusculos.sort();
  },
};
