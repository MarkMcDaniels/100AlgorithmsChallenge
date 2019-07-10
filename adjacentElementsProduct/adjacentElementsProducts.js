function adjacentElementsProduct(number){
    // multiply (i-1)*i
    let first, second = null;
    let total = 0;

    // I skip the first element so that I can stay within length of the array, and still have all values multiplied by each other.
    for(let i = 0; i < number.length; i++){
        if(!i == 0){
            
            if(total < number[i] * number[i-1]){
                total = number[i] * number[i-1];
                first = number[i-1];
                second = number[i];
            }
        }
    }

    return "The adjacent numbers are: " + first + " and " + second + ". Their product is: " + total; 
    
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));