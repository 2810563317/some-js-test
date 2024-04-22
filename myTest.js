// var person = {
//   name: "Alice"
// };
// var proxy = new Proxy(person, {
//   set(target, propKey, value, receiver) {
//       console.log(`设置 ${target} 的${propKey} 属性，值为${value}`);
//       target[propKey] = value
//   },
//   deleteProperty: (target, prop) => {
//     console.log(`Poof! The ${prop} property was deleted`);
//     delete target[prop]
// },
// });
// proxy.name = 'Tom'
// proxy.age = 18
// delete proxy['age']
// console.log(1111, person)
// console.log(222, proxy)

// function cacheFun(fun){
//   const cache = new Map()
//   return function(...rest){
//     const key = JSON.stringify(rest)
//     if(cache.has(key)){
//       return cache.get(key)
//     }else {
//       const result = fun.apply(this, rest)
//       cache.set(key, result)
//       return result
//     }
//   }
// }

// function fb(n){
//   if(n<=1) return n
//   return fb(n-1) + fb(n-2)
// }

// const memoCall = cacheFun(fb)

// console.log(memoCall(10))
// console.log(memoCall(10))


const aa = [1,2,3,4,5]

aa.splice(0, 0, 'asd', 'aaaa')
console.log(aa)