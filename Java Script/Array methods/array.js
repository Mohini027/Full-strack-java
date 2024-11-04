// Write a code snippet to find the length of an array.
var a=["Hello",20,false,"problem"]
console.log(a.length)
// How do you add an element to the end of an array?
var a=["Hello","Ravi","how"]
a.push("are you")
console.log(a)
// How do you remove the last element from an array?
var b=["orange","apple","mango"]
b.pop("mango")
console.log(b)
// How do you add an element to the beginning of an array?
var c=["sai","womens","hstl","kphb"]
c.unshift("hyd")
console.log(c)
// How can you remove the first element from an array?
var colors=["white","red","orange","green"]
colors.shift()
console.log(colors)
// How do you reverse the elements in an array?
var b=[10,9,8,7,6,5,4,3,2,1]
console.log(b.reverse())
// How can you find the index of a specific value in an array?
var b=["orange","apple","mango","true"]
console.log(b.indexOf("mango"))
// How can you check if a certain value exists in an array?
var c=["sai","womens","hstl","kphb"]
console.log(c.includes("hyd"))
// How can you sort the elements of an array in ascending order?
var i=[20,1,30,2,40,50]
i.sort((a,b)=>a-b)
console.log(i)
// How can you convert an array to a string using commas as separators?
var a=["white","red","orange","green"]
var b=a.join(",")
console.log(b)

// Questions with Multiple Array Methods:
// 1)Write a code snippet that adds an element to the end of an array, then removes the first element.
var a=["RRR","Devara","NTR"]
a.push("Movies")
console.log(a)
a.shift()
console.log(a)

// How can you reverse an array and then join the elements into a string?
var a=["ravi","pandu","good","morning"]
var b=a.reverse()
console.log(b)
c=b.join("")
console.log(c)

// 3.Write a code that first sorts an array in ascending order, then removes the last element.
var fruits=["banana","grapes","orange","mango"];
var sort=fruits.sort();
console.log(sort)
fruits.pop();
console.log(fruits)

// 4.How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var fruits=["banana","grapes","orange","mango"];
fruits.unshift("papaya","jackfruit")
fruits.shift();
console.log(fruits);
var length=fruits.length;
console.log(length)

//5. How do you combine two arrays, sort the combined array, and then remove the last element?
var std=["ram","charan","sai","pavan"];
var dept=["janu","aravind","tej"];
var concat=std.concat(dept)
console.log(concat)
var sort=concat.sort();
console.log(sort)
sort.pop();
console.log(sort)
