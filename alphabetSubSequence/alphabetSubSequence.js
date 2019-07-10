function alphabetSubsequence(string) {
    
    let sequence = null;

    for(let i = 0; i < string.length -1; i++){
        if(string.charCodeAt(i) > string.charCodeAt(i + 1)){
            
            sequence = false;
            
        } else if(sequence !== false) {
            
            sequence = true;
            
            
        }
    }

    return sequence;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
