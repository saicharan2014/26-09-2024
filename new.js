// Question 1
let a='    sai'
let b="charan    "
let c=a.trimStart().concat(" ",b.trimEnd()).toUpperCase();
console.log(c);
// Question 2
let x="sai RAM charan";
let y=x.slice(4,7).charAt((x.slice(4,7).length)-1);
let z=x.slice(4,7).toLocaleUpperCase();
console.log(y);
console.log(z);
// Question 3
let p="hi"
let q="hello world";
let r=p.concat(" " ,q).toUpperCase().charAt((p.concat(" ",q).length)-2);
console.log(r);
// Question 4
let m="helloworld"
let n="ramsai"
let o=m.charAt(0).toUpperCase()+m.slice(1,3)+" "+n.slice(-3,-1)+n.charAt((n.length)-1).toUpperCase();
console.log(o);
// Question 5
let str="     hello world    "
let str1=(str.trim()).charAt(0).toUpperCase()+(str.trim()).slice( 1,(str.trim().length)-1)+str.trim().charAt((str.trim().length)-1).toUpperCase();
let str2=str1.slice(0,6).concat("universe");
console.log(str1);
console.log(str2);
// Question 6
let word="hello there how are you";
console.log(word.split(" ").indexOf("are"));
// Question 7
var smartphone={
    brand:"oneplus",
    model:12,
    price:10000
}
Object.seal(smartphone);
smartphone.price=20000
console.log(Object.isSealed(smartphone));


console.log(smartphone);
// Question 8
var book={
    title:"harry potter",
    author:"jk rowling",
    publishedYear:1998,

}
Object.freeze(book);
book.publishedYear=2000
console.log(Object.isFrozen(book));

console.log(book);
// Question 9
var person={
    firstName:"sai charan",
    lastName:"Tummala",

}
console.log(Object.keys(person));
console.log(Object.values(person));
// Question 10
var course={
    title:"web devlopment",
    instructor:"vamsi",
    duration:"6 months",

}
Object.entries(course);
delete course.duration;
console.log(course);
// Question 11
var employee ={
    name:"sai charan",
    position:"frontend",
    salary:50000

}
Object.seal(employee);
employee.position="full stack"
console.log(Object.keys(employee));

console.log(employee);
// Question 12
var l="hello this is sai charan"
console.log((l.split(" ").splice(1,1))[0].toUpperCase());
// Question 13
var str3="hello world"
console.log(str3.toLocaleUpperCase().length);
// Question 14
var str4="hello world"
console.log(str4.charCodeAt(a.charAt(a.length-1)));
// Question 15
var str5="   hello world   "
console.log(str5.trim().slice(1,5));
// Question 16
var str6="hello";
var str7="WORLD";
console.log(str6.concat(" ",str7.toLowerCase()));
// Question 17
var str8="   hello world    "
console.log(str8.trim().slice(1));
// Question 18
var str9="hello world"
console.log(str9.charAt(0).toUpperCase());
// Question 19
var str10=5;
var str11=10;
var str12=20;
console.log(str10*str11+str12===100);
// Question 20
var str13=8;
var str14=12;
console.log(str13>5&&str14<20);
// Question 21
var num1=25
var num2=35
console.log(num1>num2?"25 is less number":"35 is greater number");
// Question 22
var str15=15;
var str16=10;
var subresult=str15-str16;
var divresult=str15/str16;
console.log(subresult/2===0?"subresult is even":"subresult is odd");
console.log(divresult/2===0?"divresult is even":"divresult is odd");
// Question 23
var age=18;
console.log(age===18?"equal to 18":"greater than 18");
console.log(age==18?"equal to 18":" greater than 18");







