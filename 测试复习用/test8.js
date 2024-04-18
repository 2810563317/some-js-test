// const treeData = [
// 	{id: 1, parentId:0, name:"aa", children: [
// 		{id: "1-1", parentId:1, name:"aa1", children: [
// 			{id: "1-1-1", parentId:"1-1", name:"aa1-1"}
// 		]},
// 		{id: "1-2", parentId:1, name:"aa2"}
// 	]},
// 	{id: 2, parentId:0, name:"bb"}
// ]

// function translateArray(arr){
// 	return arr.reduce((prev, cur) =>{
// 		const {children, ...rest} = cur
// 		if(children?.length){
// 			prev = prev.concat(translateArray(children))
// 		}
// 		prev.push(rest)
// 		return prev
// 	}, [])
// }

// const list = translateArray(treeData)
// console.log(222, list)

// const aa = {name: "san", parent:{father: "liu"}}
// const bb = {age: 17}
// // const cc = Object.assign({}, aa)
// const cc = {...aa}
// cc.parent.father= "ss"
// console.log(aa,bb,cc)

// const aa = [{name: "san", id: 1}, {name: "si", id: 2}]
// aa.forEach((item) =>{
// 	if(item.id === 1){
// 		item.name = "yi"
// 	}
// })
// console.log(aa)

const aa = new Promise((reslove, reject) =>{
	reject("ss")
})
// aa.catch(v =>{
// 	return Promise.resolve("cc")
// }).then(val =>{
// 	console.log(77, val)
// })

// let promise = aa();

aa.then(result => {
    // ...
  })
  .catch(error => {
    console.error("Caught an error:", error);

    // 在这里抛出新的错误
    throw new Error("Recovered from the original error, but now there's another issue.");
  })
  .then(successResult => {
    // 如果前面的catch中抛出了新的异常，这里的then不会执行
  })
  .catch(newError => {
    // 这里的catch会捕获到上一个catch中抛出的新错误
    // console.log("Caught the new error thrown in the previous catch block:", newError);
  });

// 如果没有后续的catch块来捕获新抛出的异常，这个异常将在全局范围内变为未处理的Promise拒绝