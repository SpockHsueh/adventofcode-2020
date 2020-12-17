const fs = require('fs')
let lines = fs.readFileSync('day7info.txt', { encoding: 'utf-8'}).toString().split("\n");
const map = new Map()

function isContainCertainBagWith(color) {
  if (color === 'shiny gold') return true
  if (!map.has(color)) return false

  const bagsWithIn = map.get(color)
  for (const {color: bag} of bagsWithIn) {
    if(isContainCertainBagWith(bag)) {
      return true
    }
  }
  return false
}

for (const line of lines) {
  const [bag, bags] = line.split(' bags contain ');
  bags.replace(/\./, '').split(', ').map(txt => {
     const {groups} = /((?<number>\d+) )?(?<color>.*)/.exec(txt.replace(/ bags?/, ''));     
     if (!map.has(bag)) {
       map.set(bag, [])
     }
     if (!groups.number) groups.number = 0
     map.set(bag, [...map.get(bag),groups])
  })
}

const colors = map.keys()
let total = 0

for (const color of colors) {
  if(isContainCertainBagWith(color) && color != 'shiny gold') total ++
}
 
// console.log(total);

// Part 2
function sumBags(topBag) {
  if (topBag.number == 0) return 0
  const bagContains = map.get(topBag.color)
  let sum = 1
  for(const bag of bagContains) {
    sum += bag.number * sumBags(bag)
  }
  return sum
}

console.log(sumBags({ number: 1, color: 'shiny gold'}) -1);
