// Same Problem Set, using only underscore.js 

// Problem 1

var getName = function(obj) {
	return _.pluck(obj, 'name');
};

// Problem 2

var totalLetters = function(array) {
	return _.chain(array)
	.map(function(item) {
		return item.length;
	})
	.reduce(function(memo, item) {
			return memo + item;
		})
	.value();
};

// Problem 3

var keyValue = function(key, val) {
	return _.object([key], [val]);
};

// Problem 4

var negativeIndex = function(array, num) {
	return _.chain(array).last(-num).first().value();
};

// Problem 5

var removeM = function(string) {
	return _.chain(string)
	.map(function(letter){
		return letter.toLowerCase();
	})
	.filter(function(letter) {
		if(letter !== 'm') {
			return letter;
		}
	})
	.value();
};

// Problem 6 
 var printObject = function(obj) {
 	return _.chain(obj)
 	.pairs()
 	.map(function(val, key, i){
 		console.log(i[key][0] + ' is ' + i[key][1]);
 	})
 	.value();
 };

// Problem 7
var vowels = function(string) {
	string = _.map(string, function(letter){
		return letter.toLowerCase();
	});
	var noVowel =  _.without(string, 'a','e','i','o','u');
	return _.difference(string, noVowel);
};

// Problem 8
var twins = function(array) {
	var unique = _.chain(array)
		.groupBy(function(elem, index) {
			return Math.floor(index/2);
		})
		.map(function(elem) {
			if(elem[0] === elem[1]){return false}
			else{return true}
		})
		.compact()
		.value();
	return unique.length === 0;
};

// Problem 9

var or = function(array) {
	var x = _.find(array, function(value){
		return value === true;
	});
	return x || false;
};

// Problem 10

var unique = function(array) {
	return _.uniq(array);
};