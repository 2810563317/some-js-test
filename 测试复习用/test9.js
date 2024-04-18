const url = "?name=tb&from=alibaba&job=frontend&extraInfo=%7B%22a%22%3A%22b%22%2C%22c%22%3A%22d%22%7D"

function getParams(url){
  const result = {}
  url.split("?")[1].split("&").forEach(v => {
    const [key, value] = v.split("=")
    try{
      result[key] = JSON.parse(decodeURIComponent(value))
    }catch(e){
      result[key] = decodeURIComponent(value)
    }
  });
  return result
}
console.log(getParams(url))


// 请实现 flatten() 函数，入参为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。

const testValue = {
  a: 1,
  b: [1, 2, { c: {d: true} }, [3], {e: [6, 7, 8]}],
  f: {g: 2, h: 3},
  i: null, 
}

function flatten(input, result = {}, preFix = ""){
  if(Array.isArray(input)){
    input.forEach((v, idx)=>{
      flatten(v, result, `${preFix}[${idx}]`)
    })
  }else if(typeof input === "object" && input !== null){
    for(let key in input){
      flatten(input[key], result, `${preFix}${preFix ? "." : ""}${key}`)
    }
  }else {
    result[preFix] = input
  }
  return result
}

console.log(JSON.stringify(flatten(testValue)))