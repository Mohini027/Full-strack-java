// 1.take two strings with spaces at starting of one string and at the ending of another string remove the spaces and concat the both string and 
//  convert the combined string into uppercase string 
var a="          Mohini";
var a1=a.trimStart(); 
console.log(a)
console.log(a1)
var b="yadav       ";
var b1=b.trimEnd()
console.log(b)
console.log(b1)
var c=a1.concat(b1);
console.log(c)
console.log(c.toUpperCase())

// 2..Extract Middle Portion of the string and get the last index of char of extracted string andConvert the portion to Lowercase
var str="METHOD";
var str1=str.slice(2,4)
console.log(str1)
var str2=str1.at(-1)
console.log(str2)
console.log(str1.toLowerCase())

// 3.take a single char and concat string to that char and convert the resulted string to uppercase and then extract the last second char 
var s="1";
var r="one";
var p=s.concat(r)
console.log(p)
var t=p.toUpperCase()
console.log(t)
var q=t.at(-2)
console.log(q)

// 4.we have 2 string and extract first 3 chars of first string andextra last 3 chars of another string and concat those 2 results togetherand first char and last char of the resulted concatinated string should as uppercase

var first="string";
var sec="method";
var one=first.slice(0,3)
console.log(one)
var two=sec.slice(-3)
console.log(two)
var thr=one.concat(two)
console.log(thr)
var four=thr.charAt(0).toUpperCase()+thr.slice(1,5)+thr.charAt(5).toUpperCase()
console.log(four)

// 5.You are given a string with extra spaces at the beginning and end.You need to trim the string, make the first and last characters uppercase,  extract a specific part of the string, concatenate it with another string
var string="     hiii     "
console.log(string)
console.log(string.length)
var trim=string.trim()
console.log(trim)
console.log(trim.length)
var up=trim.charAt(0).toUpperCase()+trim.slice(1,3)+trim.charAt(3).toUpperCase()
console.log(up)
var ex=up.slice(0,2)
console.log(ex)
var con=" guys"
console.log(ex.concat(con))

// 6."hello there , how are you " find the index of are word in the sentence

var word="hello there, how are you "
var ind=word.indexOf("are")
console.log(ind)