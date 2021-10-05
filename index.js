/*
1) Criar uma função de seta (arrow function) que recebe 2 parâmetros e retorna a multiplicação deles.

a) Chamar a função e exibir o resultado no console.
*/

var mult = (n1,n2) => {
  return n1*n2
}

console.log("1)")
console.log(mult(3,9))

/*
2) Criar uma função de seta (arrow function) que recebe três números como parâmetros , e retorna o maior número dos 3 valores.

a) Chamar a função e exibir o resultado no console.
*/


console.log("---------------")
console.log("2)")

var maior = (n1,n2,n3) => {
  return Math.max(n1,n2,n3)
}

console.log(maior(1,10,100))

/*
3) Criar uma função de seta (arrow function) que recebe um parâmetro inteiro e retorna a palavra ímpar ou par de acordo com o valor recebido.

a) Chamar a função e exibir no console o resultado.
*/

console.log("---------------")
console.log("3)")

var parImpar = (int) => {
  if(int % 2 === 0){
    return "O número "+int+" é par!"
  }else{
    return "O número "+int+" é impar!"
  }
}

console.log(parImpar(1))
console.log(parImpar(2))