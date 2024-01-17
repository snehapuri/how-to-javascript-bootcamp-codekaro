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

function palindrome(str) {
    str = str.split(" ").join("").toLowerCase()
    let reverse = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    if (str == reverse) {
        console.log("Palindrome")
    } 
    else {
        console.log("Not Palindrome")
    }
}
palindrome("Evil OliVe")
palindrome("Hello")


// Assignment 5: JS function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer.

function prime(n) {
    let count = 0;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            console.log(i);
        }
        count = 0;
    }
}
prime(12);


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


// Assignment 7: JS function that takes a string as a parameter and counts the number of vowels in the string.

function vowels (str) {
    let count=0
    for (let i=0;i<str.length;i++) {
        if (str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U') {
            count++
        }
    }
    console.log("Number of vowels: ",count)
}
vowels("hEllo")


// Assignment 8: JS function that takes a positive integer as a parameter and checks if it's a perfect number.

function perfect (num) {
    function perfect(n) { 
        let sum = 0; 
        for (let i = 1; i < n; i++) { 
            if (n % i === 0) { 
                sum += i; 
            } 
        } 
        if (sum==n) { 
            console.log("Perfect number"); 
        } else { 
            console.log("Not a perfect number"); 
        } 
    } 
    perfect(25);
    perfect(6);
}


// Assignment 9: JS function that takes a number as a parameter and prints the Fibonacci series up to that number.

function fibonacci (num) {
    let sum = 0
    let a = 0, b=1
    if (num==0)
    console.log(0)
    else if(num==1)
    console.log(1) 
    else {
        console.log(a)
        console.log(b)
        for (let i=1;i<=num;i++) {
            sum = a+b;
            a = b;
            b = sum;
            console.log(sum)
        } 
    }
}
fibonacci(10)


// Assignment 10: JS function that takes a positive integer as a parameter and prints its multiplication table up to 10.

function mult(n) {
    for (let i=0;i<=10;i++) {
        console.log(n," x ",i," = ",n*i)
    }
}
mult(5)