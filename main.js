// Phrase random
const doSomething = {
    day:['Monday: ','Tuesday: ','Wednesday: ','Thursday: ','Friday: ','Saturday: ', 'Sunday: '],
    action:['Go to the bank', 'Buy a car', 'Go dance', 'Eat ice cream', 'Sleep all day', 'Play all day', 'Do what you want']
}

// Number Random
function randomNumber(num) {
  return Math.floor(Math.random() * num)
}

// array with info
let info = []

for(let proof in doSomething) {
  let alternative = randomNumber(doSomething[proof].length)

  switch(proof) {
    case 'day':
      info.push(`${doSomething[proof][alternative]}`)
      break
    case 'action':
      info.push(`${doSomething[proof][alternative]}`)
      break
    default:
      info.push('Not valid info')
  }
}

function funcionaa(info) {
  const probando = info.join('')
  console.log(probando)
} 

funcionaa(info)

