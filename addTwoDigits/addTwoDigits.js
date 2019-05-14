function add(...args){
    total = 0;
    args.forEach(function(num){
        total += num;
    });
    return total;
}

function addTwoDigits(num){
    let toSplit = num.toString();
    let num1 = parseInt(toSplit[0]);
    let num2 = parseInt(toSplit[1]);
    
    let total = add(num1, num2);
    return total;
}

console.log(addTwoDigits(29));