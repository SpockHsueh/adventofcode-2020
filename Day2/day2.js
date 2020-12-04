var fs = require('fs');
let data = fs.readFileSync('day2info.txt').toString().split("\n");

function myFunction(data) {
  let res = 0
  for (let i = 0; i < data.length; i ++) {
    const item = data[i]
    const info = item.split(/\b/)
    const lowerBound = parseInt(info[0])
    const upperBound = parseInt(info[2])
    const target = info[4]
    const password = info[info.length - 1]
    let machCount = 0
    for (let c of password) {
      if (target == c) {
        machCount += 1
      }
    }
    if (machCount >= lowerBound && machCount <= upperBound) {
      res += 1
    }
  }
  return res
}

// console.log(myFunction(data))


function myFunction2(data) {
  let res = 0
  for (let i = 0; i < data.length; i ++) {
    const item = data[i]
    const info = item.split(/\b/)
    const lowerBound = parseInt(info[0])
    const upperBound = parseInt(info[2])
    const target = info[4]
    const password = info[info.length - 1]
    let machCount = 0
    for (let c = 0; c < password.length; c++) {
      const passwordItem = password[c]
      if (target == passwordItem && (c + 1 == lowerBound || c + 1 == upperBound)) {
        machCount += 1
      }
    }
        
    if (machCount == 1) {
      res += 1
    }
  }
  return res
}


console.log(myFunction2(data))