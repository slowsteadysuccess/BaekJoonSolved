const numbers = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split(" ");
console.log("numbers : " + numbers);