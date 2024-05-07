const sumAll = function(num1, num2) {
    let total = 0;
    if(typeof num1 === 'string' || typeof num2 === 'string' || isNaN(num1) || isNaN(num2)){
        return 'ERROR';
    }
    if(num1 < 0){
        return 'ERROR';
    }
    if(num1 > num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    for(let i = num1; i <= num2; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
