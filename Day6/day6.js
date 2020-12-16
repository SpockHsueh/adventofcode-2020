var fs = require('fs');
let data = fs.readFileSync('day6info.txt').toString()

function myFunction(data) {
  let res = 0
  data = data.split(/\n\s/gi);
  for (const item of data) {
    let obj = new Set();
    const text = item.split('')
    text.some(function(v){            
      if(!obj.has(v) && v !== '\n'){
        obj.add(v)
        res +=1
      }
    });
  }
  return res
}
// console.log(myFunction(data));

function myFunction2() {
  fs.readFile("day6info.txt","utf8",(err,data) => {
  if (err) throw err;
  let veryuppercount = 0;
  data.split(/\n\s/gi).map(e => {
    let uppercount = 0;
    e = e.split(/\n/g);
    e[0].split("").map(f => {
     let counter = 0;
     e.slice(1,e.length).map(g => {
      g.split("").map(h => {
        if (h == f) counter++
      })
    })
     if (counter == e.length-1) uppercount++
   })
    veryuppercount += uppercount;
  })
  console.log(veryuppercount)
  })
}

myFunction2();
