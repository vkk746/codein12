//my name vikramdd
//let mybioData=['vinod',26,'thapa'];
let myName=mybioData[0];
let myAge=mybioData[1];
let myLastName=mybioData[2]
//ese ham array k dwara data ko excess karte the 
// now ab Array ko Destructuring kark likhenge excess karne ko thoda easy banayenge
//let[myName,myAge,myLastName]=mybioData;//yh array Destructuring hai yha myName ka data 0 index bale ko
//represent ker rha hai
//myAge 1 index ko represent kar rha hai
console.log(myName);//iss prakar excess kar sakte destructuring se
console.log(myAge);

// isme ham add bhi kar sakte hai
let[myName,myAge,myLastName,myDegree="MCS"]=mybioData;
console.log(myDegree);//o/p->MCS

const mybioData={
    myName:"rahul",
    myAge:26,
    getData:function(){
        console.log(`my name is ${mybioData.myName} and myage is ${mybioData.myAge}`);
    }
}
let age=mybioData.myAge;
let name=mybioData.myName;
console.log(age);
console.log(myName);
//iss prakar normal object ko acess karte hai

//ObjectDestructuring
// similarly array destructuring ki tarah only one change squre breaket ki jagah curli breaket use honge
//let{myName,myAge,getData}=mybioData;
//console.log(myName);//o/p->rahul


//object property
//we can use dynamic properties
let myName="Vinod";
const mybioData={
    [myName]:"rahul",//[] use kiya yh daynmic property hai
    myAge:26,
    getData:function(){
        console.log(`my name is ${mybioData.myName} and myage is ${mybioData.myAge}`);
    }
}
console.log(mybioData);//o/p->{ Vinod: 'rahul', myAge: 26, getData: [Function: getData] }
//dew to dynmic property yha name likh ker aa gya

// no need to write key and value if both name have same
let myFname="Vikram Singh";
let age=26;
const mybio={
    myFname,//yha key and value both k name same hai to yha simly is tarh likh sakte hai
    age
}
console.log(age);//o/p->26

//spread operator
let mycolor=['red','green','yellow','brown'];
//now ab add aur karna chate
//let mycolors=['red','green','yellow','brown','pink'];
//but agar ham spread operator ka use kare to mycolor k sare nhi likhne padenge
let myfavcolors=[...mycolor,'baigni','black'];//isse mycolor k all color aa gye and mycolours me two
//color add bhi kar diye
//... yh spread operator hai agar ham mycolor me change karte hai to bo change spread operator
//bale array me bhi milega
//is operator ka use karne se repetation nhi hui
console.log(myfavcolors);

//ES8 features
//string padding
//Object.values()
//Object.entries()
// string padding string me space dene k liye use hota hai

let myName="Vikram";
console.log(myName.padStart(10));//10 space aa jayenge starting se
console.log(myName.padEnd(10));//end se 10 space aa 


//Object.values() isse bo only value ko print karayega key ko nhi
const mybioData={
    myName:"rahul",
    myAge:26,
    getData:function(){
        console.log(`my name is ${mybioData.myName} and myage is ${mybioData.myAge}`);
    }
}
console.log(Object.values(mybioData));// o/p-> [ 'rahul', 26, [Function: getData] ] only value print karayi hai

//Object.entries() //yh object ko array me convert kar deta hai
console.log(Object.entries(mybioData));
/* o/p->[ 'myName', 'rahul' ],
  [ 'myAge', 26 ],
  [ 'getData', [Function: getData] ]
]*/


//rest property it is similar to the spread operator
//rest oprerator work karta on Object while spread operator work karta on array

const mybioData={
    myName:"rahul",
    myAge:26,
    getData:function(){
        console.log(`my name is ${mybioData.myName} and myage is ${mybioData.myAge}`);
    }
}

//use rest opreater
const biodata={...mybioData};//yha mybiodata ka whole object rakh diya hai in biodata object me
console.log(mybioData);//o/p->{ myName: 'rahul', myAge: 26, getData: [Function: getData] }
console.log(biodata);//o/p-> { myName: 'rahul', myAge: 26, getData: [Function: getData] }
//both have same o/p

//array.flat(infinity) is mathod se ham 2D array ko one 1D array me convert kar denge
//infinity likhne se har ek dimension 1D array me convert ho jayegi


//ES2020
//BigInt data type introduce karaya gya tha
//"use strict" //jab apko koi let ya other things likhna bhool gye to yh error de dega
"use strict";
x=3.14
console.log(x);







