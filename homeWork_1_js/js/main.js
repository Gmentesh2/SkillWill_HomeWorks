//1) დაწერე ფუნქცია, რომელიც მიიღებს a და b 
// პარამეტრებს და დააბრუნებს ტექსტს 
// “ტოლია” თუ a უდრის b-ს, ხოლო 
// წინააღმდეგ შემთხვევაში, დააბრუნებს “არ 
// არის ტოლი” 
//  გაითვალისწინე, რომ a და b ყოველთვის 
// ერთი და იგივე ტიპის არ არის

equallsOrNot(5,"5");
equallsOrNot(5,5);
function equallsOrNot(a , b){
    if(a === b){
        console.log("Equals");
    }else{
        console.log("Not equals");
    }
}

// დაწერე ფუნქცია, რომელიც პარამეტრად 
// მიიღებს ტემპერატურას ფარენჰეიტებში და 
// დააბრუნებს ტემპერატურას ცელსიუსში 
// თუ პარამეტრი არ არის რიცხვითი მონაცემი 
// დააბრუნე - false

console.log(temperature(77))
console.log(temperature("77"))
function temperature(farenheit){
    let celsius = (farenheit - 32) * 5/9
    if(typeof farenheit != 'number'){
        return false;
    }
    return celsius;
}
// დაწერე ფუნქცია, რომელიც პარამეტრად 
// მიიღებს a (პირველი რიცხვი), b (მეორე 
// რიცხვი) და operation (+, -, *, /) და 
// დააბრუნებს ახალ მნიშვნელობას, 
// რომელიც მიიღება ამ ორ რიცხვზე 
// operation ცვლადში განსაზღვრული 
// ოპერაციით
//  თუ a და b არ არიან რიცხვები, ან თუ 
// operation ცვლადში არის უცნობი, 
// ოპერაცია დააბრუნე - false

console.log(calculateFunction(5,20,'+'))
console.log(calculateFunction(5,'+','+'))
function calculateFunction(a,b,operation){
    if (typeof a === 'number' && typeof b === 'number' && ['+', '-', '*', '/'].includes(operation)) {
        if (operation === '+') {
            return a + b;
        } else if (operation === '-') {
            return a - b;
        } else if (operation === '*') {
            return a * b;
        } else if (operation === '/') {
            return a / b;
        }
    } else {
        return false;
    } 
};