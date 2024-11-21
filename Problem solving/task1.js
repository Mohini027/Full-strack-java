// 1) WAP to print numbers from -1 to -num(input) without using >= operator.
num1=-10
for(i=-1;!(i<num1);i--){
    console.log(i)
}

// 2) WAP to print numbers from -num(input) to -1 without using <= operator.
num2=-9
for(i=num2;!(i>=0);i++){
    console.log(i)
}

// 3) WAP to print sum of even digits in a number
// input: Enter a number: 1287
// output: Sum is: 10
number='1234'
sum=0
for(var i of number){
    let num3=+i
    if(num3 % 2==0){
        sum+=num3
    }
}
console.log("sum of even digits:",sum)

// 4) WAP to print sum of odd digits in a number
// input: Enter a number: 1811
// output: Sum is : 3
number2="1234"
sum1=0
for(var i of number2){
    let num4=+i
    if(num4% 2!=0){
        sum1+=num4
    }
}
console.log("sum of odd digits:",sum1)