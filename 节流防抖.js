// 防抖 多次触发同一个事件，只执行最后一次
// 节流 一段时间内一个事件只触发一次

// 防抖
function debounce(fn, time){
	// 闭包一个定时器
	let timer = null
	return function(...rest){
		clearTimeout(timer)
		timer = setTimeout(() =>{
			fn.apply(this, rest)
		}, time)
	}
	
}
// 节流
function thrrot(fn, time){
	//闭包一个开关：标识事件是否执行过函数
	let flag = false
	return function(...rest){
		if(flag) return
		setTimeout(() =>{
			fn.apply(this, rest)
			flag = false
		}, time)
		flag = true
	}
}