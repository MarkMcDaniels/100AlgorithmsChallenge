function alternatingSums(number){
    let evens = [];
    let odds = [];
    let eWeight = 0;
    let oWeight = 0;
    let teamsWeight = [];

   
    number.forEach((num, i) => {
        if(i % 2 === 0 ){
            evens.push(number[i]);
        } else {
            odds.push(number[i]);
        }
    
    });
    evens.forEach(num => {
        eWeight += num;
    });

    teamsWeight.push(eWeight);

    odds.forEach(num => {
        oWeight += num;
    });

    teamsWeight.push(oWeight);
    

    return teamsWeight;

}

console.log(alternatingSums([50, 60, 60, 45, 70]))