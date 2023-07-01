//Criando uma classe JavaScript stack baseada em objeto.
//LIFO estrutura de dados de pilha na linguagem Javascript,usando um objeto javascript para armazenar os elementos da pilha

class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  // Push de elementos na pilha
  push(element) {
    while (element < 10) {
      console.log(`o valor de element é: ${element}`);
      this.items[this.count] = element;
      this.count++;
      element++;
      console.log(`o valor de element++ é: ${element}`);
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

const stack = new Stack();

//add elemento
console.log(stack.push(1));
//stack.toString();
