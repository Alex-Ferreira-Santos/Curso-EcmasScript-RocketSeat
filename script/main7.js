// REST
//retorna o resto de um objeto com ...NomeDaChamada
const usuario = {
    nome:"Alex",
    idade:17,
    cidade: "Rio"
}

const {nome, ...resto} = usuario

console.log(nome)
console.log(resto) // retorna usuario.idade e usuario.cidade


const arr = [1,2,3,4]
const [a, b, ...c] = arr

console.log(a)
console.log(b)
console.log(c) //retorna [3,4]

function soma(...params){
    return params.reduce( (total,next)=> total + next )
}

console.log(soma(1,3,4)) //retorna 8

function soma2(a,b,...params){
    return params
}

console.log(soma2(1,3,4)) // retorna só o 4

// SPREAD

const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,arr2] //vai juntar os itens do array 1 e o 2 formando um array só

console.log(arr3)

const usuario1 = {
    nome:"Alex",
    idade:17,
    cidade: "Rio"
}

const usuario2 = {...usuario1,nome:"cleiton"} // sobrepõe o nome anterior
console.log(usuario2) //vai retornar o objeto mas agora o nome vai ser cleiton