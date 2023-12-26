let fruits                                       // create an empyt array called 'fruits'
fruits = ["apple","banana","orange"]            // add apple, banana and orange to the array
fruits.splice(0,1)                              // remove the first fruit from the array
fruits.push("grapes")                           // add grapes to the end of the array
fruits[1] = "pear";                             // update second fruit in array to pear
console.log(fruits)