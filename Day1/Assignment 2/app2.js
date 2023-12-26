let person = {                        // create an object called "person" and add the given properties
    name: "John",
    age: 30,
    city: "New York" 
}
delete person.age                     // remove the age property from the object
person.job = "Engineer"               // add a new property called "job" with the value "Engineer" to the object 
person.city = "San Francisco"         // update the city property
console.log(person)                   // print the final object 
