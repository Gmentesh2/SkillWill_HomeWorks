//then/catch
// setTimeout ფუნქცია იყენებს callback-ს,
// დაწერეთ მისი promise-ზე დადაფუძნებული
// ალტერნატივა
// ● (მაგ: mySetTimeout(delay).then(...)

// გამოიყენე პირველ დავალებაში შექმნილი
// ფუნქცია, რათა განავრცო ჩვენს მიერ
// დაწერილი “Toy Shop” შემდეგი პირობის
// იმპლემენტაციით:
// ➔ სათამაშოს დამზადებას სჭირდება
// დაახლოებით 3 წამი. (დროის მითითება
// შესაძლებელი უნდა იყოს დინამიურად)
// ➔ დავამატოთ კიდევ ერთი ნაბიჯი, რომელსაც
// დავარქმევთ პირობითად, “deliverToys”,
// რომლის დაყოვნებაც 2 წამია
// (გადაეცემა დინამიურად)
// ➔ სათამაშოს გაყიდვას სჭირდება 1 წამი
// (დინამიურად)
// ● ყოველი მომდევნო ნაბიჯი უნდა
// ელოდებოდეს წინა ნაბიჯის რეზულტატს და
// შესაბამისად წყვეტდეს მოხდება თუ არა
// მისი შესრულება
// ● გამოიყენე .then().catch() და async/await

const mySetTimeout = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },delay * 1000);
    })
}
// console.log(mySetTimeout());


const makeToys = function () {
    return new Promise((resolve,reject) => {
      mySetTimeout(3).then(() => {console.log('Toy is built');
       if(Math.random() > 0.1) {
         resolve('Undefected')
       } else {
         reject('Defected');
       }
      })
    });
  }
const deliverToys = function(status) {
        return new Promise((resolve, reject) =>{
        mySetTimeout(2).then(() => {  
       if(status === 'Undefected') {
         if(Math.random() > 0.0001) {
           resolve('delievered');
         } else {
           resolve('not delievered')
         }
     } else{
       reject('toy was defected')
     
     }
      })
    })
  }
    function sellToys(deliverStatus) {
        return new Promise((resolve, reject) => { 
       mySetTimeout(1);
       if(deliverStatus === 'delievered') {
         if(Math.random() > 0.7) {
           resolve('Toy has been sold');
         } else {
          resolve('Toy has not sold');
         }
     } else{
       resolve('toy was not delievered');
     
     }
     })
    }
    const promisify = function() {
       return new Promise((resolve, reject) => {
        makeToys()
        .then((res) => {
          return deliverToys(res);
        })
        .then((res) => {
          return sellToys(res)
        })
        .then((res) => {
          console.log(res);
          resolve(res);
          
        })
        .catch((error) => {
         console.log(error);
         reject(error);
       });
     });
    };
     
  promisify();

