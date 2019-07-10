function allLongestStrings(strings){

    let longestStringLength = 0;

    let stringsLongest = [];

    strings.forEach(element => {
        element.length > longestStringLength ? longestStringLength = element.length : null;
        
    });

    strings.forEach(str => {
        if(str.length === longestStringLength){
            stringsLongest.push(str);
        }
        
    });

    
    return stringsLongest;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));