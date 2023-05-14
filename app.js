/*
// quick question 1 - what does this code return
new Set([1,1,2,2,3,4])

//it outputs {1,2,3,4} because sets hold only unique values and they ignore duplicates.

// quick question 2 - what does the following code output?
[...new Set("referee")].join("")
// this code outputs "ref" when the set is made it spreads out the string into an array of single characters and it ignores duplicates
// and then join() joins together the single charachers in the new spread set into a single string.

//## **Quick Questions #3**

// What does the Map ***m*** look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// when you run the following code it makes a map with two elements where the arrays are the keys and the values are either true or false
/*{
    [1,2,3] => true,
    [1,2,3] => false
}


//## **hasDuplicate**

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr){
    let compareArr = Array.from(new Set(arr));
        if(compareArr.toString() === arr.toString()){
            return false
        }else{
            return true
        }
      
    
}
*/

//## **vowelCount**

//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers 
//and the values are the count of the vowels in the string.


function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}
