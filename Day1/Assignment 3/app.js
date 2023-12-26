let cars = [                                          // create and add three car objects with same properties to array "cars"
    {make:"Toyota",model:"Camry",year:2018},
    {make:"Toyota",model:"Camry",year:2018},
    {make:"Toyota",model:"Camry",year:2018},
]
cars.splice(0,1)                                     // remove the first car object from array
cars.push({make:"Honda",model:"Civic",year:2020})    // add a new car object to the array
cars[1].model = "Accord"                             // update the model property of the second car to "Accord"
console.log(cars)