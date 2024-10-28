// Topic :  Var, GEC, dataTypes (primitive & non-primitive )
  const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

delete person.city;
person.country = "USA";
person.age = 31;

console.log(person);
// 2.How can you remove the model property from the following object using the delete operator?
const smartphone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 799
};
delete smartphone.model;
console.log(smartphone);

// 3.adding a property
const book = {
    title: "Learn JavaScript",
    author: "John Smith",
    pages: 400
};
book.genre = "Programming";
console.log(book);


// 4. var data = [10, 20, ["apple", "banana"], ["cat", ["dog", "elephant"], "fish"], "grape"];

// Console the “fish”

var data = [10, 20, ["apple", "banana"], ["cat", ["dog", "elephant"], "fish"], "grape"];
console.log(data[3][2])

// 5.var items = [["pen", "pencil"], "notebook", [1, 2, [3, 4, ["eraser"]]], "marker"];Console. The “eraser”

var items = [["pen", "pencil"], "notebook", [1, 2, [3, 4, ["eraser"]]], "marker"];
console.log(items[2][2][2][0])