//原型链继承
// function Parent(name) {
//   this.name = name
//   this.arr = []
// }
// Parent.prototype.sayName = function() {
//   console.log(this.name)
// }
// function Child(like){
//   this.like = like
// }
// Child.prototype = new Parent()
// Child.prototype.constructor = Child

// const child1 = new Child('child1')

//构造函数继承

// function Parent(name) {
//   this.name = name
//   this.arr = []
//   this.sayName = function() {
//     console.log(this.name)
//   }
// }
// function Child(name, like) {
//   Parent.call(this, name)
//   this.like = like
// }
// const boy1 = new Child('boy1', 'like1')

//组合继承

function Parent(name) {
  this.name = name
  this.arr = []
}
Parent.prototype.sayName = function() {
  console.log(this.name)
}
function Child(name, like) {
  Parent.call(this, name)
  this.like = like
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

const boy1 = new Child('boy1', 'like1')