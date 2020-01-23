// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.data);
//         //document.getElementById('valorTodo').value('');
//     }
// }

// class TodoList extends List {
//     // constructor() {
//     //     this.todos = [];
//     // }

//     // addTodo(){
//     //     this.todos.push('Novo Todo');
//     //     console.log(this.todos);
//     // }

//     constructor(){
//         super();
//         this.usuario = 'Diego';
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function(){
//     MinhaLista.add(document.getElementById('valorTodo').value);
// };

// MinhaLista.mostraUsuario();

class Matematica{
    constructor(){
        this.todos = [];        
    }

    static soma(a, b){//Método estático recebe informação e retorna o dado processado independente do restante da classe
        return a + b;
    }
}
console.log(Matematica.soma(15, 15));