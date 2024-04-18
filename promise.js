// class myPromise {
// 	constructor(cb){
// 		this.status = "pending"
// 		// 成功的值
// 		this.value = ''
// 		// 失败的值
// 		this.result = ''
// 		const resolve = (val) =>{
// 			this.status = "fulfilled"
// 			this.value = val
// 		}
// 		const reject = (val) =>{
// 			this.status = "rejected"
// 			this.result = val	
// 		}
// 		cb(resolve, reject)
// 	}
// 	then(fulfilledCb, rejectedCb){
// 		return new myPromise((resolve, reject) =>{
// 			if(this.status === "fulfilled"){
// 				const res = fulfilledCb()
// 				return res instanceof myPromise ? res.then(resolve, reject): res
// 			}
// 			if(this.status === "rejected"){
// 				const res = rejectedCb()
// 				return res instanceof myPromise ? res.then(resolve, reject): res
// 			}
// 		})
// 	}
// }


class MyPromise {
  constructor(cb){
    this.state = "pending"
    this.value = ''
    this.reason = ''
    this.onResolveCallBacks = []
    this.onRejectCallBacks = []
    try{
      cb(this.resolve, this.reject)
    }catch(err){
      reject(err)
    }
  }
	resolve = (val) => {
    this.state = "fulfilled"
    this.value = val
    this.onResolveCallBacks.forEach(fn => fn())
  }
  reject = (val) => {
    this.state = "rejected"
    this.reason = val
    this.onRejectCallBacks.forEach(fn => fn())
  }

  then(fulfilledCb, rejectedCb){
      if(this.state === "fulfilled"){
        return new MyPromise((resolve, reject) =>{
          try{
            const res = fulfilledCb(this.value)
            return res instanceof MyPromise ? res.then(resolve, reject): res

          }catch(err){
            reject(err)
          }
        })
      }
      if(this.state === "rejected"){
        return new MyPromise((resolve, reject) =>{
          try{
            const res = rejectedCb(this.reason)
				    return res instanceof myPromise ? res.then(resolve, reject): res
          }catch(err){
            reject(err)
          }
        })
      }
      // 此时的state还是pending，需要将成功和失败的回调存起来
      // 异步执行的关键
      if(this.state === "pending"){
        this.onResolveCallBacks.push(() =>{
          fulfilledCb(this.value)
        })
        this.onRejectCallBacks.push(() =>{
          rejectedCb(this.reason)
        })
      }
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
  },1000);
}).then(
  (data) => {
    console.log('success', data)
  },
  (err) => {
    console.log('faild', err)
  }
)
