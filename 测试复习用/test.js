// 发布订阅

class PunSub{
	constructor(){
		this.bank = new Map()
	}
	on = (name, fn) =>{
		if(!this.bank.has(name)){
			this.bank.set(name, fn)
		}
	}
	emit =(name, ...args) =>{
		if(this.bank.has(name)){
			const fn = this.bank.get(name)
			fn && fn(...args)
		}
	}
}

//节流 闭包一个开关 一段时间内只执行一次函数
function jieliu(fn, time){
	let flag = false
	return function(...rest){
		if(falg) return
		setTimeout(() =>{
			fn.apply(this, rest)
			flag = false
		}, time)
		flag = true
	}
}

// 防抖 闭包一个定时器 多次调用只执行最后一次
function fd(fn, time){
	let timer = null
	return function(...rest){
		clearTimeout(timer)
		timer = setTimeout(() =>{
			fn.apply(this, rest)
		}, time)
	}
}

// 数组扁平化
const arr= [1,2,[3,4,[5,6]]]
console.log(arr.flat(Infinity))
const fun1 = (arr) =>{
	return arr.reduce((prev, cur) => {
		if(Array.isArray(cur)){
			return prev.concat(fun1(cur))
		}else {
			prev.push(cur)
			return prev
		}
	}, [])
}
const result = []
const func2 = (arr)=>{
	for(let i=0; i<arr.length;i++){
		const cur = arr[i]
		if(Array.isArray(cur)){
			func2(cur)
		}else {
			result.push(cur)
		}
	}
}

// call
Function.prototype.myCall = function(context, ...args){
	const _context = context || window
	_context['fn'] = this
	const res =_context['fn'](...args)
	delete _context['fn']
	return res
}
// apply
Function.prototype.myApply = function(context, ...args){
	const _context = context || window
	_context['fn'] = this
	const res =_context['fn'](args)
	delete _context['fn']
	return res
}
//bind
Function.prototype.myBind = function(context){
	const _context = context || window
	_context['fn'] = this
	return function(...args){
		const res =_context['fn'](...args)
		delete _context['fn']
		return res
	}
	
}

// instanceof
//检测构造函数的prototype属性是否出现在实例对象的原型链上
function myInstanceof(obj, constructor){
	let _p = obj.__proto__;
	while(_p !== null){
		if(_p == constructor.prototype) return true
		_p=_p.__proto__
	}
	return false
}

// new关键字
function myNew(constructor, ...args){
	const obj = Object.create(constructor.prototype)
	const res = constructor.apply(obj, args)
	return (res && typeof res === "object") ? res : obj
}

// url取参
const url = "https://afasfd.com?aa=1&bb=2&aa=3"
console.log(666, Object.fromEntries(new URL(url).searchParams.entries()))
const obj = {}
url.split("?")[1].split("&").forEach(v => {
	const curr = v.split('=')
	obj[curr[0]] = obj[curr[1]]
})

// 浏览器输入URL会发生什么
/**
 * 判断URL的格式正确后，DNS会先从缓存中查找当前域名的ip地址，没有找到的话，浏览器会去服务器中查找，有了ip地址之后，浏览器和服务器建立连接，建立连接后向服务器发送请求，服务器响应请求并返回数据，
 * 浏览器拿到数据后，开始解析HTML,首先构建DOM树，解析过程中会下载相应的css文件和 JavaScript代码, 下载完css文件就会对其进行解析生成相应的规则树（CSSOM），DOM树和CSSOM树结合生成 Render树 ，进行布局和绘制并在屏幕上显示其内容
 * 
*/


// useEffect
/***
 * 省略依赖数组：每次渲染都执行
 * 依赖数组为空：首次渲染执行
 * 依赖数组不为空： 依赖数据改变时执行
 * 
 */
/**
 * useEffect的注意事项
 * 1.不要在useEffect中改变依赖项的值，会造成死循环
 * 2.多个不同功能的副作用尽量分开声明，不要写到一个useEffect中
 * 
 */

// 乞丐版promise
class myPromise{
	constructor(cb){
		this.status = "pending"
		this.value = ''
		this.reason = ''
		const resolve = (val) =>{
			this.status = "fulfilled"
			this.value = val
		}
		const reject = (val) =>{
			this.status = "rejected"
			this.reason = val
		}
		cb(resolve, reject)
	}
}

Promise.myAll = function(arr){
	const returnList = []
	let count = 0
	return new Promise((resolve, reject) =>{
		arr.forEach((item, index) => {
			return Promise.resolve(item).then(val =>{
				returnList[index] = val
				count+=1
				if(count == arr.length) return resolve(returnList)
			}).catch(e =>{
				reject(e)
			})
			
		})
	})
}

