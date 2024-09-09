function password(obj) {

    if (obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4) {

        return "Invalid"
    }


    let firstLetter = obj.siteName.slice(0, 1).toUpperCase()
    let lastLetter = obj.siteName.slice(1).toLowerCase()

    let result = `${firstLetter + lastLetter}#${obj.name}@${obj.birthYear}`
    return result



}

let object = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
let output = password(object)
console.log(output)

let object2 = { name: "rahat", birthYear: 2002, siteName: "Facebook" }
let output2 = password(object2)
console.log(output2);

let object3 = { name: "toky", birthYear: 200, siteName: "Facebook" }
let output3 = password(object3)
console.log(output3);

let object4 = { name: "maisha", birthYear: 2002 }
let output4 = password(object4)
console.log(output4);

