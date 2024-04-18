//JavaScript设计任务队列，控制请求最大并发数
//场景：前端页面中需要同时发送20个请求，但是服务端有限制，
// 需要前端控制并发数，保证最多只能同时发送10个请求
//要求
// 1•最多同时执行的任务数为10个
// 2．当前任务执行完成后，释放队列空间，自动执行下一个任务
// 3. 所有任务添加到任务队列后，自动开始执行任务


//创建任务
function createTask(i){
	return () =>{
		return new Promise((resolve, reject) =>{
			setTimeout(() =>{
				resolve(i)
			}, 2000)
		})
	}
}
// 任务队列
class TaskQuene {
	constructor(){
		// 队列
		this.taskList = []
		// 最大并发数
		this.max = 10
		//加一个定时器的目的是 等待添加任务的同步方法完毕
		setTimeout(() =>{
			this.run()
		})
	}
	addTask = (i) =>{
		this.taskList.push(i)
	}
	run = () =>{
		const length = this.taskList.length
		if(!length) return
		// 取 队列长度和最大并发数 的最小值， 保证不超过最大并发数
		const min = Math.min(length, this.max)
		for(let i = 0; i<min; i++){
			const task = this.taskList.shift()
			// 将任务取出，占用一个任务空间
			this.max--
			task().then((val) =>{
				console.log(val)
			}).catch(error =>{
				console.log(error)
			}).finally(() =>{
				// 释放一个任务空间
				this.max++
				this.run()
			})
		}
	}
}

const taskQuene = new TaskQuene()
for(let i = 0; i<20; i++){
	// 创建任务
	const task = createTask(i)
	// 将任务加入任务队列
	taskQuene.addTask(task)
}


