import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// var firstname= "Yara";
// var name="Van Dam";

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

//ES6 CONST vs LET
// //const is een onveranderende variabele
// let firstname ="Yara";
// firstname="Jara";
// console.log(firstname);

// //LET is enkel in de forloop gekend
// for (let i = 0; i < 10; i++) {
//   console.log(i);
//  }
//  console.log(i);

// ES6 Concatenation
// let firstname="Yara";
// let lastname="Van Dam";
// let fullname=`${firstname} test ${lastname}`;
// console.log(fullname);

//ES5 
// var person={
//   firstname:"Yara",
//   lastname:"Van Dam",
//   sayFullname: function(){
//     console.log(this.firstname + " " + this.lastname)
//   }
// }

// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.sayFullname());

//ES6
// let person={
//     firstname:"Yara",
//     lastname:"Van Dam",
//     sayFullname(){
//       console.log(`${this.firstname} ${this.lastname}`)
//     }
//   }

// console.log(person.firstname);
// console.log(person.lastname);
// person.sayFullname();

//ES6
// let person={
//     firstname:"Yara",
//     lastname:"Van Dam",
//     sayFullname(){
//       console.log(`${this.firstname} ${this.lastname}`)
//     }
//   };
// console.log(person.firstname);
// console.log(person.lastname);
// person.sayFullname();

// let GetFullname=person.sayFullname.bind(person); //om this te weten
// GetFullname();

//ES5
// var person={
//     firstname:"Yara",
//     lastname:"Van Dam",
//     sayFullnameAfter10sec: function(){
//       var self = this;
//       setTimeout(function()
//       {console.log(self.firstname + " " + self.lastname)},2000);
//     }
//   }

//  person.sayFullnameAfter10sec();

//ES6
// const person={
//     firstname:"Yara",
//     lastname:"Van Dam",
//     sayFullnameAfter10sec: function(){
//       setTimeout(()=> {
//       console.log(this.firstname + " " + this.lastname)},2000);
//     }
//   }

 //person.sayFullnameAfter10sec();

//ES6
// const square=number=>number*number;

//  console.log(square(5));

//ES6 mapping
//["red","green","blue"]
//["1.red",,"2.green","3.blue"]

// var colors=["red","green","blue"];
// var newColors=[];

// for (let i = 0; i < colors.length; i++) {
//   newColors.push((i+1) + "." + colors[i]);
// }
// console.log(newColors);

// const colors= ["red","green","blue"];
// const newColors= colors.map((color,index) => `${index+1}. ${color}`);

// console.log(newColors);

//ES5 oject destructuring
// var user = {
//   name: "Van der Vorst",
//   firstname: "Collin",
//   age: 30
// };

// var name = user.name;
// var firstname = user.firstname;
// var age = user.age;

//ES6
// const person = {
//   name: "Van der Vorst",
//   firstname: "Collin",
//   age: 30
// };

// const { name, firstname} = person;
// const {firstname:voornaam, name}=person;
// console.log(voornaam,name);

//ES5
// var users1 = ["collin", "jan", "tom"];
// var users2 = ["jef", "john", "lisa"];

// var users = users1.concat(users2);
// console.log(users);  

//ES6
// var users1 = ["collin", "jan", "tom"];
// var users2 = ["jef", "john", "lisa"];

// var users = [...users1, ...users2];
// console.log(users);  

//ES5
// var users1 = {
//   name: "Collin",
//   talk() {
//     console.log("Hi");
//   }
// }

// var users2 = {
//   name: "Lisa",
//   talk() {
//     console.log("Hi");
//   }
// }
// console.log(users1.name);

//ES6

import {User} from "./js/classes/User.js";
const User1=new User("Yara" , "Van Dam");
class Person {
  constructor(name) {
      this.name = name;  
  }

  talk() {
      console.log("Hello I am " + this.name);
  }
}

class Teacher extends Person{
  constructor (firstname,lastname,degree){
  super(firstname,lastname);

  this.degree=degree;
  }
}

const person1 = new Person("Collin");
const person2 = new Person("Lisa");

let teacher1= new Teacher("Yara", 'Van Dam' , "Bachelor");
teacher1.talk();
person1.talk();
person2.talk();
