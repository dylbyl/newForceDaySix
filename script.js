// function sayHello(){

//     console.log("Hello world!");
// }

// sayHello();


// function dreamVacation(name, destination){
//     console.log(`${name} would love to visit ${destination}`);
// }

// dreamVacation("Dylan" , "Tokyo");
// dreamVacation("Matt" , "Huntington");
// dreamVacation("Angie" , "Tokyo 2");


// // Taco Truck
// // Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)
// // Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// // Return the taco sentence.
// // Execute the function.
// // Log the returned sentence to the console.


// function tacoTruck(typeOfShell, topping){
//     var tacoOrder = `The ${typeOfShell} shell taco with ${topping} is now ready!`;
//     return tacoOrder;
// }

// console.log(tacoTruck("soft", "sour cream"));

// Calculator
// Write a function called add. It should accept two numbers as parameters and log their sum to the console.
// Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
// Write a function called multiply. It should accept two numbers as parameters and log their product to the console.
// Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.
// Call each function three times with different parameters.

function add(additionOne, additionTwo){
    return (additionOne + additionTwo);
}

function subtract(subtractionOne, subtractionTwo){
    return (subtractionOne - subtractionTwo);
}

function multiply(multiplicationOne, multiplicationTwo){
    return (multiplicationOne * multiplicationTwo);
}

function divide(divisionOne, divisionTwo){
    return(divisionOne / divisionTwo);
}

// add(1,2)
// add(3,4)
// add(5,6)
// subtract(7,8)
// subtract(10,9)
// subtract(1,5)
// multiply(5,5)
// multiply(6,2)
// multiply(7,4)
// divide(4,5)
// divide(20,5)
// divide(10,3)


// Revisit the greetings exercise you did in the conditionals chapter, where you logged a greeting to the console based on the person's preferred language.
// Write a function that accepts two parameters: name and language.
// If the person's preferred language is English, the function should print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

function greetings(name, language){
    if(language === "French"){
        console.log(`Bonjour, ${name}!`)
    }
    else if(language === "Spanish"){
        console.log(`Hola, ${name}!`)
    }
    else{
        console.log(`Hello, ${name}!`)
    }
}

greetings("Dylan", "English");
greetings("Diego", "Spanish");
greetings("Liz", "French");


var dwayneObject = {
    firstName: "Dwayne",
    nickName: "The Rock",
    lastName: "Johnson",
    favoriteFood: "Eggs",
    hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
  }
  
  function printHobbies(personObject){
    for(var i = 0; i < personObject.hobbies.length; i++){
        console.log(personObject.hobbies[i]);
    }
  }

  printHobbies(dwayneObject);


  var partyGuests = [
    {
      name: "Sam",
      age: 18
    },
    {
      name: "Jerry",
      age: 45
    },
    {
      name: "Lila",
      age: 29
    },
    {
      name: "Mary",
      age: 68
    },
    {
      name: "Todd",
      age: 10
    }
  ]
  
  function ageChecker(guestArray){
      var canDrink = [];
      var canDrinkString = "";
      var cannotDrink = [];
      var cannotDrinkString = "";
        for(var i = 0; i < guestArray.length; i++){
            if (guestArray[i].age >= 18){
                canDrink.push(guestArray[i].name);
            }
            else{
                cannotDrink.push(guestArray[i].name);
            }
        }

        for(var i = 0; i < canDrink.length; i++){
            if (i === canDrink.length - 1){
                canDrinkString = canDrinkString + "and " + canDrink[i] + " ";
            }
            else{
                canDrinkString = canDrinkString + canDrink[i] + ", ";
            }
        }

        for(var i = 0; i < cannotDrink.length; i++){
            if (i === cannotDrink.length - 1 && cannotDrink.length > 1){
                cannotDrinkString = cannotDrinkString + "and " + cannotDrink[i] + " ";
            }
            else{
                cannotDrinkString = cannotDrinkString + cannotDrink[i] + " ";
            }
        }

        if (canDrink.length > 1){
            console.log(`${canDrinkString}are old enough to drink.`);
        }
        else{
            console.log(`${canDrinkString}is old enough to drink.`);
        }

        if(cannotDrink.length > 1){
            console.log(`${cannotDrinkString}are too young to drink.`);
        }
        else{
            console.log(`${cannotDrinkString}is too young to drink.`);
        }

  }


  ageChecker(partyGuests);