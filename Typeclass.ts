class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    introduce(): string {
      return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  const person1 = new Person("ravi", 25);
  console.log(person1.introduce());
  