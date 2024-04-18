versionList = ["1.2","1.4","1.32", "1.2.4"]

versionList.sort((a, b) =>{
	const numA = a.split(".").map(v => {
		return v.split("")
	}).flat(Infinity).map(v => Number(v))
	const numB = b.split(".").map(v => {
		return v.split("")
	}).flat(Infinity).map(v => Number(v))
	console.log(numA, numB)
	for(let i = 0; i< Math.max(numA.length, numB.length); i++){
		if(numA[i] === undefined) return -1
		if(numB[i] === undefined) return 1
		if(numA[i] !== numB[i]){
			return numA[i] -numB[i]
		}
	}
	return 0
})
console.log(111, versionList)
// console.log("1.2.3".split(".").map(Number))