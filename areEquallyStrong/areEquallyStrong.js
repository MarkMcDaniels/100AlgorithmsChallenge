function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight){
    let myStrength = yourLeft + yourRight;
    let theirStrength = friendsLeft + friendsRight;

    return myStrength === theirStrength;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))