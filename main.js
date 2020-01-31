//lesson 9 - rest spread

//Rest - serve para pegar o restante de algum objeto, conforme abaixo

const usuario = {
    nome: 'Fulano',
    idade: '26',
    empresa: 'DevDev',
}

//código abaixo pega os valores após o atributo 'nome' e adiciona na variável 'resto'
const {nome, ...resto } = usuario

console.log('nome',nome);
console.log('resto',resto);

//também pode ser usado em vetores:
//No caso abaixo, 

const arr = [1, 2, 3, 4];

//abaixo, 1º e 2º valor serão armazenados nas duas variáveis e o terceiro conterá o restante. 

const [a, b, ...c] = arr;

console.log('a',a);
console.log('b',b);
console.log('c',c);


//Rest operator também serve para funções
//No exemplo abaixo seria necessário acrescentar sempre um novo atributo,
// caso não soubéssemos quantos valores serão enviados

function soma(a, b){
	return a + b;
}


//usando Rest operator, não importa quantos valores serão enviados:

function soma2(...params){
	return params.reduce((total, next ) => total + next);
}

console.log('soma2', soma2(1,3,5,20));

// ainda podemos usar o conceito de 'resto'
//pegando o valor de quantos parâmetros quisermo e 
//o resto armazenar numa variável:

function soma3(a, b, ...params){
	let test = params.reduce((total, next) => total * next);
	return(a + b + test); 
}

console.log('soma3', soma3(4,5,3,3));

//SPREAD OPERATOR
//ele propaga, repassa para outra estrutura de dados
//no exemplo abaixo, iremo unir dois arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log('arr3', arr3);

// outros usos do SPREAD
//no exemplo abaixo, caso queira recriar um objeto 
//mas trocar algum atributo:

const user1 = {
	name: 'Jack',
	age: 25,
	empresa: 'RaconCorporation'
}

//o três pontos (...) vão copiar todas as propriedades do objeto anterior
//E devemos sobrepor a propriedade que quisermos

const user2 = {...user1, age: 36};

console.log('user2', user2);

//Another way to put new data in an object.
//On this case, it's and array;
user2.name = ['John', 'Jack'];

console.log('user2', user2);

//LESSON 10
//template literals = incluir variáveis dentro de strings no JS
//É possível concatenar variáveis dentro da string, através das 'crases'

const name = 'Fulano';
const age = 26;

console.log(`My name is ${name} and I'm ${age}`);
