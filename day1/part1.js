// 106 Bytes
console.log(require('fs').readFileSync('./input.txt').toString().split('\n').reduce((a,c)=>a+Number(c),0))
