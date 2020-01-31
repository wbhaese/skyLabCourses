//Object short syntax - sintaxe curta de objetos

//Caso queira passar uma variável para dentro dum objeto, não é necessário colocar 
//dois pontos na variável como abaixo:

const nome = 'Fulano';
const idade = 26;

const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'DevDev'
}

console.log('usuario',usuario)
//Caso o atributo seja o mesmo nome que a variável, basta passar apenar o nome do atributo:

const usuario2 = {
    nome,
    idade,
    empresa: 'DevDev'
}
console.log('usuario2',usuario2)

document.getElementById('valorInput').value = JSON.stringify(usuario2);