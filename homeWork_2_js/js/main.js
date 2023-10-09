// მოცემულია მასივი [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user - ების მასივს და დააბრუნებს
// ყველაზე პატარა ასაკის მქონე ადამიანის
// სახელს

const users = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21}, 
    {name: 'Ana', age: 28}
]
function returnMinAgeName (users){

    let testYoungestUser = users[0];

    for (let i = 0; i < users.length; i++){
        if(users[i].age < testYoungestUser.age){
            testYoungestUser = users[i]
        }
    }
    return testYoungestUser.name;
}

console.log(returnMinAgeName(users));




// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს იგივე
// მნიშვნელობების მქონე ახალ
// (განსხვავებულ) ობიექტს

const user = {
    name : "Giorgi",
    surname : "Menteshashvili",
    age : 23,
    phoneNumber : "574020702"
}
function newUser(user) {
    const newUser = {
        name : user.name,
        surname : user.surname,
        age : user.age,
        phoneNumber : user.phoneNumber
    }
}

console.log(newUser(user) === user);

// ● დაწერე პროგრამა, სადაც ორი a და b
// მომხმარებლები აგორებენ კამათელს მანამ,
// სანამ არ გაგორდება, რომელიც უფრო
// ნაკლებ ცდაში გააგორებს სამიანს ის არის
// გამარჯვებული
const userOne = {
    name : "Giorgi",
    surname : "Menteshashvili"
}
const userTwo = {
    name : "Mariam",
    surname : "Rurua"
}

function diceRolls(){
    return Math.floor(Math.random() * 6) + 1
}
function getThreeFirst(userOne,userTwo) {
    let userOneCount = 0;
    let userTwoCount = 0;
    let userOneResult = 0;
    let userTwoResult = 0;
    while(userOneResult !== 3 && userTwoResult !== 3){
        userOneResult = diceRolls();
        userTwoResult = diceRolls();
        console.log(userOneResult,userTwoResult)

        if(userOneResult !== 3){
            userOneCount++
        }
        if(userTwoResult !== 3){
            userTwoCount++
        }
    }
    if(userOneCount < userTwoCount){
        return `${userOne.name} ${userOne.surname} is winner with ${userOneCount + 1} counts, ${userTwo.name}'s counts: ${userTwoCount + 1}`
    }else if(userOneCount > userTwoCount){
        return `${userTwo.name} ${userTwo.surname} is winner with ${userTwoCount + 1} counts, ${userOne.name}'s counts: ${userOneCount + 1}`
    }else {
        return "We have no winner, it's a draw, play again"
    }
}
const winner = getThreeFirst(userOne,userTwo)
console.log(winner);
