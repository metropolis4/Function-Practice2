// Problem 1.
var getName = function(personObj) {
	return personObj.name;
};

// Problem 2.
var totalLetters = function(stringArray) {
	var string = stringArray.join();
	string = string.replace(/,/g, '');
	string = string.replace(/ /g, "");
	return string.length;
};

// Problem 3.
var keyValue = function(key, value) {
	var Object = {};
	Object[key] = value;
	return Object;
};

// Problem 4.
var negativeIndex = function(array, negNum) {
	var target = array.length + negNum;
	return array[target];
};

// Problem 5.
var removeM = function(string) {
	return string.replace(/m/gi, '');
};

// Problem 6.
var printObject = function(obj) {
	for(var key in obj) {
		console.log(key + " is " + obj[key]);
	}
};

// Problem 7.
var vowels = function(string) {
	var newArray = string.toLowerCase().split('');
	var allVowels = ['a', 'e', 'i', 'o', 'u'];
	var totalVowels = [];

	for(var letter in newArray) {
		if(allVowels.indexOf(newArray[letter]) !== -1) {
			totalVowels.push(newArray[letter]);
		}
	}
	return totalVowels;
};

// Problem 8.
var twins = function(array) {
	var largeArray =[];

	for(i=0;i<array.length;i+=2) {
		var smallArray = array.slice(i, i + 2);
		largeArray.push(smallArray);
	}

	for(var i in largeArray) {
		var item1 = largeArray[i][0];
		var item2 = largeArray[i][1];
		if(item1 !== item2) {
			return false;
		}
	}

	return true;

};

// Problem 9.
var or = function(array) {
	if(array.toString() === '') {
		return false;
	}
	for( var i in array){
		if(array[i] === false) {
			return false;
		}
	}
	return true;
};

// Problem 10.
var unique = function(array) {
	var uniqueItems = [];
	for( var i in array) {
		if(uniqueItems.indexOf(array[i]) === -1) {
			uniqueItems.push(array[i]);
		}
	}
	return uniqueItems;
};