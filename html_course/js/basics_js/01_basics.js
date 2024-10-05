/*console.log(1234)
console.log([1,2,3,4])
console.log({fname:"ajay",age:21})
console.table({fname:"ajay",age:21})
console.error("error")
console.warn("warning no1")
console.clear();

console.time("timer");
for(i=0;i<10;i++)
{
    console.log(i);
}
console.timeEnd("timer");
*/

/* variable declaration

var a=10;
var b=20;

console.log(a+b);
*/
//1. scope 

//if(true){
    //const msg="welcome to ajay tutorial classes";
    //var msg="welcome to ajay tutorial classes";
    /*var msg="welcome to ajay tutorial classes";*/
//}
//console.log(msg)

/*var a=20.56;
console.log(typeof a);*/
//type conversion

/*
var a;
a=25;
console.log(a,typeof a);
a=String(a);
console.log(a, typeof a);

var a;
a=25;
console.log(a,typeof a);
a=a.toString();
console.log(a, typeof a);

var a;
a="25";
console.log(a,typeof a);
a=Number(a);
console.log(a, typeof a);

var a;
a="25";
console.log(a,typeof a);
a=parseInt(a);
console.log(a, typeof a);

var a;
a="25.257";
console.log(a,typeof a);
a=parseFloat(a);
console.log(a, typeof a);
*/
/*
const avg=85;
 const grade=avg>=90?"A Grade":avg>80?"B Grade":"C Grade"
 console.log("Grade is "+grade);*/


 //Nullish
/*
 const user={'name':'Ajay'}
 console.log(user)

 console.log(user.city??="Tada")
 console.log(user)
 */

 //getting input from user
/*
let age=prompt("Enter your age : ");
if(age!=null && age>=18){
    console.log("Eligible")
}*/

//let i=0;
/*
while(i<=10){
    console.log(i);
    i++;
}*/
/*
const t=prompt("Enter the table : ");
do{
    console.log(t+" X "+i+" = "+(t*i));
    i++;
}while(i<=10);*/

/*let arr=[];
for(let i=1;i<=10;i++){
    arr.push("love U pani ma");
    console.log(arr[i]);
}
for(let i in arr){
    console.log(arr)
}
let dic={"Family Ajay":{
    "Parents":["Sambasivam","Rohini"],
    "Wife":["Leburu  Pani"],
    "Childs":["Child1","Child2","Child3","Child4",],
    "Mama_familys":["Ravi","Ammani"]
}}
//console.log(dic);

a='ajay is a';
b='good boy';
c=a+' '+b;
console.log(c);
d=c.toUpperCase();
console.log("Upper case : "+d);

d=c.toLowerCase();
console.log("Lower case : "+d);

e=a.concat(" "+b);
console.log(e);

let i=e.indexOf('a');
console.log("Index of a : "+i);

i=e.lastIndexOf('a');
console.log("Index of a : "+i);

c=a.charAt(1);
console.log("charAt : "+c);

c=a.charCodeAt(1);
console.log("charCodeAt : "+c);

c=a.substr(0,4);
console.log("Substr : "+c)

//sub string (start,end ) or (greater ,less ) and (only start)
let t="0123456789";
c=t.substring(0,3);
console.log("Substring : "+c);

c=t.substring(3,0);
console.log("Substring : "+c);

c=t.substring(3);
console.log("Substring : "+c);

//slice(0,n-1) or (greater ,less ) and (Minus indexing )
t="0123456789";
c=t.slice(1,3);
console.log("Slice : "+c);

c=t.slice(3,1);
console.log("Slice : "+c);

c=t.slice(-3);
console.log("Slice : "+c);

//split function
v='ajay is a very good boy ?';
c=v.split(" ");
console.log("Split : "+c);
console.table(c);

//Replace function 

b="iam from chennai";
console.log(b);
c=b.replace("chennai","Tada");
console.log("After Repalce : "+c);

//Includes
const g=['car','bike','bus','cycle'];
console.table(g.includes('bus'));
console.table(g.includes('car'));
console.table(g.includes('Aeroplane'));

//trim function 
a="  ajay is bad boy      ";
console.log("before trim : "+a);
console.log(a.length);
a=a.trim();
console.log("After trim : "+a);
console.log(a.length);

//padding (pad start((n-1),value num) ) or (paddend)
p='9';
p=p.padStart(5,1);
console.log("Padd starts : "+p);

p=p.padEnd(5,6);
console.log("Padd ends : "+p);

//String.fromCharCode()
console.log(String.fromCharCode(66,70,99,106));
*/

/*
foreach|Push|From|
map|pop|isArray|
slice|shift|Filter|
splice|unshift|flat|
concat|indexof|reduce|
sort|lastindexof|fill|
every|includes|some|
join|find|Reverse|
findindex|
*/

//foreach()
/*
//1. values,2.index,3.array
arr.forEach((val,ind)=>{
    console.log("Index "+ind+" "+"Value "+val);
})*/
/*
//map()
//1.value,2.index,3.array
let sqt=arr.map((val)=>{
    return Math.sqrt(val).toFixed(2);
})
console.log(sqt);

let eligible_status=users.map((user)=>({
    /*
        name:user.name,
        age:user.age,
        city:user.city
    */
/*   ...user,
   statu:user.age>=18?"eligible":"not eligible"
}))
*/

//slice()
/*
console.log("slice : "+arr.slice());
console.log("slice : "+arr.slice(2,5));
console.log("slice : "+arr.slice(5));
*/

//SPLICE()
//Splice is to remove elements in array 
//it will change the original array
//ex:- removed_elements=Splice(Start,lenght, new elements)
//splice(no of elements,no of elements to remove, insert element 1,insert element 2)
/*
const n1=[1,2,3,4,5,6,7,8,9];

console.log("Before Splice : "+n1);
let removed_element=n1.splice(2);
console.log("removed items : "+removed_element);
console.log("after Splice : "+n1);

const n2=[1,2,3,4,5,6,7,8,9];

console.log("Before Splice : "+n2);
let removed=n2.splice(2,2);
console.log("removed items : "+removed);
console.log("after Splice : "+n2);

const n3=[1,2,3,4,5,6,7,8,9];

console.log("Before Splice : "+n3);
let rm=n3.splice(2,2,3.5,4.5);
console.log("removed items : "+rm);
console.log("after Splice : "+n3)
*/

//sort() 
const arr=[10,20,87,96,36,78,30,60,70,80,656];
/*
console.log("previous array :"+arr)

arr.sort((a,b)=>{
    return a-b;
});
console.log("after array :"+arr)*/

//Fill index values in array

//arr.fill(20);
//arr.fill(value,start index,end index-1)

/*arr.fill(5,6,9)

console.log("Fill element : "+arr)

let product=["pen","pencil","scale","eraiser"]

let res=product.includes("scle")
console.log(res)*/

let product=["pen","pencil","scale","eraiser"]
/*
console.log(product);

console.log(product.join())//default (,) seperater
console.log(product.join('>'))*/

//Every and Some function
/*n=[1,2,3,4]
let result=n.every((value)=>{
    return value%2==0;
});
console.log(result);

result=n.some((value)=>{
    return value%2==0;
});
console.log(result);


const val=[
    {name:'ajay',age:21},
    {name:'pani',age:20},
    {name:'Sakthi',age:5},
    {name:'mina',age:2}
]

function isEligible(element){
    return element.age>=18;
}

result=val.every(isEligible);
console.log(result);

result=val.some(isEligible);
console.log(result);
*/

//object creation in javascript
//1. using object literals
/*const  person={
    name:"ajay",
    age:21,
    job:"developer"
}
console.log(person);*/

//2. using the objrect construtor
/*const person=new Object();
person.name="ajay";
person.age=21;
console.log(person);*/

//3. object.create
//object.create(prototype,properties);
/*const personProto={
    sayHello:function(){
        console.log('Hello my name is ${this.name}');
    }
}

const person=Object.create(personProto);
person.name='ajay';
person.age=21;
person.address="nellore";
console.table(person);
*/
//4.using class 
class person{
    constructor(name,age,city){
        this.name=name;
        this.age=age;
        this.city=city;
    }
}
const p=new person("Tiya",25,"Nellore");
console.log(p)