function removeDuplicates(array) {

    let unique = [];
    for (let element of array) {
        if (unique.includes(element) === false) {
            unique.push(element)
        }
    }

    return unique;




}

let array = ['sheefat', 'sheerat', 'sheeqat', 'sheefat', 'shihab', 'sheeqat']

let numbers = [10, 15, 20, 10, 40, 20, 5, 5, 8, 10]

let output = removeDuplicates(numbers)
console.log(output);