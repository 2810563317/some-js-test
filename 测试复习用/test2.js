// function add(...args){
// 	return args.reduce((a, b) => a+b )
// }
// function curring(fn, ...args){
// 	return function(...rest){
// 		if(rest.length){
// 			return curring(fn, ...args, ...rest)
// 		}
// 		return fn.apply(this, args)
// 	}
// }

// const aa = curring(add)

// console.log(aa(1,2)(3)(4)())

const merge = function(nums1, m, nums2, n) {
	const aa =  nums1.slice(0, m)
	const bb = nums2.slice(0,n)
    return (aa.concat(bb)).sort()
};

const aa = merge([1,2,3,0,0,0], 3, [2,5,6], 3)
console.log(22, aa)