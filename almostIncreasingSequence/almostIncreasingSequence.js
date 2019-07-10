function almostIncreasingSequence(number) {

    let currentNum = 0;
    let secondTry = false;
    let falseCounter = 0;

    // tests the num in number for increasing value and if it's had less than 2 failures in the sequence.
    let newList = number.map( num => {
        if(num >= currentNum && !secondTry){
            currentNum = num;
            return true;
        } else {
            secondTry = false;
            return false;
        }
    });
    
    // looks for multiple false results
    for(let i = 0; i < newList.length; i++){
        
        if(!newList[i]){
            falseCounter +=1;
        }
    }

    // if more than one false result it returns false. 
    return falseCounter < 2;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2]))