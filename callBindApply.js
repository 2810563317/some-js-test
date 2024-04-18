// 修改this 的三个方法 call、bind、apply

//     			传入参数     	执行时机
// bind			非数组			返回一个函数（不会立即执行）
// call			非数组			立即执行
// apply		数组			立即执行


const object = {
	a:"我是a",
	b: function (){
		console.log(this)
	}
}
//谁调用函数，函数this就指向谁
// object.b()

//call
Function.prototype.mycall = function(context, ...rest){
	const _context_ = context || window
	_context_['fn'] = this
	const res = _context_['fn'](...rest)
	delete _context_['fn']
	return res

	// const _context_ = context || window
	// _context_.fn = this
	// const res = _context_.fn(...rest)
	// delete _context_.fn
	// return res
}

const object1 = {
	value: "object1"
}
function f1(value){
	console.log(value)
	console.log(this)
}
f1.mycall(object1, 'call')


//apply

Function.prototype.myApply = function(context, ...rest){
	const _context_ = context || window
	_context_['fn'] = this
	const res = _context_['fn'](rest)
	delete _context_['fn']
	return res
}

const object2 = {
	value: "object2"
}
function f2(value){
	console.log(value)
	console.log(this)
}
f2.myApply(object2, 'apply')

// bind

Function.prototype.myBind = function(context){
	const _context_ = context || window
	_context_['fn'] = this
	return function(...rest){
		const res = _context_['fn'](...rest)
		delete _context_['fn']
		return res
	}
	
}

const object3 = {
	value: "object3"
}
function f3(value){
	console.log(value)
	console.log(this)
}
f3.myBind(object3)('bind')