//let podem ser mudadas em escopos dentro mas nunca fora
function test(x){
    let y = 2
    if(x>5){
        let y = 4
        console.log(x,y)
    }
}
test(10)

//const são usadas para variaveis constantes
const usuario = {nome:"alex"}
usuario.nome="cleiton"
console.log(usuario)