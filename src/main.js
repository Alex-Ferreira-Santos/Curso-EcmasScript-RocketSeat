import axios from 'axios';

const minhaPromise = () => new Promise((resolve,reject)=>
setTimeout(() => { resolve("OK") },2000))

/*async function executaPromise(){
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}*/

const executaPromise = async () => {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromise()

class Api{
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        }catch(err){
            console.warn("Erro na API")
        }
        
    }
}

Api.getUserInfo('diego3g')