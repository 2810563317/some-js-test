const arr = [1,2,[3,4,[5,6]]]
const ans = []

function fn(arr){
	for(let i = 0; i<arr.length; i++){
		const cur = arr[i]
		if(Array.isArray(cur)){
			fn(cur)
		}else {
			ans.push(cur)
		}
	}
}
fn(arr)
console.log(ans)

console.log('flat', arr.flat(Infinity))

const dfs = (arr)=>{
	return arr.reduce((pre, cur) =>{
		console.log(111, pre,cur)
		if(Array.isArray(cur)){
			return pre.concat(dfs(cur))
		}else {
			pre.push(cur)
			return pre
		}
	}, [])
}

console.log('dfs', dfs(arr))