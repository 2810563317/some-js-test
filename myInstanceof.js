// instanceof 用于判断引用数据类型
// typeof 只能判断基础数据类型，引用数据类型全部为 object

//instanceof 原理：检测构造函数的prototype属性是否出现在某个实例对象的原型链上
//简单来说就是检测某个对象是不是另一个对象的实例

function myInstance(obj, construtor){
	let _p = obj.__proto__

	while(_p !== null){
		if(_p === construtor.prototype) return true
		_p = _p.__proto__
	}
	return false
}

console.log(myInstance([1,2], Function))