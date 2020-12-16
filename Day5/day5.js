var fs = require('fs');
let data = fs.readFileSync('day5info.txt').toString().split("\n");

function myFunction(data) {
  let res = 0
  let seatIds = []
  for (const x of data) {
    let row
    let column
    let seatId
    let lowerBound = 0
    let upperBound = 127
    let columnLowerBound = 0
    let columnUpperBound = 7
    for (let index = 0; index < x.length; index ++) {
      const item = x[index]
      if (index <= 6) {
        if (item == 'F') {
          upperBound = lowerBound + Math.floor((upperBound - lowerBound) / 2)
        } 
        if (item == 'B') {
          lowerBound = upperBound - Math.floor((upperBound - lowerBound) / 2)
        }
      }
      row = lowerBound
      if (index > 6) {
        if (item == 'R') {
          columnLowerBound = columnUpperBound - Math.floor((columnUpperBound - columnLowerBound) / 2)
        } else if (item == 'L') {
          columnUpperBound = columnLowerBound + Math.floor((columnUpperBound - columnLowerBound) / 2)
        }
      }
      column = columnUpperBound      
    }
    seatId = row * 8 + column
    seatIds.push(seatId)
    res = seatId > res ? seatId : res
  }
  seatIds.sort(function(a,b) {
    return a-b
  }).filter(function(id, i, array) {
    if (array[i+1] - id > 1 ) {console.log(id + 1);}
  } )  
  return res
}

myFunction(data)