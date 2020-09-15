//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const {nome,endereco:{cidade},endereco:{estado}} = empresa

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2
function mostraInfo({nome,idade}) {
    return `${nome} tem ${idade} anos.`
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }))
   
