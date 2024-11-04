// Your age is 22, if your age is greater than 18, console the “eligible for vote”, otherwise console  “not eligible”
var age=22;
if(age>18){
    console.log("eligible to vote")
}
else{
    console.log("not eligible")
}
// Weather condition is “rainy”,if weather condition is rainy, console the “its pouring outside” otherwise “not raining”
var Weather="rainy";
if(Weather=="rainy"){
    console.log("its pouring outside")
}
else{
    console.log("not raining")
}
// Students marks is 76, console the grade of students based on marks;
//     90+ →  A+
//    81 – 90 —> A
//   71 – 80  —> B+
//  61 — 70 —-> C+
// 51– 60 —-> C
// 40 – 50   —> D
// Below 50 → fail
marks=76;
if(marks>90){
    console.log("A+")
}else if(marks>=81&&marks<=90){
    console.log("A")
}else if(marks>=71&&marks<=80){
    console.log("B+")
}else if(marks>=61&&marks<=70){
    console.log("C+")
}else if(marks>=51&&marks<=60){
    console.log("C")
}else if(marks>=40&&marks<=50){
    console.log("D")
}else if(marks<50){
    console.log("fail")
}
