/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line
// create function called blackJack w/ 2 parameters (playerCardScore, dealerCardScore)
function blackJack(playerCardScore, dealerCardScore){
  //if both players are over 21, return 0
  if(playerCardScore > 21 && dealerCardScore > 21){
    return 0
    //if playerCardScore >= 21, && dealerCardScore >= 21 && playerCardScore > dealerCardScore, return higher score
  } else if(playerCardScore <= 21 && dealerCardScore <= 21){
    return Math.max(playerCardScore, dealerCardScore)
  } else if(playerCardScore > 21 && dealerCardScore <= 21){
    return dealerCardScore
  } else{
    return(playerCardScore)
  }
}
console.log(blackJack(19,21))
console.log(blackJack(22,22))
console.log(blackJack(19,22))
console.log(blackJack(21,19))
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 2:')

// Add your code below this line
//create function called scrabbleScore with word
function scrabbleScore(word){
//convert the word to uppercase and split it to an array
  const letters = word.toUpperCase().split('')
//create variable for result scores
  let score = 0
//loop through word w/ forEach
  letters.forEach((letter) => {
    if(['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].includes(letter)){
        score += 1
    } else if(['D', 'G'].includes(letter)){
        score += 2
    } else if(['B', 'C', 'M', 'P'].includes(letter)){
        score += 3
    } else if(['F', 'H', 'V', 'W', 'Y'].includes(letter)){
        score += 4
    } else if(['K'].includes(letter)){
        score += 5
    } else if(['J', 'X'].includes(letter)){
        score += 8
    } else if(['Q', 'Z'].includes(letter)){
        score += 10
    }
})
    return score
}
// Add your code above this line

console.log(scrabbleScore('function'))
console.log(scrabbleScore("javascript"))
console.log(scrabbleScore("cabbage"))

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 3:')

  // Add your code below this line
  //create a function called isPalindrome w/ a parameter called words

  // function isPalindrome(word){
  //   return word === word.split('').reverse().join('')
  // }

  //refactored using arrow function
  const isPalindrome = (word) => word === word.split('').reverse().join('')

  console.log(isPalindrome('noon'))
  console.log(isPalindrome('racecar'))
  console.log(isPalindrome('moon'))
  console.log(isPalindrome('run'))
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 4:')

// Add your code below this line
//create a function called doubleLetters with word parameter
// function doubleLetters(word){
//   //loop through the word
//   for(i = 0; i <= word.length; i++) {
//     //loop through the word again (behind it)
//         for(var j = i+1; j <= word.length; j++) {
//           //compare results, if results match, it has double letters
//             if(word[j] == word[i]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

//refactored using arrow function
const doubleLetters = (word) => {
  for(i = 0; i <= word.length; i++) {
    //loop through the word again (behind it)
        for(var j = i+1; j <= word.length; j++) {
          //compare results, if results match, it has double letters
            if(word[j] == word[i]) {
                return true;
            }
        }
    }
    return false;
}


console.log(doubleLetters("loop"))
console.log(doubleLetters("rune"))
console.log(doubleLetters("apple"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 5 - bonus:')

// Add your code below this line
// create a function called wordCount with parameter called phrase
function wordCount(phrase) {
  const words = phrase.split(' ')
  const wordCount = {}

  words.forEach((word) => {
    // check if word exists as a key in wordCount object
    // if it does not, then add word as key and value as 1
    // if word already exists, then increment value by 1
    if (wordCount[word] === undefined) {
      // if letter does not already exist in wordCount object
      wordCount[word] = 1
    } else {
      // letter already exists in wordCount object
      // increment value by 1
      wordCount[word] = wordCount[word] + 1
    }
    // console.log(wordCount)
  })

  return wordCount
  }

  //call function
  console.log(wordCount("olly olly in come free"))
  console.log(wordCount("Baby shark doo doo doo doo doo doo"))
  console.log(wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall"))
// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
