// დაწერე ფუნქცია expo, რომელიც იქნება
// რეკურსიული ფუნქცია და მიიღებს
// არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და
// დააბრუნებს მიღებული ციფრის ხარისხს
// მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)

const expo = (number,quality,callback) => {
    if(quality === 0) return 1;
    return callback(number, expo(number,quality -1,callback),callback)
    }
const number = expo(4,4,(number,quality) => {
     return number * quality;
    })
console.log(number);

// fetch ფუნქციის გამოყენებით წამოიღე
// მონაცემები მოცემული მისამართიდან და
// გამოიტანე DOM-ში პოსტის სახით

async function fetchData() {
    try{
  const request = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataJson = await request.json();
  dataJson.forEach(acc => {
    const html = `
    <div class="post-container">
    <div class="post">
      <div class="user-info">
        <span class="user-id">Account ${acc.userId}</span>
        <span class="post-id">Post N:${acc.id}</span>
      </div>
      <h2 class="post-title">${acc.title}</h2>
      <p class="post-content">${acc.body}</p>
    </div>
  </div>
    `
    document.body.insertAdjacentHTML("beforeend",html);
  })
    }
    catch(error) {
      console.log(error);
    }
  
  
  };
  fetchData();

//   დაწერე ასინქრონული ფუნქცია, რომელიც
//   არგუმენტად იღებს ობიექტს და აკეთებს
//   deep copy-ს
//   ● ფუნქციამ უნდა გამოიძახოს reject თუ
//   არგუმენტი არ არის ობიექტი. თუ ყველაფერი
//   კარგად არის, გამოიძახოს resolve
//   კოპირებული ობიექტით

const copyObject = (object) => {
    const result = {}
    for(obj in object){
        if(typeof object[obj] !== 'object' || typeof object[obj] === null){
            result[obj] = object[obj]
        }else{
            if(Array.isArray(object[obj])){
                result[obj] = object[obj].map(o => copyObject(o));
            }else{
                result[obj] = copyObject(object[obj])
            }
        }
    }
    return result;
}
const deepCopy = (obj) => {
    return new Promise((resolve,reject) =>{
        if(typeof obj === 'object'){
            resolve(copyObject(obj))
        }else{
            reject('Error: Argument is not an Object');
        }
    })
}
console.log(deepCopy({
    name: "Giorgi",
    surname: "Menteshashvili",
    hobbies : ["Playing Piano","Reading Books"]
}))

deepCopy(({
    name: "Giorgi",
    surname: "Menteshashvili",
    hobbies : ["Reading Books","Playing Piano"]
})).then(res => console.log(res))
    .catch(err => console.log(err))

deepCopy((5000))
    .then(res => console.log(res))
    .catch(err => console.log(err))

