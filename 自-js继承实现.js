function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age, school) {
  Person.call(this, name, age);
  this.school = school;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;