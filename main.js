//lesson 07 - arrow functions 
const arr = [1, 3, 4, 5, 6];

//arrow functions = atravésdo símbolo '=>'
//fica desnecssário usar 'funtion()' e se for apenas
//passado um parâmetro, 'item' pode ser removido de parênteses
//e caso seja retornado apenas uma linha de código,
// não é necessário usar 'return'
//Ex. 1:
//
const newArr = arr.map(function(item) {
	return item * 2;
});

console.log('newArr', newArr);

//Ex. 2 aplicando vídeo aula

const newArr2 = arr.map(item => item *2);

console.log('newArr',newArr2);

//abaixo, função usando 'const(s), mas não muito recomendado'
//retorno valores, strings e arrays, mas não objetos.
const test = () => [1, 2, 3, 4];

console.log(test());

//para retornar objetos, a estrutura da função para arrays

const test2 = () => ({nome: 'Wallace', age: 'under fifty' });

console.log(test2());

//lesson 08 - default values (valores padrões)

//Podemos estabelecer valores padrões, caso algum não não seja passado
//abaixo função normal
function soma(a, b){
	return a + b;
}

console.log(soma(1));//NaN pois foi passado apenas um valor

//fun~ção com valores padrões

const soma2 = (a = 3, b = 6) => a + b;

console.log('soma2',soma2(1));//passando apenas valor de 'A'
console.log('soma2',soma2());//não passando nenhum valor;

//aula08 - dessestruturação de objetos

const user = {
	name: 'Fulano',
	age: 23,
	adress: {
		city: 'Tokyo',
		state: 'Tokyo'
	},
};

console.log('user',user);

//abaixo função sem desestruturação - under, function without desestruction

function showName(usuario){
	console.log('showName', user.nome);
}

//dentro da função, podemos dizer qual atributo do 
//objeto queremos vizualisar, mas precisamos passar
//o objeto para a função e definir os atributos entre chaves

function showName2({name, age}){
	console.log('showName2', name, age);
}

showName2(user);