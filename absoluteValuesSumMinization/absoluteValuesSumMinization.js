function absoluteValuesSumMinimization(a){
    // find the median basically

    let midElement;
    a.sort();

    // checks for even length of the array
    if(a.length % 2 == 0 ){
        // divides it, and gets the left most of the median elements
        midElement = (a.length/ 2) - 1;
    } else {
        // divides it and rounds down to get the proper element
        midElement = Math.floor(a.length / 2);
        
    }
    
    return a[midElement];
}


console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));


/* Given a sorted array of integers a, find an integer x from a such that the value of

    abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one. */