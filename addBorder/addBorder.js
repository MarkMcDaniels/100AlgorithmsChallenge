function addBorder(array){
    array.forEach((element, index) => {
        console.log(index);
        element = '*' + element + '*';
        console.log(element);
        array[index] = element;

    });

    array.unshift("*****");
    array.push("*****");
    return array;
}


console.log(addBorder(["abc", "ded"]));


/**Example**

For

    picture = ["abc",
           "ded"]
the output should be

    addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]*/
