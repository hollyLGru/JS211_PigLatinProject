use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {
  let aIdx = word.indexOf('a');
  let eIdx = word.indexOf('e');
  let iIdx = word.indexOf('i');
  let oIdx = word.indexOf('o');
  let uIdx = word.indexOf('u');
  let answer = -1;

  if (aIdx === answer) {}
  else if (aIdx != answer && answer < aIdx) {answer = aIdx;}

   if (eIdx === -1) {}
  else if (answer != -1 && answer > eIdx) {answer = eIdx} 
  else if (answer === -1 && answer < eIdx)
  {answer = eIdx}

  if (iIdx === -1) {}
  else if (answer != -1 && answer > iIdx)
  {answer = iIdx} 
  else if (answer === -1 && answer < iIdx)
  {answer = iIdx} 
  
  
  if (oIdx === -1) {}
  else if (answer != -1 && answer > oIdx) {answer = oIdx}
  else if (answer === -1 && answer < oIdx)
  {answer = oIdx}

  if (uIdx === -1) {}
  else if (answer != -1 && answer > uIdx) {answer = uIdx} 
  else if (answer == -1 && answer < uIdx) {answer = uIdx}

if (answer === 0) {return word + "yay"}
  else if (answer != 0) {return word.slice(answer, word.length) + word.slice(0, answer) + "ay" }
}

// let word = "emission"

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.