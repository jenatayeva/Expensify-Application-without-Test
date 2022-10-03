class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
    console.log(name);
  }
  getGreeting(){
    return `Hi! I am ${this.name}.`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`
  }
}

class Student extends Person{
  constructor(name, age, major) {
    super(name, age);
    this.major = major
  }
  hasMajor() {
    return !!this.major
  }
  getDescription(){
    let description = super.getDescription();

    if(this.hasMajor()){
      description +=  ` Their major is ${this.major}`
    }
    return description
  }
}

class Traveler extends Person {
  constructor (name, age, major, location){
    super(name, age);
    this.location = location;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    
    if(this.location){
      greeting += ` I'm visitig from ${this.location}`
    }else{
      greeting += ` I'm visitig from Nowhere`
    }
    return greeting;
  }
}

const me = new Traveler("Jennet", 26, 'Computer Science', 'Ashgabat');
const other = new Traveler();
console.log(me.getGreeting());
console.log(other.getGreeting());