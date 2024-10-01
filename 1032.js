const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  console.log(input);
  process.exit();
});

// const strings = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split("\r\n");
// const stringNumber = parseInt(strings[0]);
// let answerStringArr = [];
// let splitedFileName;

// let solution = (fileName, fileNumber) => {
//     splitedFileName = [];
//     splitedFileName = fileName.split("");

//     for(let splitedIdx = 0; splitedIdx < splitedFileName.length; splitedIdx++){
//         if(fileNumber === 1){
//             answerStringArr.push(splitedFileName[splitedIdx]);
//         }else{
//             if(answerStringArr[splitedIdx] !== splitedFileName[splitedIdx]){
//                 answerStringArr[splitedIdx] = '?';
//             }
//         }
//     }
// }

// for(let idx = 1; idx <= stringNumber; idx++){
//     solution(strings[idx], idx);
// }

// if(answerStringArr.filter(ele => '?' === ele).length === answerStringArr.length){
//     answerStringArr = ['?'];
// }

// console.log(answerStringArr.join(''))