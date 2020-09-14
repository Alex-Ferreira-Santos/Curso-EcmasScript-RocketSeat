const usuario = {
    nome: "Alex",
    idade: 17,
    endereco:{
        cidade: "Rio",
        Estado:"Rio"
    },
}

const { nome,idade, endereco: {cidade} } = usuario

console.log(nome)
console.log(idade)
console.log(cidade)

function mostraNome({ nome , idade}){
    console.log(nome, idade)
}
mostraNome(usuario)