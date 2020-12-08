var fs = require('fs');
let data = fs.readFileSync('day4info.txt').toString().split("\n");

function myFunction(data) {
  const passports = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i]

    console.log(JSON.stringify(item));
    return
  }
}
myFunction(data)
