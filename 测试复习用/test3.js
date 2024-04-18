//邮箱正则
// 字母、数字、@、-、_、.

// /^[a-zA-Z0-9_-]@[a-zA-z0-9]+(\.[a-zA-Z0-9-_]+)+$/

//数字添加千位逗号
const num = 1000303032034;
const num1 = num.toLocaleString(num)
console.log(333, num1)
const num2 = new Intl.NumberFormat("ja-JP").format(num)
console.log(444, num2)

const addCommas = (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
console.log(555, addCommas(num))