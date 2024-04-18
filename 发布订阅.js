class PubSub{
	constructor(){
		this.bank = new Map()
	}
	on(name, cb){
		if(!this.bank.has(name)){
			this.bank.set(name, cb)
		}
	}
	emit(name, ...rest){
		if(this.bank.has(name)){
			const cb = this.bank.get(name)
			cb && cb(...rest)
		}
	}
}