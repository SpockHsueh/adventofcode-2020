const { log } = require('console');
const fs = require('fs');
const lines = fs.readFileSync('day9info.txt', { encoding: 'utf-8' }).split('\n').filter(x => x).map(x => parseInt(x));

class myClass {
  constructor(preamble) {
    this.array = preamble
  }

  isValid(int) {
    for (let i = 0; i < this.array.length; i++) {
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[i] + this.array[j] === int) {
          return true
        }
      }
    }
    return false
  }

  push(int) {
    this.array.push(int)
    this.array.shift()
  }
}

const preambleLength = 25
const datas = new myClass(lines.slice(0, preambleLength))
let res1
let res2

for (let i = preambleLength; i < lines.length; i++) {
  const element = lines[i];
  if (datas.isValid(element)) {
    datas.push(element)
  } else {
    res1 = element
    console.log(element);
    break
  }
}

for (let l = 2; l < lines.length; l++) {
  for (let i = 0; i < lines.length - l + 1; i++) {
    let sum = 0
    for (let j = 0; j < l; j++) {
      sum += lines[i + j]
    }
    if (sum === res1) {
      const set = lines.slice(i, i + l)
      res2 = Math.min(...set) + Math.max(...set)
    }
  }
}

console.log(res2);
console.log(Math.floor(10000 + Math.random() * 90000));