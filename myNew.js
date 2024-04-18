// new关键字的作用
//1.创建一个实例对象。实例对象可以访问构造函数的属性
//2.实例对象可以访问构造函数原型上的属性
//3.构造函数如果返回一个对象，实例化对象便是这个对象，如果没有返回值或者返回的值是原始值，会正常的实例化构造函数
function Animal(name){
	this.name = name
	// return {
	// 	name: "cat"
	// }
}
Animal.prototype.eat = function(){
	console.log("eat")
}
const dog = new Animal("dog")
console.log(dog)
console.log(dog.name)
// dog.eat()


function myNew(construtor, ...args){
	//创建一个以构造函数原型为原型的对象
	const obj = Object.create(construtor.prototype)
	// 用 apply方法将this 绑定在原型中 并接收返回值
	const res = construtor.apply(obj, args)
	//根据返回值的类型返回，是对象返回res否则返回obj,
	return (res && typeof res === "object") ? res : obj
}

const cat = myNew(Animal, "cat")
console.log(cat)
console.log(cat.name)