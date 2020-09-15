const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idade = usuarios.map(function(index){
    return index.idade
})
console.log(idade)

const filtro = usuarios.filter(function(item){
    return item.empresa === 'Rocketseat' && item.idade>18
})
console.log(filtro)

const find = usuarios.find(function(item){
    return item.empresa === 'Google'
})
console.log(find)

const multiplica = usuarios.map(function(value){
    value.idade = value.idade*2
    return value
})
const filtra = multiplica.filter(function(index){
    return index.idade<=50
})

console.log(multiplica)
console.log(filtra)


