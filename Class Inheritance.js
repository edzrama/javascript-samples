class Animal { 
   constructor(name) { 
      this.name = name;
   }
   poop() { 
      return "a pooper"
   }
}
class Dog extends Animal {
   bark() { return console.log("barker")}
}
class Cat extends Animal { 
   constructor(name) { 
      super(name);
      this.name = name + " the cat";
   }
   meow() { return this.name +  " is a meower"}
}
let cato = new Cat("billy");
console.log(cato.meow() + " and " +cato.poop())

