// 数组转tree
const flatArr = [
	{ id: '01', parentId: 0, name: '节点1' },
	{ id: '011', parentId: '01', name: '节点1-1' },
	{ id: '0111', parentId: '011', name: '节点1-1-1' },
	{ id: '02', parentId: 0, name: '节点2' },
	{ id: '022', parentId: '02', name: '节点2-2' },
	{ id: '023', parentId: '02', name: '节点2-3' },
	{ id: '0222', parentId: '022', name: '节点2-2-2' },
	{ id: '03', parentId: 0, name: '节点3' },
  ]
function getTreeData(arr, pId){
	function loop(parentId){
		return arr.reduce((pre, cur) =>{
			if(cur.parentId === parentId){
				cur.children = loop(cur.id)
				pre.push(cur)
			}
			return pre
		}, [])

	}
	return loop(pId)
}
const result = getTreeData(flatArr, 0)
console.log('result', JSON.stringify(result))