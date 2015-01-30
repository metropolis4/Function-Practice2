// Problem 1.

var getName = function(personObj) {
	return personObj.name;
};

// Problem 2.

var totalLetters = function(stringArray) {
	return stringArray.join().replace(/,/g, '').replace(/ /g, '').length;
};

// Problem 3.

var keyValue = function(key, value) {
	var Object = {};
	Object[key] = value;
	return Object;
};

// Problem 4.

var negativeIndex = function(array, negNum) {
	return array[array.length + negNum];
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
	var innerVowel = function(letter){
		return letter === 'a' || letter === 'e' ||letter === 'i' ||letter === 'o' ||letter === 'u';
	};
	return string.toLowerCase().split('').filter(innerVowel);
};

// Problem 8.

var twins = function(array) {
	var largeArray =[];

	for(i=0;i<array.length;i+=2) {
		var smallArray = array.slice(i, i + 2);
		largeArray.push(smallArray);
	}

	var falses = largeArray.filter(function(item) {
		return item[0] !== item[1];
	});
	return falses.length === 0;
};

// Problem 9.

var or = function(array) {
	if(array.toString() === '') {
		return false;
	}

	var x = array.filter(function(item) {
		return item === false;
	});
	return x.length === 0;
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