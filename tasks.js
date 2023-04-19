// 1 Write a program that generates a random number between 1 and 10 and asks the user to guess what the number is. If the user guesses correctly, the program should output "Congratulations, you guessed the number!" If the user guesses incorrectly, the program should output "Sorry, try again!" and allow the user to guess again.

function evenOddGame() {
  const userInput = prompt("even or odd");
  const randomNumber = Math.trunc(Math.random() * 11);
  if (userInput == "even" || userInput == "odd") {
    if (randomNumber % 2 == 0 && userInput == "even") {
      console.log("You Won.", "\nThe number is: ", randomNumber);
    } else if (randomNumber % 2 != 0 && userInput == "odd") {
      console.log("You Won.", "\nThe number is: ", randomNumber);
    } else {
      console.log("You lost.", "\nThe number is: ", randomNumber);
    }
  } else {
    console.log("Invalid Input");
  }
}

evenOddGame();


// 2 Write a program that takes a string as input and reverses the order of the words in the string. For example, if the input string is "hello world", the program should output "world hello".

function reverseString(string){
  reverse=[]
  let i
  for(i=string.length; i>=0; i--){
      reverse.push(string[i])
    }
    return reverse.join("")
}

console.log(reverseString("hello world"))


// 3 Write a program that calculates the factorial of a given number. The factorial of a number is the product of all the integers from 1 to that number. For example, the factorial of 5 is 5 x 4 x 3 x 2 x 1 = 120.

function factorial(num){
  sum=1
  for(i=1; i<=num; i++){
      sum*=i
  }
  return sum
}

console.log(factorial(5))


// 4 Write a program that takes an array of numbers as input and returns the sum of the numbers in the array.

function sumArray(numbers){
  sum=0
  for(i=0; i<=numbers.length-1; i++){
      sum+=numbers[i]
  }
  return sum
}

console.log(sumArray([2,3,5]))

// 5 Write a program that takes a string as input and checks whether it is a palindrome. A palindrome is a word or phrase that reads the same forwards and backwards. For example, "racecar" is a palindrome.

function palindrome(string){
  reverse=""
  for(i=string.length-1; i>=0; i--){
    reverse+=string[i]
    
  }
  if(string===reverse){
    console.log(`${string} is Palindrome`)
  }
  else{
    console.log(`${string} is Not Palindrome`)
  }
}

console.log(palindrome('bahadur'))
console.log(palindrome('level'))
console.log(palindrome('racecar'))

// 6 Write a program that takes a number as input and determines whether it is prime or not. A prime number is a positive integer greater than 1 that has no positive divisors other than 1 and itself.

function primeNumber(num){
  if(num<=1){
    return true

  }
  for(i=2; i<=Math.sqrt(num); i++){
    if(num%i===0){
      return false
    }

  }
  return true
}

console.log(primeNumber(9))
console.log(primeNumber(7))
console.log(primeNumber(3))
console.log(primeNumber(15))

// 7 Write a program that takes an array of numbers as input and returns the highest and lowest numbers in the array.

function highLow(numbers){
  max= Math.max(...numbers)
  min= Math.min(...numbers)

  console.log(`min: ${min}, max: ${max}`)
}

console.log(highLow([2,6,10,5,1,3]))

// Another Method using sort

function highLowNum(numbers){
    sort = numbers.sort(function(a,b){
      return a-b
    })

    min= sort[0]
    max= sort[sort.length-1]
    console.log(min,max)
  }

  console.log(highLowNum([2,6,10,5,1,3]))

// 8 Write a program that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string.

function checkVowel(string){
  count=0
  for(i=0; i<=string.length-1; i++){
    if("a" == string[i] ||"e" == string[i] || "i" == string[i] ||"o" == string[i] ||"u" == string[i] ){
      count+=1
    }
  }
  return count
}

console.log(checkVowel("bahadur"))
console.log(checkVowel("ae"))
console.log(checkVowel("The process in which ........"))

// 9 Write a program that takes a number as input and calculates its square root.

function squareRoot(number){
    sq=Math.round(Math.sqrt(number))
    return sq
}

console.log(squareRoot(81))

// 10 Write a function that take input and make square of the input number

function square(number){
    sq=number**2
    return sq

}
console.log(square(2))

// 11 Write a program that takes two arrays of numbers as input and returns a new array that contains the elements that are common to both arrays.

function commonNum(array1, array2){
    combine= []
    for(i=0; i<=array1.length-1; i++){
        for(j=0; j<=array2.length-1; j++){
            if(array1[i]===array2[j]){
                combine.push(array1[i])
            }
        }
    }return combine
}

console.log(commonNum([123,456,558,55,12],[22,55,456,558,125]))