var fs = require('fs');
let data = fs.readFileSync('day1info.txt').toString().split("\n");
data = data.map((x) => parseInt(x))

function mySum(datas) {
  let res = []
  for (let index = 0; index < datas.length; index ++) {
    const firstEle = datas[index]
    for (let y = 1; y < datas.length; y ++) {
      const secondEle = data[y]
      for (let x = 2; x < datas.length; x++) {
        const thirdEle = data[x]
        if (firstEle + secondEle + thirdEle == 2020) {
          res.push(firstEle, secondEle)
        }
      }
    }
  }
  res = [...new Set (res)]  
  return res.reduce(function(a,b) {
    return a * b
  })
}

console.log(mySum(data))