var fs = require('fs');
let data = fs.readFileSync('day3info.txt').toString().split("\n");

function myFunction(data, rightCount, downCount) {
  let count = rightCount
  let res = 0
  for (let i = downCount ; i < data.length; i+=downCount) {
    const item = data[i]
    const rowLength = data[i].length
    let targetNum = count % rowLength
    const targetLocation = item[targetNum]        
    if (targetLocation == "#") {
      res += 1
    }
    count += rightCount
  }
  return res
}

// console.log(myFunction(data, 1, 2))

function myFunction2(data) {
  const slopes = [{1:1},{3:1}, {5:1}, {7:1}, {1:2}]
  let res = 1
  for(let i = 0; i < slopes.length; i++) {
    const key = slopes[i]
    Object.keys(key).forEach(element => {
      const rightCount = parseInt(element)
      const downCount = parseInt(key[element])
      const eachSlopeTrees = myFunction(data, rightCount, downCount)
      res *= eachSlopeTrees
    }); 
  }
  return res
}

console.log(myFunction2(data))
