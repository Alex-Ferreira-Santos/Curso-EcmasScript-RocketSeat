"use strict";

//let podem ser mudadas em escopos dentro mas nunca fora
function test(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

test(10); //const são usadas para variaveis constantes

var usuario = {
  nome: "alex"
};
usuario.nome = "cleiton";
console.log(usuario);
