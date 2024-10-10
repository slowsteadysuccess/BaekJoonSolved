let numberString = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split('\n');
let numbers = numberString[1].trim().split(' ');
let number_1;
let number_2;
let smallOne;
let isOK = true;
while(isOK === true){
    isOK = false;
    for(let idx_1 = 0; idx_1 < numbers.length -1; idx_1++){
        number_1 = parseInt(numbers[idx_1]);
        number_2 = parseInt(numbers[idx_1 + 1]);
        if(number_1 > number_2){
            smallOne = parseInt(numbers[idx_1 + 1]);
            numbers[idx_1 + 1] = parseInt(numbers[idx_1]);
            numbers[idx_1] = smallOne;
            isOK = true;
        }
    }
}

console.log(numbers[0] + ' ' + numbers[numbers.length-1]);
