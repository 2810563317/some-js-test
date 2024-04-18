//原型链继承
// function Parent(name){
// 	this.name = name
// }
// Parent.prototype.sayHello = function(){
// 	console.log("hello " + this.name)
// }
// function Child(name, age){
// 	Parent.call(this, name)
// 	this.age = age
// }
// Child.prototype = Object.create(Parent.prototype)
// Child.prototype.constructor = Child

//es6继承
// class Parent{
// 	constructor(name){
// 		this.name = name
// 	}
// 	sayHello(){
// 		console.log("hello " + this.name)
// 	}
// }

// class Child extends Parent{
// 	constructor(name, age){
// 		super(name)
// 		this.age = age
// 	}
// }

// const child = new Child("tom", 16)
// console.log(child.age)
// child.sayHello()

// function* gen(){
// 	yield 1
// 	yield 2
// 	yield 3
// }
// const g = gen()
// console.log(g.next())
// console.log(g.next())


function createTask(i){
	return () =>{
		return i
	}
}
const bb = createTask(1)
console.log(bb())
