const colorInput = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./answerSheet.txt").toString().trim().split("\n");
const colorObject = {
    black : 0,
    brown : 1,
    red : 2,
    orange : 3,
    yellow : 4,
    green : 5,
    blue : 6,
    violet : 7,
    grey : 8,
    white : 9
}
let multipleResult = 0;
let solution = (_number_) => {
    if(_number_ > 0){
        multipleResult = 10 * multipleResult
        solution(--_number_);
    }
}
console.log(colorInput[0]);
console.log(colorInput[1]);
console.log(colorInput[2]);
console.log(colorObject[colorInput[0]] );
console.log(colorObject[colorInput[1]] );
console.log(colorObject[colorInput[2]] );
multipleResult = parseInt(colorObject[colorInput[0]] + '' + colorObject[colorInput[1]]);
solution(colorObject[colorInput[2]]);
console.log(multipleResult);

