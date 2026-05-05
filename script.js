// ===============================
// STEP 2: ARRAYS
// ===============================

// Subtask 2.1: Create Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "mango"];
let mixed = [42, "hello", true];

// Subtask 2.2: Array Methods
console.log("Original fruits:", fruits);

// push
fruits.push("orange");
console.log("After push:", fruits);

// pop
fruits.pop();
console.log("After pop:", fruits);

// shift
fruits.shift();
console.log("After shift:", fruits);

// unshift
fruits.unshift("grape");
console.log("After unshift:", fruits);

// length
console.log("Fruits length:", fruits.length);


// ===============================
// STEP 3: OBJECTS
// ===============================

// Subtask 3.1: Create Object
let person = {
  name: "John",
  age: 20,
  isStudent: true
};

// Subtask 3.2: Access & Modify
console.log("Name (dot):", person.name);
console.log("Age (bracket):", person["age"]);

// Modify properties
person.age = 21;
person["name"] = "Jane";

console.log("Updated person:", person);


// ===============================
// STEP 4: BUILT-IN METHODS
// ===============================

// Subtask 4.1: Array Processing
let nums = [1, 2, 3, 4, 5];

// map
let doubled = nums.map(n => n * 2);

// filter
let evenNumbers = nums.filter(n => n % 2 === 0);

// forEach
console.log("Numbers using forEach:");
nums.forEach(n => console.log(n));

console.log("Doubled:", doubled);
console.log("Even numbers:", evenNumbers);


// Subtask 4.2: Objects inside Arrays
let students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 78 }
];

// Add new student
students.push({ name: "David", grade: 88 });

// Filter students
let topStudents = students.filter(student => student.grade >= 85);

// Get names
let studentNames = students.map(student => student.name);

console.log("All students:", students);
console.log("Top students:", topStudents);
console.log("Student names:", studentNames);


// ===============================
// STEP 5: TESTING
// ===============================

console.log("===== FINAL TEST OUTPUT =====");

console.log("Numbers array:", numbers);
console.log("Fruits array:", fruits);
console.log("Mixed array:", mixed);

console.log("Person object:", person);

console.log("Processed arrays:");
console.log("Doubled:", doubled);
console.log("Even:", evenNumbers);

console.log("Students:", students);
console.log("Top Students:", topStudents);
console.log("Names:", studentNames);

console.log("===== END =====");