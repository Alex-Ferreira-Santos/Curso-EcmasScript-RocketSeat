"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var frutas = ["morango", "abacaxi", "pera"]; // .map faz uma interação para cada item do array

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // .reduce pega o array e tenta transformar em um só valor

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // filtra cada item do array passando um função dentro

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); // procura um item dentro do array passado pela função, se não achar retorna undefined

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
