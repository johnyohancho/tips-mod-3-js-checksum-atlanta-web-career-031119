const data = [
    [409, 194, 207, 470, 178],
    [454, 235, 333, 511, 103],
    [474, 293, 525, 372, 408],
    [428, 4321, 2786, 6683, 3921],
    [265, 262, 6206, 2207, 5712]
  ]

function checkSum(data) {
    let sum = 0
    data.forEach( function (row) {
        let minNum = row[0];
        let maxNum = row[0];
        let rowDiff;
        row.forEach (function (num) {
            if (maxNum < num) {
                maxNum = num 
            } else if (minNum > num) {
                minNum = num
            };
        });
        rowDiff = maxNum - minNum;
        sum = sum + rowDiff;
    })
    return sum;
}

checkSum(data);


function min(arr) {
    return arr.reduce(function (a,b){
        return Math.min(a,b)
    })
}