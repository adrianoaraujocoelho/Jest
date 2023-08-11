// Convertendo números decimais para binários

//import { Stack } from "../estru_dados_algo_javascript/stack_pilhas";
//const Stack = require("./stack_pilhas.js");

export class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  // Push de elementos na pilha
  push(element) {
    while (element < 10) {
      this.items[this.count] = element;
      this.count++;
      element++;
    }
  }
  //verificar o tamanho da estrutura
  size() {
    return this.count;
  }
  //Verificando se a pilha esta vazia
  isEmpty() {
    return this.count === 0;
  }
  //pop de elementos da pilha
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  //verificando o topo da pilha
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  //limpando a fila
  clear() {
    this.items = {};
    this.count = 0;
  }
  //laço while para limpar a fila.
  while() {
    while (!this.isEmpty()) {
      this.pop();
    }
  }
  // to String, metodo para exibir o conteudo da fila
  toString() {
    if (this.isEmpty()) {
      return typeof " ";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
      console.log(objString);
    }
    return objString;
  }
}

/*
function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(decimalToBinary(10));
//console.log(decimalToBinary(10));
//console.log(decimalToBinary(1000));

*/

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    console.log(rem);
    remStack.push(rem);
    number = Math.floor(number / 2);
    console.log(number);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(10));
