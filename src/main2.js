import axios from 'axios';

const minhaPromise = () => new Promise((resolve, reject) =>
    setTimeout(() => { resolve("OK") }, 2000))

/*async function executaPromise(){
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

const executaPromise = async () => {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromise()*/

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        } catch (err) {
            console.warn("Erro na API")
        }

    }
}

Api.getUserInfo('diego3g')

//======================================EXERCICIOS=======================================

// Funão delay aciona o .then após 1s
const delay = (value) => new Promise(resolve => setTimeout(()=>{resolve(value)}, 1000));
async function umPorSegundo() {
    console.log(await delay("1s"))
    console.log(await delay("2s"))
    console.log(await delay("3s"))
}
umPorSegundo();



async function getUserFromGithub(user) {
    try{
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data);
    }
    catch(err){
            console.warn('Usuário não existe');
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


class Github {
    static async getRepositories(repo) {
        try{
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response.data);
        }
        catch(err){
            console.warn('Repositório não existe');
        }
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');





const buscaUsuario = async usuario => {
    try{
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data);
    }
    catch(err){
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');