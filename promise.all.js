Promise.myAll = (arr) =>{
	const resultArr = []
	const count = 0
	return new Promise((resolve, reject) =>{
		arr.forEach((v, idx )=> {
			Promise.resolve(v).then(val =>{
				resultArr[idx] = val
				count+=1
				if(count ===arr.length) resolve(resultArr)
			}).catch((reason) =>{
				reject(reason)
			})
		});
		
	})
}