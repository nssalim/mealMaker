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
      get appertizers(){
        return this._courses.appetizers;
      },
      get mains(){
        return this._courses.mains;
      },
      get desserts(){
        return this._courses.deserts;
      },
    };
    