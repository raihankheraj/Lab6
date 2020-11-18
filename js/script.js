

const courseList = [ 
    {code: "ACIT 1420",
    name: "Introduction to System Administration",
    pk: 1420},

    {code: "COMM 1116",
    name: "Business Communication",
    pk: 1116},

    {code: "ORGB 1100",
    name: "Organizational Behaviour",
    pk: 1100}
]

let userInput = prompt("Please enter a 4-digit number");

if (userInput == null) {
    userInput = prompt("Please enter a 4-digit number again");
}

var arrayLength = courseList.length;

for(var i = 0; i < arrayLength; i ++){
    boolCheck = false
    coursePk = courseList[i].pk

    if (userInput == coursePk) {
        console.log("Yes I am taking the course: " + courseList[i].code + ' ' + courseList[i].name)
    }else {
        boolCheck = true
    }
}

if (boolCheck == true) {
    courseList.push({code: userInput, name: null, pk: parseInt(userInput)})
    console.log(courseList)
    console.log("Successfull addition of class to the array")
}