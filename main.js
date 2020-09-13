class TodoList{
    constructor(){
        this.todos = []
    }
    
    static addTodo(){
        this.todos.push('Novo todo')
        console.log(this.todos)
        // não vai funcionar pois em métodos estaticos não existe this
    }
}

class Matematica{
    //métodos estaticos podem ser chamados sem iniciar a classe
    static soma(a,b){
        return a+b
    }
}

console.log(Matematica.soma(1,2))

class List{
    //classe pai
    constructor(){
        this.data = []
    }
    add(data){
        this.data.push(data)
        console.log(this.data)
    }
}
class TodoList extends List{
    //classe filha
    constructor(){
        super() // chama o construtor pai

        this.usuario = 'Alex'
    }
    mostraUsuario(){
        console.log(this.usuario)
    }
}

var MinhaLista = new TodoList()
document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('Novo todo')
}
MinhaLista.mostraUsuario()