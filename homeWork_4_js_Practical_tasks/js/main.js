// ● დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ string-
// ს
// ● არ გამოიყენო string.replace() ფუნქცია


const stringReplaceFunc = (string,valueToReplace,valueToReplaceWith) => {
    return string.split("").map(str =>{
        if(str === valueToReplace){
            return valueToReplaceWith;
        }else{
            return str;
        }
    }).join("");
}

console.log(stringReplaceFunc("Sasha","S","L"));
console.log(stringReplaceFunc("Monica","M","T"));


// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

const newSentence = (string) => {
    return string.trim().split(" ").map(str => {
    str = str[0].toUpperCase() + str.slice(1)
    return str;
    }).join(" ");
    };
console.log(newSentence('   this is working    '));

// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// ● მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}].
// ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’,
// age: 20}, {name: ‘Lasha’, age: 30}]
// ● შეგიძლია გამოიყენო sort() ფუნქცია

const users = [
    {name: "Lasha", age: 30}, 
    {name: "Sasha", age: 20},
    {name: "Giorgi",age: 35},
    {name: "Ana",age: 22}
]
const ageAsc = (users) => {
    return users.sort((userA,userB) => userA.age - userB.age)
};
console.log(ageAsc(users))

