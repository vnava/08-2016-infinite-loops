(function() {
  'use strict';

var loop = function(collection, callback){
    // ultimate side-effects function
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
};

// 1. countVowels

var countVowels = function(string){
	var counter = 0;
	var vowels = ["a", "e", "i", "o", "u"];
	loop(string, function(letter){
		if (vowels.indexOf(letter) >= 0){
			counter++;
		}
	})
		return counter;	
		}
	
var numOfVowels = countVowels("All vowels");
console.log(numOfVowels);	

// 2. stringReversal

var stringReversal = function(string){
	var reversestring = "";
	var long = string.length;
	for (var i = 1; i < (long + 1); i++){
		reversestring += string[long - i];

	}

		return reversestring;

}
var olleh = stringReversal("hello");
console.log(olleh);

// 3. isPalindrome

// 4. largestNumber

// 5. multBy

// 6. powerOf 

// 7. capitalizeFirstLetters 

// 8. collectValues 

// 9. containsValue 

// 10. copyObj

// 11. extendObj 

// 12. swapShuffle 


var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 100);
console.dir(sampleCarList);


// 13. findBlueCars

// 14. findCarsByColor

// 15. findCarsByYear

// 16. findCarsBetweenYears

// 17. findCarsByMake

// 18. findCarsByMakeAndModel

// 19. Random Price Generator

// 20. VerySpecificSearch



}());


