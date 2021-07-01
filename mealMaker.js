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
      
      },
    };
