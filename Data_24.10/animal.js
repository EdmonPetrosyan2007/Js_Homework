class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`This name --> ${this.name}`);
  }
}


class Dog extends Animal {
  speak() {
    console.log(`2.name --> ${this.name}`);
  }
}


const dog = new Dog("Aram");
dog.speak(); 
