// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ უნდა
// დააბრუნოს 2 - ელემენტიანი მასივი, სადაც
// პირველი ელემენტია პირველი და მეორე
// პარამეტრის ჯამი, ხოლო მეორე ელემენტი -
// მესამე ელემენტიდან დაწყებული ყველა
// დანარჩენის ნამრავლი


const func = function(numberOne,numberTwo,...numbers) {
    if ( numbers.every(element => typeof element === 'number')) {
    if(typeof numberOne === 'number' && typeof numberTwo === 'number') {
    const sumOfnumberOneNumberTwo = numberOne + numberTwo;
    let sum = 1;
    const multynumbers = function() {
      for(num of numbers) {
        sum *= num;
        
      }
      return sum;
    }
    const arrayOne = [sumOfnumberOneNumberTwo, multynumbers()];
    return arrayOne;
  }}};

  console.log(func(1,2,3,4,5,6))

//   დავუშვათ გვინდა ობიექტიდან წავიკითხოთ
// შემდეგი ველი: user.banks[2].address.city.
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს user ობიექტს და დააბრუნებს city-ს.
// გამოიყენე destructuring-ი. თუ ასეთი ველი არ
// არსებობს უნდა დაბრუნდეს undefined.

const readerFunction = function userName(user) {
    const { banks } = user;
    const { address : {city}} = banks[2]
    return city;
    };
    
console.log(readerFunction({
      banks: [1,2, {address :{city: 'Paris'}}],
    }));


    // დაწერე ფუნქცია, რომელიც პარამეტრად
    // მიიღებს ნებისმიერ ობიექტს და დააბრუნებს
    // იგივე მნიშვნელობების მქონე ახალ
    // (განსხვავებულ) ობიექტს.
    // დედლაინი: 1 კვირა
    // გაითვალისწინე, რომ თუ ობიექტში კიდევ სხვა
    // ობიექტებია იმათი ასლებიც უნდა შეიქმნას.
    // გამოიყენეთ (...) ოპერატორი.


    const copyFunction = (obj => {
        const result = {};
        for(fn in obj ) {
          if(typeof obj[fn] !== 'object' || obj[fn] === null) {
          result[fn] = obj[fn];
          } else{
            if(Array.isArray(obj[fn])){
          result[fn] = obj[fn].map(o => copyFunction(o));  
            }
            else {
          result[fn] = copyFunction(obj[fn]);    
            }
          }
      
        }
        return result;
      });
      
      
      console.log(copyFunction( {
        array : [100,200, {city : 'Paris'}],
        number : 250,
        object: {
          number: 10,
          arr: [10,20],
        }
      }));