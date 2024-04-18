const url = "https://bizworks-qa.aliyun-inc.com/ui/creatorWorkbench/appDev/codescanList?bwfProjectCode=at-testprojectcode3592&bwfApplicationCode=app-pbc-ddd-01&bwfApplicationVersion=v3.0.0"

function getParam(url){
	let obj = {}
	url.split("?")[1].split("&").forEach(v =>{
		const cur = v.split('=')
		obj[cur[0]] = cur[1]
	})
	return obj
}

// map 转 obj
// const newUrl = new URL(url).searchParams
// console.log(Object.fromEntries(newUrl.entries()))
const params = new URLSearchParams(url)
console.log(33, params)