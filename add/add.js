function add(...args){
    total = 0;
    args.forEach(function(num){
        total += num;
    });
    return total;
}

function add2(...args){
    total = 0;
    args.forEach(function(num){
        total += num;
    });
    return total;
}



console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));