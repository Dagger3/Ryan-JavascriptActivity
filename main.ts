


// This function prints out your name and favorite color
function nameAndColor(name:string, color:string){
	console.log("Hello " + name + ". Your favorite color is " + color)
}


nameAndColor("Ryan", "Purple")


// This function prints out your name and favorite number
function nameAndNumber(name:string, favNum:number){
    console.log("Hello " + name + ". Your favorite number is " + favNum)
}

nameAndNumber("Ryan", 3)

// make a new function that prints the users name and grade
function nameAndGrade(name:string, g:number){
    console.log("Hello " + name + ". Your grade number is " + g)
}

nameAndGrade("Ryan", 8)

//make a new function that prints out the users name and school
function nameAndSchool(name:string, s:string){
    console.log("Hello " + name + ". My school is " + s)
}

nameAndSchool("Ryan", "Miller Middle School")

//make a new function that prints out the users name, grade, and school
function nameAndGradeAndSchool(name:string, g:number, s:string){
    console.log("Hello " + name + ". Your grade number is " + g + ". My school is " + s)
}

nameAndGradeAndSchool("Ryan", 8, "Miller Middle School")


function multiplyByTwo(startingNum:number){
    let result = startingNum *2
    console.log(result)
}

multiplyByTwo(5)



function multiplyByFive(startingNum:number){
    let result = startingNum * 5
    console.log(result)
}

multiplyByFive(5)


//make a new function that divides a number by 2
function divideByTwo(startingNum:number){
    let result = startingNum / 2
    console.log(result)
}

divideByTwo(4)


//make a function that divides a number by 2 then adds 20
function divideByTwoAndAddTwenty(startingNum:number){
    let result = startingNum / 2 +20
    console.log(result)
}

divideByTwoAndAddTwenty(4)
