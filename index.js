function isPalindrome(word) {

  const lowerCasedWord=word.toLowerCase()

  const splitWord=lowerCasedWord.split('');

  const reversedWord= splitWord.reverse().join('')

    if (word === reversedWord) {
       return true;
    } else {
      return false;
  }

}

/*
Pseudocode:  
convert word to lowercase
reverse the lowercase version of the word using split, reverse and join
compare this reversed word and the input word, if they are equal, return true
if they are not equal return false
*/

/*
First, the case of the input is changed to lowercase. Then, the word is split using the split method. 
After splitting, the reverse method is performed on the word, which reverses it. Subsequently, the join 
method is applied to the word to create a reversed word. Finally, the reversed word is compared with the 
input word. This comparison returns true if the two are equal and false if they are not equal.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
