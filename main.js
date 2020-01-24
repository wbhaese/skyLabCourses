//Aula 5 

function teste(x){
	let y = 2; 

	if (x > 5){

		let y = 4;
		console.log(x,y);
	}
}

teste(10);

//aula 6

const arr = [1, 3, 4, 5, 8, 9]

// map = percorre o array e multiplica por 2
const newArr = arr.map(function(item) {
	return item * 2;
});

console.log('newArrn ', newArr);

const newArr2 = arr.map(function(item, index, test) {
	return item + ' posição ' + index;
});

console.log('newArr2 ', newArr2);

//reduce = faz a soma de todos os valores do array
//soma [0] e [1], depois o resultado de ambos ao [2] e sucecivamente

const sum = arr.reduce(function(total, nextValue){
	return total + nextValue; 
})

console.log('sum ', sum);

//filter 'filtra' valores do array conforme estipulado

const filter = arr.filter(function(item){
	return item % 2 === 0;
})

console.log('filter ', filter);

//find - verifica se há algum tipo de informação no array

const find = arr.find(function(item){
	return item >=4 <=9;
})

console.log('find ', find);


