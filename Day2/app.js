// Assignment 1: JS function to take number as parameter and print if positive, negative or zero

function check (num) {
    if (num>0) {
        console.log('positive')
    }
    else if (num<0) {
        console.log('is negative')
    }
    else {
        console.log('zero')
    }
}
check(9)
check(-2)
check(0)


// Assignment 2: JS function that takes a positive integer as a parameter and calculates it's factorial using for loop.

function fact (n) {
    fact = 1
    for (let i=1;i<=n;i++) {
        fact = fact*i 
    }
    console.log(fact)
}
fact(4)


// Assignment 3: JS function that takes two numbers as parameters and returns the larger 

function greater (n1,n2) {
    let str = "neither"
    if (n1>n2) {
        return n1
    }
    else if (n2>n1) {
        return n2
    }
    else {
        return str
    }
}
console.log(greater(-12,4)," is greater")
console.log(greater(7,7)," is greater")


// Assignment 4: JS function that takes a string as a parameter and checks if it is palindrome. 
// A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

function palindrome(str) {
    str = str.split(" ").join("").toLowerCase();
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    console.log(reverse)
    if (str == reverse) {
        console.log("Palindrome");
    } 
    else {
        console.log("Not Palindrome");
    }
}
palindrome("Evil OliVe");
palindrome("Hello");


// Assignment 5: JS function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer.

function prime (num) {
    let count=0
    for (let i=1;i<=num;i++) {
        if (num%i==0) {
            count++;
        }
    }
    if (count==2)
    {
        console.log("The number is prime")
    } 
    else{
        console.log("The number is not prime")
    }
}
prime(13)
prime(12)


// Assignment 6: JS function that simulates a simple calculator. Take two numbers and an operator (+, -, *, or /) as parameters.

function calc (n1, n2, op) {
    switch (op) {
        case '+':
            console.log("The sum of ",n1," and ",n2," is ",n1+n2)
            break;
        case '-':
            console.log("The difference of ",n1," and ",n2," is ",n1-n2)
            break;
        case '*':
            console.log("The product of ",n1," and ",n2," is ",n1*n2)
            break;        
        case '/':
            console.log("The quotient of ",n1," and ",n2," is ",n1/n2)
            break;   
    }
}
calc(8,2,'+')
calc(8,2,'-')
calc(8,2,'*')
calc(8,2,'/')

