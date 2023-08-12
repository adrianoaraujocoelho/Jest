/*
'''TODO'''

f"Dia 1: Divisão e Raiz Quadrada

f"- Escreva uma função chamada divide_or_square que leva um
argumento (um número).

f"- retorna a raiz quadrada do número
se for divisível por 5, retorna seu resto se não for divisível por
5. 

f"-Por exemplo, se você passar 10 como argumento, sua função
deve retornar 3,16 como a raiz quadrada."
*/
module.exports = {
  divideOrSquare(num) {
    parseFloat(num);
    if (num % 5 === 0) {
      const source = Math.sqrt(num);
      return source;
    } else {
      const rest = num % 5;
      return rest;
    }
  },

  longValue(frutas) {
    frutas = frutas;
    const frut = frutas.fruta;
    const cor = frutas.cor;
    const longValue = frut.length > cor.length ? frut : cor;
    return longValue;
  },
};

/*

'''TODO
Desafio extra: valor mais longo
Escreva uma função chamada valor_longo que usa um dicionário
como um argumento e retorna o primeiro valor mais longo do
dicionário. Por exemplo, o seguinte dicionário deve retornar
– maçã como o valor mais longo.
frutas = {'fruta': 'maçã', 'cor': 'verde'}
'''
frutas = {'fruta': 'maçã',
          'cor': 'verde'}

*/
