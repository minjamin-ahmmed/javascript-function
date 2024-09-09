function checkName(name) {

    if (typeof name !== 'string') {
        return "invalid";
    }

    let lastLetter = name.slice(-1).toLowerCase();

    let result = false;

    let checkArray = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    for (let item of checkArray) {

        if (item === lastLetter) {
            result = true
            break;
        }


    }

    if (result === true) {
        return "Goood Name"
    }

    else if (result !== true) {
        return "Baaaad Name"
    }

    //Another Easy Process
    // let result = checkArray.includes(lastLetter);
}


console.log(checkName('Salman'));
console.log(checkName('RAFEE'));
console.log(checkName("Jhankar"));
console.log(checkName(199));
console.log(checkName(["Rashed"]));