function areSimilar(number, number2){
   
    let test = [null, null, null];
    let count = 0;
    let first = null;
    let second = null;
    let switch1 = null;
    let switch2 = null;
    let lastTest = true;

    for(let i = 0; i < number.length; i++){

        number[i] === number2[i] ? test[i] = true : test[i] = false;
        
        
    }

    console.log('[test] ' + test);
    for(let j = 0; j < test.length; j++){
        if(!test[j]){
            console.log( "I ran in false: " + !test[j]);
            if(first === null){
                console.log("Add to first");
                first = j;
            } else if(second === null) {
                console.log("add to second");
                second = j;
            }

        }
        console.log("fns " + first + " : " + second);
    }
    

    if(first === null){
        return true;
    } else {
        console.log('[number] ' + number);
        console.log('[number2] ' + number2);
        console.log("[switch1] "+ number[first]);
        console.log('[switch2] ' + number[second]);
        console.log(number[second]);
        switch1 = number[first];
        switch2 = number[second];
        number[first] = switch2;
        number[second] = switch1;
        console.log('[newNumber] ' + number);
    }

    for(let k = 0; k < number.length; k++){
        number[k] !== number2[k] ?  lastTest = false: null;
        if(!lastTest){
            return false;
        }
    }
    
   return true;

}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));