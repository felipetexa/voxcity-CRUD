let characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let result = ''
let length = 4

for (let i = length; i < 5; --i) {
  result += characters[Math.round(Math.random() * (characters.length - 1))]
}
// return result + '-' + result + '-' + result + '-' + result

console.log(result)

