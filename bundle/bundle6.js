"use strict";

var usuario = {
  nome: "Alex",
  idade: 17,
  endereco: {
    cidade: "Rio",
    Estado: "Rio"
  }
}; // desestrutura o objeto para ser mais rapido a chamada de um item do objeto

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
