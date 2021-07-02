// Meal Maker
// to randomly create a three-course meal based on what is available on any given menu. Run programme until satisfied with the generated meal!


console.log('MEAL MAKER');


const menu = {
// courses property to ultimately contain a mapping between each course and the dishes available to order in that course
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

// getter and setter methods for the appetizers, mains, and desserts properties
  get appetizers(){
    return this._courses.appetizers;
  },
  get mains(){
    return this._courses.mains;
  },
  get desserts(){
    return this._courses.desserts;
  },

  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
  },
 
// getter method for courses and return object that contains key/value pairs for appetizers, mains and desserts properties
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
  };
},

// addDishToCourse() method to create an object called dish
// method to then push dish object into the appropriate array in menu‘s _courses object based on what courseName is passed in
addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },


// to obtain a random dish from a course on the menu(necessary for generating a random meal)
getRandomDishFromCourse(courseName){
// retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes
  const dishes = this._courses[courseName];
// generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array)
// round generated number to a whole number
  const randomIndex = Math.floor(Math.random() * dishes.length);
// return the dish located at that index in dishes
  return dishes[randomIndex];
},

// automatically generate a three-course meal
// function to create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when passing in an appetizers string to it
// repeat with appetizer and dessert
// calculate total price and return a string that contains the name of each of the dishes and the total price of the meal
generateRandomMeal(){
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const main = this.getRandomDishFromCourse('mains');
  const dessert = this.getRandomDishFromCourse('desserts');
  const totalPrice =  appetizer.price + main.price + dessert.price;
      return `\nDo you love trying out new restaurants and experimenting with different foods? \n\nDon't want to figure out what you want to order as it's become a time-consuming ordeal when the menu is too BIG? \n\nLook no further! \nWe randomly create a three-course meal based on what is available on any given menu! \n\nWhy not try:-  \nStarter:  ${appetizer.name} \nMain:  ${main.name} \nDessert:  ${dessert.name}  \nTotal price:- £${totalPrice}\n\nA quick and easy way to seek and find a food combination to love!`;
  }
};


// add appetizers, mains and desserts
menu.addDishToCourse('appetizers', 'vegetable samosas', 3.50);
menu.addDishToCourse('appetizers', 'pakoras', 3.50);
menu.addDishToCourse('appetizers', 'spiced mushrooms', 3.50);


menu.addDishToCourse('mains', 'Tarka Daal', 5.25);
menu.addDishToCourse('mains', 'palak paneer', 6.50);
menu.addDishToCourse('mains', 'biryani', 8.50);


menu.addDishToCourse('desserts', 'Ras malai', 3.00);
menu.addDishToCourse('desserts', 'Kheer', 4.50);
menu.addDishToCourse('desserts', 'Gulab Jamun', 3.50);
menu.addDishToCourse('desserts', 'Jalebi', 4.00);


// generate a three-course meal
// print generated meal
const meal = menu.generateRandomMeal();
console.log(meal);
// Output:
// MEAL MAKER

// Do you love trying out new restaurants and experimenting with different foods? 

// Don't want to figure out what you want to order as it's become a time-consuming ordeal when the menu is too BIG? 

// Look no further! 
// We randomly create a three-course meal based on what is available on any given menu! 

// Why not try:-  
// Starter:  spiced mushrooms 
// Main:  Tarka Daal 
// Dessert:  Ras malai  
// Total price:- £11.75

// A quick and easy way to seek and find a food combination to love!

