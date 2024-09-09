function deleteInvalids(array) {

    if (!Array.isArray(array)) {
        return "Invalid Array";
    }

    let numberArray = []
    for (let item of array) {
        if (typeof item === 'number' && isNaN(item) === false) {
            numberArray.push(item);
        }

    }
    return numberArray
}

let array = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]
let output = deleteInvalids(array)
console.log(output);


let array2 = ["1", { num: 2 }, NaN]
let output2 = deleteInvalids(array2)
console.log(output2);



let array3 = [1, 2, -3]
let output3 = deleteInvalids(array3)
console.log(output3);

let array4 = { num: [1, 2, 3] }
let output4 = deleteInvalids(array4)
console.log(output4);



