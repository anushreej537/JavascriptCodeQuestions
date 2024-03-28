// var s=prompt('enter a num')
// if(s%2==0){
//     console.log(s,' is even')
// }
// else{
//     console.log(s,' is odd')
// }

// var n =prompt('enter a num');
// var f=1;
// for(var i=1;i<=n;i++)
// {
//     console.log(f=f*i)
// }

// var n='123'

// var r=n%10
// console.log(r)
// n=Math.floor(n/10)

// var r=n%10
// console.log(r)
// n=Math.floor(n/10)

// var r=n%10
// console.log(r)
// n=Math.floor(n/10)

// var n='153'
// var l=n.length;
// var n=parseInt(n);
// var a=0;
// var t=n
// while(n>0)
// {
//     var r=n%10;
//     a=a+r**l
//     n=Math.floor(n/10)
// }
// if(a==t)
// {
//     console.log('arm')
// }
// else{
//     console.log('not')
// }


// n=1213
// var a=0
// var t=n
// while(n>0)
// {
//     var r = n%10;
//     a=a*10+r
//     n=parseInt(n/10)
// }
// if(a==t)
// {
//     console.log(a,' pal')
// }
// else
// {
//     console.log(a,' not')
// }

// var s='hello'
// for(var i=0;i<s.length;i++)
// {
//     console.log(s[i])
// }

// var s='hello'
// console.log(s.slice(0,s.length-2))

// var s='hello'
// for(var i=s.length-1;i>=0;i--)
// {
//     console.log(s[i])
// }

// var s='hello'
// var backwardstr = s.split('').reverse().join('')
// console.log(backwardstr)

// var s='hello'
// var backwardstr = s.split('').reverse().join('')
// console.log(backwardstr)


// var s1='hello'
// var s2='hello'
// var s3='program'
// var s4=new String('hello')
// var s5=new String('hello')
// console.log('content wise checking ==operator')
// console.log(s1==s2) //t
// console.log(s1==s3) //f
// console.log(s1==s4) //t
// console.log(s4==s5) //f

// console.log('content and type checking ===operator')
// console.log(s1===s2) //t
// console.log(s1===s4) //f
// console.log(s4===s5) //f

// string method 
// s='hello'
// s=s.concat(' world')
// console.log(s)

// s='hello'
// var i=s==''
// console.log(i)

// var s='hello'
// var i=s==''
// console.log(i)

// var s='hello'
// s=s.toUpperCase()
// s=s.toLowerCase()
// s=s.trim()
// s=s.indexOf('e')
// s=s.lastIndexOf('o')
// s=s.replace('he','ye')
// s=s.substring(0,3)
// s=s.charAt(0)
// console.log(s)

// var s='hello'
// var r=''
// for(var i=s.length;i>=0;i--)
// {
//     r=r+s[i]
// }
// console.log(r)

// var s='hello my name is anu'
// s=s.split(' ')
// console.log(s)

// var s='hello this is my book'
// var rev = ''
// for(var i=s.length-1;i>=0;i--)
// {
//     rev+=s[i]
// }
// console.log(rev)


// find repeated element in string
// var s='heleelospp'
// var r=''
// for(var i=0;i<s.length;i++)
// {
//     c=0
//     for(var j=i;j<s.length;j++)
//     {
//         if(s[i]==s[j])
//         {
//             c+=1
//         }
//     }
//     if(c>1 && !r.includes(s[i]))
//     {
//         r=r+s[i]
//         console.log(s[i]+' rep '+c+' times')
//     }
// }

// class Demo
// {
//     a=10;
//     b=20;
// }
// var c=new Demo();
// console.log(c.a)
// console.log(c.b)

// class Demo{
//     constructor()
//     {
//         console.log('constructor is runn')
//     }
// }
// c=new Demo()

// class Demo{
//     constructor(n)
//     {
//         console.log(n**2)
//     }
// }
// var d=new Demo(10);

// this keyword

// class Emp{
//     constructor(eid,name)
//     {
//         this.eid = eid;
//         this.name = name;
//     }
// }
// var e=new Emp(101,'anu');
// console.log(e.eid);
// console.log(e.name);
// var e1=new Emp(102,'honey');
// console.log(e.eid);
// console.log(e.name);


// Rest parameter/constructor overloading/ compile time polymorphism
// class Emp
// {
//     constructor(...n)
//     {
//         console.log(n)
//     }
// }
// new Emp();
// new Emp(10,200);
// new Emp(110,'hello','lisiii')

// Member function
// class Emp{
//     show()
//     {
//         console.log('show is runn');
//     }
// }
// var n=new Emp
// n.show();
// n.show();
// n.show();

// class Emp{
//     show()
//     {
//         console.log('show is runn');
//     }
// }
// var e= new Emp();
// e.show()
// e.show()

// function show()
// {
//     console.log('show is runn');
//     function fun()
//     {
//         console.log('fun is run');
//     }
//     return fun
// }
// n=show()
// n()

// class Demo{
//     factorial(n)
//     {
//         var f=1;
//         for(var i=1;i<=n;i++)
//         {
//             f=f*i;
//         }
//         return f
//     }
// }
// var d=new Demo()
// console.log(d.factorial(5));

// class Demo{
//     constructor()
//     {
//         return 10;
//     }
// }
// var n =new Demo()
// console.log(n)

// class Demo{
//     constructor(a,b)
//     {
//         this.a=a;
//         this.b=b;
//     }
//     show()
//     {
//         console.log(this.a+' '+this.b);
//     }
// }
// var d=new Demo(10,20);
// d.show();

// single inheritance
// class Base
// {
//     show()
//     {
//         console.log('show is runn')
//     }
// }
// class dummy extends Base
// {
//     dis()
//     {
//         console.log('dis is runn')
//     }
// }
// var d= new dummy()
// d.dis();
// d.show();

// multilevel inheritance
// class demo
// {
//     show(){
//         console.log('show is runn')
//     }
// }
// class dummy extends demo
// {
//     dis(){
//         console.log('dis is runn')
//     }
// }
// class dummy1 extends  dummy
// {
//     dis1()
//     {
//         console.log('dis1 is runn')
//     }
// }
// var d = new dummy1();
// d.show()
// d.dis()
// d.dis1()

// hierarchical inheritance
// class demo{
//     show()
//     {
//         console.log('show is runn')
//     }
// }
// class dummy extends demo
// {
//     dis()
//     {
//         console.log('dis is runn')
//     }
// }
// class dummy1 extends demo
// {
//     dis1()
//     {
//         console.log('dis1 is runn')
//     }
// }
// var d=new dummy()
// d.show()
// d.dis()
// var f=new dummy1()
// f.show()
// f.dis1()

// multiple inheritance
// class demo
// {
//     show()
//     {
//         console.log('show is runn')
//     }
// }
// class dummy
// {
//     dis()
//     {
//         console.log('dis is runn')
//     }
// }
// class dummy1 extends demo,dummy
// {
//     dis1()
//     {
//         console.log('dis1 is runn')
//     }
// }
// var d=new dummy()
// d.show()
// d.dis()
// d.dis1()

// overriding
// class demo
// {
//     show()
//     {
//         console.log('show is runn')
//     }
// }
// class dummy extends demo 
// {
//     show()
//     {
//         console.log('showiii')
//     }
// }
// var d= new dummy()
// d.show()

// class demo
// {
//     constructor()
//     {
//         console.log('demoooo')
//     }
// }
// class dummy extends demo
// {
//     constructor()
//     {
//         super();
//         console.log('dummyyy')
//     }
// }
// var d=new dummy();

// class demo
// {
//     constructor()
//     {
//         console.log('demooo')
//     }
// }
// class dummy extends demo
// {
//     constructor()
//     {
//         super();
//         console.log('dummyy')
//     }
// }
// var d=new dummy()


// super keyword
// class demo
// {
//     show()
//     {
//         console.log('show is runn')
//     }
// }
// class dummy extends demo
// {
//     show()
//     {
//         super.show()
//         console.log('dis is runn')
//     }
// }
// var d= new dummy()
// d.show()

// class demo
// {
//     show()
//     {
//         console.log('show is runn')
//     }
// }
// class dummy extends demo
// {
//     show()
//     {
//         super.show()
//         console.log('show1 is runn')
//     }
// }
// var d= new dummy()
// d.show()

// IIFE [immediate invoke function execution]
// (function(){console.log('show is runn')})();

// (function(n){console.log('cube is :'+n**3)})(2);


// js closure
// function show()
// {
//     var a=10;
//     function display()
//     {
//         return a;
//     }
//     return display;
// }
// var fun=show()
// console.log(fun())

// js function as class
// function show()
// {
//     console.log('show is runn')
// }
// var d=new show()

// function show()
// {
//     console.log('show is runnn')
// }
// var d=new show()


//Prototype
// class Demo
// {
//     constructor()
//     {
//         console.log('constructor is runnn')
//     }
// }
// Demo.prototype.show=function()
// {
//     console.log('show is runn')
// }
// var d=new Demo()
// d.show()


// EcmaScript6 
// var,let,const
// function show()
// {
//     if(true)
//     {
//         let a=10
//         console.log(a)
//     }
//     // console.log(a)
// }
// show()

// function show()
// {
//     var a=10;
//     if(true)
//     {
//         var a=20;
//         console.log(a)
//     }
//     console.log(a)
// }
// show()

// function show()
// {
//     let a=20;
//     if(true)
//     {
//         let a=10;
//         console.log(a)
//     }
//     console.log(a);
// }
// show()

// function show()
// {
//     const a=10;
//     if(true)
//     {
//         let a=20;
//         console.log(a)
//     }
//     console.log(a);
// }
// show()

// Arrow function / fat arrow function
// create pure js function
// function show(a,b)
// {
//     return a+b;
// }
// console.log(show(10,20))

// const fun=(a,b)=>{
//     return a+b
// }
// console.log(fun(10,20))

// let fun=()=>{console.log('show is runn')}
// var d=new fun()


// function show()
// {
//     this.a=10;
//     console.log(this.a);
// }
// var d=new show()

// const fun=()=>{
//     this.a=10
//     console.log(this.a)
// }
// var d=new fun()

// class Demo
// {
//     show()
//     {
//         console.log('show is runn')
//     }
//     dis=()=>{
//         console.log('dis is runn')
//     }
// }
// var d=new Demo()
// d.show()
// d.dis()

// let dis=()=>{
//     console.log('dis is runn')
// }
// dis.prototype.show=function()
// {
//     console.log('show is runn')
// }
// dis()
// show()

// normal function-----fat arrow function

// Distructuring---> distructuring is a process through which we will store all elements of array and objects in variable.ES6 introduce two types of distructuring
// array without distructuring
// var a=[10,20,30,40,50]
// let a1=a[0]
// let a2=a[1]
// let a3=a[2]
// let a4=a[3]
// let a5=a[4]
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)

// array with distructuring
// var a=[10,20,30,40,50]
// let [a1,a2,a3,a4,a5]=a;
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)

// array distructuring
// var a=[10,20,30,40]
// let [a1,a2,a3,a4]=a;
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)

// var a=[10,20,30,40,50]
// let [a1,,a3,,a5]=a;
// console.log(a1)
// console.log(a3)
// console.log(a5)

// distructuring of object[we can fecth value acc to key and store in seprate variable]
// var obj={
//     roll:101,
//     name:'ajay',
//     address:'ujjain'
// }
// let {roll,name,address}=obj;
// console.log(roll)
// console.log(name)
// console.log(address)

// var obj={
//     roll:101,
//     name:'ajay',
//     address:'ujn'
// }
// var {roll,name,address}=obj;
// console.log(roll)
// console.log(name)
// console.log(address)

// Spread operator
// var a=[10,20,30]
// var b=[...a,40,50]
// console.log(b)

// spread operator with object
// var p={
//     name:'milan',
//     address:'ujjain'
// }
// var s={
//     roll:101,
//     name:'anu',
//     ...p
// }
// var f={
//     roll:102,
//     name:'honii',
//     ...p
// }
// console.log(s)
// console.log(f)

// Asyncronous VS syncronous
// var a=10
// console.log(a)
// a=20;
// console.log(a)
// setTimeout(function(){
//     a=30;
// },3000)
// console.log(a)

// Promises in js
// var a=10;
// console.log(a)
// a=20;
// console.log(a)
// var p=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(i=30)
//     },3000)
// })
// p.then(function(v){
//     console.log(v)
// }).catch(function(e){
//     console.log(e)
// })

// var i=10;
// console.log(i)
// i=20;
// console.log(i)
// var p=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(i=30)
//     },3000) 
// })
// p.then(function(v){
//     console.log(v)
// }).catch(function(e){
//     console.log(e)
// })


// Async Await
// function show(n)
// {
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(n**2)
//         },5000,n)
//     })
// }
// var i=10;
// console.log(i)
// i=20;
// console.log(i)
// var p=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(i=30)
//     },3000)
// })
// p.then(function(v){
//     console.log(v)
//     return show(v)
// }).then(function(t){
//     console.log(t)
// }).catch(function(e){
//     console.log(e)
// })

// Async await
// function show(n){
//     return new Promise(function(resolve,reject){
//          setTimeout(function(){
//         resolve(n**3)
//     },3000)
//     })
// }
// var i=10;
// console.log(i)
// i=20;
// console.log(i)
// var p=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve(i=30)
//     },3000)
// })
// p.then(function(v){
//     console.log(v)
//     return show(v)
// }).then(function(t){
//     console.log(t)
// }).catch(function(e){
//     console.log(e)
// })

// function show(n)
// {
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(n**3)
//         },3000,n)
//     })
// }
// var i=10;
// console.log(i);
// i=20;
// console.log(i)
// var p=new Promise(function(resolve,reject){
//     setTimeout(function()
//     {
//         resolve(i=30);
//     },2000)
// })
// async function display()
// {
//     var v=await p;
//     console.log(v)
//     var t=await show(v)
//     console.log(t);
// }

// var a=[[1,2,3],[4,5,6],[7,8,9]]
// c=[]
// for(var i=0;i<a.length;i++)
// {
//     c=c.concat(a[i])
// }
// console.log(c)


// find smallest
// var a=[7,9,8,3,4,5]
// var s=a[0]
// var ss=a[0]
// for(var i of a)
// {
//     if(i<s)
//     {
//         s=i
//     }
// }
// for(var i of a)
// {
//     if(i<ss && i!=s)
//     {
//         ss=i
//     }
// }
// console.log('first smallest '+s)
// console.log('second smallest '+ss)


// first and second biggest
// var a=[4,3,7,9,10,1]
// var b=a[0]
// var sb=a[0]
// for(var i of a)
// {
//     if(i>b)
//     {
//         b=i
//     }
// }
// for(var i of a)
// {
//     if(i>sb && i!=b)
//     {
//         sb=i
//     }
// }
// console.log('first biggest '+b)
// console.log('second biggest '+sb)

// descending order
// var a=[]
// var s=parseInt(prompt('enter size of ary'))
// for(var i=0;i<s;i++)
// {
//     a.push(parseInt(prompt('enter val')))
// }
// for(var i=0;i<a.length;i++)
// {
//     for(var j=i;j<a.length;j++)
//     {
//         if(a[j]>a[i])
//         {
//             var t=a[i]
//             a[i]=a[j]
//             a[j]=t

//         }
//     }
// }
// console.log(a)

// ascending order
// var a=[]
// var s=parseInt(prompt('enter size of ary'))
// for(var i=0;i<s;i++)
// {
//     a.push(parseInt(prompt('enter val')))
// }
// for(var i=0;i<a.length;i++)
// {
//     for(var j=i;j<a.length;j++)
//     {
//         if(a[j]<a[i])
//         {
//             var t=a[i]
//             a[i]=a[j]
//             a[j]=t;
//         }
//     }
// }
// console.log(a)

