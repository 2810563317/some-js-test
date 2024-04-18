//字符串最后一个单词的长度
const str = "asdfa asd asf asdfasdf"
const lastIndex = str.lastIndexOf(" ")
console.log(11, str.length - lastIndex -1)

//计算某个字符出现的 次数

function count(str, current){
	return str.toUpperCase().split(current.toUpperCase()).length -1
}
console.log(22, count('asdAsdfsf', 'a'))

//按长度8拆分字符串，不到8位的补0

const str2 = "asdfajsnfkanskdf";
function chaiStr(str){
	const newStr = str + "00000000"
	for(let i = 8; i<newStr.length; i+=8){
		console.log(33, newStr.substring(i-8, i))
	}
}
chaiStr(str2)

//取近似值
function getValue(num){
	const ceilNum = Math.ceil(num)
    return ceilNum-0.5 >num ? ceilNum-1 : ceilNum
}
console.log(44, getValue(3.6))
console.log(55, Math.round(3.54))


//
const num = 9876673
const newValue = Number(Array.from(new Set(String(num).split("").reverse())).join(""))
console.log(66, newValue)

//字符个数统计
function charSum(str){
	// const mapChar = new Map()
	// str.split("").forEach(char => {
	// 	if(!mapChar.has(char)){
	// 		mapChar.set(car)
	// 	}
	// });
	return new Set(str.split("")).length
}

// 数字十进制转二进制后 1的个数
console.log(777, parseInt(5).toString(2).split("").filter(v => v == 1).length)

//

// const small = Array(26).fill("a").map((x,i)=>String.fromCharCode("a".charCodeAt(0)+i));
// const big = Array(26).fill("A").map((x,i)=>String.fromCharCode("A".charCodeAt(0)+i));
// big.unshift(big.pop());
// const keys = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv","wxyz"];
// const nums = small.map(x => keys.findIndex(k => k.includes(x)) + 2);
// const zip = (...arr) => arr.sort((a,b)=>b.length-a.length)[0].map((x,i)=>arr.map(a=>a[i]));
// const map = new Map([...zip(small, nums),...zip(big, small)]);

// rl.on('line', function(line){
//     console.log(line.slice(0, 100).split("").map(x => map.get(x) ?? x).join(""))
// });

// console.log(88, small, big, keys, nums, map)


const smallCharList = Array(26).fill("a").map((x, i) => String.fromCharCode("a".charCodeAt(0)+i))
const bigCharList = Array(26).fill("A").map((x, i) => String.fromCharCode("A".charCodeAt(0)+i))
bigCharList.unshift(bigCharList.pop())

const keys = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv","wxyz"];

const nums3 = smallCharList.map((x, idx) =>{
	return keys.findIndex((v, i)=> v.includes(x)) + 2
})

const zip = (...arr) =>{
	const arrList = arr.sort((a,b)=>b.length-a.length)
	const result = new Map()
	arrList[0].forEach((x, i) =>{
		result.set(x, arrList[1][i])
	})
	return result
};

// const mapData = new Map([...zip(smallCharList, nums3), ...zip(bigCharList, smallCharList)])
const line = "asdaHKJHKH23"
// console.log(88, ...zip(smallCharList, nums3))
// console.log(line.slice(0,100).split("").map(i => mapData.get(i) ? mapData.get(i): i).join(""))
const map1 = new Map([smallCharList])
const map2 = new Map([nums3])
console.log(99, new Map([...map1, ...map2]))


