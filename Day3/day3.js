var fs = require('fs');
let data = fs.readFileSync('day3info.txt').toString().split("\n");

function myFunction(data) {
  let count = 3
  let res = 0
  for (let i = 1; i < data.length; i++) {
    const item = data[i]
    const rowLength = data[i].length
    let targetNum = count % rowLength
    const targetLocation = item[targetNum]
    if (targetLocation == "#") {
      res += 1
    }
    count += 3
  }
  return res

}


console.log(myFunction(data))
console.log(62 % 31);