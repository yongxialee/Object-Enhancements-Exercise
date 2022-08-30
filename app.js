//****************************/
//Object Enhancements Exercise
//****************************/

//write your code in the sections with a comment to "whire an ES2015 version"
function createInstructor(firstName,lastName){
    return {
        firstName,
        lastName
    };
}

//computed property names
/*
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/

//computed property name ES2015
let favoriteNumber = 42;
let instructor ={
    firstName : "colt",
    [favoriteNumber] : "That is my favorite!"
}

//object methods
/*
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}*/

//object methods ES2015
let instructors ={
    firstName : 'colt',
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " "+"says bye";
    }
}

//create animal function
//white a function which generates an animal object, the function should accepts 3 arguments:
//species : the species of animal('cat','dog')
//verb: a string used to name a function ('bark', 'bleet')
//noise: a string to ve printed when above function is called('woof','baa)

const d = createAnimal("dog","bark", "Woooof!");
d.bark();
const s = createAnimal("sheep","bleet","BAAAAaaaa");
s.bleet();

function createAnimal(species,verb,noise){
    return {
        species, [verb](){
            return noise;
        }

    }
}