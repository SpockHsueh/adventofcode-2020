const fs = require('fs')
let lines = fs.readFileSync('day7info.txt', { encoding: 'utf-8'}).toString().split("\n");
const map = new Map()

for (const line of lines) {
  const [bag, bags] = line.split(' bags contain ');

  bags.replace(/\./, '').split(', ').map(txt => {
     const {groups} = /((?<number>\d+) )?(?<color>.*)/.exec(txt.replace(/ bags?/, ''));     
     if (!map.has(bag)) {
       map.set(bag, [])
     }
     map.set(bag, [...map.get(bag),groups.color])
  })
}
 
console.log(map);
