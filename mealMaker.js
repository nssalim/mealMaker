// Meal Maker
// to randomly create a three-course meal based on what is available on any given menu. Run programme until satisfied with the generated meal!


// console.log('MEAL MAKER');


const menu = {
    // courses property to ultimately contain a mapping between each course and the dishes available to order in that course
      _courses: {
        appertizers: [],
        mains: [],
        desserts: [],
      },
    
    // getter and setter methods for the appetizers, mains, and desserts properties
      get appertizers(){
        return this._courses.appetizers;
      },
      get mains(){
        return this._courses.mains;
      },
      get desserts(){
        return this._courses.deserts;
      },
    
      set appertizers(appertizers){
        this._courses.appetizers = appetizers;
      },
      set mains(mains){
        this._courses.mains = mains;
      },
      set desserts(desserts){
        this._courses.desserts = deserts;
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
      return this._courses.push(dish)
      },
    
    
    // to obtain a random dish from a course on the menu(necessary for generating a random meal)
    getRandomDishFromCourse(courseName){
    // retrieve the array of the given course’s dishes from the menu‘s _courses object and store in a variable called dishes
      const dishes = this.courses(courseName);
    // generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array)
    // round generated number to a whole number
      const randomIndex = (Math.floor(Math.random()) * dishes.length);
    // return the dish located at that index in dishes
      return dishes(randomIndex);
    },
    generateRandomMeal(){
      const appertizers = this.getRandomDishFrom('appetizers');
        const mains = this.getRandomDishFrom('mains');
          const desserts = this.getRandomDishFrom('desserts');
      }
    };
        