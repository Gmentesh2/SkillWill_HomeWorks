// შექმენი button, რომელზე დაწკაპების
// შემდეგაც გაიხსნება მოდალი და მოდალის
// უკან შავი/გამჭვირვალე background

const button = document.createElement('button');
const container = document.querySelector('.container')

button.innerText = "click me"
button.classList.add('button') // 
document.body.append(button);

button.addEventListener('click', () =>{
    container.classList.toggle('container');
})

// შექმენი input და button
// ● input-ში მომხმარებელი ჩაწერს ფერს და
// button ღილაკზე დაწკაპების შემდეგ body-ს
// background შეიცვლება ჩაწერილ ფერად
// ● (ფერები რომლის ჩაწერაც შეუძლია: red,
// blue, green, black, white)
// ● თუ სხვა ფერი ჩაწერა, გამოუტანე
// შეტყობინება alert-ის საშუალებით
const input = document.createElement('input');
const colorButton = document.createElement('button');
colorButton.innerText = "click me"
document.body.append(input,colorButton)

colorButton.addEventListener('click', function(){
    let enteredColor = input.value;
    if(enteredColor === 'red'){
        document.body.style.backgroundColor = '#FF0000';
    }else if(enteredColor === 'blue'){
        document.body.style.backgroundColor = 'blue'
    }else if(enteredColor === 'green'){
        document.body.style.backgroundColor = 'green'
    }else if(enteredColor === 'black'){
        document.body.style.backgroundColor = 'black'
    }else if(enteredColor === 'white'){
        document.body.style.backgroundColor = 'white'
    }else{
        alert("Please Enter valid color")
    }
})

// ● შექმენი input, სადაც მომხმარებელს
// შესაძლებლობა ექნება შეიტანოს “:”- ით
// ერთმანეთისგან გამოყოფილი რიცხვები,
// average ღილაკზე დაწკაპების შემდეგ
// დაითვალე ამ რიცხვების საშუალო და
// გამოუტანე ეკრანზე
// ● მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს

const numberInput = document.createElement('input')
const averageButton = document.createElement('button')
averageButton.innerText = "Calculate Average"
document.body.append(numberInput,averageButton)
let validInput = true;
averageButton.addEventListener('click', () => {
    let numbersString = numberInput.value;
    let numbersArray = numbersString.split(':')
    let sum = 0
    for(numbs of numbersArray){
        if(isNaN(numbs)){
            alert('enter numbers separated by ":" ')
            validInput = false;
            break;
        }else{
            sum += Number(numbs);
        }
    }
    if(validInput){
        const average = sum / numbersArray.length 
        alert(average)
    }

})



