const fs = require('fs')
let lines = fs.readFileSync('day8info.txt', { encoding: 'utf-8'});

class Program {
  constructor(lines, options = {}) {
    this.pointer = 0
    this.accumulator = 0
    this.done = new Set()
    this.options = options
    this.isFinished = false
    this.code = lines.toString().split("\n").map((line) => {
      const { groups } = /^(?<instruction>\D+) \+?(?<value>.?\d+)$/.exec(line)  
      groups.value = parseInt(groups.value)
      return groups
    })
  }

  run() {
    while (true) {
      if(this.pointer == this.code.length) {
        this.isFinished = true
        break
      }
      const {instruction, value} = this.code[this.pointer]
      if (this.done.has(this.pointer)) {
        console.log({accumulator: this.accumulator})
        break
      }
      this.done.add(this.pointer)
      switch (instruction) {
        case 'nop':
          this.pointer ++
          break;
        case 'acc':
          this.accumulator += value
          this.pointer ++
          break;
        case 'jmp':
          this.pointer += value          
          break;
        default:
          throw new Error('no implemented')
      }
    }
  }
}

const p = new Program(lines, {isPart2: true})
p.run()

const code = p.code
for (let i = 0; i < code.length; i++) {
  const element = code[i];
  if(element.instruction === 'nop' || element.instruction === 'jmp') {
    const copy = JSON.parse(JSON.stringify(code))
    copy[i].instruction = element.instruction === 'nop' ? 'jmp' : 'nop'
    const newSource = copy.map(x => `${x.instruction} ${x.value}`).join('\n')    
    const fixedProgram = new Program(newSource)
    fixedProgram.run()    
    if(fixedProgram.isFinished) {
      console.log(fixedProgram.accumulator);
    }
  }    
}
