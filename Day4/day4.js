let fs = require("fs")
let fields = ['iyr','ecl','byr','hcl','eyr','hgt','pid']
let pass = 0

fs.readFile("day4info.txt","utf8",(err,data) => {

data.split(/\n\s/gi).map(e => {
  let isvalid = true
  for (i in fields) {
    let match = e.match(new RegExp(`(?<=${fields[i]}:)[A-Z#a-z0-9]+`,"g"))
    if (!match) {
      isvalid = false
    } else {
      match = match[0]
      
      switch (fields[i]) {
        case "byr":
        if (!(Number(match)>= 1920 && Number(match)<= 2002)) isvalid=false;
        break

        case "iyr":
        if (!(Number(match)>= 2010 && Number(match)<= 2020)) isvalid=false
        break

        case "eyr":
        if (!(Number(match)>= 2020 && Number(match)<= 2030)) isvalid=false
        break
        
        case "hgt":
        if (match.slice(match.length-2,match.length) == "cm") {
          if (!(Number(match.split("").splice(0,match.length-2).join("")) >= 150 && Number(match.split("").splice(0,match.length-2).join("")) <= 193)) isvalid = false
         } else {
          if (!(Number(match.split("").splice(0,match.length-2).join("")) >= 59 && Number(match.split("").splice(0,match.length-2).join("")) <= 76)) isvalid = false
        }
        break

        case "hcl":
          if (!(match.match(/#([a-f0-9]){6}/i))) isvalid = false
        break

        case "ecl":
        let haircolor = ["amb","blu","brn","gry","grn","hzl","oth"].map(e => {
          if (match == e) return "valid"
          }).filter(e => e)
        if (!haircolor.length) isvalid = false
        break

        case "pid":
        if(!(match.length == 9)) isvalid = false
        break
      }
    }
  } 
  if (isvalid) pass += 1
})
  console.log(pass) 
})